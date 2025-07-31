import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from '@/store/slices';

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
