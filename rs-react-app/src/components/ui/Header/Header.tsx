import { Component } from 'react';
import styles from './Header.module.scss';
import logo from '@/assets/images/logo.png';

export class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </header>
    );
  }
}
