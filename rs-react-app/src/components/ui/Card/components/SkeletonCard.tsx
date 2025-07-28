import { type FC } from 'react';
import styles from './SkeletonCard.module.scss';

export const SkeletonCard: FC = () => {
  return (
    <div className={styles.card} data-testid="skeleton-card">
      <div className={`${styles.pulsate} ${styles.text}`}></div>
      <div className={`${styles.pulsate} ${styles.image}`}></div>
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className={`${styles.pulsate} ${styles.text}`}></div>
      ))}
      {Array.from({ length: 2 }, (_, index) => (
        <div
          key={index}
          className={`${styles.pulsate} ${styles.ability}`}
        ></div>
      ))}
    </div>
  );
};
