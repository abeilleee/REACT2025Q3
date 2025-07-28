import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { mockApiResponseResults, TEST_ENDPOINT } from '@/__mocks__/mockData';
import { getItemSpy } from '@/__mocks__/mockFunctions';
import { pokeApi } from '@/services';
import MainPage from './MainPage';

describe('Main Page test', () => {
  beforeEach(() => {
    getItemSpy.mockReturnValue(null);
    getItemSpy.mockClear();
  });

  test('should render Search component', () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should call api to get all pokemons when there is no value in LS', () => {
    const getPokemonResults = vi.spyOn(pokeApi, 'getPokemonResults');

    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    expect(getPokemonResults).toHaveBeenCalledTimes(1);
  });

  test('should call api to get one pokemon when LS has a value', () => {
    const getData = vi.spyOn(pokeApi, 'getPokemonData');
    getItemSpy.mockReturnValue('pikachu');

    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    expect(getData).toHaveBeenCalledTimes(1);
  });

  test('should handle search correctly', async () => {
    const getPokemonData = vi.spyOn(pokeApi, 'getPokemonData');

    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: 'Search' });

    await userEvent.type(searchInput, TEST_ENDPOINT);
    await userEvent.click(searchButton);

    expect(getPokemonData).toHaveBeenCalledWith(TEST_ENDPOINT);
  });

  test('should handle search correctly when input is empty', async () => {
    const getPokemonResults = vi
      .spyOn(pokeApi, 'getPokemonResults')
      .mockResolvedValue(mockApiResponseResults);

    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: 'Search' });

    await userEvent.type(searchInput, '   ');
    await userEvent.click(searchButton);

    await waitFor(() => expect(getPokemonResults).toHaveBeenCalled());
  });

  test('should handle api error when getPokemonResults fails', async () => {
    vi.spyOn(pokeApi, 'getPokemonResults').mockRejectedValue(
      new Error('API Error')
    );

    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Please, try again')).toBeInTheDocument();
    });
  });
});
