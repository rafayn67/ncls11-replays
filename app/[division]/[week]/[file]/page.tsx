"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";

export default function ReplayPage() {
  const params = useParams<{
    division: string;
    week?: string;
    file?: string;
  }>();

  const division = params.division; // e.g. "d1"
  const stage = params.week;        // e.g. "playoffs" OR "w3"
  const file = params.file;         // e.g. "HAMvsSDD"

  const iframeSrc = useMemo(() => {
    if (!division || !stage || !file) return "";

    return `/api/replay?division=${division.slice(1)}&week=${stage}&file=${file}`;
  }, [division, stage, file]);

  if (!iframeSrc) {
    return (
      <p className="text-gray-300 text-center mt-10">
        Invalid replay URL
      </p>
    );
  }

  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-4 left-4 z-10">
        <Link
          href={`/division/${division.slice(1)}/${stage === "playoffs" ? "playoffs" : `/week/${stage?.slice(1)}`}`}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md"
        >
          Back
        </Link>
      </div>

      <iframe
        src={iframeSrc}
        className="w-full h-full"
        style={{ border: "none" }}
        title={`Replay ${file}`}
      />
    </div>
  );
}
