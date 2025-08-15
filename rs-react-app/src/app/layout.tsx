import { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import '@/index.scss';
import 'normalize.css';
import { Layout } from '@/components';
import { Providers } from './Providers';

export const metadata: Metadata = {
  title: 'Pokemon',
  icons: '/favicon.svg',
};

const mulish = Mulish({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
