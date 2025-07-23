import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui';
import { PATHS } from '@/services/router/constants';
import type { FC } from 'react';

export const About: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(PATHS.ROOT);
  };
  return (
    <>
      <div>About</div>
      <Button onClick={onClick} textContent="Back to main"></Button>
    </>
  );
};
