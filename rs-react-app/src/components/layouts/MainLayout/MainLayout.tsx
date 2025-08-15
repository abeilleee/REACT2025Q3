import { ReactNode, type FC } from 'react';
import MainPage from '@/pages/MainPage/MainPage';
import styles from './MainLayout.module.scss';
interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['search-container']}>
        <MainPage />
      </div>
      <section className={styles.details}>{children}</section>
    </div>
  );
};
