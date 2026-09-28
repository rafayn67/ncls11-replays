"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type BracketRow = {
  matchup: string;
  team1: string | null;
  team1_seed: number | null;
  team2: string | null;
  team2_seed: number | null;
};

type TeamMap = Record<string, string>;

export default function PlayoffsPage() {
  const { id } = useParams<{ id: string }>();
  const division = Number(id);

  const [bracket, setBracket] = useState<Record<string, BracketRow>>({});
  const [abvMap, setAbvMap] = useState<TeamMap>({});
  const [existingFiles, setExistingFiles] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      // Load bracket
      const { data: bracketData } = await supabase
        .from("bracket")
        .select("matchup, team1, team1_seed, team2, team2_seed")
        .eq("division", division);

      const map: Record<string, BracketRow> = {};
      bracketData?.forEach(b => (map[b.matchup] = b));
      setBracket(map);

      // Load team abbreviations
      const { data: teams } = await supabase
        .from("teams")
        .select("name, abv")
        .eq("division", division);

      const abvs: TeamMap = {};
      teams?.forEach(t => (abvs[t.name] = t.abv));
      setAbvMap(abvs);

      // Load replay files
      const { data: files } = await supabase.storage
        .from("replays")
        .list(`d${division}/playoffs`);

      setExistingFiles(files?.map(f => f.name) || []);
    };

    load();
  }, [division]);

  const fileExists = (a?: string | null, b?: string | null) => {
    if (!a || !b) return false;

    const abvA = abvMap[a];
    const abvB = abvMap[b];

    if (!abvA || !abvB) return false;

    return (
      existingFiles.includes(`${abvA}vs${abvB}.html`) ||
      existingFiles.includes(`${abvB}vs${abvA}.html`)
    );
  };

  function Matchup({ slot }: { slot: string }) {
    const row = bracket[slot];
    if (!row) return null;

    const disabled = !fileExists(row.team1, row.team2);

    const url =
      row.team1 && row.team2
        ? `/d${division}/playoffs/${abvMap[row.team1]}vs${abvMap[row.team2]}`
        : "";

    return (
      <button
        disabled={disabled}
        onClick={() => !disabled && window.location.assign(url)}
        className={`tile min-h-12 !px-3 grid grid-cols-[1.5rem_1fr_1.5rem] items-center
          ${disabled ? "tile-off" : "tile-on"}`}
      >
        <div className="text-xs font-normal text-neutral-500 text-left">{row.team1_seed ?? ""}</div>

        <div className="text-center">
          {row.team1 ?? ""} {row.team1 && row.team2 ? "vs" : ""} {row.team2 ?? ""}
        </div>

        <div className="text-xs font-normal text-neutral-500 text-right">{row.team2_seed ?? ""}</div>
      </button>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 pt-20">
      <div className="absolute top-4 left-4">
        <a href={`/division/${id}`} className="btn-back">
          ← Back
        </a>
      </div>

      <h1 className="page-title mb-10 text-center">
        Division {division} Playoffs
      </h1>

      <div className="max-w-5xl mx-auto">
        {/* Play-In */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <h2 className="section-title">Play-In</h2>
          <div></div>
          <div></div>
          <Matchup slot="0a" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Round 1 */}
          <div className="space-y-3">
            <h2 className="section-title">Round 1</h2>
            <Matchup slot="1a" />
            <Matchup slot="1b" />
            <Matchup slot="1c" />
          </div>

          {/* Semis */}
          <div className="space-y-3">
            <h2 className="section-title">Semis</h2>
            <Matchup slot="2a" />
            <Matchup slot="2b" />
          </div>

          {/* Final */}
          <div className="space-y-3">
            <h2 className="section-title">Final</h2>
            <Matchup slot="3a" />
          </div>

        </div>
      </div>
    </div>
  );
}