import { ApiResponse, Pokemon, PokemonData } from '@/store/slices/pokemon';
import { getOffset, mapDataToPokemonData } from '@/utils';
import {
  BASE_ENDPOINT,
  BASE_URL,
  DEFAULT_ERROR,
  LIMIT,
} from '@/utils/constants';

export interface ReturnData {
  pokemonData: PokemonData[] | null;
  total: number | null;
  error?: string | null;
}

export async function fetchData(
  searchTerm: string,
  page: number
): Promise<ReturnData> {
  const URL = `${BASE_URL}/${BASE_ENDPOINT}`;
  let pokemonData: PokemonData[];

  const offset = getOffset(page);
  const response = await fetch(`${URL}/?limit=${LIMIT}&offset=${offset}`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`${response.status} ${response.statusText} ${errorText}`);
  }

  const data = (await response.json()) as ApiResponse;
  const total = data.count;

  try {
    if (!searchTerm) {
      const pokemonArr = await Promise.all(
        data.results.map(async (item) => {
          const pokemon = await fetch(`${URL}/${item.name}`);

          if (!pokemon.ok) {
            const errorText = await response.text();
            throw new Error(
              `${response.status} ${response.statusText} ${errorText}`
            );
          }

          const data = (await pokemon.json()) as Pokemon;

          return data;
        })
      );
      const arr = pokemonArr.filter((item) => item !== undefined);
      pokemonData = arr.map((pokemon) => mapDataToPokemonData(pokemon));
      return { pokemonData, total, error: '' };
    } else {
      const response = await fetch(`${URL}/${searchTerm}`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `${response.status} ${response.statusText} ${errorText}`
        );
      }

      const pokemon = (await response.json()) as Pokemon;
      pokemonData = [mapDataToPokemonData(pokemon)];
    }
    return { pokemonData, total, error: '' };
  } catch (error) {
    const msg = error instanceof Error ? error.message : DEFAULT_ERROR;
    return { pokemonData: null, total: null, error: msg };
  }
}
