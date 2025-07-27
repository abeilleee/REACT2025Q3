export interface ApiResponse {
  count: number;
  next: string;
  previous?: null;
  results: Results[];
}

export interface Results {
  name: string;
  url: string;
}

export interface Pokemon {
  id?: number;
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  sprites: {
    other?: {
      home: {
        front_default: string;
      };
    };
  };
  stats: Stats[];
}

export interface Ability {
  ability: Results;
  is_hidden: boolean;
  slot: number;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
