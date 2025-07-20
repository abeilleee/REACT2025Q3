import { Component } from 'react';
import styles from './Header.module.scss';
import logo from '@/assets/images/logo.png';
import { ErrorButton } from '@/components/common';

export type HeaderState = {
  hasError: boolean;
};
export class Header extends Component {
  state: HeaderState = {
    hasError: false,
  };

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <ErrorButton />
      </header>
    );
  }
}
