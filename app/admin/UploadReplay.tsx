"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const UploadReplay: React.FC = () => {
  const router = useRouter();

  const [division, setDivision] = useState<1 | 2 | 3>(1);
  const [week, setWeek] = useState(Math.min(Math.max(Math.floor((new Date().getTime() - new Date("2025-12-01").getTime()) / (1000 * 60 * 60 * 24 * 7)) + 1, 1), 9) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9);
  const [mode, setMode] = useState<"playoffs" | number>("playoffs");
  const [file, setFile] = useState<File | null>(null);
  const [matchups, setMatchups] = useState<any[]>([]);
  const [selectedMatchup, setSelectedMatchup] = useState<any>(null);

  useEffect(() => {
    const loadMatchups = async () => {
      // ---------------- PLAYOFFS ----------------
      if (mode === "playoffs") {
        const { data: bracketGames, error } = await supabase
          .from("bracket")
          .select("matchup, team1, team2")
          .eq("division", division)
          .not("team1", "is", null)
          .not("team2", "is", null)
          .order("id");

        if (error || !bracketGames) return;

        // get abbreviations
        const { data: teams } = await supabase
          .from("teams")
          .select("name, abv")
          .eq("division", division);

        const games = bracketGames.map(g => ({
          matchup: g.matchup,
          team1: g.team1,
          team2: g.team2,
          team1_abv: teams?.find(t => t.name === g.team1)?.abv || "",
          team2_abv: teams?.find(t => t.name === g.team2)?.abv || ""
        }));

        setMatchups(games);
        setSelectedMatchup(games[0] || null);
        return;
      }


      // ---------------- REGULAR SEASON ----------------
      const { data: matchupData } = await supabase
        .from("matchups")
        .select("team1, team2")
        .eq("division", division)
        .eq("week", mode);

      if (!matchupData) return;

      const { data: teams } = await supabase
        .from("teams")
        .select("name, abv")
        .eq("division", division);

      const mapped = matchupData.map(m => ({
        ...m,
        team1_abv: teams?.find(t => t.name === m.team1)?.abv || "",
        team2_abv: teams?.find(t => t.name === m.team2)?.abv || ""
      }));

      setMatchups(mapped);
      setSelectedMatchup(mapped[0] || null);
    };

    loadMatchups();
  }, [division, mode]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a replay file.");
    if (!selectedMatchup) return alert("Matchup not found.");

    const filename = `${selectedMatchup.team1_abv}vs${selectedMatchup.team2_abv}.html`;
    const folder = mode === "playoffs" ? `d${division}/playoffs` : `d${division}/w${mode}`;
    const path = `${folder}/${filename}`;

    // Check if replay already exists (both orders)
    const { data: exists1 } = await supabase.storage
      .from("replays")
      .list(folder, { search: filename });
    const { data: exists2 } = await supabase.storage
      .from("replays")
      .list(folder, { search: `${selectedMatchup.team2_abv}vs${selectedMatchup.team1_abv}.html` });
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

  const setWinner = async (winner: string) => {
    if (!selectedMatchup) return;

    const { error } = await supabase
      .from("bracket")
      .update({ winner })
      .eq("division", division)
      .eq("matchup", selectedMatchup.matchup);

    if (error) return console.error("Error setting winner:", error);

    alert(`${winner} set as winner!`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <a href='/' className="btn-back">← Back</a>
      </div>

      <div className="card p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Upload Replay</h2>

        {/* PLAYOFFS WINNER BUTTONS */}
        {mode === "playoffs" && selectedMatchup && (
          <div className="text-center mb-6">
            <label className="label mb-2">Set Winner</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                className="btn btn-secondary hover:border-red-500"
                onClick={() => setWinner(selectedMatchup.team1)}
              >
                {selectedMatchup.team1}
              </button>
              <button
                className="btn btn-secondary hover:border-red-500"
                onClick={() => setWinner(selectedMatchup.team2)}
              >
                {selectedMatchup.team2}
              </button>
            </div>
          </div>
        )}

        {/* EXISTING SELECTORS */}
        <div className="flex gap-4 mb-4">
          <label className="flex-1 label">
            Division
            <select
              value={division}
              onChange={(e) => setDivision(Number(e.target.value) as 1 | 2 | 3)}
              className="field mt-1.5 normal-case tracking-normal text-base font-medium"
            >
              {[1, 2, 3].map(d => <option key={d} value={d}>D{d}</option>)}
            </select>
          </label>

          <label className="flex-1 label">
            Stage
            <select
              value={mode}
              onChange={e =>
                setMode(e.target.value === "playoffs" ? "playoffs" : Number(e.target.value))
              }
              className="field mt-1.5 normal-case tracking-normal text-base font-medium"
            >
              <option value="playoffs">Playoffs</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(w =>
                <option key={w} value={w}>Week {w}</option>
              )}
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
            className="field mb-4 text-center font-medium"
          >
            {matchups.map((m, idx) => (
              <option key={idx} value={`${m.team1}vs${m.team2}`}>
                {m.team1} vs {m.team2}
              </option>
            ))}
          </select>
        ) : (
          <p className="text-neutral-500 mb-4 text-center">Loading matchups...</p>
        )}

        <input
          type="file"
          accept=".html"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full mb-6 text-sm text-neutral-400 file:mr-4 file:rounded-lg file:border-0 file:bg-neutral-800 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-neutral-100 hover:file:bg-neutral-700 file:cursor-pointer"
        />

        <button onClick={handleUpload} className="btn btn-primary w-full py-3">
          Upload Replay
        </button>
      </div>

      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => { localStorage.removeItem("staffLoggedIn"); router.push("/"); }}
          className="btn btn-secondary"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UploadReplay;