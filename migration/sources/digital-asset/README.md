# OneGodian Digital Coin (ODC)

Production monorepo for **OneGodian Digital Coin (ODC)**, including the ODC node, API, explorer, administration dashboard, smart contracts, SDK, infrastructure, documentation, and OneGodian.com WordPress integration plugin.

## Canonical token record

- **Token name:** OneGodian Digital Coin
- **Former public name:** Onegodian DiFi Coin
- **Symbol:** ODC
- **Network:** Ethereum Mainnet
- **Chain ID:** 1
- **Standard:** ERC-20
- **Contract:** `0x9eee1e3615efe0374a7588d2760db5ffb2d5ce98`
- **Maximum supply:** 777,000,000,000 ODC
- **Decimals:** 18
- **Developer and originator:** Gregory L. Jones
- **Organization:** ONEGODIAN, LLC
- **Primary commercial node:** `odc.onegodian.com`

The public name update does not create a new token, replace the existing contract, change the ticker symbol, or increase the maximum supply.

## OBP-1™ verification layer

ODC integrates **OneGodian Blockchain Protocol™ (OBP-1™)** as a project-controlled provenance, document-integrity, and registry-verification layer.

OBP-1™ records may be used to:

- register canonical ODC documents, releases, contracts, manifests, and disclosures;
- associate a stable ODIN identifier with an approved record;
- publish content hashes and version metadata;
- verify whether a retrieved document matches the registered version;
- preserve supersession and revocation history; and
- provide verification links through the ODC node and OneGodian interfaces.

OBP-1™ verification does **not** replace Ethereum consensus, Etherscan records, an independent smart-contract audit, legal review, regulatory approval, or third-party identity verification. Public interfaces must describe each verification source separately and accurately.

Planned verification API surface:

- `/api/verification/obp1`
- `/api/verification/obp1/{recordId}`
- `/api/verification/odin/{odinCode}`
- `/api/verification/hash/{hash}`

See `docs/obp1-verification.md`.

## Repository scope

This repository is the authoritative technical source for:

- ODC node and service infrastructure
- API and public manifest
- Contract and token metadata
- Explorer and transaction interfaces
- Administration and compliance controls
- SDK and integration documentation
- ODC website applications
- WordPress and WooCommerce bridges
- Deployment and security records
- OBP-1™ and ODIN verification adapters

## Required API surface

- `/api/health`
- `/api/manifest`
- `/api/token`
- `/api/supply`
- `/api/contract`
- `/api/status`
- `/api/ecosystem`
- `/api/announcements`
- `/api/verification/obp1`
- `/api/verification/odin/{odinCode}`

All token metadata responses must derive from one canonical source and must not duplicate mutable constants across applications.

## Operational status vocabulary

Every capability must be classified as one of:

- Live
- In development
- Planned
- Under review
- Discontinued

## Production rule

> If a feature is not fully operational, documented, tested, and repeatable, it does not exist in the current version.

## Documentation

- `docs/public-overview.md`
- `docs/odc-disclaimer.md`
- `docs/token-record.json`
- `docs/obp1-verification.md`

## Legal classification

ODC is presented as a digital utility token for approved OneGodian commercial and digital applications. Holding ODC does not by itself establish equity, company revenue rights, creditor status, citizenship, governmental authority, legal-tender status, guaranteed redemption, guaranteed liquidity, or guaranteed market value.

© ONEGODIAN, LLC. All rights reserved.
