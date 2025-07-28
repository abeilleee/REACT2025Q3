import { type FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
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
    <ErrorBoundary>
      <div className={styles.container} data-testid={'layout-container'}>
        <Header />
        <main className={mainStyle} data-testid={'layout-main'}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
