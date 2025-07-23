import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/components/ui';
import styles from './Layout.module.scss';

export const Layout: FC = () => {
  return (
    <div className={styles.container} data-testid={'layout-container'}>
      <Header />
      <main className={styles.content} data-testid={'layout-main'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
