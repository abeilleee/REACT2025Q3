'use client';

import '@/index.scss';
import 'normalize.css';
import { ErrorFallback } from '@/components';
import { ThemeProvider } from '@/shared/providers';

export default function GlobalError() {
  return (
    <html>
      <body>
        <ThemeProvider>
          <ErrorFallback />
        </ThemeProvider>
      </body>
    </html>
  );
}
