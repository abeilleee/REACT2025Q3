import type { Pokemon, PokemonData } from '@/store/slices/api/types';

export const mapDataToPokemonData = (data: Pokemon): PokemonData => {
  return {
    name: data.name,
    height: data.height,
    weight: data.weight,
    abilities: data.abilities.map((item) => item.ability.name),
    sprites: data.sprites.other?.home.front_default || '',
    stats: {
      name: data.stats.map((item) => item.stat.name),
      base: data.stats.map((item) => item.base_stat),
    },
  };
};
