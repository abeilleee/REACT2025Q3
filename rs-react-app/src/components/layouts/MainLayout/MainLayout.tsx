import { ReactNode, type FC } from 'react';
import { ReturnData } from '@/app/api/fetchData';
import MainPage from '@/views/MainPage/MainPage';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: ReactNode;
  searchTerm: string;
  currentPage: number;
  fetchData: ReturnData;
}

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  searchTerm,
  fetchData,
  currentPage,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['search-container']}>
        <MainPage
          searchTerm={searchTerm}
          fetchData={fetchData}
          currentPage={currentPage}
        />
      </div>
      <section className={styles.details}>{children}</section>
    </div>
  );
};
