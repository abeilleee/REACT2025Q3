import { type FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Header } from '@/components/ui';
import { PATHS } from '@/services/router/constants';
import styles from './Layout.module.scss';

export const Layout: FC = () => {
  const location = useLocation();
  const isRoot = location.pathname === PATHS.ROOT;

  const mainStyle = isRoot
    ? `${styles.content} ${styles['content-flex-start']}`
    : styles.content;

  return (
    <div className={styles.container}>
      <Header />
      <main className={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
