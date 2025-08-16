'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, type FC } from 'react';
import { Footer, Header } from '@/components/ui';
import { PATHS } from '@/utils/constants';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const path = usePathname();
  const isRoot = path.includes(PATHS.ROOT);

  const mainStyle = isRoot
    ? `${styles.content} ${styles['content-flex-start']}`
    : styles.content;

  return (
    <div className={styles.container}>
      <Header />
      <main className={mainStyle}>{children}</main>
      <Footer />
    </div>
  );
};
