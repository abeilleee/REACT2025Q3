import type { Pokemon } from '@/services/api/types';

export type PokemonData = Pick<Pokemon, 'name' | 'height' | 'weight'> & {
  abilities: string[];
  sprites: {
    homefrontDefault?: string;
  };
};
