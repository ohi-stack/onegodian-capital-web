# Digital Asset Network Reconciliation

## Status

**Decision required before canonical ODeFi production activation.**

## Preserved implementation

The current `ohi-stack/onegodian-digital-coin` source identifies:

- OneGodian Digital Coin (ODC)
- Symbol: ODC
- Ethereum Mainnet
- Chain ID: 1
- ERC-20
- Contract: `0x9eee1e3615efe0374a7588d2760db5ffb2d5ce98`
- Maximum supply: 777,000,000,000 ODC

The ODeFi migration preserves this implementation as historical/technical source material and does not silently alter its chain, symbol, supply, or contract record.

## Newer architecture under development

A newer OneGodian digital-asset track is being developed around OneGodian Blockchain Coin (OBC™) as an ERC-20 ecosystem token on Base. Under that architecture, ETH remains the Base gas asset unless a future independent OneGodian network separately makes OBC a native network asset.

## ODeFi migration rule

ODeFi™ must not automatically treat ODC and OBC as the same asset, rename one into the other, migrate balances, replace contract addresses, or imply cross-chain equivalence.

Before production activation, the asset registry must record each asset independently with at least:

- canonical name;
- symbol;
- network;
- chain ID;
- contract address;
- token standard;
- decimals;
- supply policy;
- deployment status;
- explorer URL;
- authoritative repository;
- OBP-1 verification record;
- ODIN identifier where assigned;
- supersession or relationship metadata if applicable.

## Safe ODeFi implementation

Until a formal asset decision is adopted, ODeFi should use a multi-asset registry capable of representing ODC and OBC separately. User interfaces must identify the network and contract for every asset and must never infer that similarly branded assets are interchangeable.

© ONEGODIAN, LLC. All applicable rights reserved.
