import { type FC } from 'react';

export const Spinner: FC = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-5 text-center">
      <div className="spinner" data-testid="spinner" />
      <p>Loading...</p>
    </div>
  );
};
