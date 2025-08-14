import { type FC } from 'react';
import { Spinner } from '@/components/ui';
import styles from './Fallback.module.scss';

export const Fallback: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Spinner />
    </div>
  );
};
