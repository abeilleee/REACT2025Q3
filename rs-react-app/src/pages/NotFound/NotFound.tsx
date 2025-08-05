import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '@/assets/images/not-found.png';
import { Button } from '@/components/ui';
import { PATHS } from '@/services/router/constants';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(PATHS.ROOT);
  };

  return (
    <div className={styles.wrapper} data-testid="not-found">
      <p className={styles.text}>Oops! Page not found...</p>
      <div className={styles['img-box']}>
        <img src={img} alt="pikachu" height="256px" />
      </div>
      <Button onClick={onClick} textContent="Back to main" />
    </div>
  );
};

export default NotFound;
