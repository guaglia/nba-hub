"use client";

import * as NBALogos from "react-nba-logos";
import { FC } from "react";

const logoMap: Record<string, FC<{ size?: number }>> = {
  ATL: NBALogos.ATL,
  BKN: NBALogos.BKN,
  BOS: NBALogos.BOS,
  CHA: NBALogos.CHA,
  CHI: NBALogos.CHI,
  CLE: NBALogos.CLE,
  DAL: NBALogos.DAL,
  DEN: NBALogos.DEN,
  DET: NBALogos.DET,
  GSW: NBALogos.GSW,
  HOU: NBALogos.HOU,
  IND: NBALogos.IND,
  LAC: NBALogos.LAC,
  LAL: NBALogos.LAL,
  MEM: NBALogos.MEM,
  MIA: NBALogos.MIA,
  MIL: NBALogos.MIL,
  MIN: NBALogos.MIN,
  NOP: NBALogos.NOP,
  NYK: NBALogos.NYK,
  OKC: NBALogos.OKC,
  ORL: NBALogos.ORL,
  PHI: NBALogos.PHI,
  PHX: NBALogos.PHX,
  POR: NBALogos.POR,
  SAC: NBALogos.SAC,
  SAS: NBALogos.SAS,
  TOR: NBALogos.TOR,
  UTA: NBALogos.UTA,
  WAS: NBALogos.WAS,
};

const teamIdMap: Record<string, number> = {
  ATL: 1610612737, BKN: 1610612751, BOS: 1610612738, CHA: 1610612766,
  CHI: 1610612741, CLE: 1610612739, DAL: 1610612742, DEN: 1610612743,
  DET: 1610612765, GSW: 1610612744, HOU: 1610612745, IND: 1610612754,
  LAC: 1610612746, LAL: 1610612747, MEM: 1610612763, MIA: 1610612748,
  MIL: 1610612749, MIN: 1610612750, NOP: 1610612740, NYK: 1610612752,
  OKC: 1610612760, ORL: 1610612753, PHI: 1610612755, PHX: 1610612756,
  POR: 1610612757, SAC: 1610612758, SAS: 1610612759, TOR: 1610612761,
  UTA: 1610612762, WAS: 1610612764,
};

export function TeamLogo({ abbrev, size = 48 }: { abbrev: string; size?: number }) {
  const Logo = logoMap[abbrev];
  if (Logo) return <Logo size={size} />;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.nba.com/logos/nba/${teamIdMap[abbrev]}/primary/L/logo.svg`}
      alt={abbrev}
      width={size}
      height={size}
    />
  );
}
