import { RecentGame, HeadToHead, GameStats } from "@/lib/types";

export const recentGamesData: Record<string, RecentGame[]> = {
  OKC: [
    { opponent: "LAL", result: "W", score: "118-105", date: "Apr 6" },
    { opponent: "DEN", result: "W", score: "112-108", date: "Apr 4" },
    { opponent: "PHX", result: "W", score: "121-99", date: "Apr 2" },
    { opponent: "HOU", result: "L", score: "105-110", date: "Mar 31" },
    { opponent: "MIN", result: "W", score: "115-102", date: "Mar 29" },
  ],
  BOS: [
    { opponent: "NYK", result: "W", score: "108-101", date: "Apr 6" },
    { opponent: "MIA", result: "W", score: "115-108", date: "Apr 4" },
    { opponent: "DET", result: "L", score: "98-105", date: "Apr 2" },
    { opponent: "CLE", result: "W", score: "112-104", date: "Mar 31" },
    { opponent: "PHI", result: "L", score: "101-106", date: "Mar 29" },
  ],
  SAS: [
    { opponent: "LAL", result: "W", score: "110-102", date: "Apr 6" },
    { opponent: "PHX", result: "W", score: "118-110", date: "Apr 4" },
    { opponent: "GSW", result: "W", score: "125-108", date: "Apr 2" },
    { opponent: "DEN", result: "L", score: "105-112", date: "Mar 31" },
    { opponent: "HOU", result: "W", score: "108-100", date: "Mar 29" },
  ],
  DEN: [
    { opponent: "MIN", result: "W", score: "110-105", date: "Apr 6" },
    { opponent: "LAC", result: "L", score: "98-104", date: "Apr 4" },
    { opponent: "OKC", result: "L", score: "108-112", date: "Apr 2" },
    { opponent: "SAS", result: "W", score: "112-105", date: "Mar 31" },
    { opponent: "POR", result: "W", score: "120-108", date: "Mar 29" },
  ],
  NYK: [
    { opponent: "BOS", result: "L", score: "101-108", date: "Apr 6" },
    { opponent: "ATL", result: "W", score: "115-109", date: "Apr 4" },
    { opponent: "CHA", result: "W", score: "118-105", date: "Apr 2" },
    { opponent: "DET", result: "L", score: "95-103", date: "Mar 31" },
    { opponent: "ORL", result: "W", score: "108-102", date: "Mar 29" },
  ],
  DET: [
    { opponent: "CLE", result: "W", score: "108-102", date: "Apr 6" },
    { opponent: "MIL", result: "W", score: "115-98", date: "Apr 4" },
    { opponent: "BOS", result: "W", score: "105-98", date: "Apr 2" },
    { opponent: "NYK", result: "W", score: "103-95", date: "Mar 31" },
    { opponent: "ATL", result: "L", score: "100-108", date: "Mar 29" },
  ],
  LAL: [
    { opponent: "PHX", result: "W", score: "115-108", date: "Apr 6" },
    { opponent: "SAS", result: "L", score: "102-110", date: "Apr 4" },
    { opponent: "GSW", result: "W", score: "121-115", date: "Apr 2" },
    { opponent: "LAC", result: "W", score: "108-102", date: "Mar 31" },
    { opponent: "OKC", result: "L", score: "105-118", date: "Mar 29" },
  ],
  MIN: [
    { opponent: "DEN", result: "L", score: "105-110", date: "Apr 6" },
    { opponent: "POR", result: "W", score: "118-102", date: "Apr 4" },
    { opponent: "HOU", result: "W", score: "112-108", date: "Apr 2" },
    { opponent: "GSW", result: "W", score: "108-100", date: "Mar 31" },
    { opponent: "OKC", result: "L", score: "102-115", date: "Mar 29" },
  ],
  CLE: [
    { opponent: "DET", result: "L", score: "102-108", date: "Apr 6" },
    { opponent: "ORL", result: "W", score: "110-102", date: "Apr 4" },
    { opponent: "MIA", result: "W", score: "118-112", date: "Apr 2" },
    { opponent: "BOS", result: "L", score: "104-112", date: "Mar 31" },
    { opponent: "CHI", result: "W", score: "115-105", date: "Mar 29" },
  ],
  ATL: [
    { opponent: "MIA", result: "W", score: "112-105", date: "Apr 6" },
    { opponent: "NYK", result: "L", score: "109-115", date: "Apr 4" },
    { opponent: "ORL", result: "W", score: "108-100", date: "Apr 2" },
    { opponent: "DET", result: "W", score: "108-100", date: "Mar 31" },
    { opponent: "CHA", result: "L", score: "102-108", date: "Mar 29" },
  ],
};

export const h2hData: Record<string, HeadToHead[]> = {
  "OKC-BOS": [
    { date: "Jan 15", homeTeam: "OKC", awayTeam: "BOS", homeScore: 115, awayScore: 108 },
    { date: "Dec 3", homeTeam: "BOS", awayTeam: "OKC", homeScore: 122, awayScore: 118 },
    { date: "Oct 28", homeTeam: "OKC", awayTeam: "BOS", homeScore: 105, awayScore: 110 },
  ],
  "SAS-DEN": [
    { date: "Feb 10", homeTeam: "SAS", awayTeam: "DEN", homeScore: 118, awayScore: 112 },
    { date: "Dec 18", homeTeam: "DEN", awayTeam: "SAS", homeScore: 110, awayScore: 105 },
    { date: "Nov 5", homeTeam: "SAS", awayTeam: "DEN", homeScore: 108, awayScore: 115 },
  ],
  "NYK-DET": [
    { date: "Mar 1", homeTeam: "NYK", awayTeam: "DET", homeScore: 102, awayScore: 108 },
    { date: "Jan 22", homeTeam: "DET", awayTeam: "NYK", homeScore: 110, awayScore: 105 },
    { date: "Nov 15", homeTeam: "NYK", awayTeam: "DET", homeScore: 115, awayScore: 112 },
  ],
  "LAL-MIN": [
    { date: "Feb 20", homeTeam: "LAL", awayTeam: "MIN", homeScore: 112, awayScore: 108 },
    { date: "Jan 8", homeTeam: "MIN", awayTeam: "LAL", homeScore: 105, awayScore: 110 },
    { date: "Nov 20", homeTeam: "LAL", awayTeam: "MIN", homeScore: 98, awayScore: 105 },
  ],
  "CLE-ATL": [
    { date: "Mar 5", homeTeam: "CLE", awayTeam: "ATL", homeScore: 118, awayScore: 110 },
    { date: "Jan 12", homeTeam: "ATL", awayTeam: "CLE", homeScore: 108, awayScore: 112 },
    { date: "Nov 8", homeTeam: "CLE", awayTeam: "ATL", homeScore: 105, awayScore: 102 },
  ],
  "OKC-LAL": [
    { date: "Mar 10", homeTeam: "OKC", awayTeam: "LAL", homeScore: 118, awayScore: 105 },
    { date: "Jan 25", homeTeam: "LAL", awayTeam: "OKC", homeScore: 108, awayScore: 115 },
    { date: "Dec 10", homeTeam: "OKC", awayTeam: "LAL", homeScore: 112, awayScore: 108 },
  ],
};

export const super6Stats: Record<string, GameStats> = {
  "s6-1": {
    away: { fieldGoalPct: 49.2, threePointPct: 38.5, rebounds: 44, assists: 26, steals: 8, blocks: 5, turnovers: 12, pointsInPaint: 48 },
    home: { fieldGoalPct: 47.8, threePointPct: 36.2, rebounds: 42, assists: 24, steals: 7, blocks: 4, turnovers: 11, pointsInPaint: 42 },
  },
  "s6-2": {
    away: { fieldGoalPct: 48.5, threePointPct: 37.1, rebounds: 46, assists: 28, steals: 7, blocks: 6, turnovers: 11, pointsInPaint: 50 },
    home: { fieldGoalPct: 46.2, threePointPct: 35.8, rebounds: 43, assists: 25, steals: 6, blocks: 4, turnovers: 13, pointsInPaint: 44 },
  },
  "s6-3": {
    away: { fieldGoalPct: 47.5, threePointPct: 35.2, rebounds: 40, assists: 24, steals: 6, blocks: 3, turnovers: 12, pointsInPaint: 44 },
    home: { fieldGoalPct: 46.8, threePointPct: 36.5, rebounds: 44, assists: 22, steals: 7, blocks: 5, turnovers: 10, pointsInPaint: 46 },
  },
  "s6-4": {
    away: { fieldGoalPct: 45.8, threePointPct: 34.5, rebounds: 41, assists: 23, steals: 6, blocks: 3, turnovers: 14, pointsInPaint: 40 },
    home: { fieldGoalPct: 48.2, threePointPct: 37.8, rebounds: 43, assists: 26, steals: 8, blocks: 5, turnovers: 10, pointsInPaint: 48 },
  },
  "s6-5": {
    away: { fieldGoalPct: 47.2, threePointPct: 36.8, rebounds: 42, assists: 25, steals: 7, blocks: 4, turnovers: 11, pointsInPaint: 44 },
    home: { fieldGoalPct: 46.5, threePointPct: 35.5, rebounds: 40, assists: 23, steals: 6, blocks: 3, turnovers: 13, pointsInPaint: 42 },
  },
  "s6-6": {
    away: { fieldGoalPct: 49.5, threePointPct: 39.2, rebounds: 44, assists: 27, steals: 8, blocks: 5, turnovers: 11, pointsInPaint: 50 },
    home: { fieldGoalPct: 47.0, threePointPct: 34.8, rebounds: 40, assists: 24, steals: 6, blocks: 3, turnovers: 13, pointsInPaint: 44 },
  },
};

export function getH2H(away: string, home: string): HeadToHead[] {
  return h2hData[`${away}-${home}`] || h2hData[`${home}-${away}`] || [];
}
