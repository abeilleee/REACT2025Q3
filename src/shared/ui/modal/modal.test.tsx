import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UncontrolledForm } from '@/features/ui';
import { Modal, type ModalProps } from './modal';

describe('Modal tests', () => {
  const mockOnClose = vi.fn();

  const mockProps: ModalProps = {
    isOpen: true,
    onClose: mockOnClose,
    children: <div data-testid="modal-content">Modal Content</div>,
  };

  test('should not render when isOpen is false', () => {
    render(<Modal {...mockProps} isOpen={false} />);

    expect(screen.queryByTestId('modal-content')).not.toBeInTheDocument();
  });

  test('should render when isOpen is true', () => {
    render(<Modal {...mockProps} />);

    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  test('should focus on the first input', () => {
    render(
      <Modal isOpen onClose={mockOnClose} children={<UncontrolledForm />} />
    );

    const input = screen.getByLabelText('Name:');

    expect(document.activeElement).toBe(input);
  });

  test('should call onClose when backdrop is clicked', async () => {
    const user = userEvent.setup();
    render(<Modal {...mockProps} />);

    const backdrop = screen.getByTestId('backdrop');
    await user.click(backdrop);

    expect(mockOnClose).toHaveBeenCalled();
  });

  test('should call onClose when Escape is pressed', async () => {
    const user = userEvent.setup();
    render(<Modal {...mockProps} />);

    await user.keyboard('{Escape}');

    expect(mockOnClose).toHaveBeenCalled();
  });
});
