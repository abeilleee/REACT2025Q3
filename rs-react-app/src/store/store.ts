'use client';

import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './slices/pokemon/api/pokemonApi';
import { pokemonReducer } from './slices/pokemon/pokemonSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      pokemons: pokemonReducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
