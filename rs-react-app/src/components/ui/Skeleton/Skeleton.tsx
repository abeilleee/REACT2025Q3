import { type FC } from 'react';
import styles from './Skeleton.module.scss';

type SkeletonProps = {
  className: string;
};

export const Skeleton: FC<SkeletonProps> = ({ className }) => {
  return <div className={`${styles.pulsate} ${className}`} />;
};
