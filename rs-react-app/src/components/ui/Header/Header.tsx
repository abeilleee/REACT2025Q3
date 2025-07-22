import { type FC } from 'react';
import logo from '@/assets/images/logo.png';
import { ErrorButton } from '@/components/common';
import styles from './Header.module.scss';

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
