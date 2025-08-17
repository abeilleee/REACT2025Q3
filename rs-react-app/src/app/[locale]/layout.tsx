import { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import '@/index.scss';
import 'normalize.css';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Providers } from '@/app/Providers';
import { Layout } from '@/components';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Pokemon',
  icons: '/favicon.svg',
};

const mulish = Mulish({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={mulish.className}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
