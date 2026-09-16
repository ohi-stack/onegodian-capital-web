# ODeFi™ Platform — Canonical Architecture

**Canonical domain:** `https://odefi.onegodian.com`

**Migration status:** Active consolidation from Capital.OneGodian.com and connected OneGodian finance systems.

## Canonical hierarchy

- **OneGodian Digital Finance™** — overall commercial financial-technology ecosystem.
- **ODeFi™** — decentralized protocol, transaction, and platform layer.
- **OBW-1™** — wallet and user asset interface.
- **ODFID™** — financial identity and access layer.
- **OBP-1™** — verification and provenance layer.
- **ODIN Registry™** — canonical record and identifier layer.
- **Digital Asset Layer** — utility and transaction assets, including separately governed OBC/ODC implementations.
- **OneGodian Finance Dashboard™** — unified user-facing financial control center.
- **ODeFi.OneGodian.com** — canonical platform for finance interfaces, disclosures, capital documentation, participation infrastructure, treasury, reporting, merchant finance, and approved decentralized-finance functionality.

## Supersession rule

`Capital.OneGodian.com` is superseded as the active finance-platform architecture. Its useful code, documents, disclosures, records, workflows, dashboards, and compliance controls are being incorporated into ODeFi™. Historical Capital material remains preserved under `migration/sources/` for provenance.

## Transaction lifecycle

```text
Identity
  ↓
Verification
  ↓
Wallet
  ↓
Asset
  ↓
Transaction
  ↓
Record
  ↓
Dashboard
  ↓
Reporting
```

## Activation classes

### Core production

- account and identity interfaces;
- wallet connection and balances;
- payments and transfers;
- transaction records;
- disclosures;
- OBP-1 verification;
- ODIN-linked records;
- merchant settlement;
- dashboard and reporting.

### Advanced

- swaps;
- liquidity interfaces;
- programmable payments;
- escrow;
- treasury automation.

### Compliance-locked

- lending;
- yield products;
- staking rewards;
- custody;
- tokenized investment products;
- securities-related functionality;
- regulated deposit or credit-union functions.

Compliance-locked modules must not be represented as operational until separately reviewed and activated.

## Source repositories being consolidated

- `ohi-stack/onegodian-capital-web` — migration base and former Capital web platform.
- `ohi-stack/onegodian-capital-plugin` — disclosures, instruments, ledger, certificates, WooCommerce and WordPress capital workflows.
- `ohi-stack/onegodian-digital-coin` — digital-asset application, wallet dashboard, token/contract/supply APIs, disclosures and OBP-1 verification integration.
- `ohi-stack/onegodian-odc-plugin` — WordPress/WooCommerce digital-asset bridge.
- `ohi-stack/onegodian-obp-node` — OBP-1 verification infrastructure.
- `ohi-stack/onegodian-protocol` — shared protocol rules and standards.
- `ohi-stack/onegodian-api` — shared OneGodian APIs and integrations.
- `ohi-stack/qrv-wallet` — existing wallet-related reference implementation where applicable.

## Migration structure

```text
/docs/
  ODEFI_PLATFORM_ARCHITECTURE.md
  2027_DIGITAL_FINANCE_REVOLUTION.md

/migration/
  sources/
    capital-plugin/
    digital-asset/
    obp-1/
    odin/
    odfid/
    wallet/
    protocol/
    api/
  maps/
  decisions/

/app/
  dashboard/
  wallet/
  assets/
  transactions/
  payments/
  verification/
  registry/
  treasury/
  merchant/
  disclosures/
  reports/
  developer/
  admin/
```

## Production rule

A financial function, disclosure, figure, report, verification record, wallet action, transaction workflow, or regulated-service module must not be represented as live unless it is operational, documented, reviewed, tested, repeatable, and legally appropriate for activation.

© ONEGODIAN, LLC. All applicable rights reserved.
