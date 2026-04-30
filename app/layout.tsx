import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ONEGODIAN Capital Portal',
  description: 'Private capital infrastructure for offerings, disclosures, investor records, ledgers, and certificate verification.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://capital.onegodian.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
