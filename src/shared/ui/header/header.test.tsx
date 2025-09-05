import { render, screen } from '@testing-library/react';
import { Header } from './header';

test('should render Header correctly', () => {
  render(<Header />);

  expect(screen.getByText('React Forms')).toBeInTheDocument();
});
