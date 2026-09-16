# ODC Capital Integration Standard

## Purpose

This document defines the boundary between the ONEGODIAN Capital Portal and OneGodian Digital Coin (ODC).

Capital.OneGodian.com is the authoritative presentation surface for ODC economics, treasury disclosures, allocation records, financial-development reporting, institutional participation, and compliance notices. The authoritative ODC application and technical node remain at `odc.onegodian.com`.

## Required Capital routes

```text
/capital/odc
/capital/odc/economic-model
/capital/odc/token-allocation
/capital/odc/treasury
/capital/odc/liquidity
/capital/odc/disclosures
/capital/odc/smart-contract
/capital/odc/obp-1
/capital/odc/reports
/capital/odc/partners
```

## Permitted Capital functions

- Present confirmed ODC token facts from the canonical ODC node.
- Present approved economic-model documentation.
- Publish confirmed allocation and circulating-supply methodologies.
- Display treasury wallet references and reporting periods after approval.
- Present liquidity disclosures without guaranteeing liquidity.
- Record disclosure acknowledgements.
- Present institutional and strategic-partner information.
- Display OBP-1™ verification metadata received from an authoritative verification service.
- Link to the ODC node for wallet, explorer, transaction, API, and utility functions.

## Prohibited Capital functions

The Capital plugin must not:

- become the authoritative ODC ledger;
- modify token balances;
- custody wallet private keys or seed phrases;
- sign or authorize blockchain transactions;
- manufacture circulating-supply, allocation, liquidity, sale, treasury, or valuation figures;
- guarantee return, appreciation, yield, redemption, market access, or liquidity;
- characterize ODC as a security or non-security without qualified legal analysis; or
- treat a WooCommerce order as final investor approval, token entitlement, or legally effective capital acceptance.

## Integration endpoints

The Capital plugin may consume approved public or authenticated endpoints such as:

```text
GET /api/token
GET /api/contract
GET /api/supply
GET /api/status
GET /api/verification/obp1
GET /api/verification/odin/{odinCode}
GET /api/capital/disclosures
GET /api/capital/reports
```

Endpoints that do not yet exist must be labeled planned or in development.

## Recommended shortcodes

```text
[onegodian_capital_odc_overview]
[onegodian_capital_odc_economic_model]
[onegodian_capital_odc_allocation]
[onegodian_capital_odc_treasury]
[onegodian_capital_odc_liquidity]
[onegodian_capital_odc_disclosures]
[onegodian_capital_odc_contract]
[onegodian_capital_odc_obp1]
[onegodian_capital_odc_reports]
[onegodian_capital_odc_partners]
```

## OBP-1™ requirements

OBP-1™ may verify provenance, authorship, version, integrity hashes, supersession, and revocation status for approved ODC capital records. It does not constitute an independent smart-contract audit, regulatory approval, securities approval, legal title determination, or guarantee of value.

The Capital plugin must fail closed. Missing, expired, revoked, mismatched, or invalid verification data must never display as verified.

## Canonical system roles

```text
OneGodian.com/odc
└── Public introduction and ecosystem positioning

ODC.OneGodian.com
└── Application, wallet, explorer, APIs, registry, and utility

Capital.OneGodian.com/odc
└── Economics, treasury, disclosures, reporting, and institutional participation

OneGodian ODC Plugin
└── WordPress and WooCommerce bridge

OBP-1™
└── Provenance, integrity, version, and registry verification
```

## Production rule

If an ODC capital function, disclosure, figure, report, verification record, or workflow is not operational, documented, reviewed, tested, and repeatable, it must not be represented as live or confirmed.

© ONEGODIAN, LLC. All rights reserved.
