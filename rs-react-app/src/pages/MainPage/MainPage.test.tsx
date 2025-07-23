import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  mockApiResponseResults,
  NOT_EXISTING_ENDPOINT,
  TEST_ENDPOINT,
} from '@/__mocks__/mockData';
import { getItemSpy } from '@/__mocks__/mockFunctions';
import { pokeApi } from '@/services';
import { MainPage } from './MainPage';

describe('Main Page test', () => {
  beforeEach(() => {
    getItemSpy.mockReturnValue(null);
    getItemSpy.mockClear();
  });

  test('should render Search component', () => {
    render(<MainPage />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should call api to get all pokemons when there is no value in LS', () => {
    const getPokemons = vi.spyOn(pokeApi, 'getPokemons');

    render(<MainPage />);

    expect(getPokemons).toHaveBeenCalledTimes(1);
  });

  test('should call api to get one pokemon when LS has a value', () => {
    const getData = vi.spyOn(pokeApi, 'getPokemonData');
    getItemSpy.mockReturnValue('pikachu');

    render(<MainPage />);

    expect(getData).toHaveBeenCalledTimes(1);
  });

  test('should handle search correctly', async () => {
    const getPokemonData = vi.spyOn(pokeApi, 'getPokemonData');

    render(<MainPage />);

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: 'Search' });

    await userEvent.type(searchInput, TEST_ENDPOINT);
    await userEvent.click(searchButton);

    expect(getPokemonData).toHaveBeenCalledWith(TEST_ENDPOINT);
  });

  test('should handle search correctly when input is empty', async () => {
    const getPokemons = vi
      .spyOn(pokeApi, 'getPokemons')
      .mockResolvedValue(mockApiResponseResults);

    render(<MainPage />);

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: 'Search' });

    await userEvent.type(searchInput, '   ');
    await userEvent.click(searchButton);

    await waitFor(() => expect(getPokemons).toHaveBeenCalled());
  });

  test('should handle api error when getPokemons fails', async () => {
    vi.spyOn(pokeApi, 'getPokemons').mockRejectedValue(new Error('API Error'));

    render(<MainPage />);

    await waitFor(() => {
      expect(screen.getByText('Please, try again')).toBeInTheDocument();
    });
  });

  test('should display "No results found" when getPokemonData returns nothing', async () => {
    vi.spyOn(pokeApi, 'getPokemonData').mockResolvedValue(undefined);

    render(<MainPage />);

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: 'Search' });

    await userEvent.type(searchInput, NOT_EXISTING_ENDPOINT);
    await userEvent.click(searchButton);

    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  test('should display "No results found" when getPokemonData returns empty list', async () => {
    vi.spyOn(pokeApi, 'getPokemons').mockResolvedValue([]);

    render(<MainPage />);

    await waitFor(() => {
      expect(screen.queryByText('No results found')).toBeInTheDocument();
    });
  });
});
