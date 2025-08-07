import { mockPokemonsData } from '@/__mocks__/mockData';
import {
  deselectAllPokemons,
  deselectPokemon,
  pokemonReducer,
  selectPokemon,
  type InitialState,
} from './pokemonSlice';
import type { PokemonData } from './api/types';

describe('pokemonSlice tests', () => {
  const mockPokemon: PokemonData = mockPokemonsData[0];
  let initialState: InitialState;

  beforeEach(() => {
    initialState = {
      pokemons: [],
      selectedPokemons: [],
    };
  });

  test('should add pokemon to the selected pokemons', () => {
    const updatedState = pokemonReducer(
      initialState,
      selectPokemon(mockPokemon)
    );

    expect(updatedState.selectedPokemons).toHaveLength(1);
  });

  test('should exclude pokemon from the selected pokemons', () => {
    const updatedState = pokemonReducer(
      initialState,
      deselectPokemon(mockPokemon)
    );

    expect(updatedState.selectedPokemons).toHaveLength(0);
  });

  test('should clean the state with selected pokemons', () => {
    const updatedState = pokemonReducer(initialState, deselectAllPokemons());

    expect(updatedState.selectedPokemons).toHaveLength(0);
  });
});
