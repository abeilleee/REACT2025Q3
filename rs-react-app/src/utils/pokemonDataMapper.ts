import { Pokemon, PokemonData } from '@/store/slices/pokemon';

export const mapDataToPokemonData = (data: Pokemon): PokemonData => {
  const abilities = data.abilities
    ? data.abilities.map((item) => item.ability.name)
    : [];

  return {
    name: data.name,
    height: data.height,
    weight: data.weight,
    abilities: abilities,
    sprites: data.sprites.other?.home.front_default || '',
    stats: {
      name: data.stats.map((item) => item.stat.name),
      base: data.stats.map((item) => item.base_stat),
    },
  };
};
