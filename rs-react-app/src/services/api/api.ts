import { mapDataToPokemonData } from '@/utils/pokemonDataMapper';
import type { ApiResponse, Pokemon } from './types';

export class Api {
  private baseUrl = 'https://pokeapi.co/api/v2';

  public async getPokemons() {
    try {
      const response = await fetch(`${this.baseUrl}/pokemon`);

      if (response.ok) {
        const data = (await response.json()) as ApiResponse;
        return data.results;
      }
    } catch (error) {
      console.error(error);
    }
  }

  public async getPokemonData(name: string) {
    try {
      const response = await fetch(`${this.baseUrl}/pokemon/${name}`);

      if (response.ok) {
        const data = (await response.json()) as Pokemon;
        return mapDataToPokemonData(data);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export const pokeApi = new Api();
