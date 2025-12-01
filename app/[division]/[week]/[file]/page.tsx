"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ReplayPage() {
  
  const params = useParams();
  const division = params.division;
  const week = params.week;
  const file = params.file;
  const [htmlUrl, setHtmlUrl] = useState<string>("");

  useEffect(() => {
  if (!division || !week || !file) {
    console.log("Missing params");
    return;
  }

  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL +
    `/storage/v1/object/public/replays/${division}/${week}/${file}.html`;

  setHtmlUrl(url);
}, [division, week, file]);

  if (!htmlUrl) return <p className="text-gray-300">{htmlUrl}</p>;

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="absolute top-4 left-4 z-10">
        <Link
          href={`/division/${division?.slice(1)}/week/${week?.slice(1)}`}
          className="mb-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md"
        >
          Back
        </Link>
      </div>

      <iframe
  src={`/api/replay?division=${division?.slice(1)}&week=${week?.slice(1)}&file=${file}`}
  className="w-full"
  style={{ border: "none", height: "100vh" }}
  title={`Replay ${file}`}
/>
    </div>
  );
}