import { render, screen } from '@testing-library/react';
import { mockFormData } from '@/app/tests/mock';
import { FormCard } from './form-card';

describe('Form card tests', () => {
  test('should render all data correctly', () => {
    render(<FormCard cardData={mockFormData} newData={false} />);

    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText(mockFormData.name)).toBeInTheDocument();

    expect(screen.getByText('Age:')).toBeInTheDocument();
    expect(screen.getByText(mockFormData.age)).toBeInTheDocument();

    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText(mockFormData.email)).toBeInTheDocument();

    expect(screen.getByText('Password:')).toBeInTheDocument();
    expect(screen.getByText(mockFormData.password)).toBeInTheDocument();

    expect(screen.getByText('Gender:')).toBeInTheDocument();
    expect(screen.getByText(mockFormData.gender)).toBeInTheDocument();

    expect(screen.getByText('Country:')).toBeInTheDocument();
    expect(screen.getByText(mockFormData.country)).toBeInTheDocument();

    expect(screen.getByText('T&C agreement:')).toBeInTheDocument();
    expect(screen.getByText('true')).toBeInTheDocument();
  });

  test('should render new indicator for last entered data', () => {
    render(<FormCard cardData={mockFormData} newData />);

    expect(screen.getByTestId('new')).toBeInTheDocument();
  });
});
