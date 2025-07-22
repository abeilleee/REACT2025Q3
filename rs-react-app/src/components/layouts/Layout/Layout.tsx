import { type FC, type ReactNode } from 'react';
import { Footer, Header } from '@/components/ui';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container} data-testid={'layout-container'}>
      <Header />
      <main className={styles.content} data-testid={'layout-main'}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
