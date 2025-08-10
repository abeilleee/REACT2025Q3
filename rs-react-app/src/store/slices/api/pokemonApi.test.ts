import { configureStore } from '@reduxjs/toolkit';
import { server } from '@/__tests__/msw/server';
import { pokemonApi } from './pokemonApi';

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

const fetchSpy = vi.spyOn(global, 'fetch');

test('should fetch and cache data', async () => {
  server.close();

  const firstRequest = await store.dispatch(
    pokemonApi.endpoints.getPokemonData.initiate('pikachu')
  );

  const secondRequest = await store.dispatch(
    pokemonApi.endpoints.getPokemonData.initiate('pikachu')
  );

  expect(fetchSpy).toHaveBeenCalledTimes(1);
  expect(firstRequest.data).toEqual(secondRequest.data);
});
