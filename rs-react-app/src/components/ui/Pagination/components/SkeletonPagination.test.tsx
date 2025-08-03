import { render, screen } from '@testing-library/react';
import { SkeletonPagination } from './SkeletonPagination';

test('should render without crashing', () => {
  render(<SkeletonPagination />);

  expect(screen.getByTestId('skeletons')).toBeInTheDocument();
});
