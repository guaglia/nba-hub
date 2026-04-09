export interface Team {
  id: string;
  nbaId: number;
  name: string;
  abbreviation: string;
  city: string;
  primaryColor: string;
  secondaryColor: string;
  wins: number;
  losses: number;
  conference: "East" | "West";
  seed: number;
}

export interface TeamStats {
  fieldGoalPct: number;
  threePointPct: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  pointsInPaint: number;
}

export interface GameStats {
  home: TeamStats;
  away: TeamStats;
}

export interface Game {
  id: string;
  homeTeam: string; // Team abbreviation
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: "live" | "final" | "upcoming";
  quarter?: string;
  gameTime?: string;
  date: string;
  stats?: GameStats;
}

export interface Super6Game {
  id: string;
  homeTeam: string;
  awayTeam: string;
  gameDate: string;
  isFeatured: boolean;
  odds?: string;
}

export interface LeaderboardEntry {
  rank: number;
  displayName: string;
  points: number;
  weeklyPoints: number;
  avatar: string;
  isCurrentUser?: boolean;
}

export interface NewsItem {
  id: string;
  headline: string;
  summary: string;
  body: string;
  source: "ESPN" | "Bleacher Report";
  sourceUrl: string;
  imageUrl: string;
  timestamp: string;
  category: "Playoffs" | "Trade" | "Injury" | "Recap" | "Analysis";
  teams?: string[];
}

export interface RecentGame {
  opponent: string;
  result: "W" | "L";
  score: string;
  date: string;
}

export interface HeadToHead {
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
}
