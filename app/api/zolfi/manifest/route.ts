import { NextResponse } from 'next/server';
import { zolfiManifest } from '../../../zolfi/data';

export async function GET() {
  return NextResponse.json(zolfiManifest);
}
