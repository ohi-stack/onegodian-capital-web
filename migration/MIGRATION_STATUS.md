# ODeFi™ Platform Migration Status

**Target platform:** ODeFi.OneGodian.com  
**Working repository:** `ohi-stack/onegodian-capital-web`  
**Working branch:** `odefi-platform-migration`  
**Production branch affected:** No — `main` remains unchanged until review/merge.

## Canonical objective

Consolidate the OneGodian Digital Finance™ ecosystem into the ODeFi™ platform while preserving source provenance and keeping regulated or unresolved functionality gated.

## Layer map

| Layer | Canonical role | Migration source(s) | Status |
|---|---|---|---|
| OneGodian Digital Finance™ | Overall commercial financial-technology ecosystem | Capital web/plugin + finance documentation | In migration |
| ODeFi™ | Platform, decentralized protocol and transaction layer | Capital web as migration base | In migration |
| OBW-1™ | Wallet and user asset interface | ODC WalletDashboard + QR-V wallet references | Source copied / reconciliation pending |
| ODFID™ | Financial identity/access layer | `identity-service` contract-first identity architecture | Source reference copied / ODFID specialization pending |
| OBP-1™ | Verification/provenance layer | `onegodian-obp-node` + ODC verification route | Core source copied |
| ODIN Registry™ | Canonical identifier/record layer | QR-V registry history + OBP-1 registry UI | Source references copied / ODIN-specific contract pending |
| Digital Asset Layer | Utility/transaction assets | `onegodian-digital-coin`; newer OBC/Base architecture | Source copied / chain and asset reconciliation required |
| OneGodian Finance Dashboard™ | Unified control center | Capital dashboard + ODC wallet dashboard | In migration |
| Capital functions | Disclosures, capital docs, participation, instruments, ledger, certificates | `onegodian-capital-plugin` | Source copies started; becomes ODeFi module set |

## Copied source files

### Capital plugin

- `migration/sources/capital-plugin/docs/ODC_CAPITAL_INTEGRATION.md`
- `migration/sources/capital-plugin/docs/PRODUCTION_ARCHITECTURE_LOCK.md`
- `migration/sources/capital-plugin/docs/DISCLOSURE_REQUIREMENTS.md`

### Digital asset

- `migration/sources/digital-asset/README.md`
- `migration/sources/digital-asset/app/api/token/route.ts`
- `migration/sources/digital-asset/app/api/verification/obp1/route.ts`
- `migration/sources/digital-asset/app/dashboard/WalletDashboard.tsx`

### OBP-1

- `migration/sources/obp-1/server.ts`
- `migration/sources/obp-1/src/components/Registry.tsx`

### Identity / ODFID review

- `migration/sources/odfid/identity-service-README.md`

### Registry / ODIN review

- `migration/sources/odin/qrv-registry-README.md`

### Wallet references

- `migration/sources/wallet/qrv-wallet-README.md`

## Canonical migration documents

- `docs/ODEFI_PLATFORM_ARCHITECTURE.md`
- `migration/decisions/DIGITAL_ASSET_NETWORK_RECONCILIATION.md`

## Critical unresolved item

The preserved ODC repository describes an Ethereum Mainnet ERC-20 implementation, while the newer OBC architecture targets Base. ODeFi must not conflate those assets or rewrite contract/network history. They remain separate registry records until an explicit canonical relationship, migration, coexistence, or supersession decision is adopted.

## Next copy groups

1. Remaining `onegodian-capital-plugin/docs/*` files.
2. Capital plugin ledger, instruments, certificates, disclosures, WooCommerce, REST, permissions, settings, and widgets modules.
3. Remaining digital-asset API routes, contract pages, disclosures, docs, token record, supply/status/manifest code, and dashboard support files.
4. `onegodian-odc-plugin` WordPress/WooCommerce bridge.
5. `onegodian-obp-node` audit, certificate, dashboard, and sync components.
6. `identity-service` route/service implementations for ODFID adaptation.
7. QR-V/API registry code applicable to ODIN-backed lookups and auditability.
8. `onegodian-protocol` shared standards.
9. `onegodian-api` shared integration routes.
10. Final namespace conversion from Capital-specific routes/components to ODeFi equivalents after preserved source copies are complete.

## Migration rule

Source files under `migration/sources/` are preserved inputs, not automatically approved production code. Canonical production modules must be separately adapted, tested, documented, and reviewed before activation.
