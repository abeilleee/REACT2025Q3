import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainLayout } from './MainLayout';

describe('MainLayout test', () => {
  test('should render correctly', () => {
    render(
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
