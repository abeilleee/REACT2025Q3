import { useNavigate } from 'react-router-dom';
import { Button } from '@/components';
import { PATHS } from '@/services/router/constants';
import styles from './Error.module.scss';
import type { FC } from 'react';

type Props = {
  error: string;
};

export const Error: FC<Props> = ({ error }) => {
  const navigate = useNavigate();

  const onCLick = () => {
    navigate(PATHS.ROOT);
  };

  return (
    <div className={styles.error}>
      <p>{error}</p>
      <Button onClick={onCLick} textContent="Go Back"></Button>
    </div>
  );
};
