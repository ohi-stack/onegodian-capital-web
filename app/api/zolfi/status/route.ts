import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    service: 'zolfi-capital',
    status: 'operational',
    host: 'capital.onegodian.com',
    modules: 5,
    verification: 'QRV bridge enabled',
    timestamp: new Date().toISOString(),
  });
}
