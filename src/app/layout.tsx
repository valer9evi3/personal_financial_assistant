import { Providers } from '@/app/providers';
import { SettingsProvider } from '@/shared/providers/settings-provider';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Financial Assistant',
  description: 'Track your expenses, income, and financial goals',
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['cyrillic'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={roboto.variable}>
        <Providers>
          <SettingsProvider>{children}</SettingsProvider>
        </Providers>
      </body>
    </html>
  );
}
