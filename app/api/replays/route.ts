import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseServer";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const division = url.searchParams.get("division");
    const week = url.searchParams.get("week");

    console.log("DIVISION:", division, "WEEK:", week);

    const { data, error } = await supabase.storage
      .from("replays")
      .list(`d${division}/w${week}`);

    console.log("SUPABASE ERROR:", error);
    console.log("SUPABASE DATA:", data);

    if (error) throw new Error(error.message);

    const files = data
      ?.filter(f => f.name.endsWith(".html"))
      .map(f => f.name) || [];

    return NextResponse.json({ files });
  } catch (err: any) {
    console.error("API ROUTE ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const division = formData.get("division") as string;
  const week = formData.get("week") as string;

  if (!file || !division || !week) {
    return NextResponse.json({ error: "Missing file, division, or week" }, { status: 400 });
  }

  const filePath = `d${division}/w${week}/${file.name}`;

  const { error } = await supabase.storage
    .from("replays")
    .upload(filePath, file.stream(), { upsert: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ message: "File uploaded successfully", path: filePath });
}