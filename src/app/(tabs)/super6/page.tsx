"use client";

import { useState } from "react";
import { super6Games, leaderboard } from "@/lib/data/super6";
import { PredictionCard } from "@/components/super6/PredictionCard";
import { MatchModal } from "@/components/super6/MatchModal";
import { Leaderboard } from "@/components/super6/Leaderboard";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const pageTabs = ["Partidos", "Leaderboard"] as const;

export default function Super6Page() {
  const [activeTab, setActiveTab] = useState<(typeof pageTabs)[number]>("Partidos");
  const [predictions, setPredictions] = useState<Record<string, { away: number; home: number }>>(
    () => Object.fromEntries(super6Games.map((g) => [g.id, { away: 100, home: 100 }]))
  );
  const [confirmedGames, setConfirmedGames] = useState<Set<string>>(new Set());
  const [openGameId, setOpenGameId] = useState<string | null>(null);

  const setScore = (gameId: string, side: "away" | "home", value: number) => {
    setPredictions((prev) => ({
      ...prev,
      [gameId]: { ...prev[gameId], [side]: value },
    }));
  };

  const confirmGame = (gameId: string) => {
    setConfirmedGames((prev) => new Set(prev).add(gameId));
  };

  const currentUser = leaderboard.find((e) => e.isCurrentUser);
  const openGame = openGameId ? super6Games.find((g) => g.id === openGameId) : null;

  return (
    <>
      <div className="px-4 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Trophy size={22} className="text-[var(--accent-secondary)]" />
            <h1 className="text-2xl font-extrabold">Super6</h1>
          </div>
          {currentUser && (
            <span className="px-3 py-1 rounded-full bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] text-sm font-bold">
              {currentUser.points} pts
            </span>
          )}
        </div>

        {/* Internal tabs */}
        <div className="flex rounded-lg bg-[var(--bg-secondary)] p-1 mb-5">
          {pageTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 py-2 text-sm font-semibold rounded-md transition-colors",
                activeTab === tab
                  ? "bg-[var(--bg-tertiary)] text-white"
                  : "text-[var(--text-tertiary)]"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Partidos tab */}
        {activeTab === "Partidos" && (
          <>
            <p className="text-[13px] text-[var(--text-secondary)] mb-4">
              Predice los resultados de los 6 partidos de la semana.
            </p>
            <div className="space-y-2.5">
              {super6Games.map((game) => (
                <PredictionCard
                  key={game.id}
                  game={game}
                  awayScore={predictions[game.id].away}
                  homeScore={predictions[game.id].home}
                  isConfirmed={confirmedGames.has(game.id)}
                  onClick={() => setOpenGameId(game.id)}
                />
              ))}
            </div>
          </>
        )}

        {/* Leaderboard tab */}
        {activeTab === "Leaderboard" && (
          <Leaderboard entries={leaderboard} />
        )}
      </div>

      {/* Match Modal */}
      {openGame && (
        <MatchModal
          game={openGame}
          awayScore={predictions[openGame.id].away}
          homeScore={predictions[openGame.id].home}
          onAwayScoreChange={(v) => setScore(openGame.id, "away", v)}
          onHomeScoreChange={(v) => setScore(openGame.id, "home", v)}
          onClose={() => setOpenGameId(null)}
          onConfirm={() => confirmGame(openGame.id)}
        />
      )}
    </>
  );
}
