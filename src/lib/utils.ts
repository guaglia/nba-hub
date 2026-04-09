import { Game } from "./types";

export function formatRecord(wins: number, losses: number): string {
  return `${wins}-${losses}`;
}

export function getGameStatusLabel(game: Game): string {
  if (game.status === "live") return game.quarter || "LIVE";
  if (game.status === "final") return "FINAL";
  return game.gameTime || "TBD";
}

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
