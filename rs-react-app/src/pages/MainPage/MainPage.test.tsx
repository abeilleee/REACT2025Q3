import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProvider } from '@/__tests__/utils';
import * as hooks from '@/store/slices/api/pokemonApi';
import MainPage from './MainPage';

describe('Main Page test', () => {
  test('should render Search, CardsList, and Button', () => {
    renderWithProvider(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Refetch' })).toBeInTheDocument();
  });

  test('should call api to get all pokemons data', () => {
    const getAllPokemonData = vi.spyOn(hooks, 'useGetAllPokemonDataQuery');

    renderWithProvider(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    expect(getAllPokemonData).toBeCalled();
  });
});
