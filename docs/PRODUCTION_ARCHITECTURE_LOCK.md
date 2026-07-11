# Production Architecture Lock

## Canonical role

The ONEGODIAN Capital Web repository is the public Next.js surface for `capital.onegodian.com`.

It presents Capital product lines, public documentation, disclosures, readiness information, verification entry points, registry references, and approved dashboard surfaces. It does not independently approve an offering, investor, certificate, transaction, or legal status.

## Required Zolfi routes

- `/zolfi`
- `/zolfi/security`
- `/zolfi/contracts`
- `/zolfi/verification`
- `/zolfi/research`

Zolfi is presented only as a ONEGODIAN Capital product line for blockchain security, smart contract intelligence, and post-quantum readiness.

## Required INSTRYX routes

- `/instryx`
- `/instryx/requests`
- `/instryx/approvals`
- `/instryx/issuance`
- `/instryx/audit`
- `/instryx/trace`

INSTRYX is presented only as a ONEGODIAN Capital product line for infrastructure intelligence, investment readiness, financial workflow, and execution analytics.

## Shared routes

- `/verify`
- `/registry`

## QRV infrastructure mapping

- `api.zolfi.qrv.network` — Zolfi API/backend
- `dev.zolfi.qrv.network` — Zolfi developer documentation
- `status.zolfi.qrv.network` — Zolfi monitoring
- `verify.qrv.network` — verification
- `registry.qrv.network` — registry/proof layer

## Production gates

Navigation, footer, metadata, CTAs, disclosures, verification references, product cards, sitemap, manifest, deployment notes, and mobile behavior must remain synchronized. Production acceptance requires successful install, lint, and build checks.
