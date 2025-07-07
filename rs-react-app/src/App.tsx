import { Component } from 'react';
import { Layout } from '@/components';
import { MainPage } from '@/pages/MainPage';

class App extends Component {
  render() {
    return (
      <Layout>
        <MainPage />
      </Layout>
    );
  }
}

export default App;
