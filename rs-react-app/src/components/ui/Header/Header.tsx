import { Component } from 'react';
import styles from './Header.module.scss';
import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui';

export type HeaderState = {
  hasError: boolean;
};
export class Header extends Component {
  state: HeaderState = {
    hasError: false,
  };

  private onClick = () => {
    this.setState({ hasError: true });
  };

  private simulateError() {
    if (this.state.hasError) {
      throw new Error('Simulated error');
    }
  }

  render() {
    this.simulateError();

    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <Button onClick={this.onClick} textContent="Throw Error" />
      </header>
    );
  }
}
