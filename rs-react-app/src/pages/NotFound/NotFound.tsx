import Image from 'next/image';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { notFound } from '@/assets';
import { Button } from '@/components/ui';
import { PATHS } from '@/services/router/constants';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(PATHS.ROOT);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Oops! Page not found...</p>
      <div className={styles['img-box']}>
        <Image src={notFound} alt="pikachu" height="256" />
      </div>
      <Button onClick={onClick} textContent="Back to main" />
    </div>
  );
};

export default NotFound;
