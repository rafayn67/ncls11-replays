"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export const teamsByDivision: Record<1 | 2 | 3, { name: string; abv: string }[]> = {
  1: [
    { name: "Robert", abv: "DTD" },
    { name: "James", abv: "SHJ" },
    { name: "Koinu", abv: "OGD" },
    { name: "Glimpse", abv: "HAM" },
    { name: "Harris", abv: "ALB" },
    { name: "Mystery", abv: "LVC" },
    { name: "Taylor", abv: "MVM" },
    { name: "Zhai", abv: "JBJ" },
    { name: "Alfa", abv: "SDD" },
    { name: "Jamall", abv: "BBS" },
    { name: "Kyle", abv: "MIN" },
    { name: "Pickles", abv: "GAB" },
  ],
  2: [
    { name: "Bionis", abv: "BLB" },
    { name: "Jake", abv: "WW" },
    { name: "Rhinoshark", abv: "DDS" },
    { name: "Sky", abv: "SFS" },
    { name: "Tristen", abv: "CUC" },
    { name: "Blue", abv: "DWS" },
    { name: "Monster", abv: "TFT" },
    { name: "Kegan", abv: "SSS" },
    { name: "Tidal", abv: "RTK" },
    { name: "Corin", abv: "NJN" },
    { name: "Omar", abv: "OON" },
    { name: "Rapidflames", abv: "TRA" },
  ],
  3: [
    { name: "Steph", abv: "MSG" },
    { name: "Shades", abv: "GOG" },
    { name: "Tesco", abv: "CCA" },
    { name: "Chance", abv: "HAM" },
    { name: "Jpalma", abv: "TKO" },
    { name: "IRONMAN", abv: "BHJ" },
    { name: "Ava", abv: "ASR" },
    { name: "Rowen", abv: "KKS" },
    { name: "Spice", abv: "MSP" },
    { name: "Jay", abv: "YNG" },
    { name: "Max", abv: "EDG" },
    { name: "Ace", abv: "VIV" },
  ],
};

const UploadReplay: React.FC = () => {
  const router = useRouter();
  const [division, setDivision] = useState<1 | 2 | 3>(1);
  const [week, setWeek] = useState(1);
  const [team1, setTeam1] = useState(teamsByDivision[1][0].abv);
  const [team2, setTeam2] = useState(teamsByDivision[1][1].abv);
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
  if (!file) return alert("Please select a replay file.");
  if (!team1 || !team2) return alert("Please select both teams.");

  const filename = `${team1}vs${team2}.html`;
  const path = `d${division}/w${week}/${filename}`;

  const filename1 = `${team1}vs${team2}.html`;
const filename2 = `${team2}vs${team1}.html`;

  // Search for the first combination
  const { data: existsData1 } = await supabase
    .storage
    .from("replays")
    .list(`d${division}/w${week}`, { search: filename1 });

  // Search for the swapped combination
  const { data: existsData2 } = await supabase
    .storage
    .from("replays")
    .list(`d${division}/w${week}`, { search: filename2 });

  const alreadyExists = 
    (existsData1 && existsData1.length > 0) || 
    (existsData2 && existsData2.length > 0);

  if (alreadyExists) {
    const ok = confirm(
      `A replay for this battle already exists. \n\nOverwrite it?`
    );
    if (!ok) return;

    await supabase.storage.from("replays").remove([path]);
  }

  if (team1 == team2) {
    alert("Bruh you can't do that.");
    return;
  }

  const { error } = await supabase.storage
    .from("replays")
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error(error);
    return alert("Upload failed.");
  }

  alert(
    alreadyExists
      ? "Replay overwritten successfully!"
      : "Replay uploaded successfully!"
  );
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="absolute top-4 left-4">
        <a
        href='/'
        className="mb-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md"
      >
        Back
      </a>
      </div>
      <div className="bg-red-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Upload Replay</h2>
          <div className="flex gap-4 mb-4">
            <label className="flex-1 text-white font-semibold">
              Division
              <select
                value={division}
                onChange={(e) => {
                  const div = Number(e.target.value) as 1 | 2 | 3;
                  setDivision(div);
                  setTeam1(teamsByDivision[div][0].abv);
                  setTeam2(teamsByDivision[div][1].abv);
                }}
                className="w-full mt-1 p-3 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {[1, 2, 3].map((d) => (
                  <option key={d} value={d}>D{d}</option>
                ))}
              </select>
            </label>

            <label className="flex-1 text-white font-semibold">
              Week
              <select
                value={week}
                onChange={(e) => setWeek(Number(e.target.value))}
                className="w-full mt-1 p-3 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {[1,2,3,4,5,6,7,8,9].map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex gap-4 mb-4">
            <label className="flex-1 text-white font-semibold">
              Team 1
              <select
                value={team1}
                onChange={(e) => setTeam1(e.target.value)}
                className="w-full mt-1 p-3 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {teamsByDivision[division].map((team) => (
                  <option key={team.abv} value={team.abv}>
                    {team.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex-1 text-white font-semibold">
              Team 2
              <select
                value={team2}
                onChange={(e) => setTeam2(e.target.value)}
                className="w-full mt-1 p-3 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {teamsByDivision[division].map((team) => (
                  <option key={team.abv} value={team.abv}>
                    {team.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

        <input
          type="file"
          accept=".html"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="flex justify-center mb-6 text-white font-bold"


        />

        <button
          onClick={handleUpload}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-semibold shadow-md transition-transform transform hover:-translate-y-1"
        >
          Upload Replay
        </button>
      </div>
      <div className="absolute top-4 right-4 flex gap-2">
  <button
    onClick={() => {
      localStorage.removeItem("staffLoggedIn");
      router.push("/");
    }}
    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md"
  >
    Sign Out
  </button>
</div>

    </div>
  );
};

export default UploadReplay;