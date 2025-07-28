import { ONE } from '@/utils/constants';
import { mapDataToPokemonData } from '@/utils/pokemonDataMapper';
import { BASE_ENDPOINT, BASE_URL, LIMIT } from './constants';
import type { ApiResponse, Pokemon } from './types';

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

  public async getPokemonResults(page: number) {
    const offset = (page - ONE) * LIMIT;

    const data = await this.fetchData<ApiResponse>(
      `${BASE_ENDPOINT}/?limit=${LIMIT}&offset=${offset}`
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

  public async getPokemonCount() {
    const data = await this.fetchData<ApiResponse>(`${BASE_ENDPOINT}`);

    if (data) {
      return data.count;
    }
  }
}

export const pokeApi = new Api();
