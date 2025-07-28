import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

test('should render correctly', () => {
  render(<Spinner />);

  const spinner = screen.getByTestId('spinner');
  const loadingText = screen.getByText('Loading Pokemon...');

  expect(spinner).toBeInTheDocument();
  expect(loadingText).toBeInTheDocument();
});
