import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { mockPokemonsData } from '@/__mocks__/mockData';
import * as hooks from '@/hooks';
import { store } from '@/store';
import { FlyoutPanel } from './FlyoutPanel';

describe('Flyout Panel tests', () => {
  const mockCreateObjURL = vi.fn(() => 'mocked-url');
  const selectedPokemons = vi.spyOn(hooks, 'useAppSelector');
  const useAppDispatchMock = vi.spyOn(hooks, 'useAppDispatch');

  beforeEach(() => {
    selectedPokemons.mockReset();
    useAppDispatchMock.mockReset();
    selectedPokemons.mockReturnValue(mockPokemonsData);
    global.URL.createObjectURL = mockCreateObjURL;
  });

  test('should render correctly and show correct selected pokemons number', () => {
    const total = mockPokemonsData.length;

    render(
      <Provider store={store}>
        <FlyoutPanel />
      </Provider>
    );

    expect(screen.getByTestId('flyout')).toBeInTheDocument();
    expect(screen.getByText(`Selected pokemon: ${total}`)).toBeInTheDocument();
  });

  test('should call dispatch when unselect button is clicked', async () => {
    const user = userEvent.setup();
    const dispatchMock = vi.fn();

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
    selectedPokemons.mockReturnValue(0);

    render(
      <Provider store={store}>
        <FlyoutPanel />
      </Provider>
    );

    const flyout = screen.queryByTestId('flyout');

    expect(flyout).toBeNull();
  });
});
