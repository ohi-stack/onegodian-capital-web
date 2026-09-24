# OneGodian Capital Web

Dedicated Next.js frontend for **capital.onegodian.com**, covering capital participation, disclosures, institutional records, certificates, compliance status, partner information, and financial-development reporting.

## Secrets and deployment configuration

Do not commit API keys, service-account files, private keys, tokens, passwords, or generated credential/config files to this repository.

Firebase Web SDK configuration is loaded from deployment environment variables:

```text
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_FIRESTORE_DATABASE_ID
```

Use `.env.example` only as a placeholder/template. Put real values in the deployment provider's environment-variable/secret store or a local ignored `.env` file. `firebase-applet-config.json`, Firebase Admin service-account JSON files, Google credential files, PEM files, and PKCS#12 files are intentionally ignored.

Any credential that has ever been committed must be treated as exposed and rotated or revoked at its provider; deleting it from the current branch does not invalidate copies in Git history.

## ODC capital boundary

Capital.OneGodian.com contains the financial, treasury, disclosure, allocation, and institutional-participation side of **OneGodian Digital Coin (ODC)**. It is not the authoritative ODC wallet, explorer, transaction processor, ledger, or technical node.

Authoritative operational node:

- `https://odc.onegodian.com`

Capital presentation routes:

```text
/odc
/odc/economic-model
/odc/token-allocation
/odc/treasury
/odc/liquidity
/odc/disclosures
/odc/smart-contract
/odc/obp-1
/odc/reports
/odc/partners
```

## ODC responsibilities

Capital Web may present:

- ODC capital overview;
- economic-model documentation;
- confirmed allocation disclosures;
- treasury and wallet disclosures;
- circulating-supply methodology;
- liquidity disclosures;
- development-funding use;
- risk and legal disclosures;
- OBP-1™ verified capital records;
- institutional and strategic-partner information; and
- approved financial or governance reports.

Capital Web must not independently:

- alter ODC balances;
- custody wallet private keys;
- authorize blockchain transactions;
- operate as the canonical token ledger;
- imply that ODC is a security or non-security without qualified legal analysis;
- guarantee liquidity, value, appreciation, yield, or redemption; or
- publish unconfirmed allocation, treasury, sale, or liquidity figures as facts.

## System architecture

```text
onegodian.com/odc
└── Mainstream public introduction

odc.onegodian.com
└── ODC application, wallet, explorer, APIs, registry, and utility

capital.onegodian.com/odc
└── ODC economics, treasury, disclosures, reports, and partnerships

OneGodian ODC Plugin
└── WordPress and WooCommerce integration bridge

OBP-1™
└── Provenance, integrity, version, and registry verification
```

## Production rule

A financial figure, allocation, liquidity claim, treasury record, participation workflow, or verification badge must not be described as live or confirmed unless it is operational, documented, reviewed, and repeatable.

© ONEGODIAN, LLC. All rights reserved.
