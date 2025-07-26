import { render, screen } from '@testing-library/react';
import { mockPokemonsData } from '@/__mocks__/mockData';
import { INITIAL_PAGE, LIMIT, STATUS_CODE } from '@/services/api/constants';
import { CardsList } from './CardsList';

describe('Cards List test', () => {
  test('should render loading state when isLoading is true', () => {
    render(
      <CardsList
        pokemonsData={[]}
        isLoading={true}
        errorMessage=""
        currentPage={INITIAL_PAGE}
        handlePageChange={() => {}}
        total={120}
      />
    );

    const skeletonCards = screen.getAllByTestId('skeleton-card');

    expect(skeletonCards.length).toBe(LIMIT);
  });

  test('renders "No results found" message when error has 404 status', () => {
    render(
      <CardsList
        pokemonsData={[]}
        isLoading={false}
        errorMessage={`Error ${STATUS_CODE.NOT_FOUND}`}
        currentPage={INITIAL_PAGE}
        handlePageChange={() => {}}
        total={120}
      />
    );
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  test('renders error message and image when there is an errorMessage', () => {
    render(
      <CardsList
        pokemonsData={[]}
        isLoading={false}
        errorMessage="Test Error"
        currentPage={INITIAL_PAGE}
        handlePageChange={() => {}}
        total={120}
      />
    );
    expect(screen.getByText('Oops... Error: Test Error')).toBeInTheDocument();
    const errorImage = screen.getByAltText('egg');
    expect(errorImage).toBeInTheDocument();
  });

  test('should render cards when pokemonsData is provided', () => {
    render(
      <CardsList
        pokemonsData={mockPokemonsData}
        isLoading={false}
        errorMessage=""
        currentPage={INITIAL_PAGE}
        handlePageChange={() => {}}
        total={120}
      />
    );

    expect(screen.getByText('pidgeot')).toBeInTheDocument();
    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.getByText('wartortle')).toBeInTheDocument();
  });
});
