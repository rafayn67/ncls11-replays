"use client";

import { useParams, useRouter } from "next/navigation";

export default function DivisionPage() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  const divisions = [
    { id: "1", label: "D1", sprite: "/lucario.gif" },
    { id: "2", label: "D2", sprite: "/absol.gif" },
    { id: "3", label: "D3", sprite: "/garchomp.gif" },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 pt-20 flex flex-col items-center">
      <div className="absolute top-4 left-4">
        <a href={`/`} className="btn-back">
          ← Back
        </a>
      </div>
      <div className="flex items-center justify-center mb-8 border-b bg-gray-50/5 border-gray-800/20 p-4 pt-0  rounded-lg">
        <div className="relative w-24 h-24">
          <img
            src={divisions.find(d => d.id === id)?.sprite}
            alt={`D${id}`}
            className="w-24 h-24 object-contain"
          />

          <h1 className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] text-4xl font-bold z-10">
            D{id}
          </h1>
        </div>
      </div>


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
        <p className="text-center text-neutral-500 font-light mt-6">
          Playoffs coming soon!
        </p>
        {/* <button
          onClick={() => router.push(`/division/${id}/playoffs`)}
          className="btn btn-primary w-full mt-6 py-3"
        >
          Playoffs
        </button> */}
      </div>
    </div>
  );
}