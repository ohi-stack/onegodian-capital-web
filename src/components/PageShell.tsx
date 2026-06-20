'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  ['Offerings', '/offerings'],
  ['Investor Portal', '/investor-portal'],
  ['Disclosures', '/disclosures'],
  ['Certificates', '/certificates'],
  ['Readiness', '/readiness'],
  ['Records', '/records'],
  ['Status', '/status'],
];

const footerGroups = [
  {
    title: 'Portal',
    links: [
      ['Home', '/'],
      ['Offerings', '/offerings'],
      ['Investor Portal', '/investor-portal'],
      ['Records', '/records'],
    ],
  },
  {
    title: 'Control',
    links: [
      ['Disclosures', '/disclosures'],
      ['Certificates', '/certificates'],
      ['Readiness', '/readiness'],
      ['Status', '/status'],
    ],
  },
  {
    title: 'Policies',
    links: [
      ['Risk Disclosures', '/risk-disclosures'],
      ['Legal Notices', '/legal-notices'],
      ['Refund & Cancellation', '/refund-cancellation-policy'],
      ['Data Retention', '/data-retention-policy'],
    ],
  },
];

export default function PageShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="brand brand-logo" href="/" aria-label="ONEGODIAN Capital home">
            <Image
              src="/onegodian-capital-logo.svg"
              alt="ONEGODIAN Capital Portal"
              width={560}
              height={160}
              priority
            />
          </Link>
          <nav className="nav-links" aria-label="Capital Portal navigation">
            {navItems.map(([label, href]) => {
              const active = pathname === href || (href !== '/' && pathname?.startsWith(href));
              return (
                <Link key={href} href={href} className={active ? 'active' : undefined}>
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="site-footer-inner footer-grid">
          <div className="footer-brand">
            <Image
              src="/onegodian-capital-logo.svg"
              alt="ONEGODIAN Capital Portal"
              width={360}
              height={103}
            />
            <p>
              ONEGODIAN Capital Portal is controlled software infrastructure for recordkeeping, disclosure review, readiness tracking, and certificate verification. It does not independently create, approve, or validate any securities offering.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div className="footer-links" key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map(([label, href]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
