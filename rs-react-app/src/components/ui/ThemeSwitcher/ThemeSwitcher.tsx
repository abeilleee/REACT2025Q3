'use client';

import Image from 'next/image';
import { useEffect, useState, type FC } from 'react';
import { sun, moon } from '@/assets';
import { useTheme } from '@/hooks';
import { THEME } from '@/utils/constants';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === THEME.DARK;
  const [img, setImg] = useState(moon);

  const handleSwitchTheme = () => {
    if (isDarkTheme) {
      setTheme(THEME.LIGHT);
      return;
    }
    setTheme(THEME.DARK);
  };

  useEffect(() => {
    const img = isDarkTheme ? sun : moon;
    setImg(img);
  }, [isDarkTheme]);

  return (
    <div
      className={styles.switcher}
      onClick={handleSwitchTheme}
      data-theme={theme}
      suppressHydrationWarning
    >
      <Image src={img} alt="theme" width={35} height={35} />
    </div>
  );
};
