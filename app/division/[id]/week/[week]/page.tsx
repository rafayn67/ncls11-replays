"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

type Team = { name: string; abv: string; division: number };
type Matchup = { team1: string; team2: string };

export default function WeekPage() {
  const params = useParams();
  const { id: division, week } = params;

  const [loading, setLoading] = useState(true);
  const [matchups, setMatchups] = useState<Matchup[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [existingFiles, setExistingFiles] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      // 1️⃣ Fetch matchups for this division and week
      const { data: matchupData, error: matchupError } = await supabase
        .from("matchups")
        .select("team1, team2")
        .eq("division", division)
        .eq("week", week);

      if (matchupError || !matchupData) {
        console.error("Failed to load matchups:", matchupError);
        setMatchups([]);
      } else {
        setMatchups(matchupData);
      }

      // 2️⃣ Fetch all teams in this division to get abbreviations
      const { data: teamsData, error: teamsError } = await supabase
        .from("teams")
        .select("name, abv, division")
        .eq("division", division);

      if (teamsError || !teamsData) {
        console.error("Failed to load teams:", teamsError);
        setTeams([]);
      } else {
        setTeams(teamsData);
      }

      // 3️⃣ Check which replay files exist
      const { data: filesData, error: filesError } = await supabase
        .storage
        .from("replays")
        .list(`d${division}/w${week}`);

      if (filesError || !filesData) {
        console.warn("No files found or error:", filesError);
        setExistingFiles([]);
      } else {
        setExistingFiles(filesData.map(f => f.name));
      }

      setLoading(false);
    };

    loadData();
  }, [division, week]);

  const getAbv = (teamName: string) => teams.find(t => t.name === teamName)?.abv || "";

  const fileExists = (team1Abv: string, team2Abv: string) => {
    return existingFiles.includes(`${team1Abv}vs${team2Abv}.html`) ||
           existingFiles.includes(`${team2Abv}vs${team1Abv}.html`);
  };

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
      ) : matchups.length === 0 ? (
        <p className="text-gray-300">No matchups found for this week.</p>
      ) : (
        <div className="w-full max-w-md flex flex-col gap-3">
          {matchups.map((m, idx) => {
            const team1Abv = getAbv(m.team1);
            const team2Abv = getAbv(m.team2);
            const url = `/d${division}/${week === "playoffs" ? "playoffs" : `w${week}`}/${team1Abv}vs${team2Abv}`;
            const disabled = !fileExists(team1Abv, team2Abv);

            return (
              <button
                key={idx}
                disabled={disabled}
                onClick={() => !disabled && window.location.assign(url)}
                className={`flex justify-center px-10 font-semibold p-3 rounded-lg shadow-md text-center transition-transform transform
                  ${disabled
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white hover:-translate-y-0.5 cursor-pointer"
                  }`}
              >
                {m.team1} vs {m.team2}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}