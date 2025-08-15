'use client';

import '@/index.scss';
import 'normalize.css';
import { ErrorFallback } from '@/components';
import { Providers } from './Providers';

export default function GlobalError() {
  return (
    <html>
      <body>
        <Providers>
          <ErrorFallback />
        </Providers>
      </body>
    </html>
  );
}
