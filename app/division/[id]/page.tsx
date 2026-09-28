"use client";

import { useParams, useRouter } from "next/navigation";

export default function DivisionPage() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  return (
    <div className="min-h-screen p-4 sm:p-6 pt-20 flex flex-col items-center">
      <div className="absolute top-4 left-4">
        <a href={`/`} className="btn-back">
          ← Back
        </a>
      </div>
      <h1 className="page-title mb-8">D{id}</h1>

      <div className="w-full max-w-md">
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 9 }, (_, i) => i + 1).map(week => (
            <button
              key={week}
              onClick={() => router.push(`/division/${id}/week/${week}`)}
              className="btn btn-secondary py-3 hover:border-red-500"
            >
              Week {week}
            </button>
          ))}
        </div>
        <button
          onClick={() => router.push(`/division/${id}/playoffs`)}
          className="btn btn-primary w-full mt-6 py-3"
        >
          Playoffs
        </button>
      </div>
    </div>
  );
}