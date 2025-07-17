import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header test', () => {
  test('should render Header logo and button', () => {
    render(<Header />);

    const logo = screen.getByAltText('logo');
    const button = screen.getByText('Throw Error');

    expect(logo).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
