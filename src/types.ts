export interface MatchResult {
  id: number;
  date: string;
  opponent: string;
  home: boolean;
  scored: number;
  conceded: number;
}

export interface StandingRow {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface Sponsor {
  name: string;
  category: string;
  description: string;
  accent: string;
  image?: string;
  details?: {
    address: string;
    extraInfo: string;
    contact?: string;
    website?: string;
  };
}

export interface SpotlightPlayer {
  name: string;
  role: string;
  highlight: string;
  statLabel: string;
  statValue: string;
  image?: string;
}

export interface AgendaItem {
  date: string;
  time: string;
  title: string;
  description: string;
  venue?: string;
}

export interface TransferUpdate {
  name: string;
  direction: string;
  headline: string;
  note: string;
  image: string;
  article: string[];
}

export interface PlayerStat {
  label: string;
  value: number | string;
}

export interface SquadPlayer {
  name: string;
  number: number;
  position: string;
  goals: number;
  assists: number;
  matches: number;
  playerOfTheMatch: number;
  image?: string;
  customStats?: PlayerStat[];
}
