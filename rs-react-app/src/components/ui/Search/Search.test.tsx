import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './Search';
import { mockGetItem, mockSetItem } from '@/__mocks__/mocksFunctions';

describe('Search test', () => {
  const mockOnSearch = vi.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  test('should render Search component correctly', () => {
    render(<Search onSearch={mockOnSearch} />);

    const inputElement = screen.getByRole('textbox');
    const button = screen.getByText('Search');

    expect(inputElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should call onSearch and setItem when Enter key is pressed', async () => {
    render(<Search onSearch={mockOnSearch} />);

    const inputElement = screen.getByRole('textbox');

    await user.type(inputElement, 'charmander');
    await user.keyboard('[Enter]');

    expect(mockOnSearch).toBeCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith('charmander');
    expect(mockSetItem).toHaveBeenCalledTimes(1);
  });

  test('should call onSearch and setItem on button click', async () => {
    render(<Search onSearch={mockOnSearch} />);

    const inputElement = screen.getByRole('textbox');
    const button = screen.getByText('Search');

    await user.type(inputElement, 'bulbasaur');
    await user.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith('bulbasaur');
    expect(mockSetItem).toHaveBeenCalledWith('bulbasaur');
    expect(mockSetItem).toHaveBeenCalledTimes(1);
  });

  test('should set LS value to the input value', async () => {
    mockGetItem.mockReturnValue('bulbasaur');
    render(<Search onSearch={mockOnSearch} />);

    const inputElement = await screen.findByPlaceholderText(
      'Enter the full pokemon name'
    );

    expect(inputElement).toHaveValue('bulbasaur');
    expect(mockGetItem).toHaveBeenCalledTimes(1);
  });

  test('should set empty input value if LS has no value', async () => {
    mockGetItem.mockReturnValue(null);
    render(<Search onSearch={mockOnSearch} />);

    const inputElement = await screen.findByPlaceholderText(
      'Enter the full pokemon name'
    );

    expect(mockGetItem).toHaveBeenCalledTimes(1);
    expect(inputElement).toHaveValue('');
  });
});
