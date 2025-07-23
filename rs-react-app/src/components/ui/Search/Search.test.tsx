import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getItemSpy } from '@/__mocks__/mockFunctions';
import { Search } from './Search';

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

  test('should call onSearch when Enter key is pressed', async () => {
    render(<Search onSearch={mockOnSearch} />);

    const inputElement = screen.getByRole('textbox');

    await user.type(inputElement, 'charmander');
    await user.keyboard('[Enter]');

    expect(mockOnSearch).toBeCalledTimes(1);
  });

  test('should call onSearch on button click', async () => {
    render(<Search onSearch={mockOnSearch} />);

    const inputElement = screen.getByRole('textbox');
    const button = screen.getByText('Search');

    await user.type(inputElement, 'bulbasaur');
    await user.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith('bulbasaur');
  });

  test('should set LS value to the input value', async () => {
    getItemSpy.mockReturnValue('bulbasaur');
    render(<Search onSearch={mockOnSearch} />);

    const inputElement = await screen.findByPlaceholderText(
      'Enter the full pokemon name'
    );

    expect(inputElement).toHaveValue('bulbasaur');
  });

  test('should set empty input value if LS has no value', async () => {
    getItemSpy.mockReturnValue(null);
    render(<Search onSearch={mockOnSearch} />);

    const inputElement = await screen.findByPlaceholderText(
      'Enter the full pokemon name'
    );

    expect(inputElement).toHaveValue('');
  });
});
