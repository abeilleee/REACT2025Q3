import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes, useParams } from 'react-router-dom';
import { cardData, mockPokemonsData } from '@/__mocks__/mockData';
import { navigateMock } from '@/__tests__/setupTests';
import { CardsList } from '@/components';
import * as hooks from '@/hooks';
import { PATHS } from '@/services/router/constants';
import { store } from '@/store';
import { DetailedCard } from './DetailedCard';

describe('Detailed card tests', () => {
  const useFetchMock = vi.spyOn(hooks, 'useFetch');
  const user = userEvent.setup();

  vi.mock('react-router-dom', async () => {
    return {
      ...(await vi.importActual('react-router-dom')),
      useParams: vi.fn(() => {}),
      useNavigate: () => navigateMock,
    };
  });

  test('should render pokemon data correctly', () => {
    vi.mocked(useParams).mockReturnValue({ name: cardData.name });
    useFetchMock.mockReturnValue({
      data: {
        name: cardData.name,
        sprites: cardData.sprites,
        stats: {
          name: cardData.stats.name,
          base: cardData.stats.base,
        },
      },
      isLoading: false,
      error: null,
      request: vi.fn(),
    });

    render(
      <MemoryRouter>
        <DetailedCard />
      </MemoryRouter>
    );

    expect(screen.getByTestId('detailed-card')).toBeInTheDocument();
    expect(screen.getByTestId('name')).toHaveTextContent(cardData.name);
    expect(screen.getByAltText(cardData.name));
    expect(screen.getByAltText(cardData.name)).toHaveAttribute(
      'src',
      cardData.sprites.homefrontDefault
    );
  });

  test('should open with the correct URL', async () => {
    const path = `/pokemon/${cardData.name}?page=1`;

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[PATHS.ROOT]}>
          <Routes>
            <Route
              path={PATHS.ROOT}
              element={
                <CardsList
                  pokemonsData={mockPokemonsData}
                  isLoading={false}
                  errorMessage={''}
                  currentPage={12}
                  total={120}
                  handlePageChange={navigateMock}
                />
              }
            />
            <Route path={path} element={<DetailedCard />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const pokemonCard = screen.getByText(cardData.name);
    await user.click(pokemonCard);

    expect(navigateMock).toHaveBeenCalledWith(path);
  });

  test('should render ErrorState when there is an error', () => {
    useFetchMock.mockReturnValue({
      data: null,
      isLoading: false,
      error: 'error',
      request: vi.fn(),
    });

    render(
      <MemoryRouter>
        <DetailedCard />
      </MemoryRouter>
    );

    expect(screen.getByTestId('error-container')).toBeInTheDocument();
  });

  test('should navigate to ROOT path when Close button is clicked', async () => {
    vi.mocked(useParams).mockReturnValue({ name: cardData.name });
    useFetchMock.mockReturnValue({
      data: {
        name: cardData.name,
        sprites: cardData.sprites,
        stats: {
          name: cardData.stats.name,
          base: cardData.stats.base,
        },
      },
      isLoading: false,
      error: null,
      request: vi.fn(),
    });

    render(
      <MemoryRouter>
        <DetailedCard />
      </MemoryRouter>
    );

    const closeButton = screen.getByText('Close');
    await user.click(closeButton);

    expect(navigateMock).toHaveBeenCalledWith(PATHS.ROOT);
  });

  test('should show loading state when is loading', () => {
    useFetchMock.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
      request: vi.fn(),
    });

    render(
      <MemoryRouter>
        <DetailedCard />
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });
});
