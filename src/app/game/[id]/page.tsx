"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { games } from "@/lib/data/games";
import { getTeam } from "@/lib/data/teams";
import { TeamLogo } from "@/components/ui/TeamLogo";
import { Badge } from "@/components/ui/Badge";
import { StatsBar } from "@/components/game/StatsBar";
import { getGameStatusLabel, cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { recentGamesData, getH2H } from "@/lib/data/gamedata";

const tabs = ["Stats", "Forma", "H2H"] as const;

export default function GameDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Stats");

  const game = games.find((g) => g.id === params.id);
  if (!game) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-[var(--text-secondary)]">Partido no encontrado</p>
      </div>
    );
  }

  const home = getTeam(game.homeTeam);
  const away = getTeam(game.awayTeam);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-6 mb-4">
        <button
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="font-bold text-lg">Game Detail</h1>
      </div>

      {/* Score Header */}
      <div className="px-4 py-6 text-center" style={{ background: "var(--gradient-featured)" }}>
        <Badge variant={game.status} label={getGameStatusLabel(game)} />

        <div className="flex items-center justify-center gap-6 mt-4 mb-3">
          <div className="flex flex-col items-center gap-1">
            <TeamLogo abbrev={away.abbreviation} size={56} />
            <span className="text-[13px] font-bold">{away.abbreviation}</span>
            <span className="text-[11px] text-[var(--text-tertiary)]">
              {away.wins}-{away.losses}
            </span>
          </div>

          {game.status !== "upcoming" ? (
            <div className="flex items-center gap-3">
              <span className={cn(
                "font-mono text-[48px] font-extrabold leading-none",
                game.awayScore > game.homeScore ? "text-white" : "text-[var(--text-secondary)]"
              )}>
                {game.awayScore}
              </span>
              <span className="text-[var(--text-muted)] text-2xl">-</span>
              <span className={cn(
                "font-mono text-[48px] font-extrabold leading-none",
                game.homeScore > game.awayScore ? "text-white" : "text-[var(--text-secondary)]"
              )}>
                {game.homeScore}
              </span>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--status-upcoming)]">VS</p>
              <p className="text-[13px] text-[var(--text-tertiary)] mt-1">{game.gameTime}</p>
            </div>
          )}

          <div className="flex flex-col items-center gap-1">
            <TeamLogo abbrev={home.abbreviation} size={56} />
            <span className="text-[13px] font-bold">{home.abbreviation}</span>
            <span className="text-[11px] text-[var(--text-tertiary)]">
              {home.wins}-{home.losses}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[var(--border-subtle)]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 py-3 text-sm font-semibold text-center transition-colors",
              activeTab === tab
                ? "text-[var(--accent-primary)] border-b-2 border-[var(--accent-primary)]"
                : "text-[var(--text-tertiary)]"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="px-4 py-4">
        {activeTab === "Stats" && game.stats && (
          <div>
            <StatsBar label="FG%" awayValue={game.stats.away.fieldGoalPct} homeValue={game.stats.home.fieldGoalPct} awayColor={away.primaryColor} homeColor={home.primaryColor} isPercentage />
            <StatsBar label="3PT%" awayValue={game.stats.away.threePointPct} homeValue={game.stats.home.threePointPct} awayColor={away.primaryColor} homeColor={home.primaryColor} isPercentage />
            <StatsBar label="REB" awayValue={game.stats.away.rebounds} homeValue={game.stats.home.rebounds} awayColor={away.primaryColor} homeColor={home.primaryColor} />
            <StatsBar label="AST" awayValue={game.stats.away.assists} homeValue={game.stats.home.assists} awayColor={away.primaryColor} homeColor={home.primaryColor} />
            <StatsBar label="STL" awayValue={game.stats.away.steals} homeValue={game.stats.home.steals} awayColor={away.primaryColor} homeColor={home.primaryColor} />
            <StatsBar label="BLK" awayValue={game.stats.away.blocks} homeValue={game.stats.home.blocks} awayColor={away.primaryColor} homeColor={home.primaryColor} />
            <StatsBar label="TO" awayValue={game.stats.away.turnovers} homeValue={game.stats.home.turnovers} awayColor={away.primaryColor} homeColor={home.primaryColor} />
            <StatsBar label="PIP" awayValue={game.stats.away.pointsInPaint} homeValue={game.stats.home.pointsInPaint} awayColor={away.primaryColor} homeColor={home.primaryColor} />
          </div>
        )}

        {activeTab === "Stats" && !game.stats && (
          <p className="text-center text-[var(--text-tertiary)] py-8 text-sm">
            Las estadísticas estarán disponibles cuando comience el partido
          </p>
        )}

        {activeTab === "Forma" && (
          <div className="space-y-6">
            {[away, home].map((team) => {
              const recent = recentGamesData[team.abbreviation] || [];
              const streak = recent.length > 0
                ? (() => {
                    const first = recent[0].result;
                    let count = 0;
                    for (const g of recent) {
                      if (g.result === first) count++;
                      else break;
                    }
                    return `${first}${count}`;
                  })()
                : "";

              return (
                <div key={team.abbreviation}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <TeamLogo abbrev={team.abbreviation} size={24} />
                      <span className="font-bold text-sm">{team.city}</span>
                    </div>
                    {streak && (
                      <span className={cn(
                        "text-xs font-bold px-2 py-0.5 rounded-full",
                        streak.startsWith("W")
                          ? "bg-[var(--status-win)]/15 text-[var(--status-win)]"
                          : "bg-[var(--status-loss)]/15 text-[var(--status-loss)]"
                      )}>
                        Racha: {streak}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {recent.map((g, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex-1 rounded-lg p-2 text-center",
                          g.result === "W" ? "bg-[var(--status-win)]/10" : "bg-[var(--status-loss)]/10"
                        )}
                      >
                        <span className={cn(
                          "text-xs font-bold",
                          g.result === "W" ? "text-[var(--status-win)]" : "text-[var(--status-loss)]"
                        )}>
                          {g.result}
                        </span>
                        <p className="text-[10px] text-[var(--text-tertiary)] mt-0.5">{g.score}</p>
                        <p className="text-[9px] text-[var(--text-muted)]">vs {g.opponent}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "H2H" && (
          <div>
            <h3 className="text-sm font-bold mb-3">Últimos 3 enfrentamientos</h3>
            <div className="space-y-2">
              {getH2H(game.awayTeam, game.homeTeam).map((h2h, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-[var(--bg-secondary)] rounded-md px-4 py-3"
                >
                  <span className="text-[11px] text-[var(--text-tertiary)] w-14">{h2h.date}</span>
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "text-sm font-bold",
                      h2h.awayScore > h2h.homeScore ? "text-white" : "text-[var(--text-secondary)]"
                    )}>
                      {h2h.awayTeam} {h2h.awayScore}
                    </span>
                    <span className="text-[var(--text-muted)]">-</span>
                    <span className={cn(
                      "text-sm font-bold",
                      h2h.homeScore > h2h.awayScore ? "text-white" : "text-[var(--text-secondary)]"
                    )}>
                      {h2h.homeScore} {h2h.homeTeam}
                    </span>
                  </div>
                  <span className="w-14" />
                </div>
              ))}
              {getH2H(game.awayTeam, game.homeTeam).length === 0 && (
                <p className="text-center text-[var(--text-tertiary)] py-8 text-sm">
                  No hay datos de enfrentamientos directos
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
