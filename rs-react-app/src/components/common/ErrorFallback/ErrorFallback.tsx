import Image from 'next/image';
import { type FC } from 'react';
import { pikachu } from '@/assets';
import { Button } from '@/components/ui';
import styles from './ErrorFallback.module.scss';

export const ErrorFallback: FC = () => {
  const onClick = () => {
    window.location.reload();
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Oops! It seems there was an error...</p>
      <Image src={pikachu} alt="pikachu" height="256" priority />
      <p className={styles.text}>Try to reload the page</p>
      <Button onClick={onClick} textContent="Reload" />
    </div>
  );
};
