import { mapDataToPokemonData } from '@/utils/pokemonDataMapper';
import { BASE_ENDPOINT, BASE_URL, LIMIT, START_PAGE } from './constants';
import type { ApiResponse, Pokemon } from './types';

export interface Params {
  /**
   * cards amount on page
   * @default 12
   */
  limit?: number;
  /**
   * page number
   * @default 0
   */
  offset?: number;
}

export class Api {
  private async fetchData<T>(endpoint: string) {
    const response = await fetch(`${BASE_URL}/${endpoint}`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`${response.status} ${response.statusText} ${errorText}`);
    }

    const data = (await response.json()) as T;
    return data;
  }

  public async getPokemonResults(params: Params = {}) {
    const { limit = LIMIT, offset = START_PAGE } = params;

    const data = await this.fetchData<ApiResponse>(
      `${BASE_ENDPOINT}/?limit=${limit}&offset=${offset}`
    );

    if (data) {
      return data.results;
    }
  }

  public async getPokemonData(name: string) {
    const data = await this.fetchData<Pokemon>(`${BASE_ENDPOINT}/${name}`);

    if (data) {
      return mapDataToPokemonData(data);
    }
  }
}

export const pokeApi = new Api();
