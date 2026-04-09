import Link from "next/link";
import { Game } from "@/lib/types";
import { getTeam } from "@/lib/data/teams";
import { TeamLogo } from "@/components/ui/TeamLogo";
import { Badge } from "@/components/ui/Badge";
import { getGameStatusLabel } from "@/lib/utils";

export function GameCard({ game }: { game: Game }) {
  const home = getTeam(game.homeTeam);
  const away = getTeam(game.awayTeam);
  const isLive = game.status === "live";
  const isFinal = game.status === "final";
  const hasScore = isLive || isFinal;

  return (
    <Link
      href={`/game/${game.id}`}
      className="block rounded-md p-4 select-none"
      style={{ background: isLive ? "var(--gradient-featured)" : "var(--gradient-card)" }}
    >
      <div className={`flex items-center mb-3 ${isLive ? "justify-center" : "justify-between"}`}>
        <Badge
          variant={game.status}
          label={getGameStatusLabel(game)}
        />
        {game.status === "upcoming" && (
          <span className="text-[11px] text-[var(--text-tertiary)]">
            {game.gameTime}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        {/* Away team */}
        <div className="flex items-center gap-3 flex-1">
          <TeamLogo abbrev={away.abbreviation} size={56} />
          <div>
            {hasScore && (
              <p className={`font-mono text-[24px] font-bold leading-none mb-0.5 ${game.awayScore > game.homeScore ? "text-white" : "text-[var(--text-secondary)]"}`}>
                {game.awayScore}
              </p>
            )}
            <p className="font-bold text-[15px] text-[var(--text-primary)]">
              {away.city}
            </p>
            <p className="text-[13px] text-[var(--text-tertiary)]">
              {away.wins}-{away.losses}
            </p>
          </div>
        </div>

        {hasScore ? (
          <span className="text-[var(--text-muted)] text-sm font-mono px-1">-</span>
        ) : (
          <span className="text-sm font-semibold text-[var(--status-upcoming)]">
            VS
          </span>
        )}

        {/* Home team */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          <div className="text-right">
            {hasScore && (
              <p className={`font-mono text-[24px] font-bold leading-none mb-0.5 ${game.homeScore > game.awayScore ? "text-white" : "text-[var(--text-secondary)]"}`}>
                {game.homeScore}
              </p>
            )}
            <p className="font-bold text-[15px] text-[var(--text-primary)]">
              {home.city}
            </p>
            <p className="text-[13px] text-[var(--text-tertiary)]">
              {home.wins}-{home.losses}
            </p>
          </div>
          <TeamLogo abbrev={home.abbreviation} size={56} />
        </div>
      </div>
    </Link>
  );
}
