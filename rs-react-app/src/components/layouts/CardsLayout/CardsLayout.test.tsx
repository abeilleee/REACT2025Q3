import { render, screen } from '@testing-library/react';
import { CardsLayout } from './CardsLayout';
import { mockPokemonsData } from '@/__mocks__/mocksData';

describe('Cards Layout test', () => {
  it('should render loading state when isLoading is true', () => {
    render(<CardsLayout pokemonsData={[]} isLoading={true} errorMessage="" />);

    const skeletonCards = screen.getAllByTestId('skeleton-card');

    expect(skeletonCards.length).toBe(20);
  });

  it('should render not found state when pokemonsData is empty and no error message', () => {
    render(<CardsLayout pokemonsData={[]} isLoading={false} errorMessage="" />);
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  it('should render error state when errorMessage is provided', () => {
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

  it('should render cards when pokemonsData is provided', () => {
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
