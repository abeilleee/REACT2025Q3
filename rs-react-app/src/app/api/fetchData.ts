import { PokemonData } from '@/store/slices/pokemon';
import { DEFAULT_ERROR, ZERO } from '@/utils/constants';
import { pokeApi } from './api';

export interface ReturnedData {
  pokemonData: PokemonData[] | null;
  total: number | null;
  error?: string | null;
}

export const fetchData = async (
  searchTerm: string,
  page: number
): Promise<ReturnedData> => {
  const results = await pokeApi.getPokemonResults(page);
  const total = (await pokeApi.getPokemonCount()) ?? ZERO;
  let pokemonData: PokemonData[] = [];

  try {
    if (!searchTerm && results) {
      const pokemonDetails = await Promise.all(
        results.map(async (pokemon: { name: string }) => {
          return await pokeApi.getPokemonData(pokemon.name);
        })
      );

      if (pokemonDetails.every((item) => item !== undefined)) {
        pokemonData = pokemonDetails;
      }
      return { pokemonData, total, error: '' };
    } else {
      const data = await pokeApi.getPokemonData(searchTerm);

      if (data) pokemonData = [data];
      return { pokemonData, total, error: '' };
    }
  } catch (error) {
    const msg = error instanceof Error ? error.message : DEFAULT_ERROR;
    return { pokemonData: null, total: null, error: msg };
  }
};
