import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import styles from './Layout.module.scss';

vi.mock('@/components/ui/Header', () => ({
  Header: () => <header data-testid="mock-header">Mock Header</header>,
}));

vi.mock('@/components/ui/Footer', () => ({
  Footer: () => <footer data-testid="mock-footer">Mock Footer</footer>,
}));

describe('Layout test', () => {
  test('should renders layout correctly', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const container = screen.getByTestId('layout-container');
    const header = screen.getByTestId('mock-header');
    const footerElement = screen.getByTestId('mock-footer');
    const main = screen.getByTestId('layout-main');

    expect(container).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Mock Header');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent('Mock Footer');
  });

  test('should apply content-flex-start class when on the root path', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const mainElement = screen.getByTestId('layout-main');

    expect(mainElement).toHaveClass(styles.content);
    expect(mainElement).toHaveClass(styles['content-flex-start']);
  });

  test('should apply only content class when not on the root path', () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <Routes>
          <Route path="/test" element={<Layout />} />
        </Routes>
      </MemoryRouter>
    );

    const mainElement = screen.getByTestId('layout-main');

    expect(mainElement).toHaveClass(styles.content);
    expect(mainElement).not.toHaveClass(styles['content-flex-start']);
  });
});
