import Image from 'next/image';
import { type FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { logo } from '@/assets';
import { Button, ThemeSwitcher } from '@/components/ui';
import { PATHS } from '@/services/router/constants';
import styles from './Header.module.scss';

export const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAboutPage = location.pathname === PATHS.ABOUT;

  const onClick = () => {
    navigate(PATHS.ABOUT);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" priority />
      </div>
      <div className={styles['right-box']}>
        <ThemeSwitcher />
        {!isAboutPage && <Button onClick={onClick} textContent="About" />}
      </div>
    </header>
  );
};
