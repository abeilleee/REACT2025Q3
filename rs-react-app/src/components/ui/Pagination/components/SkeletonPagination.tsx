import styles from './SkeletonPagination.module.scss';
import type { FC } from 'react';

export const SkeletonPagination: FC = () => {
  return <div className={styles.skeleton} data-testid={'skeletons'}></div>;
};
