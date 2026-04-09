import Link from "next/link";
import { Game } from "@/lib/types";
import { getTeam } from "@/lib/data/teams";
import { TeamLogo } from "@/components/ui/TeamLogo";

export function GameCardCompact({ game }: { game: Game }) {
  const home = getTeam(game.homeTeam);
  const away = getTeam(game.awayTeam);

  return (
    <Link
      href={`/game/${game.id}`}
      className="flex items-center justify-between rounded-md px-4 py-3 bg-[var(--bg-secondary)] select-none"
    >
      <div className="flex items-center gap-2.5">
        <TeamLogo abbrev={away.abbreviation} size={28} />
        <span className="font-semibold text-sm">{away.abbreviation}</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-[11px] text-[var(--text-tertiary)] font-medium">
          {game.gameTime}
        </span>
        <span className="text-[var(--status-upcoming)] text-xs font-bold">VS</span>
      </div>

      <div className="flex items-center gap-2.5">
        <span className="font-semibold text-sm">{home.abbreviation}</span>
        <TeamLogo abbrev={home.abbreviation} size={28} />
      </div>
    </Link>
  );
}
