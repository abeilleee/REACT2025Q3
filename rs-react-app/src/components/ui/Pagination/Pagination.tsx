import { Button } from '@/components/ui';
import { usePagination } from '@/hooks';
import { ONE } from '@/utils/constants';
import styles from './Pagination.module.scss';
import type { FC } from 'react';

type PaginationProps = {
  currentPage: number;
  total: number;
  handlePageChange: (count: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  total,
  handlePageChange,
}) => {
  const paginationArray = usePagination({
    currentPage,
    total,
  });

  const handleNextClick = () => {
    handlePageChange(currentPage + ONE);
  };

  const handlePrevClick = () => {
    handlePageChange(currentPage - ONE);
  };

  const lastPage = paginationArray ? paginationArray.at(-1) : ONE;

  return (
    <div className={styles.wrapper}>
      <nav className={styles.pagination}>
        <Button
          className={styles.arrow}
          textContent="&lt;"
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        ></Button>

        {paginationArray?.map((page, index) => (
          <button
            key={index}
            className={`${styles.page} ${
              page === currentPage ? styles.active : ''
            }`}
            onClick={
              typeof page === 'number'
                ? () => handlePageChange(page)
                : undefined
            }
            disabled={typeof page !== 'number'}
          >
            {page}
          </button>
        ))}

        <Button
          className={styles.arrow}
          textContent="&gt;"
          onClick={handleNextClick}
          disabled={currentPage === lastPage}
        ></Button>
      </nav>
    </div>
  );
};
