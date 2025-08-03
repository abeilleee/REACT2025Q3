import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckBox } from './Checkbox';

describe('CheckBox tests', () => {
  const onChangeMock = vi.fn();

  test('should render without crashing', () => {
    render(<CheckBox onChange={onChangeMock} checked />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
  });

  test('should be checked when the checked prop is true', () => {
    render(<CheckBox onChange={onChangeMock} checked />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeChecked();
  });

  test('should not be checked when the checked prop is false', () => {
    render(<CheckBox onChange={onChangeMock} checked={false} />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
  });

  test('should not call outer click when user clicked', async () => {
    const user = userEvent.setup();
    const onOuterClick = vi.fn();

    render(
      <div onClick={onOuterClick}>
        <CheckBox onChange={onChangeMock} checked={false} />
      </div>
    );

    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);

    expect(onOuterClick).toHaveBeenCalledTimes(0);
  });
});
