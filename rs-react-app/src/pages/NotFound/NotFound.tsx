import img from '@/assets/images/not-found.png';
import type { FC } from 'react';
import styles from './NotFound.module.scss';
import { Button } from '@/components/ui';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/services/router/constants';

export const NotFound: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(PATHS.ROOT);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Oops! Page not found...</p>
      <div className={styles['img-box']}>
        <img src={img} alt="pikachu" height="256px" />
      </div>
      <Button onClick={onClick} textContent="Back to main"></Button>
    </div>
  );
};
