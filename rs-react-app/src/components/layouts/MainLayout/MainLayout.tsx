import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { MainPage } from '@/pages';
import styles from './MainLayout.module.scss';

export const MainLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles['search-container']}
        data-testid="search-container"
      >
        <MainPage />
      </div>
      <section className={styles.details} data-testid="section">
        <Outlet />
      </section>
    </div>
  );
};
