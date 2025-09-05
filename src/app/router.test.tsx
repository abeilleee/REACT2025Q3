import { render, screen } from '@testing-library/react';
import { Router } from './router';

test('should render main page', () => {
  render(<Router />);

  expect(screen.getByTestId('main')).toBeInTheDocument();
});
