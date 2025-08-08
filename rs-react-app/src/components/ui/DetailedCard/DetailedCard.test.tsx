import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { cardData } from '@/__tests__/mocks/mockData';
import { navigateMock, renderWithProvider } from '@/__tests__/utils';
import { PATHS } from '@/services/router/constants';
import * as hooks from '@/store/slices/api/pokemonApi';
import { DetailedCard } from './DetailedCard';

vi.mock('react-router-dom', async () => {
  return {
    ...(await vi.importActual('react-router-dom')),
    useNavigate: () => navigateMock,
  };
});

describe('Detailed card tests', () => {
  test('should display loading state while fetching data', () => {
    renderWithProvider(
      <MemoryRouter>
        <DetailedCard />
      </MemoryRouter>
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.getByText(/Loading/));
  });

  test('should display error state if an error occurs while fetching data', async () => {
    renderWithProvider(
      <MemoryRouter>
        <DetailedCard />
      </MemoryRouter>
    );

    const text = await screen.findByText(/Oops... Error:/);

    expect(text).toBeInTheDocument();
  });

  test('should render correct pokemon data', () => {
    const mockGetPokemonData = vi.spyOn(hooks, 'useGetPokemonDataQuery');
    mockGetPokemonData.mockReturnValue({
      data: cardData,
      isFetching: false,
      error: undefined,
      refetch: vi.fn(),
    });

    renderWithProvider(
      <MemoryRouter initialEntries={[`/pokemon/${cardData.name}`]}>
        <DetailedCard />
      </MemoryRouter>
    );

    const card = screen.getByTestId('detailed-card');
    const img = screen.getByAltText(cardData.name);

    expect(card).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', cardData.sprites);
    cardData.stats.name.forEach((stat) => {
      const statName = screen.getByText(stat);
      expect(statName).toBeInTheDocument();
    });
    cardData.stats.base.forEach((base) => {
      const statName = screen.getByText(base);
      expect(statName).toBeInTheDocument();
    });
  });

  test('should navigate to ROOT path when Close button is clicked', async () => {
    const user = userEvent.setup();
    const mockGetPokemonData = vi.spyOn(hooks, 'useGetPokemonDataQuery');
    mockGetPokemonData.mockReturnValue({
      data: cardData,
      isFetching: false,
      error: undefined,
      refetch: vi.fn(),
    });

    renderWithProvider(
      <MemoryRouter initialEntries={[`/pokemon/${cardData.name}`]}>
        <DetailedCard />
      </MemoryRouter>
    );

    const closeButton = screen.getByText('Close');
    await user.click(closeButton);

    expect(navigateMock).toHaveBeenCalledOnce();
    expect(navigateMock).toHaveBeenCalledWith(PATHS.ROOT);
  });

  test('should display img placeholder if there is no sprite', () => {
    const mockGetPokemonData = vi.spyOn(hooks, 'useGetPokemonDataQuery');
    mockGetPokemonData.mockReturnValue({
      data: { ...cardData, sprites: null },
      isFetching: false,
      error: undefined,
      refetch: vi.fn(),
    });

    renderWithProvider(
      <MemoryRouter initialEntries={[`/pokemon/${cardData.name}`]}>
        <DetailedCard />
      </MemoryRouter>
    );

    const img = screen.getByAltText(cardData.name);

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/src/assets/images/no-img.png');
  });
});
