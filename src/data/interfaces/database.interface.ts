export interface PlayerRank {
  uuid: string;
  pseudo: string;
  rank: number;
  points: number;
  team: string;
  quests: number;
}

export interface TeamRank {
  id: string;
  name: string;
  rank: number;
  points: number;
  bonus: number;
  item: string;
  players: Player[];
}

export interface Player {
  uuid: string;
  pseudo: string;
}
