import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from '@/store/slices';
import { pokemonApi } from './slices/api/pokemonApi';

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
