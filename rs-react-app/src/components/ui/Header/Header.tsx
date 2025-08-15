'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type FC } from 'react';
import { logo } from '@/assets';
import { Button, ThemeSwitcher } from '@/components/ui';
import { PATHS } from '@/utils/constants';
import styles from './Header.module.scss';

export const Header: FC = () => {
  const path = usePathname();
  const isAboutPage = path === PATHS.ABOUT;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" priority />
      </div>
      <div className={styles['right-box']}>
        <ThemeSwitcher />
        {!isAboutPage && (
          <Link href={PATHS.ABOUT}>
            <Button textContent="About" />
          </Link>
        )}
      </div>
    </header>
  );
};
