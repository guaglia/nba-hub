import { cn } from "@/lib/utils";

interface BadgeProps {
  variant: "live" | "final" | "upcoming";
  label?: string;
}

export function Badge({ variant, label }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide",
        variant === "live" &&
          "bg-[var(--status-win)]/15 text-[var(--status-win)]",
        variant === "final" &&
          "bg-white/10 text-[var(--text-secondary)]",
        variant === "upcoming" &&
          "bg-[var(--status-upcoming)]/15 text-[var(--status-upcoming)]"
      )}
    >
      {variant === "live" && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--status-win)] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--status-win)]" />
        </span>
      )}
      {label || (variant === "live" ? "LIVE" : variant === "final" ? "FINAL" : "")}
    </span>
  );
}
