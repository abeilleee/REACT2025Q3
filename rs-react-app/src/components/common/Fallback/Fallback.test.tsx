import { render, screen } from '@testing-library/react';
import { Fallback } from './Fallback';

test('should render Fallback wothout crashing', () => {
  render(<Fallback />);

  expect(screen.getByTestId('fallback')).toBeInTheDocument();
});
