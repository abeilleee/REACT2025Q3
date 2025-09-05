import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { checkTheForm, fillTheForm } from '@/app/tests/mock/utils';
import { getFileInBase64 } from '@/features/lib';
import * as utils from '@/features/lib/utils';
import { ReactHookForm } from './react-hook-form';

describe('Controlled form tests', () => {
  test('should render all required fields', () => {
    render(<ReactHookForm />);
    checkTheForm();
  });

  test('should validate name field', async () => {
    const user = userEvent.setup();
    render(<ReactHookForm />);

    const nameInput = screen.getByLabelText('Name:');
    await user.type(nameInput, 'a');

    expect(
      screen.getByText('The first letter of the name must be uppercased')
    ).toBeInTheDocument();
  });

  test('should validate age field when there is a letter in the input', async () => {
    const user = userEvent.setup();
    render(<ReactHookForm />);

    const input = screen.getByLabelText('Age:');
    await user.type(input, 'a');

    expect(
      screen.getByText('Age must be a positive number')
    ).toBeInTheDocument();
  });

  test('should validate age field when there is a negative number in the input', async () => {
    const user = userEvent.setup();
    render(<ReactHookForm />);

    const input = screen.getByLabelText('Age:');
    await user.type(input, '-1');

    expect(
      screen.getByText('Age cannot have a negative value')
    ).toBeInTheDocument();
  });

  test('should validate email field', async () => {
    const user = userEvent.setup();
    render(<ReactHookForm />);

    const input = screen.getByLabelText('Email:');
    await user.type(input, '12');

    expect(screen.getByText('email must be a valid email')).toBeInTheDocument();
  });

  test('should validate gender field', async () => {
    const user = userEvent.setup();
    render(<ReactHookForm />);

    const checkbox = screen.getByLabelText('Female');

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test('should validate terms and conditions field', async () => {
    const user = userEvent.setup();
    render(<ReactHookForm />);

    const checkbox = screen.getByLabelText(
      'I agree to the Terms and Conditions'
    );

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();

    expect(
      screen.getByText('You must accept Terms and Conditions')
    ).toBeInTheDocument();
  });

  test('should send data to the store when data is valid', async () => {
    const spyGetBase64 = vi.spyOn(utils, 'getFileInBase64');
    const user = userEvent.setup();
    render(<ReactHookForm />);
    await fillTheForm(user);

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await user.click(submitButton);

    expect(submitButton).toBeEnabled();
    expect(spyGetBase64).toBeCalled();
  });

  test('should disable the submit button when the form is invalid', () => {
    render(<ReactHookForm />);

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeDisabled();
  });
});

describe('Convert to base 64 test', () => {
  test('should convert correctly', async () => {
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    const result = await getFileInBase64(file);

    expect(typeof result).toBe('string');
  });
});
