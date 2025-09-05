import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from './layout';

test('should render layout correctly', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );

  const section = screen.getByTestId('section');
  const main = screen.getByTestId('main');

  expect(section).toBeInTheDocument();
  expect(main).toBeInTheDocument();
});
