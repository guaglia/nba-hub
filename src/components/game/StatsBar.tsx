interface StatsBarProps {
  label: string;
  awayValue: number;
  homeValue: number;
  awayColor: string;
  homeColor: string;
  isPercentage?: boolean;
}

export function StatsBar({ label, awayValue, homeValue, awayColor, homeColor, isPercentage }: StatsBarProps) {
  const total = awayValue + homeValue;
  const awayPct = total > 0 ? (awayValue / total) * 100 : 50;
  const homePct = 100 - awayPct;

  const display = (v: number) => isPercentage ? `${v.toFixed(1)}%` : v.toString();

  return (
    <div className="py-2.5">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-bold text-[var(--text-primary)] w-14 text-left">
          {display(awayValue)}
        </span>
        <span className="text-[11px] font-medium text-[var(--text-tertiary)] uppercase tracking-wide">
          {label}
        </span>
        <span className="text-sm font-bold text-[var(--text-primary)] w-14 text-right">
          {display(homeValue)}
        </span>
      </div>
      <div className="flex h-1.5 rounded-full overflow-hidden gap-0.5">
        <div
          className="rounded-full transition-all duration-500"
          style={{ width: `${awayPct}%`, backgroundColor: awayColor }}
        />
        <div
          className="rounded-full transition-all duration-500"
          style={{ width: `${homePct}%`, backgroundColor: homeColor }}
        />
      </div>
    </div>
  );
}
