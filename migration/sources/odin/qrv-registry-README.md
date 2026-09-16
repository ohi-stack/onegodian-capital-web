# QR-V™ Registry — Consolidated Source Archive

This repository is no longer a required standalone production service.

## Canonical production ownership

Registry persistence, verification lookup, lifecycle mutation, migrations, and audit access now live in:

```text
ohi-stack/qrv-api
https://api.qrv.network
```

The human-readable registry interface now lives at:

```text
https://qrv.network/registry
https://qrv.network/explorer
```

## Database boundary

PostgreSQL / Google Cloud SQL remains the canonical datastore, but database credentials belong only on the API node.

## Legacy compatibility

If `registry.qrv.network` must remain reachable temporarily, point it to the `qrv-node` platform deployment so it redirects to `https://qrv.network/registry`.

## Repository status

- Preserve this repository as schema, migration, and registry-service history.
- Do not deploy it as a separate production runtime after two-node cutover.
- Migrations required by production are now maintained in `ohi-stack/qrv-api/scripts/migrate.js`.
- Do not delete this repository until database behavior has been fully validated on the consolidated API.
