// app/api/replay/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseServer";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const division = url.searchParams.get("division");
  const week = url.searchParams.get("week");
  const file = url.searchParams.get("file");

  if (!division || !week || !file)
    return NextResponse.json({ error: "Missing params" }, { status: 400 });

  const { data, error } = await supabase.storage
    .from("replays")
    .download(`d${division}/w${week}/${file}.html`);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const html = await data.text();

  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
}