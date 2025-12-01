"use client";

import { useParams, useRouter } from "next/navigation";

export default function DivisionPage() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6 flex flex-col items-center">
      <div className="absolute top-4 left-4">
        <a
        href={`/`}
        className="mb-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md"
      >
        Back
      </a>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
        D{id}
      </h1>

    <div className="px-10 w-full grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }, (_, i) => i + 1).map(week => (
          <button
            key={week}
            onClick={() => router.push(`/division/${id}/week/${week}`)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:-translate-y-0.5"
          >
            Week {week}
          </button>
        ))}
      </div>
      <div className="mt-8 text-gray-400 italic">
        Playoffs page coming soon!
      </div>
    </div>
  );
}
