import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';
import { notFound } from '@/assets';
import { Button } from '@/components/ui';
import { PATHS } from '@/utils/constants';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Oops! Page not found...</p>
      <div className={styles['img-box']}>
        <Image src={notFound} alt="pikachu" width={540} height={256} priority />
      </div>
      <Link href={PATHS.ROOT}>
        <Button textContent="Back to main" />
      </Link>
    </div>
  );
};

export default NotFound;
