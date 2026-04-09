"use client";

import { Super6Game } from "@/lib/types";
import { getTeam } from "@/lib/data/teams";
import { TeamLogo } from "@/components/ui/TeamLogo";
import { ChevronRight, Check, Star } from "lucide-react";

interface PredictionCardProps {
  game: Super6Game;
  awayScore: number;
  homeScore: number;
  isConfirmed: boolean;
  onClick: () => void;
}

export function PredictionCard({
  game,
  awayScore,
  homeScore,
  isConfirmed,
  onClick,
}: PredictionCardProps) {
  const home = getTeam(game.homeTeam);
  const away = getTeam(game.awayTeam);
  const hasEdited = awayScore !== 100 || homeScore !== 100;

  const bg = isConfirmed
    ? "rgba(34, 197, 94, 0.08)"
    : game.isFeatured
      ? "var(--gradient-featured)"
      : "var(--gradient-card)";

  const border = isConfirmed
    ? "1px solid rgba(34, 197, 94, 0.3)"
    : game.isFeatured
      ? "1px solid rgba(239, 68, 68, 0.3)"
      : "1px solid var(--border-subtle)";

  return (
    <div
      onClick={onClick}
      className="w-full rounded-md select-none text-left cursor-pointer transition-colors duration-300 overflow-hidden"
      style={{ background: bg, border }}
    >
      <div className="flex items-center p-3.5">
        {/* Away team */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <TeamLogo abbrev={away.abbreviation} size={56} />
          <div className="min-w-0">
            <p className="text-[15px] font-bold truncate">{away.abbreviation}</p>
            <p className="text-[13px] text-[var(--text-tertiary)]">{away.wins}-{away.losses}</p>
          </div>
        </div>

        {/* Center: score or time */}
        <div className="flex flex-col items-center px-3">
          {hasEdited ? (
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-lg font-bold text-white">{awayScore}</span>
              <span className="text-[var(--text-muted)] text-xs">-</span>
              <span className="font-mono text-lg font-bold text-white">{homeScore}</span>
            </div>
          ) : (
            <span className="text-[13px] text-[var(--text-tertiary)] font-medium">
              {game.gameDate}
            </span>
          )}
          {game.odds && !hasEdited && (
            <span className="text-[11px] text-[var(--text-muted)]">{game.odds}</span>
          )}
        </div>

        {/* Home team */}
        <div className="flex items-center gap-3 flex-1 min-w-0 justify-end">
          <div className="min-w-0 text-right">
            <p className="text-[15px] font-bold truncate">{home.abbreviation}</p>
            <p className="text-[13px] text-[var(--text-tertiary)]">{home.wins}-{home.losses}</p>
          </div>
          <TeamLogo abbrev={home.abbreviation} size={56} />
        </div>

        {/* Status indicator */}
        <div className="ml-2 flex-shrink-0">
          {isConfirmed ? (
            <div className="w-6 h-6 rounded-full bg-[var(--status-win)]/20 flex items-center justify-center">
              <Check size={14} className="text-[var(--status-win)]" />
            </div>
          ) : (
            <ChevronRight size={18} className="text-[var(--text-muted)]" />
          )}
        </div>
      </div>

      {game.isFeatured && (
        <div className="flex items-center justify-center gap-1.5 py-2 bg-[var(--accent-secondary)]">
          <Star size={12} className="text-white" fill="white" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-white">
            Partido Destacado
          </span>
        </div>
      )}
    </div>
  );
}
