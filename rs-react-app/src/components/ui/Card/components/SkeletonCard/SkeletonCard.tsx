import { type FC } from 'react';
import { Skeleton } from '@/components';
import { cloneComponent } from '@/utils';
import styles from './SkeletonCard.module.scss';

export const SkeletonCard: FC = () => {
  return (
    <div className={styles.card} data-testid="skeleton-card">
      <Skeleton className={styles.text} />
      <Skeleton className={styles.image} />
      {cloneComponent({
        element: <Skeleton className={styles.text} />,
        count: 3,
      })}
      {cloneComponent({
        element: <Skeleton className={styles.ability} />,
        count: 3,
      })}
    </div>
  );
};
