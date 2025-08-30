import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/shared/ui';

export const Layout: FC = () => {
  return (
    <section className="flex min-h-screen flex-col" data-testid={'section'}>
      <Header />
      <main className="grow" data-testid={'main'}>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};
