import { type FC } from 'react';
import { sun, moon } from '@/assets/images';
import { useTheme } from '@/hooks';
import { THEME } from '@/utils/constants';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === String(THEME.DARK);
  const img = isDarkTheme ? sun : moon;

  const handleSwitchTheme = () => {
    if (isDarkTheme) {
      setTheme(THEME.LIGHT);
      return;
    }
    setTheme(THEME.DARK);
  };

  return (
    <div
      className={styles.switcher}
      onClick={handleSwitchTheme}
      data-theme={theme}
      data-testid="switcher"
    >
      <img src={img} alt="theme" width={35} height={35} />
    </div>
  );
};
