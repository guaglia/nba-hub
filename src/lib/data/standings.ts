import { teams } from "./teams";

export const eastStandings = teams
  .filter((t) => t.conference === "East")
  .sort((a, b) => a.seed - b.seed);

export const westStandings = teams
  .filter((t) => t.conference === "West")
  .sort((a, b) => a.seed - b.seed);
