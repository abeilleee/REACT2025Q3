import { FC, ReactNode } from 'react';
import { StoreProvider, ThemeProvider } from '@/shared/providers';

type ProvidersProps = {
  children: ReactNode;
};

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreProvider>
  );
};
