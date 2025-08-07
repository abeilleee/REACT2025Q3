import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PokemonData } from './api/types';
export interface InitialState {
  pokemons: PokemonData[];
  selectedPokemons: PokemonData[];
}

const initialState: InitialState = {
  pokemons: [],
  selectedPokemons: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    selectPokemon: (state, action: PayloadAction<PokemonData>) => {
      state.selectedPokemons = [...state.selectedPokemons, action.payload];
    },
    deselectPokemon: (state, action: PayloadAction<PokemonData>) => {
      state.selectedPokemons = state.selectedPokemons.filter(
        (pokemon) => pokemon.name !== action.payload.name
      );
    },
    deselectAllPokemons: (state) => {
      state.selectedPokemons = [];
    },
  },
});

export const { selectPokemon, deselectPokemon, deselectAllPokemons } =
  pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
