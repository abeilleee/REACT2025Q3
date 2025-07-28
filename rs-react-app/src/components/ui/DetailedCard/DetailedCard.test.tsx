import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes, useParams } from 'react-router-dom';
import { cardData, mockPokemonsData } from '@/__mocks__/mockData';
import { navigateMock } from '@/__tests__/setupTests';
import { PATHS } from '@/services/router/constants';
import { DetailedCard } from './DetailedCard';
import { CardsList } from '../CardsList';

describe('Detailed card tests', () => {
  const path = '/pokemon/pidgeot?page=1';

  beforeEach(() => {
    vi.mock('react-router-dom', async () => {
      return {
        ...(await vi.importActual('react-router-dom')),
        useParams: vi.fn(() => {}),
        useNavigate: () => navigateMock,
      };
    });
  });

  test('should open with the correct URL and render with the correct title', async () => {
    render(
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
    );

    const pokemonCard = screen.getByText(cardData.name);
    const user = userEvent.setup();
    await user.click(pokemonCard);

    await waitFor(() => {
      expect(screen.getByText(cardData.name)).toBeInTheDocument();
      expect(navigateMock).toHaveBeenCalledWith(path);
    });
  });

  test('should render card and image with correct pokemon', async () => {
    vi.mocked(useParams).mockReturnValue({ name: cardData.name });

    render(
      <MemoryRouter>
        <DetailedCard />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId(cardData.name)).toBeInTheDocument();
      expect(screen.getByAltText(cardData.name)).toBeInTheDocument();
    });
  });
});
