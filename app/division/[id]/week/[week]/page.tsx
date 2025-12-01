"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { teamsByDivision } from "@/app/admin/UploadReplay";

export default function WeekPage() {
  const params = useParams();
  const { id: division, week } = params;

  const [files, setFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReplays() {
      setLoading(true);
      try {
        const res = await fetch(`/api/replays?division=${division}&week=${week}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        // Strip .html to get clean file names
        const cleanFiles = (data.files || []).map((f: string) =>
          f.replace(".html", "")
        );
        setFiles(cleanFiles);
      } catch (err) {
        console.error(err);
        setFiles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchReplays();
  }, [division, week]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 p-4 sm:p-6">
      <div className="absolute top-4 left-4">
        <Link
          href={`/division/${division}`}
          className="mb-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md"
        >
          Back
        </Link>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center">
        D{division} W{week}
      </h1>

      {loading ? (
        <p className="text-gray-300">Loading...</p>
      ) : files.length === 0 ? (
        <p className="text-gray-300">No replays uploaded yet.</p>
      ) : (
        <div className="w-full max-w-md flex flex-col gap-3">
          {files.map((file) => (
            <Link
              key={file}
              href={`/d${division}/w${week}/${file}`}
              className="flex justify-center px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-3 rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-0.5"
            >
              {teamsByDivision[Number(division) as 1 | 2 | 3].find(t => t.abv === file.slice(0, 3))?.name} vs {teamsByDivision[Number(division) as 1 | 2 | 3].find(t => t.abv === file.slice(-3))?.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}