import { LeaderboardEntry } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Leaderboard({ entries }: { entries: LeaderboardEntry[] }) {
  return (
    <div className="space-y-1">
      {entries.map((entry) => (
        <div
          key={entry.rank}
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-md",
            entry.isCurrentUser
              ? "bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20"
              : "bg-[var(--bg-secondary)]"
          )}
        >
          <span
            className={cn(
              "w-7 text-center font-bold text-sm",
              entry.rank <= 3
                ? "text-[var(--accent-secondary)]"
                : "text-[var(--text-tertiary)]"
            )}
          >
            {entry.rank}
          </span>
          <span className="text-lg">{entry.avatar}</span>
          <div className="flex-1 min-w-0">
            <p className={cn(
              "text-sm font-semibold truncate",
              entry.isCurrentUser && "text-[var(--accent-primary)]"
            )}>
              {entry.displayName}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold">{entry.points} pts</p>
            <p className="text-[10px] text-[var(--status-win)]">+{entry.weeklyPoints}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
