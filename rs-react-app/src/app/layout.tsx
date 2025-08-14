import { Metadata } from 'next';
import { Mulish } from 'next/font/google';

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
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
