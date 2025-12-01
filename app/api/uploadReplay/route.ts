import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const path = formData.get("path") as string;

  if (!file || !path) return NextResponse.json({ error: "Missing file or path" }, { status: 400 });

  const { error } = await supabase.storage.from("replays").upload(path, file, { upsert: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}