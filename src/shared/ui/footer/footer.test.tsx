import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

test('should render Footer elements ', () => {
  render(<Footer />);

  const icon = screen.getByAltText('icon');
  const ghImg = screen.getByAltText('github');
  const year = screen.getByText('2025');

  expect(icon).toBeInTheDocument();
  expect(ghImg).toBeInTheDocument();
  expect(year).toBeInTheDocument();
});
