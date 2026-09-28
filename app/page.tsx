"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const divisions = [
  { id: "1", label: "D1", sprite: "https://play.pokemonshowdown.com/sprites/gen5ani/azelf.gif" },
  { id: "2", label: "D2", sprite: "https://play.pokemonshowdown.com/sprites/gen5ani/mesprit.gif" },
  { id: "3", label: "D3", sprite: "https://play.pokemonshowdown.com/sprites/gen5ani/uxie.gif" },
];

export default function Home() {
  const [division, setDivision] = useState("1");
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="card p-6 sm:p-10 w-full max-w-md text-center">
        <h1 className="page-title">NCL S12 Replays</h1>
        <div className="text-neutral-500 text-sm mt-2 mb-8">by Glimpse</div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {divisions.map((div) => (
            <button
              key={div.id}
              onClick={() => setDivision(div.id)}
              className={`flex flex-col items-center py-3 rounded-xl border font-semibold transition ${
                division === div.id
                  ? "border-red-500 bg-red-500/10 text-white"
                  : "border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-600 hover:text-white"
              }`}
            >
              <img src={div.sprite} alt={div.label} className="w-12 h-12 mb-1 sm:w-16 sm:h-16 sm:mb-2 object-contain" />
              <span>{div.label}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push(`/division/${division}`)}
            className="btn btn-primary w-full py-3"
          >
            View Replays
          </button>

          <button
            onClick={() => router.push("/admin")}
            className="btn btn-secondary w-full py-3"
          >
            Upload a Replay
          </button>
        </div>
      </div>
    </div>
  );
}