#!/usr/bin/env python3
"""
USASpending.gov Contract Award Monitor
Watches for major government contract awards and emails tonwondun@gmail.com instantly.
"""

import requests
import time
import smtplib
import sqlite3
import logging
import os
from datetime import datetime, timedelta
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("monitor.log"),
        logging.StreamHandler()
    ]
)
log = logging.getLogger(__name__)

# ── Config ────────────────────────────────────────────────────────────────────

API_BASE       = "https://api.usaspending.gov/api/v2"
MIN_AWARD_USD  = 50_000_000   # $50M threshold
POLL_SECONDS   = 300          # check every 5 minutes
LOOKBACK_HOURS = 1

EMAIL_FROM  = "tonwondun@gmail.com"
EMAIL_TO    = "tonwondun@gmail.com"
EMAIL_PASS  = os.getenv("GMAIL_APP_PASS", "")   # set this env var

# ── Database (deduplication) ──────────────────────────────────────────────────

def init_db(path="seen_awards.db"):
    con = sqlite3.connect(path)
    con.execute("""
        CREATE TABLE IF NOT EXISTS seen (
            award_id TEXT PRIMARY KEY,
            seen_at  TEXT
        )
    """)
    con.commit()
    return con


def already_seen(con, award_id: str) -> bool:
    return con.execute("SELECT 1 FROM seen WHERE award_id=?", (award_id,)).fetchone() is not None


def mark_seen(con, award_id: str):
    con.execute("INSERT OR IGNORE INTO seen VALUES (?,?)",
                (award_id, datetime.utcnow().isoformat()))
    con.commit()

# ── USASpending API ───────────────────────────────────────────────────────────

def fetch_awards(hours_back: int = LOOKBACK_HOURS) -> list[dict]:
    end   = datetime.utcnow()
    start = end - timedelta(hours=hours_back)

    payload = {
        "filters": {
            "time_period": [{
                "start_date": start.strftime("%Y-%m-%d"),
                "end_date":   end.strftime("%Y-%m-%d"),
            }],
            "award_amounts": [{"lower_bound": MIN_AWARD_USD}],
            "award_type_codes": ["A", "B", "C", "D"],
        },
        "fields": [
            "Award ID",
            "Recipient Name",
            "Award Amount",
            "Awarding Agency",
            "Awarding Sub Agency",
            "Start Date",
            "End Date",
            "Description",
            "NAICS Description",
            "Place of Performance State Code",
            "Place of Performance City Name",
        ],
        "page": 1,
        "limit": 200,
        "sort":  "Award Date",
        "order": "desc",
    }

    try:
        r = requests.post(f"{API_BASE}/search/spending_by_award/", json=payload, timeout=30)
        r.raise_for_status()
        return r.json().get("results", [])
    except Exception as e:
        log.error(f"API error: {e}")
        return []

# ── Alerts ────────────────────────────────────────────────────────────────────

def fmt_usd(n: float) -> str:
    if n >= 1e9:  return f"${n/1e9:.2f}B"
    if n >= 1e6:  return f"${n/1e6:.1f}M"
    return f"${n:,.0f}"


def build_message(award: dict) -> str:
    award_id = award.get("Award ID", "")
    return (
        f"Recipient  : {award.get('Recipient Name')}\n"
        f"Amount     : {fmt_usd(award.get('Award Amount', 0))}\n"
        f"Agency     : {award.get('Awarding Agency')}\n"
        f"Sub-agency : {award.get('Awarding Sub Agency')}\n"
        f"NAICS      : {award.get('NAICS Description')}\n"
        f"Description: {(award.get('Description') or 'N/A')[:300]}\n"
        f"Period     : {award.get('Start Date')} → {award.get('End Date')}\n"
        f"Location   : {award.get('Place of Performance City Name')}, "
                      f"{award.get('Place of Performance State Code')}\n"
        f"\n"
        f"USASpending: https://www.usaspending.gov/award/{award_id}\n"
        f"Spotted    : {datetime.utcnow().strftime('%Y-%m-%d %H:%M UTC')}\n"
    )


def send_email(award: dict):
    if not EMAIL_PASS:
        log.warning("GMAIL_APP_PASS not set — skipping email")
        return
    name    = award.get("Recipient Name", "Unknown")
    amount  = fmt_usd(award.get("Award Amount", 0))
    subject = f"[CONTRACT] {name} — {amount}"
    body    = build_message(award)

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"]    = EMAIL_FROM
        msg["To"]      = EMAIL_TO
        msg.attach(MIMEText(body, "plain"))
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as s:
            s.login(EMAIL_FROM, EMAIL_PASS)
            s.sendmail(EMAIL_FROM, EMAIL_TO, msg.as_string())
        log.info(f"Email sent: {subject}")
    except Exception as e:
        log.error(f"Email failed: {e}")

# ── Main loop ─────────────────────────────────────────────────────────────────

def process_award(award: dict, con: sqlite3.Connection):
    award_id = award.get("Award ID")
    if not award_id or already_seen(con, award_id):
        return
    mark_seen(con, award_id)

    name   = award.get("Recipient Name", "")
    amount = award.get("Award Amount", 0)
    log.info(f"NEW: {name} — {fmt_usd(amount)}")
    print("\n" + "═"*60)
    print(build_message(award))
    send_email(award)


def run():
    log.info(f"Starting monitor — threshold {fmt_usd(MIN_AWARD_USD)}, polling every {POLL_SECONDS}s")

    con = init_db()

    log.info("Backfilling last 24h (no alerts on startup)...")
    for a in fetch_awards(hours_back=24):
        if a.get("Award ID"):
            mark_seen(con, a["Award ID"])
    log.info("Watching for new awards...")

    while True:
        awards = fetch_awards(LOOKBACK_HOURS)
        log.info(f"Polled — {len(awards)} awards ≥{fmt_usd(MIN_AWARD_USD)} in window")
        for award in awards:
            process_award(award, con)
        time.sleep(POLL_SECONDS)


if __name__ == "__main__":
    run()
