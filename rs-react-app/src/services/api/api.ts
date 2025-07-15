import { BASE_ENDPOINT, DEFAULT_ERROR, STATUS_CODE } from './constants';
import type { ApiResponse, Pokemon } from './types';
import { mapDataToPokemonData } from '@/utils/pokemonDataMapper';

export class Api {
  private baseUrl = 'https://pokeapi.co/api/v2';

  private async fetchData<T>(endpoint: string): Promise<T | undefined> {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`);

      if (!response.ok) {
        if (response.status === STATUS_CODE.NOT_FOUND) {
          return;
        }
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const data = (await response.json()) as T;
      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : DEFAULT_ERROR);
    }
  }

  public async getPokemons() {
    const data = await this.fetchData<ApiResponse>(BASE_ENDPOINT);

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
