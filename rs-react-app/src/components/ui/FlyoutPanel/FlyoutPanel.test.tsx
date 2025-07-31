import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import * as hooks from '@/hooks';
import { store } from '@/store';
import { FlyoutPanel } from './FlyoutPanel';

describe('Flyout Panel tests', () => {
  const useSelectedPokemonsMock = vi.spyOn(hooks, 'useSelectedPokemons');
  const useAppDispatchMock = vi.spyOn(hooks, 'useAppDispatch');

  beforeEach(() => {
    useSelectedPokemonsMock.mockReset();
    useAppDispatchMock.mockReset();
  });

  test('should render correctly and show correct selected pokemons number', () => {
    useSelectedPokemonsMock.mockReturnValue(3);

    render(
      <Provider store={store}>
        <FlyoutPanel />
      </Provider>
    );

    expect(screen.getByTestId('flyout')).toBeInTheDocument();
    expect(screen.getByText(/3/)).toBeInTheDocument();
  });

  test('should call dispatch when unselect button is clicked', async () => {
    const user = userEvent.setup();
    const dispatchMock = vi.fn();

    useSelectedPokemonsMock.mockReturnValue(3);
    useAppDispatchMock.mockReturnValue(dispatchMock);

    render(
      <Provider store={store}>
        <FlyoutPanel />
      </Provider>
    );

    const button = screen.getByText('Unselect all');

    await user.click(button);

    expect(dispatchMock).toHaveBeenCalledOnce();
  });

  test('should not render when there are no selected items', () => {
    useSelectedPokemonsMock.mockReturnValue(0);

    render(
      <Provider store={store}>
        <FlyoutPanel />
      </Provider>
    );

    const flyout = screen.queryByTestId('flyout');

    expect(flyout).toBeNull();
  });
});
