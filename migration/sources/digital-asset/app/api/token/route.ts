import { NextResponse } from "next/server";

const tokenRecord = {
  schema_version: "1.1.0",
  project: "OneGodian Digital Coin",
  symbol: "ODC",
  former_public_name: "Onegodian DiFi Coin",
  network: "Ethereum Mainnet",
  chain_id: 1,
  standard: "ERC-20",
  contract_address: "0x9eee1e3615efe0374a7588d2760db5ffb2d5ce98",
  maximum_supply: "777000000000",
  decimals: 18,
  developer_originator: "Gregory L. Jones",
  organization: "ONEGODIAN, LLC",
  classification: "digital utility token",
  primary_commercial_node: "https://odc.onegodian.com",
  verification: {
    obp1: {
      enabled: true,
      status: "under-review",
      odin_code: null,
      content_hash: null,
      hash_algorithm: "SHA-256"
    }
  }
} as const;

export async function GET() {
  return NextResponse.json(tokenRecord, {
    headers: { "Cache-Control": "public, max-age=300, stale-while-revalidate=600" }
  });
}
