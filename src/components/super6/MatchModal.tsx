"use client";

import { useState, useEffect } from "react";
import { Super6Game } from "@/lib/types";
import { getTeam } from "@/lib/data/teams";
import { recentGamesData, getH2H, super6Stats } from "@/lib/data/gamedata";
import { TeamLogo } from "@/components/ui/TeamLogo";
import { StatsBar } from "@/components/game/StatsBar";
import { ScoreSelector } from "./ScoreSelector";
import { cn } from "@/lib/utils";
import { ArrowLeft, Sparkles, Check } from "lucide-react";

interface MatchModalProps {
  game: Super6Game;
  awayScore: number;
  homeScore: number;
  onAwayScoreChange: (v: number) => void;
  onHomeScoreChange: (v: number) => void;
  onClose: () => void;
  onConfirm: () => void;
}

const detailTabs = ["Stats", "Forma", "H2H"] as const;

export function MatchModal({
  game,
  awayScore,
  homeScore,
  onAwayScoreChange,
  onHomeScoreChange,
  onClose,
  onConfirm,
}: MatchModalProps) {
  const [activeTab, setActiveTab] = useState<(typeof detailTabs)[number]>("Stats");
  const [showAI, setShowAI] = useState(false);
  const [initialScores] = useState({ away: awayScore, home: homeScore });
  const away = getTeam(game.awayTeam);
  const home = getTeam(game.homeTeam);
  const stats = super6Stats[game.id];
  const hasChanged = awayScore !== initialScores.away || homeScore !== initialScores.home;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const applyAIPrediction = () => {
    onAwayScoreChange(105);
    onHomeScoreChange(108);
    setShowAI(false);
  };

  const h2hGames = getH2H(game.awayTeam, game.homeTeam);
  const awayRecent = recentGamesData[game.awayTeam] || [];
  const homeRecent = recentGamesData[game.homeTeam] || [];

  return (
    <div className="fixed inset-0 z-50 bg-[var(--bg-primary)] flex flex-col max-w-[480px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-[var(--border-subtle)]">
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="font-bold text-base">
          {away.abbreviation} vs {home.abbreviation}
        </h1>
        {game.isFeatured && (
          <span className="text-[10px] font-bold text-[var(--accent-secondary)] bg-[var(--accent-secondary)]/10 px-2 py-0.5 rounded-full">
            DESTACADO
          </span>
        )}
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Prediction section */}
        <div className="px-4 py-5" style={{ background: "var(--gradient-featured)" }}>
          <p className="text-[13px] text-[var(--text-tertiary)] text-center mb-1">
            {game.gameDate}
          </p>
          {game.odds && (
            <p className="text-[11px] text-[var(--text-muted)] text-center mb-4">{game.odds}</p>
          )}

          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-1.5 flex-1">
              <TeamLogo abbrev={away.abbreviation} size={96} />
              <span className="text-[15px] font-bold">{away.city}</span>
              <span className="text-[13px] text-[var(--text-tertiary)]">{away.wins}-{away.losses}</span>
              <div className="mt-2">
                <ScoreSelector value={awayScore} onChange={onAwayScoreChange} isDefault={awayScore === 100} />
              </div>
            </div>

            <span className="text-[var(--text-muted)] text-lg font-bold">VS</span>

            <div className="flex flex-col items-center gap-1.5 flex-1">
              <TeamLogo abbrev={home.abbreviation} size={96} />
              <span className="text-[15px] font-bold">{home.city}</span>
              <span className="text-[13px] text-[var(--text-tertiary)]">{home.wins}-{home.losses}</span>
              <div className="mt-2">
                <ScoreSelector value={homeScore} onChange={onHomeScoreChange} isDefault={homeScore === 100} />
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-5 flex gap-2.5">
            {game.isFeatured && !showAI && (
              <button
                onClick={() => setShowAI(true)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)" }}
              >
                <Sparkles size={16} />
                Predecir con AI
              </button>
            )}
            <button
              disabled={!hasChanged}
              onClick={() => { onConfirm(); onClose(); }}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-opacity duration-300",
                hasChanged
                  ? "text-white opacity-100"
                  : "text-[var(--text-muted)] opacity-40"
              )}
              style={{ background: hasChanged ? "var(--gradient-cta)" : "var(--bg-tertiary)" }}
            >
              <Check size={16} />
              Confirmar
            </button>
          </div>
        </div>

        {/* AI Analysis section */}
        {showAI && (
          <div className="px-4 py-5 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-[var(--accent-secondary)]" />
              <h3 className="font-bold text-sm">Análisis de AI</h3>
            </div>

            {/* OKC analysis */}
            <div className="flex gap-3 mb-4">
              <div className="flex-shrink-0 pt-0.5">
                <TeamLogo abbrev="OKC" size={28} />
              </div>
              <div>
                <p className="text-xs font-bold mb-1" style={{ color: away.primaryColor }}>
                  {away.city} Thunder
                </p>
                <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed">
                  Llegan como el mejor equipo de la NBA con un récord de 63-16. Shai Gilgeous-Alexander lidera la ofensiva con un juego explosivo y el equipo tiene el mejor rating defensivo de la liga.
                </p>
              </div>
            </div>

            {/* BOS analysis */}
            <div className="flex gap-3 mb-4">
              <div className="flex-shrink-0 pt-0.5">
                <TeamLogo abbrev="BOS" size={28} />
              </div>
              <div>
                <p className="text-xs font-bold mb-1" style={{ color: home.primaryColor }}>
                  {home.city} Celtics
                </p>
                <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed">
                  Mantienen su fortaleza con un 54-25, liderados por Jayson Tatum y Jaylen Brown. Su experiencia de playoffs y el factor cancha en el TD Garden son su mayor ventaja.
                </p>
              </div>
            </div>

            {/* Key factor */}
            <div className="bg-[var(--bg-tertiary)] rounded-lg p-3 mb-4">
              <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed">
                <span className="font-bold text-white">Factor clave:</span> OKC tiene el mejor récord como visitante de la liga, pero Boston es casi invencible en casa con 32-7 esta temporada en el TD Garden.
              </p>
            </div>

            {/* Prediction box */}
            <div className="bg-[var(--bg-secondary)] rounded-lg p-3 border border-[var(--border-subtle)]">
              <p className="text-sm font-bold mb-1">📊 Predicción: Celtics 108 - Thunder 105</p>
              <p className="text-[11px] text-[var(--accent-secondary)] mb-3">Confianza: 62%</p>
              <button
                onClick={applyAIPrediction}
                className="w-full py-2 rounded-lg text-white font-bold text-xs"
                style={{ background: "var(--gradient-cta)" }}
              >
                Aplicar predicción
              </button>
            </div>
          </div>
        )}

        {/* Detail Tabs */}
        <div className="flex border-b border-[var(--border-subtle)]">
          {detailTabs.map((tab) => (
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

        {/* Tab content */}
        <div className="px-4 py-4 pb-28">
          {activeTab === "Stats" && stats && (
            <div>
              <StatsBar label="FG%" awayValue={stats.away.fieldGoalPct} homeValue={stats.home.fieldGoalPct} awayColor={away.primaryColor} homeColor={home.primaryColor} isPercentage />
              <StatsBar label="3PT%" awayValue={stats.away.threePointPct} homeValue={stats.home.threePointPct} awayColor={away.primaryColor} homeColor={home.primaryColor} isPercentage />
              <StatsBar label="REB" awayValue={stats.away.rebounds} homeValue={stats.home.rebounds} awayColor={away.primaryColor} homeColor={home.primaryColor} />
              <StatsBar label="AST" awayValue={stats.away.assists} homeValue={stats.home.assists} awayColor={away.primaryColor} homeColor={home.primaryColor} />
              <StatsBar label="STL" awayValue={stats.away.steals} homeValue={stats.home.steals} awayColor={away.primaryColor} homeColor={home.primaryColor} />
              <StatsBar label="BLK" awayValue={stats.away.blocks} homeValue={stats.home.blocks} awayColor={away.primaryColor} homeColor={home.primaryColor} />
              <StatsBar label="TO" awayValue={stats.away.turnovers} homeValue={stats.home.turnovers} awayColor={away.primaryColor} homeColor={home.primaryColor} />
              <StatsBar label="PIP" awayValue={stats.away.pointsInPaint} homeValue={stats.home.pointsInPaint} awayColor={away.primaryColor} homeColor={home.primaryColor} />
            </div>
          )}

          {activeTab === "Forma" && (
            <div className="space-y-6">
              {[{ team: away, recent: awayRecent }, { team: home, recent: homeRecent }].map(({ team, recent }) => {
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
              {h2hGames.length > 0 ? (
                <div className="space-y-2">
                  {h2hGames.map((h2h, i) => (
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
                </div>
              ) : (
                <p className="text-center text-[var(--text-tertiary)] py-8 text-sm">
                  No hay datos de enfrentamientos directos
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Sticky footer */}
      <div className="border-t border-[var(--border-subtle)] p-4 bg-[var(--bg-primary)] safe-bottom">
        <button
          disabled={!hasChanged}
          onClick={() => { onConfirm(); onClose(); }}
          className={cn(
            "w-full py-3.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300",
            hasChanged
              ? "text-white"
              : "text-[var(--text-muted)] opacity-40"
          )}
          style={{ background: hasChanged ? "var(--gradient-cta)" : "var(--bg-tertiary)" }}
        >
          <Check size={18} />
          Confirmar predicción
        </button>
      </div>
    </div>
  );
}
