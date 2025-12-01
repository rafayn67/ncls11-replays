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
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 sm:p-6">
        <div className="bg-red-900 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-md text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            NCL S11 Replays
          </h1>
          <div className="text-gray-300 my-4">
            Project by Glimpse
          </div>

          <div className="flex justify-around items-center mb-6 sm:mb-8">
            {divisions.map((div) => (
              <button
                key={div.id}
                onClick={() => setDivision(div.id)}
                className={`flex flex-col items-center p-2 sm:p-3 rounded-lg font-semibold shadow-md transition-transform transform ${
                  division === div.id
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                <img src={div.sprite} alt={div.label} className="w-12 h-12 mb-1 sm:w-16 sm:h-16 sm:mb-2" />
                <span className="text-white">{div.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => router.push(`/division/${division}`)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 sm:p-3 rounded-lg font-semibold shadow-md transition-transform transform hover:-translate-y-0.5 mb-3 sm:mb-4"
          >
            View Replays
          </button>

          <button
            onClick={() => router.push("/admin")}
            className="w-full bg-green-500 hover:bg-green-600 text-white p-2.5 sm:p-3 rounded-lg font-semibold shadow-md transition-transform transform hover:-translate-y-0.5"
          >
            Upload a Replay
          </button>
        </div>
      </div>
    );
  }
