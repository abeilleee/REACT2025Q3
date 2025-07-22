import { useState, type FC } from 'react';
import { Button } from '@/components/ui';

export const ErrorButton: FC = () => {
  const [hasError, setHasError] = useState(false);

  const handleClick = () => {
    setHasError(true);
  };

  const simulateError = () => {
    if (hasError) {
      throw new Error('Simulated error');
    }
  };

  simulateError();

  return <Button onClick={handleClick} textContent="Throw Error" />;
};
