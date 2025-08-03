import { type FC } from 'react';
import { Provider } from 'react-redux';
import { Router } from '@/services';
import { ThemeProvider } from '@/shared/providers';
import { store } from '@/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
