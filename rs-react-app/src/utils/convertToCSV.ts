import type { PokemonData } from '@/store/slices/api/types';

export const convertToCSV = (data: PokemonData[]) => {
  const titles = Object.keys(data[0]).join(',');

  const formatStats = (name: string[], base: number[]) => {
    const stats = name.map((name, idx) => `${name}: ${base[idx]}`);
    return stats.join(';');
  };

  const rows = data.map((pokemon) => {
    const { name, height, weight } = pokemon;
    const abilities = pokemon.abilities.join(';');
    const sprite = pokemon.sprites;
    const stats = formatStats(pokemon.stats.name, pokemon.stats.base);

    return [name, height, weight, abilities, sprite, stats].join(',');
  });

  return [titles, ...rows].join('\n');
};
