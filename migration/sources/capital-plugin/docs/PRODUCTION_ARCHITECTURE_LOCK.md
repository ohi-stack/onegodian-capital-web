# Production Architecture Lock

## Canonical role

The ONEGODIAN Capital Plugin owns Capital-specific WordPress administration, records, dashboards, disclosures, verification support, certificates, notes, bonds, ledger functions, and registry workflows.

It depends on the OneGodian Platform Plugin for shared infrastructure and must not duplicate shared platform modules unless compatibility requires a temporary adapter.

## Core modules

- Capital Portal
- Investor Dashboard
- Certificates
- Notes
- Bonds
- Ledger
- Disclosures
- Verification
- Capital Registry

## Zolfi module

Source reference: `ohi-stack/zolfi-platform`.

Zolfi is a ONEGODIAN Capital product line for blockchain security, smart contract intelligence, audit support, post-quantum readiness, verification, and research.

Required module surfaces:

- Dashboard
- Security
- Contracts
- Audit
- Verification
- Research

## INSTRYX module

Source reference: `ohi-stack/instryx-financial-interface`.

INSTRYX is a ONEGODIAN Capital product line for infrastructure intelligence, investment readiness, financial workflow, certificate issuance, approval and execution queues, audit, export, and traceability.

Required module surfaces:

- Requests
- Approvals
- Issuance
- Audit
- Exports
- Trace

## QRV boundary

QRV Network remains the supporting infrastructure for APIs, verification, developer documentation, registry, proof references, and monitoring.

## Production gates

No live public offering, investor approval, certificate entitlement, or transaction flow is activated by architecture alone. Existing legal, disclosure, accounting, security, privacy, and production-readiness gates remain mandatory.
