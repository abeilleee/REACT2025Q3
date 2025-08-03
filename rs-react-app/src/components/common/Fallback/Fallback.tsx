import { Spinner } from '@/components/ui';
import styles from './Fallback.module.scss';
import type { FC } from 'react';

export const Fallback: FC = () => {
  return (
    <div className={styles.wrapper} data-testid={'fallback'}>
      <Spinner />
    </div>
  );
};
