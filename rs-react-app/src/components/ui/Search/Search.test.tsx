import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { cardData } from '@/__mocks__/mockData';
import { Search } from './Search';

describe('Search test', () => {
  const mockSetSearchTerm = vi.fn();
  const user = userEvent.setup();

  afterEach(() => {
    vi.clearAllMocks();
    mockSetSearchTerm.mockClear();
  });

  test('should render Search component without crashing and with correct value', () => {
    const mockSearch = cardData.name;

    render(
      <Search searchTerm={mockSearch} setSearchTerm={mockSetSearchTerm} />
    );

    const inputElement = screen.getByRole('textbox');
    const button = screen.getByText('Search');

    expect(inputElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(inputElement).toHaveValue(cardData.name);
  });

  test('should set SearchTerm when Enter key is pressed', async () => {
    const mockSearch = cardData.name;

    render(
      <Search searchTerm={mockSearch} setSearchTerm={mockSetSearchTerm} />
    );

    const inputElement = screen.getByRole('textbox');

    await user.type(inputElement, 'charmander');
    await user.keyboard('[Enter]');

    expect(mockSetSearchTerm).toBeCalledTimes(1);
  });

  test('should set SearchTerm on button click', async () => {
    render(<Search searchTerm={''} setSearchTerm={mockSetSearchTerm} />);

    const inputElement = screen.getByRole('textbox');
    const button = screen.getByText('Search');

    await user.type(inputElement, 'bulbasaur');
    await user.click(button);

    expect(mockSetSearchTerm).toHaveBeenCalledWith('bulbasaur');
  });
});
