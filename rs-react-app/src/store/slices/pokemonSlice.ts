import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PokemonData } from '@/utils/types';

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
    setPokemons: (state, action: PayloadAction<PokemonData[]>) => {
      state.pokemons = action.payload;
    },

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

export const {
  setPokemons,
  selectPokemon,
  deselectPokemon,
  deselectAllPokemons,
} = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
