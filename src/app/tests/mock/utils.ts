import { screen } from '@testing-library/react';
import { type UserEvent } from '@testing-library/user-event';
import { mockFormData } from './mock-data';

export const checkTheForm = () => {
  expect(screen.getByLabelText('Name:')).toBeInTheDocument();
  expect(screen.getByLabelText('Age:')).toBeInTheDocument();
  expect(screen.getByLabelText('Email:')).toBeInTheDocument();
  expect(screen.getByLabelText('Enter password:')).toBeInTheDocument();
  expect(screen.getByLabelText('Confirm password:')).toBeInTheDocument();
  expect(screen.getByText('Gender')).toBeInTheDocument();
  expect(screen.getByLabelText('Female')).toBeInTheDocument();
  expect(screen.getByLabelText('Male')).toBeInTheDocument();
  expect(
    screen.getByLabelText('I agree to the Terms and Conditions')
  ).toBeInTheDocument();
  expect(screen.getByLabelText('Image:')).toBeInTheDocument();
  expect(screen.getByLabelText('Country:')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
};

export const fillTheForm = async (user: UserEvent) => {
  const file = new File(['test'], 'test.png', { type: 'image/png' });

  await user.type(screen.getByLabelText('Name:'), mockFormData.name);
  await user.type(screen.getByLabelText('Age:'), String(mockFormData.age));
  await user.type(screen.getByLabelText('Email:'), mockFormData.email);
  await user.type(
    screen.getByLabelText('Enter password:'),
    mockFormData.password
  );
  await user.type(
    screen.getByLabelText('Confirm password:'),
    mockFormData.secondPassword
  );
  await user.click(screen.getByLabelText('Female'));
  await user.click(
    screen.getByLabelText('I agree to the Terms and Conditions')
  );
  await user.type(screen.getByLabelText('Country:'), mockFormData.country);
  await user.upload(screen.getByLabelText('Image:'), [file]);
};
