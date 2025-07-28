import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from './Pagination';

describe('Pagination tests', () => {
  const user = userEvent.setup();
  const mockHandlePageChange = vi.fn();

  test('should call handleNextClick when page changes', async () => {
    render(
      <Pagination
        currentPage={2}
        total={30}
        handlePageChange={mockHandlePageChange}
      />
    );

    const btn = screen.getByText('>');
    await user.click(btn);

    expect(mockHandlePageChange).toHaveBeenCalledTimes(1);
    expect(mockHandlePageChange).toHaveBeenCalledWith(3);
  });

  test('should call handlePrevClick when page changes', async () => {
    render(
      <Pagination
        currentPage={2}
        total={30}
        handlePageChange={mockHandlePageChange}
      />
    );

    const btn = screen.getByText('<');
    await user.click(btn);

    expect(mockHandlePageChange).toHaveBeenCalledTimes(1);
    expect(mockHandlePageChange).toHaveBeenCalledWith(1);
  });

  test('should disable button if the first page', () => {
    render(
      <Pagination
        currentPage={1}
        total={30}
        handlePageChange={mockHandlePageChange}
      />
    );

    const btn = screen.getByText('<');

    expect(btn).toBeDisabled();
  });

  test('should disable button if the last page', () => {
    render(
      <Pagination
        currentPage={3}
        total={30}
        handlePageChange={mockHandlePageChange}
      />
    );

    const btn = screen.getByText('>');

    expect(btn).toBeDisabled();
  });
});
