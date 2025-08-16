'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { type FC } from 'react';
import { logo } from '@/assets';
import { Button, ThemeSwitcher, LangSwitcher } from '@/components';
import { PATHS } from '@/utils/constants';
import styles from './Header.module.scss';

export const Header: FC = () => {
  const path = usePathname();
  const t = useTranslations('Header');
  const isAboutPage = path.includes(PATHS.ABOUT);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" priority />
      </div>
      <div className={styles['right-box']}>
        <LangSwitcher />
        <ThemeSwitcher />
        {!isAboutPage && (
          <Link href={PATHS.ABOUT}>
            <Button textContent={t('button')} />
          </Link>
        )}
      </div>
    </header>
  );
};
