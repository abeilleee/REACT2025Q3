import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Button } from './Button';
import styles from './Button.module.scss';

describe('Button test', () => {
  const onCLickMock = vi.fn();

  test('should render Button with the correct text content', () => {
    render(<Button textContent="Search" onClick={onCLickMock} />);

    const element = screen.getByText('Search');

    expect(element).toBeInTheDocument();
  });

  test('should call onClick handler when clicked', async () => {
    render(<Button textContent="Search" onClick={onCLickMock} />);

    const element = screen.getByText('Search');
    const user = userEvent.setup();

    await user.click(element);

    expect(onCLickMock).toHaveBeenCalledTimes(1);
  });

  test('should have the correct class name', () => {
    render(<Button textContent="Search" onClick={onCLickMock} />);

    const element = screen.getByRole('button');

    expect(element).toHaveClass(styles.button);
  });
});
