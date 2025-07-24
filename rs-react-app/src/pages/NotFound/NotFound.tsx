import { useNavigate } from 'react-router-dom';
import img from '@/assets/images/not-found.png';
import { Button } from '@/components/ui';
import { PATHS } from '@/services/router/constants';
import styles from './NotFound.module.scss';
import type { FC } from 'react';

export const NotFound: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(PATHS.ROOT);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Oops! Page not found...</p>
      <div className={styles['img-box']}>
        <img
          src={img}
          alt="pikachu"
          height="256px"
          data-testId={'img-not-found'}
        />
      </div>
      <Button onClick={onClick} textContent="Back to main"></Button>
    </div>
  );
};
