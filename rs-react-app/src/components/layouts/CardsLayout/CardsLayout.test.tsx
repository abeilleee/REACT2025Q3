import { render, screen } from '@testing-library/react';
import { mockPokemonsData } from '@/__mocks__/mockData';
import { STATUS_CODE } from '@/services/api/constants';
import { CardsLayout } from './CardsLayout';

describe('Cards Layout test', () => {
  test('should render loading state when isLoading is true', () => {
    render(<CardsLayout pokemonsData={[]} isLoading={true} errorMessage="" />);

    const skeletonCards = screen.getAllByTestId('skeleton-card');

    expect(skeletonCards.length).toBe(20);
  });

  test('renders "No results found" message when error has 404 status', () => {
    render(
      <CardsLayout
        pokemonsData={[]}
        isLoading={false}
        errorMessage={`Error ${STATUS_CODE.NOT_FOUND}`}
      />
    );
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  test('renders error message and image when there is an errorMessage', () => {
    render(
      <CardsLayout
        pokemonsData={[]}
        isLoading={false}
        errorMessage="Test Error"
      />
    );
    expect(screen.getByText('Oops... Error: Test Error')).toBeInTheDocument();
    const errorImage = screen.getByAltText('egg');
    expect(errorImage).toBeInTheDocument();
  });

  test('should render cards when pokemonsData is provided', () => {
    render(
      <CardsLayout
        pokemonsData={mockPokemonsData}
        isLoading={false}
        errorMessage=""
      />
    );

    expect(screen.getByText('pidgeot')).toBeInTheDocument();
    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.getByText('wartortle')).toBeInTheDocument();
  });
});
