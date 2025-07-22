import { type FC } from 'react';
import { Layout } from '@/components';
import { MainPage } from '@/pages/MainPage';

const App: FC = () => {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
};

export default App;
