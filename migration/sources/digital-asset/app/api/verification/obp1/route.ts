import { NextResponse } from "next/server";
import { ODC } from "@/lib/odc";

export const dynamic = "force-dynamic";

export async function GET() {
  const record = ODC.verification.obp1;
  const verified =
    record.status === "verified" &&
    Boolean(record.recordId) &&
    Boolean(record.contentHash);

  return NextResponse.json(
    {
      verified,
      verificationSource: "OBP-1",
      project: ODC.name,
      symbol: ODC.symbol,
      status: record.status,
      authoritativeSource: record.authoritativeSource,
      recordId: record.recordId,
      odinCode: record.odinCode,
      contentHash: record.contentHash,
      hashAlgorithm: record.hashAlgorithm,
      ethereumContract: ODC.contract.address,
      disclosure:
        "OBP-1 verification concerns OneGodian provenance, version, and record integrity. It is not an independent smart-contract audit, regulatory approval, legal-title determination, or guarantee of value, liquidity, performance, or future utility.",
      checkedAt: new Date().toISOString()
    },
    {
      status: verified ? 200 : 202,
      headers: {
        "Cache-Control": "no-store",
        "X-ODC-OBP1-Status": record.status
      }
    }
  );
}
