// src/app/api/getImageUrl/route.ts
import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get('path');

  if (!path) {
    return NextResponse.json({ error: 'Path is required' }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .storage
    .from('kalhara-portfolio') // supabase bucket name
    .createSignedUrl(path, 60 * 60); // 1 hour expiration

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ url: data?.signedUrl });
}
