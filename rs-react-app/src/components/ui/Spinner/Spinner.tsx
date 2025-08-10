import { type FC } from 'react';
import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner} data-testid="spinner" />
      <p>Loading...</p>
    </div>
  );
};
