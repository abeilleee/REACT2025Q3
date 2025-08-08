import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProvider } from '@/__tests__/utils';
import { MainLayout } from './MainLayout';

describe('MainLayout test', () => {
  test('should render correctly', () => {
    renderWithProvider(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    const wrapper = screen.getByTestId('search-container');
    const section = screen.getByTestId('section');

    expect(wrapper).toBeInTheDocument();
    expect(section).toBeInTheDocument();
  });
});
