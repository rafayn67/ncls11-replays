import { NextResponse } from "next/server";


export async function POST(req: Request) {
  const { password } = await req.json();

  const STAFF_PASSWORD = process.env.STAFF_PASSWORD;

  if (password === STAFF_PASSWORD) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
