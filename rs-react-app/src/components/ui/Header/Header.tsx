import { type FC } from 'react';
import styles from './Header.module.scss';
import logo from '@/assets/images/logo.png';
import { ErrorButton } from '@/components/common';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <ErrorButton />
    </header>
  );
};
