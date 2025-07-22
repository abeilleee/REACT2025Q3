import { render, screen } from '@testing-library/react';
import { mockPokemonsData } from '@/__mocks__/mocksData';
import { CardsLayout } from './CardsLayout';

describe('Cards Layout test', () => {
  test('should render loading state when isLoading is true', () => {
    render(<CardsLayout pokemonsData={[]} isLoading={true} errorMessage="" />);

    const skeletonCards = screen.getAllByTestId('skeleton-card');

    expect(skeletonCards.length).toBe(20);
  });

  test('should render not found state when pokemonsData is empty and no error message', () => {
    render(<CardsLayout pokemonsData={[]} isLoading={false} errorMessage="" />);
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  test('should render error state when errorMessage is provided', () => {
    const errorMessage = 'Failed to fetch data';

    render(
      <CardsLayout
        pokemonsData={[]}
        isLoading={false}
        errorMessage={errorMessage}
      />
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
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
