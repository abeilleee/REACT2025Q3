import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { MainPage } from '@/pages/pages';
import styles from './MainLayout.module.scss';

export const MainLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['search-container']}>
        <MainPage />
      </div>
      <section className={styles.details}>
        <Outlet />
      </section>
    </div>
  );
};
