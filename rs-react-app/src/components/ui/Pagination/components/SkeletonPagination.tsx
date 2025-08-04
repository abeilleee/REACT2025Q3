import { type FC } from 'react';
import { Skeleton } from '@/components';
import styles from './SkeletonPagination.module.scss';

export const SkeletonPagination: FC = () => {
  return <Skeleton className={styles.skeleton} />;
};
