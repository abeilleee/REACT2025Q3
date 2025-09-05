import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { checkTheForm, fillTheForm } from '@/app/tests/mock/utils';
import * as utils from '@/features/lib/utils';
import { UncontrolledForm } from './uncontrolled-form';

describe('Uncontrolled form tests', () => {
  vi.mock('@/features/lib/utils', async () => {
    const originalModule = await vi.importActual('@/features/lib/utils');

    return {
      ...originalModule,
      transferToFileList: vi.fn(),
    };
  });

  afterAll(() => {
    vi.resetAllMocks();
  });

  test('should render all required fields', () => {
    render(<UncontrolledForm />);
    checkTheForm();
  });

  test('should call validate after submit and show errors', async () => {
    const user = userEvent.setup();
    const spyValidate = vi.spyOn(utils, 'validate');
    const spyParse = vi.spyOn(utils, 'parseDataToFormValues');
    const spyTransfer = vi.spyOn(utils, 'transferToFileList');

    render(<UncontrolledForm />);

    const button = screen.getByRole('button', { name: 'Submit' });

    await fillTheForm(user);
    await user.click(button);

    expect(spyValidate).toHaveBeenCalled();
    expect(spyParse).toHaveBeenCalled();
    expect(spyTransfer).toHaveBeenCalled();
  });

  test('should handle gender selection', async () => {
    const user = userEvent.setup();
    render(<UncontrolledForm />);

    const maleRadio = screen.getByLabelText('Male');
    const femaleRadio = screen.getByLabelText('Female');

    await user.click(maleRadio);
    expect(maleRadio).toBeChecked();
    expect(femaleRadio).not.toBeChecked();

    await user.click(femaleRadio);
    expect(femaleRadio).toBeChecked();
    expect(maleRadio).not.toBeChecked();
  });

  test('should handle terms checkbox', async () => {
    const user = userEvent.setup();
    render(<UncontrolledForm />);

    const termsCheckbox = screen.getByLabelText(
      'I agree to the Terms and Conditions'
    );

    expect(termsCheckbox).not.toBeChecked();
    await user.click(termsCheckbox);
    expect(termsCheckbox).toBeChecked();
  });
});
