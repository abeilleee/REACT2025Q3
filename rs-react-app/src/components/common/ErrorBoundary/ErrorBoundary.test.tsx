import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

describe('Error Boundary test', () => {
  vi.mock('@/components/common/ErrorFallback', () => ({
    ErrorFallback: () => <p>There was an error</p>,
  }));

  vi.spyOn(console, 'error').mockImplementation(() => {});

  test('should render children when there are no errors', () => {
    const childText = 'This is a child component';

    render(
      <ErrorBoundary>
        <div>{childText}</div>
      </ErrorBoundary>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  test('should render ErrorFallback ui when there is an error', () => {
    const errorMessage = 'Test Simulated error';
    const ComponentWithError = () => {
      throw new Error(errorMessage);
    };

    render(
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    );

    expect(screen.getByText('There was an error')).toBeInTheDocument();
  });
});
