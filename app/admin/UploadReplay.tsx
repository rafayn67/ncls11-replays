"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const UploadReplay: React.FC = () => {
  const router = useRouter();

  const [division, setDivision] = useState<1 | 2 | 3>(1);
    const [week, setWeek] = useState(Math.min(Math.max(Math.floor((new Date().getTime() - new Date("2025-12-01").getTime()) / (1000*60*60*24*7)) + 1, 1), 9) as 1|2|3|4|5|6|7|8|9);
  const [matchup, setMatchup] = useState<{ team1: string; team2: string; team1_abv: string; team2_abv: string } | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [matchups, setMatchups] = useState<any[]>([]);
  const [selectedMatchup, setSelectedMatchup] = useState<any>(null);

  useEffect(() => {
  const loadMatchups = async () => {
    const { data: matchupData, error: matchupError } = await supabase
      .from("matchups")
      .select("team1, team2")
      .eq("division", division)
      .eq("week", week);

    if (matchupError || !matchupData) {
      console.warn("No matchups found or error:", matchupError);
      setMatchups([]);
      setSelectedMatchup(null);
      return;
    }

    // 2️⃣ Fetch all teams for the division to get abbreviations
    const { data: teamsData, error: teamsError } = await supabase
      .from("teams")
      .select("name, abv")
      .eq("division", division);

    if (teamsError || !teamsData) {
      console.warn("No teams found or error:", teamsError);
      setMatchups([]);
      setSelectedMatchup(null);
      return;
    }

    // 3️⃣ Attach abbreviations to each matchup
    const matchupWithAbv = matchupData.map(m => ({
      ...m,
      team1_abv: teamsData.find(t => t.name === m.team1)?.abv || "",
      team2_abv: teamsData.find(t => t.name === m.team2)?.abv || ""
    }));

    setMatchups(matchupWithAbv);
    setSelectedMatchup(matchupWithAbv[0] || null);
  };

  loadMatchups();
}, [division, week]);


  const handleUpload = async () => {
  if (!file) return alert("Please select a replay file.");
  if (!selectedMatchup) return alert("Matchup not found."); // ✅ use selectedMatchup here

  const filename = `${selectedMatchup.team1_abv}vs${selectedMatchup.team2_abv}.html`;
  const path = `d${division}/w${week}/${filename}`;

  // Check if replay already exists (both orders)
  const { data: exists1 } = await supabase.storage
    .from("replays")
    .list(`d${division}/w${week}`, { search: filename });
  const { data: exists2 } = await supabase.storage
    .from("replays")
    .list(`d${division}/w${week}`, { search: `${selectedMatchup.team2_abv}vs${selectedMatchup.team1_abv}.html` });

  const alreadyExists = (exists1 && exists1.length > 0) || (exists2 && exists2.length > 0);

  if (alreadyExists) {
    const ok = confirm("A replay for this matchup already exists. Overwrite?");
    if (!ok) return;
    await supabase.storage.from("replays").remove([path]);
  }

  const { error } = await supabase.storage
    .from("replays")
    .upload(path, file, { cacheControl: "3600", upsert: false });

  if (error) return alert("Upload failed.");

  alert(alreadyExists ? "Replay overwritten successfully!" : "Replay uploaded successfully!");
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="absolute top-4 left-4">
        <a href='/' className="mb-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md">Back</a>
      </div>

      <div className="bg-red-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Upload Replay</h2>

        <div className="flex gap-4 mb-4">
          <label className="flex-1 text-white font-semibold">
            Division
            <select
              value={division}
              onChange={(e) => setDivision(Number(e.target.value) as 1 | 2 | 3)}
              className="w-full mt-1 p-3 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {[1,2,3].map(d => <option key={d} value={d}>D{d}</option>)}
            </select>
          </label>

          <label className="flex-1 text-white font-semibold">
            Week
            <select
              value={week}
              onChange={(e) => setWeek(Number(e.target.value) as 1|2|3|4|5|6|7|8|9)}
              className="w-full mt-1 p-3 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {[1,2,3,4,5,6,7,8,9].map(w => <option key={w} value={w}>{w}</option>)}
            </select>
          </label>
        </div>

        {matchups.length > 0 ? (
  <select
    value={selectedMatchup ? `${selectedMatchup.team1}vs${selectedMatchup.team2}` : ""}
    onChange={(e) => {
      const [team1, team2] = e.target.value.split("vs");
      const m = matchups.find(m => m.team1 === team1 && m.team2 === team2);
      setSelectedMatchup(m || null);
    }}
    className="w-full mb-4 p-3 rounded-lg text-center text-gray-900 font-medium"
  >
    {matchups.map((m, idx) => (
      <option key={idx} value={`${m.team1}vs${m.team2}`}>
        {m.team1} vs {m.team2}
      </option>
    ))}
  </select>
) : (
  <p className="text-gray-300 mb-4 text-center">Loading matchups...</p>
)}

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
          onClick={() => { localStorage.removeItem("staffLoggedIn"); router.push("/"); }}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UploadReplay;
