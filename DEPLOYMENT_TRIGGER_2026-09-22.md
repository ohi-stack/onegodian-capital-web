# Deployment Trigger — 2026-09-22

This file exists only to force a fresh deployment checkout from the current `main` branch after the hosting runner reported `package.json file not found` while the repository root and the referenced failed commit both contained `package.json`.

Expected deployment root: `./`
Expected framework: Next.js
Expected Node version: 20.x
Expected build command: `npm run build`

After a successful fresh checkout/build, this file may remain as an incident record or be removed in a later cleanup commit.
