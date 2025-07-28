import styles from './Spinner.module.scss';
import type { FC } from 'react';

export const Spinner: FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner} data-testid="spinner"></div>
      <p>Loading Pokemon...</p>
    </div>
  );
};
