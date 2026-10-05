# Capital.OneGodian.com — Legacy ODeFi Compatibility Surface

This repository preserves the former Capital web application while its active financial-platform responsibilities are consolidated into **ODeFi™ at ODeFi.OneGodian.com**.

## Canonical platform boundary

**Canonical active application:** `ohi-stack/odefi-onegodian`  
**Canonical domain:** `https://odefi.onegodian.com`  
**Legacy domain:** `https://capital.onegodian.com`

Capital.OneGodian.com must not be developed as a competing finance platform. Its permitted future role is limited to an approved redirect, archive, compatibility surface, or narrowly scoped disclosure endpoint.

ODeFi owns the unified application surface for:

```text
Identity → Verification → Registry → Wallet → Assets → Transactions
→ Payments → Merchant Services → Protocol → Treasury → Capital
→ Reporting → Compliance → Developer Infrastructure
```

Shared ecosystem services, connectors, registries, analytics, webhooks, and MCP interoperability remain upstream through `api.OneGodian.org`. Canonical ODC contract/source authority remains outside this legacy repository.

## Legacy route migration map

| Capital route | Canonical ODeFi destination | Legacy treatment |
| --- | --- | --- |
| `/` | `https://odefi.onegodian.com/` | Redirect/legacy notice when approved |
| `/investor-portal` | `/capital` or approved participation surface | Compliance-gated |
| `/offerings` | `/capital` / `/participation` | Compliance-gated; no automatic activation |
| `/disclosures` | `/disclosures` | Preserve/migrate |
| `/certificates` | `/dashboard/certificates` / verification | Preserve records; ODeFi UI |
| `/registry` | `/records` / public verification | ODIN/OBP-1 remain authoritative upstream |
| `/production-readiness` | `/status` / compliance documentation | Preserve as historical evidence |
| `/odc/*` | `/assets`, `/odc`, disclosures/reports as applicable | Canonical asset metadata only |

The exact redirect/archive behavior must be deployment-approved before changing the live Capital domain.

## Financial feature gates

The existence of a page, route, component, environment variable, or migrated source file does **not** activate financial functionality.

Transactions, payments, swaps, liquidity, staking, rewards, yield, lending, custody, exchange functionality, capital participation, and tokenized investment functionality remain disabled unless separately activated after applicable technical, legal, compliance, security, and production review.

Authentication alone does not grant authorization to gated finance capabilities.

## Verification boundary

Capital must not fabricate OBP-1™, ODIN™, QR-V™, transaction, balance, certificate, or production evidence.

Verification must fail closed when authoritative evidence cannot be confirmed. ODeFi consumes verification through documented adapters; this legacy repository is not a verification authority.

## ODC boundary

Do not silently change deployed ODC facts. Current canonical deployment facts must be sourced from the authoritative ODC repository/service before presentation.

This repository must not independently:
- alter asset balances;
- custody private keys or seed/recovery phrases;
- authorize blockchain transactions;
- become the canonical token ledger;
- guarantee liquidity, value, appreciation, yield, recovery, regulatory approval, or insurance; or
- publish unconfirmed allocation, treasury, sale, or liquidity figures as facts.

## Status

**Legacy Capital application: Under Review / migration compatibility**  
**ODeFi canonical application: In Development unless current production evidence establishes a higher status**

No migrated capability becomes Live or Production solely because code or documentation exists.

## Production rule

If a capability is not operational, documented, tested, secured, verified, and repeatable, it does not exist in the current production version.

© ONEGODIAN, LLC. All rights reserved.
