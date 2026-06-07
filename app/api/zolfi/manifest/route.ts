import { NextResponse } from 'next/server';
import { zolfiManifest } from '@/app/zolfi/data';

export async function GET() {
  return NextResponse.json(zolfiManifest);
}
