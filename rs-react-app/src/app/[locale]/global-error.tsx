'use client';

import '@/index.scss';
import 'normalize.css';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { Providers } from '@/app/Providers';
import { ErrorFallback } from '@/components';

export default function Error() {
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <Providers>
            <ErrorFallback />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
