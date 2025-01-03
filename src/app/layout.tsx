import { Providers } from '@/app/providers';
import { SettingsProvider } from '@/shared/providers/settings-provider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Assistant',
  description: 'Track your expenses, income, and financial goals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SettingsProvider>
            {children}
          </SettingsProvider>
        </Providers>
      </body>
    </html>
  );
}