# ODeFi Consolidation Compatibility Record

**Updated:** 2026-10-04  
**Repository:** `ohi-stack/onegodian-capital-web`  
**Canonical target:** `ohi-stack/odefi-onegodian`  
**Status:** Under Review

## Purpose

This record synchronizes the legacy Capital repository with the current ODeFi architecture. It is a migration/compatibility contract, not evidence that migrated capabilities are operational.

## Current canonical relationship

```text
Capital.OneGodian.com
  → legacy source / disclosure / compatibility evidence
  → migration mapping
  → ODeFi.OneGodian.com
  → canonical financial application
  → api.OneGodian.org shared service authority
```

ODeFi aggregates authoritative systems without replacing their authority boundaries:

- ODFID™ — identity and access layer; In Development unless separately evidenced.
- OBP-1™ — verification/provenance layer; fail closed when authority is unavailable.
- OBW-1™ — non-custodial wallet/asset interface.
- ODIN Registry™ — canonical identifiers and records.
- QR-V™ — public verification infrastructure.
- OneGodian Finance Dashboard™ — aggregation/control interface.

## Legacy surfaces requiring disposition

- `/`
- `/investor-portal`
- `/offerings`
- `/disclosures`
- `/certificates`
- `/registry`
- `/production-readiness`
- `/odc/*`
- legacy API handlers and data sources

For each surface, choose and document exactly one disposition: **migrate**, **redirect**, **archive**, **disclosure-only**, or **discontinue**.

## ODeFi route families now authoritative

- `/dashboard`
- `/identity`
- `/verify`
- `/records`
- `/wallet`
- `/assets`
- `/transactions`
- `/payments`
- `/merchant`
- `/protocol`
- `/treasury`
- `/capital`
- `/participation`
- `/reports`
- `/disclosures`
- `/compliance`
- `/developers`
- `/security`
- `/support`

Advanced execution routes may exist in ODeFi architecture while remaining compliance-locked.

## Required migration checks

- Preserve disclosure and historical records with provenance.
- Do not copy secrets or deployment credentials.
- Do not duplicate canonical APIs, registries, wallet authority, or contract authority.
- Replace fabricated/static verification claims with authoritative fail-closed adapters.
- Keep financial feature gates disabled unless separately activated.
- Map every legacy public URL before redirecting or removing it.
- Preserve SEO/HTTP redirect intent and historical references where appropriate.
- Test clean build, lint/type checks, responsive behavior, accessibility, and redirect behavior before deployment.
- Document deployment and rollback.
- Record live acceptance evidence before any Production designation.

## Production boundary

This synchronization changes repository architecture/documentation only. It does not establish that Capital.OneGodian.com has been redirected, that ODeFi is fully Production, or that any regulated financial feature is activated.
