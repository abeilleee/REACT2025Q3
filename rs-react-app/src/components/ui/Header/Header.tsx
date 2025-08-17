'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { type FC } from 'react';
import { logo } from '@/assets';
import { ThemeSwitcher, LangSwitcher } from '@/components';
import { Link } from '@/i18n/navigation';
import { PATHS } from '@/utils/constants';
import styles from './Header.module.scss';

export const Header: FC = () => {
  const path = usePathname();
  const t = useTranslations('Header');
  const isAboutPage = path.includes(PATHS.ABOUT);

  return (
    <header className={styles.header}>
      <Link href={PATHS.ROOT}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" priority />
        </div>
      </Link>
      <div className={styles['right-box']}>
        <LangSwitcher />
        <ThemeSwitcher />
        {!isAboutPage && (
          <Link href={PATHS.ABOUT} className="link">
            {t('button')}
          </Link>
        )}
      </div>
    </header>
  );
};
