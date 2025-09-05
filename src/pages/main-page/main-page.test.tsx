import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { useFormStore } from '@/shared/model';
import { MainPage } from './main-page';

describe('Main page tests', () => {
  const initialState = {
    isOpen: false,
  };

  beforeEach(() => {
    useFormStore.setState(initialState);
  });

  test('should render main-page correctly', () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    const container = screen.getByTestId('container');
    const buttonFirst = screen.getByRole('button', { name: 'React hook form' });
    const buttonSecond = screen.getByRole('button', {
      name: 'Uncontrolled form',
    });
    const titleFirst = screen.getByText('Controlled Form');
    const titleSecond = screen.getByText('Uncontrolled Form');

    expect(container).toBeInTheDocument();
    expect(buttonFirst).toBeInTheDocument();
    expect(buttonSecond).toBeInTheDocument();
    expect(titleFirst).toBeInTheDocument();
    expect(titleSecond).toBeInTheDocument();
  });

  test('should render Modal with uncontrolled form', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', {
      name: 'Uncontrolled form',
    });

    await user.click(button);
    expect(screen.queryByTestId('uncontrolled form')).toBeInTheDocument();
  });

  test('should render Modal with controlled form', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', {
      name: 'React hook form',
    });

    await user.click(button);
    expect(screen.getByTestId('controlled form')).toBeInTheDocument();
  });
});
