import { Component } from 'react';
import { Button } from '@/components/ui';

type ErrorButtonState = {
  hasError: boolean;
};

export class ErrorButton extends Component {
  state: ErrorButtonState = {
    hasError: false,
  };

  private handleClick = () => {
    this.setState({ hasError: true });
  };

  private simulateError() {
    if (this.state.hasError) {
      throw new Error('Simulated error');
    }
  }

  render() {
    this.simulateError();

    return <Button onClick={this.handleClick} textContent="Throw Error" />;
  }
}
