import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ONEGODIAN Capital Portal',
  description:
    'Dedicated capital recordkeeping portal for offerings, disclosures, investor dashboards, ledgers, and certificate verification.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
