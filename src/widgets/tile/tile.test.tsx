import { render, screen } from '@testing-library/react';
import { mockFormData } from '@/app/tests/mock';
import { Tile } from './tile';

test('should render with correct data', () => {
  render(<Tile data={[mockFormData]} title={'Test title'} />);

  expect(screen.getByText('Test title')).toBeInTheDocument();
  expect(screen.getByText(mockFormData.name)).toBeInTheDocument();
  expect(screen.getByText(mockFormData.country)).toBeInTheDocument();
  expect(screen.getByText(mockFormData.email)).toBeInTheDocument();
});
