import { Super6Game, LeaderboardEntry } from "@/lib/types";

export const super6Games: Super6Game[] = [
  {
    id: "s6-1",
    awayTeam: "OKC",
    homeTeam: "BOS",
    gameDate: "Mar 8:00 PM ET",
    isFeatured: true,
    odds: "BOS -2.5",
  },
  {
    id: "s6-2",
    awayTeam: "SAS",
    homeTeam: "DEN",
    gameDate: "Mar 9:30 PM ET",
    isFeatured: false,
    odds: "SAS -1.5",
  },
  {
    id: "s6-3",
    awayTeam: "LAL",
    homeTeam: "MIN",
    gameDate: "Mié 8:00 PM ET",
    isFeatured: false,
    odds: "LAL -3.5",
  },
  {
    id: "s6-4",
    awayTeam: "NYK",
    homeTeam: "DET",
    gameDate: "Jue 7:30 PM ET",
    isFeatured: false,
    odds: "DET -4.0",
  },
  {
    id: "s6-5",
    awayTeam: "CLE",
    homeTeam: "ATL",
    gameDate: "Vie 8:00 PM ET",
    isFeatured: false,
    odds: "CLE -2.0",
  },
  {
    id: "s6-6",
    awayTeam: "OKC",
    homeTeam: "LAL",
    gameDate: "Dom 3:30 PM ET",
    isFeatured: false,
    odds: "OKC -5.5",
  },
];

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, displayName: "ElPibeNBA", points: 245, weeklyPoints: 22, avatar: "🏀" },
  { rank: 2, displayName: "NBAFanático", points: 230, weeklyPoints: 18, avatar: "🔥" },
  { rank: 3, displayName: "BasketKing", points: 218, weeklyPoints: 24, avatar: "👑" },
  { rank: 4, displayName: "HoopsMaster", points: 205, weeklyPoints: 16, avatar: "🎯" },
  { rank: 5, displayName: "DunkerPro", points: 198, weeklyPoints: 20, avatar: "💪" },
  { rank: 6, displayName: "CourtVision", points: 190, weeklyPoints: 14, avatar: "👁️" },
  { rank: 7, displayName: "TripleDouble", points: 185, weeklyPoints: 22, avatar: "🏆" },
  { rank: 8, displayName: "BuzzerBeater", points: 178, weeklyPoints: 10, avatar: "⏰" },
  { rank: 9, displayName: "Tú", points: 142, weeklyPoints: 12, avatar: "⭐", isCurrentUser: true },
  { rank: 10, displayName: "AlleyOop99", points: 135, weeklyPoints: 8, avatar: "🎪" },
];
