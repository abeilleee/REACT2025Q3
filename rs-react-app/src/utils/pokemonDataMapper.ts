import type { Pokemon } from '@/services/api/types';
import type { PokemonData } from './types';

export const mapDataToPokemonData = (data: Pokemon): PokemonData => {
  return {
    name: data.name,
    height: data.height,
    weight: data.weight,
    abilities: data.abilities.map((item) => item.ability.name),
    sprites: {
      homefrontDefault: data.sprites.other?.home.front_default,
    },
  };
};
