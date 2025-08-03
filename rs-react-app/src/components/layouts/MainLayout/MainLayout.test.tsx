import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '@/store';
import { MainLayout } from './MainLayout';

describe('MainLayout test', () => {
  test('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainLayout />
        </MemoryRouter>
      </Provider>
    );

    const wrapper = screen.getByTestId('search-container');
    const section = screen.getByTestId('section');

    expect(wrapper).toBeInTheDocument();
    expect(section).toBeInTheDocument();
  });
});
