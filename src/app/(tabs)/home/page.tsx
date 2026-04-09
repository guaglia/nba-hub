import Link from "next/link";
import { games } from "@/lib/data/games";
import { eastStandings, westStandings } from "@/lib/data/standings";
import { GameCard } from "@/components/game/GameCard";
import { GameCardCompact } from "@/components/game/GameCardCompact";
import { ChevronRight } from "lucide-react";

export default function HomePage() {
  const liveGames = games.filter((g) => g.status === "live");
  const finalGames = games.filter((g) => g.status === "final");
  const upcomingGames = games.filter((g) => g.status === "upcoming");

  return (
    <div className="px-4 pt-6">
      {/* Hero Card */}
      <Link
        href="/tutor"
        className="block relative rounded-xl overflow-hidden mb-6 select-none"
        style={{ height: 300 }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://tutores-ai-alpha.vercel.app/_next/image?url=%2Ftutors%2Fdomingo-nba.png&w=3840&q=75"
          alt="Domingo — Experto NBA"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Gradient overlay — stronger bottom blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/5 via-40% to-black/90" />
        <div className="absolute bottom-0 left-0 right-0 h-[55%] backdrop-blur-[2px]" style={{ mask: "linear-gradient(to bottom, transparent, black 60%)", WebkitMask: "linear-gradient(to bottom, transparent, black 60%)" }} />

        {/* Top bar — app name + date + avatar */}
        <div className="relative z-10 flex items-center justify-between p-4">
          <div>
            <h1 className="text-[20px] font-extrabold text-white leading-none">NBA Hub</h1>
            <p className="text-[12px] text-white/60 mt-0.5">Martes, 8 de abril 2026</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-sm border border-white/20">
            👤
          </div>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <p className="text-[13px] text-white/50 font-medium mb-0.5">Tu experto NBA</p>
          <h2 className="text-[22px] font-extrabold text-white leading-tight mb-3">
            Preguntale a Domingo
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
            <span className="text-[13px] font-semibold text-white">Hablar con Domingo</span>
            <ChevronRight size={16} className="text-white/70" />
          </div>
        </div>
      </Link>

      {/* Live Games */}
      {liveGames.length > 0 && (
        <section className="mb-6">
          <h2 className="text-[15px] font-bold mb-3 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--status-live)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--status-live)]" />
            </span>
            En Vivo
          </h2>
          <div className="space-y-3">
            {liveGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      )}

      {/* Final Games */}
      {finalGames.length > 0 && (
        <section className="mb-6">
          <h2 className="text-[15px] font-bold mb-3">Resultados de Hoy</h2>
          <div className="space-y-3">
            {finalGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      )}

      {/* Upcoming Games */}
      {upcomingGames.length > 0 && (
        <section className="mb-6">
          <h2 className="text-[15px] font-bold mb-3">Próximos</h2>
          <div className="space-y-2">
            {upcomingGames.map((game) => (
              <GameCardCompact key={game.id} game={game} />
            ))}
          </div>
        </section>
      )}

      {/* Mini Standings */}
      <section className="mb-6">
        <h2 className="text-[15px] font-bold mb-3">Standings</h2>
        <div className="grid grid-cols-2 gap-3">
          <StandingsCard title="Este" teams={eastStandings.slice(0, 5)} />
          <StandingsCard title="Oeste" teams={westStandings.slice(0, 5)} />
        </div>
      </section>
    </div>
  );
}

function StandingsCard({
  title,
  teams,
}: {
  title: string;
  teams: { abbreviation: string; wins: number; losses: number; seed: number }[];
}) {
  return (
    <div className="rounded-md bg-[var(--bg-secondary)] p-3">
      <h3 className="text-[11px] font-bold uppercase tracking-wide text-[var(--text-tertiary)] mb-2">
        {title}
      </h3>
      <div className="space-y-1.5">
        {teams.map((team) => (
          <div key={team.abbreviation} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[var(--text-muted)] w-4">{team.seed}</span>
              <span className="text-[13px] font-semibold">{team.abbreviation}</span>
            </div>
            <span className="text-[12px] text-[var(--text-secondary)] font-mono">
              {team.wins}-{team.losses}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
