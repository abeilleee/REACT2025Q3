import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header test', () => {
  test('should render Header logo and button', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByAltText('logo');
    const button = screen.getByText('About');

    expect(logo).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
