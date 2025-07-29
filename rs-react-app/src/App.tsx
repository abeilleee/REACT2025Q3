import { type FC } from 'react';
import { ThemeProvider } from '@/shared/providers';
import { Router } from './services/router/Router';

const App: FC = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;
