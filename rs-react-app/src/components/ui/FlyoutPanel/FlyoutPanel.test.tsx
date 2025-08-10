import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockPokemonsData } from '@/__tests__/mocks/mockData';
import { renderWithProvider } from '@/__tests__/utils';
import * as hooks from '@/hooks';
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

    renderWithProvider(<FlyoutPanel />);

    expect(screen.getByTestId('flyout')).toBeInTheDocument();
    expect(screen.getByText(`Selected pokemon: ${total}`)).toBeInTheDocument();
  });

  test('should call dispatch when unselect button is clicked', async () => {
    const user = userEvent.setup();
    const dispatchMock = vi.fn();
    useAppDispatchMock.mockReturnValue(dispatchMock);

    renderWithProvider(<FlyoutPanel />);

    const button = screen.getByText('Unselect all');

    await user.click(button);

    expect(dispatchMock).toHaveBeenCalledOnce();
  });

  test('should not render when there are no selected items', () => {
    selectedPokemons.mockReturnValue(0);

    renderWithProvider(<FlyoutPanel />);

    const flyout = screen.queryByTestId('flyout');

    expect(flyout).toBeNull();
  });
});
