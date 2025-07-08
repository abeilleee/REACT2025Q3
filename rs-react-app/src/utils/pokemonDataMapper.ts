import type { Pokemon } from '@/services/api/types';

export type PokemonData = Pick<Pokemon, 'name' | 'height' | 'weight'> & {
  abilities: string[];
  sprites: {
    frontDefault?: string;
    frontShiny?: string;
    homefrontDefault?: string;
  };
};

export const mapDataToPokemonData = (data: Pokemon): PokemonData => {
  return {
    name: data.name,
    height: data.height,
    weight: data.weight,
    abilities: data.abilities.map((item) => item.ability.name),
    sprites: {
      frontDefault: data.sprites.front_default,
      frontShiny: data.sprites.front_shiny,
      homefrontDefault: data.sprites.other?.home.front_default,
    },
  };
};
