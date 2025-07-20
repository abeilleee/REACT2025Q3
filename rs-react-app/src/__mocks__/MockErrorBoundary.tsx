import { Component, type ReactNode } from 'react';
import { MockFallback } from './MockFallback';

type MockErrorBoundaryProps = {
  children: ReactNode;
};

type MockErrorBoundaryState = {
  hasError: boolean;
};

export class MockErrorBoundary extends Component<
  MockErrorBoundaryProps,
  MockErrorBoundaryState
> {
  state: MockErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <MockFallback />;
    }

    return this.props.children;
  }
}
