import { mapDataToPokemonData } from '@/utils/pokemonDataMapper';
import type { ApiResponse, Pokemon } from './types';

export class Api {
  private baseUrl = 'https://pokeapi.co/api/v2';

  public async getPokemons() {
    try {
      const response = await fetch(`${this.baseUrl}/pokemon`);

      if (response.ok) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data: ApiResponse = await response.json();

        if (data) {
          const results = data.results;

          return results;
        }
      }

      return;
    } catch (error) {
      console.error(error);
    }
  }

  public async getPokemonData(name: string) {
    try {
      const response = await fetch(`${this.baseUrl}/pokemon/${name}`);

      if (response.ok) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data: Pokemon = await response.json();

        return mapDataToPokemonData(data);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export const pokeApi = new Api();
