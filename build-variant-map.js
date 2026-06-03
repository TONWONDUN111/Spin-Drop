#!/usr/bin/env node
// Generates VARIANT_MAP for cart.html by reading the live Shopify store.
// Run AFTER products are imported and the password page is off:
//   node build-variant-map.js
// Then paste the printed object over `const VARIANT_MAP = {};` in cart.html.

const DOMAIN = '0u1gd1-9z.myshopify.com';

async function main() {
  const map = {};
  // products.json is paginated (250/page max).
  for (let page = 1; ; page++) {
    const res = await fetch(`https://${DOMAIN}/products.json?limit=250&page=${page}`);
    if (!res.ok) throw new Error(`HTTP ${res.status} — is the store published (password off)?`);
    const { products } = await res.json();
    if (!products.length) break;
    for (const p of products) {
      for (const v of p.variants) {
        const m = /^SOAK-(\d+)$/.exec(v.sku || '');
        if (m) map[parseInt(m[1], 10)] = v.id;
      }
    }
  }

  const ids = Object.keys(map).map(Number).sort((a, b) => a - b);
  if (!ids.length) {
    console.error('No SOAK-### SKUs found. Confirm the CSV imported with its Variant SKU column.');
    process.exit(1);
  }
  const body = ids.map(id => `  ${id}: ${map[id]},`).join('\n');
  console.error(`Matched ${ids.length} products.`);
  console.log(`const VARIANT_MAP = {\n${body}\n};`);
}

main().catch(e => { console.error(e.message); process.exit(1); });
