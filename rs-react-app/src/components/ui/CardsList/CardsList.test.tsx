import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockPokemonsData } from '@/__tests__/mocks/mockData';
import { renderWithProvider } from '@/__tests__/utils';
import { INITIAL_PAGE, LIMIT } from '@/utils/constants';
import { CardsList } from './CardsList';

describe('Cards List test', () => {
  test('should render loading state when isLoading', () => {
    renderWithProvider(
      <CardsList
        pokemonsData={[]}
        isLoading={true}
        error={undefined}
        currentPage={INITIAL_PAGE}
        handlePageChange={() => {}}
      />
    );
    const skeletonCards = screen.getAllByTestId('skeleton-card');

    expect(skeletonCards.length).toBe(LIMIT);
  });

  test('should render error message and image when there is an errorMessage', () => {
    const error: FetchBaseQueryError = {
      status: 400,
      data: 'Test Error',
    };

    renderWithProvider(
      <CardsList
        pokemonsData={[]}
        isLoading={false}
        error={error}
        currentPage={INITIAL_PAGE}
        handlePageChange={() => {}}
      />
    );

    const errorImage = screen.getByAltText('egg');

    expect(screen.getByText(/Oops... Error:/)).toBeInTheDocument();
    expect(errorImage).toBeInTheDocument();
  });

  test('should render cards when pokemonsData is provided', () => {
    renderWithProvider(
      <MemoryRouter>
        <CardsList
          pokemonsData={mockPokemonsData}
          isLoading={false}
          error={undefined}
          currentPage={INITIAL_PAGE}
          handlePageChange={() => {}}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('pidgeot')).toBeInTheDocument();
    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.getByText('wartortle')).toBeInTheDocument();
  });
});
