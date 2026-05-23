# drop

## Fidget Spinner Dropshipping Setup (Low-Touch)

This project now defines a practical setup for a **fidget spinner + fidget gadget** dropshipping store that is as automated as possible.

## Recommended Stack

- **Storefront:** Shopify
- **Theme/Page Builder:** Shopify Dawn (free) or PageFly
- **Primary Supplier Integration:** DSers (AliExpress)
- **Secondary/Backup Supplier:** CJdropshipping or Zendrop
- **US Fast-Shipping Options:** Spocket/Syncee (for faster delivery products)
- **Automation:** Shopify Flow + DSers rules + Klaviyo email automations

> Note: Temu and Alibaba are not usually as seamless for true automated order syncing as dedicated dropshipping connectors (DSers/CJ/Zendrop/Spocket).

## Product Catalog Structure

Create collections:

1. Classic fidget spinners  
2. Metal/premium spinners  
3. LED/light-up spinners  
4. Silent desk fidget gadgets  
5. Stress-relief bundles

Use automated tags in imports:
- `spinner-classic`
- `spinner-premium`
- `gadget-desk`
- `bundle`

## “Hands-Off” Automation Workflow

1. Import products from DSers/CJ into Shopify.
2. Auto-map variants, pricing rules, and shipping methods.
3. Enable auto-fulfillment so paid orders are pushed to supplier automatically.
4. Auto-send order confirmation, shipping updates, and abandoned-cart reminders.
5. Auto-sync tracking numbers back to Shopify.
6. Use supplier stock sync to pause out-of-stock products automatically.
7. Use weekly rule-based discount campaigns via Shopify Flow.

## Core Rules to Configure Once

- **Pricing rule:** 2.2x product cost with minimum $9 margin.
- **Shipping rule:** prioritize suppliers with 7–12 day delivery.
- **Quality rule:** suppliers with rating > 4.7 and > 300 orders.
- **Refund rule:** auto-approve replacements for damaged items with photo proof.

## Launch Checklist

- [ ] Connect domain and payment provider
- [ ] Import first 30–50 spinner/gadget products
- [ ] Configure automation flows (email + fulfillment + tracking)
- [ ] Add policy pages (shipping, returns, privacy, terms)
- [ ] Test 1 full order from purchase to delivered tracking

## Reality Check

You can make this **low-touch**, but not truly zero-touch forever. Customer disputes, supplier stock issues, and payment holds still require occasional review.

## Contributing

We welcome contributions! Please note that this repository has **branch protection** enabled on important branches (`main` and `develop`) to ensure code quality and stability.

### Before You Start

1. **Read the branch protection policy**: See [.github/BRANCH_PROTECTION.md](.github/BRANCH_PROTECTION.md)
2. **Check the branch protection checklist**: See [.github/BRANCH_PROTECTION_CHECKLIST.md](.github/BRANCH_PROTECTION_CHECKLIST.md)

### Contributing Process

1. Create a **feature branch** from `develop` (never push directly to `main` or `develop`)
2. Make your changes and commit with clear messages
3. Open a **pull request** to merge your changes
4. Wait for **at least 1 approval** before merging
5. Ensure all **status checks pass**
6. Your branch must be **up to date** with the target branch

### Branch Protection Rules

The following rules are enforced automatically:

- ✅ All changes to `main` and `develop` must be through pull requests
- ✅ All pull requests require at least 1 approval
- ✅ All CI/CD checks must pass before merging
- ✅ Branches must be up to date before merging
- ✅ Direct pushes to protected branches are prevented
- ✅ Force pushes are prevented
- ✅ Protected branches cannot be deleted

For more detailed information, see the [branch protection documentation](.github/BRANCH_PROTECTION.md).
