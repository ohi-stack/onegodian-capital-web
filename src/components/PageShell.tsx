import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  ['Home', '/'],
  ['Offerings', '/offerings'],
  ['Investor Portal', '/investor-portal'],
  ['Disclosures', '/disclosures'],
  ['Certificates', '/certificates'],
  ['Compliance', '/compliance-status'],
  ['Support', '/support'],
];

export default function PageShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="brand brand-logo" href="/" aria-label="ONEGODIAN Capital home">
            <Image
              src="/onegodian-capital-logo.svg"
              alt="ONEGODIAN — In God We Build"
              width={560}
              height={160}
              priority
            />
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          ONEGODIAN Capital Portal is software infrastructure for recordkeeping, disclosure review, and certificate verification. Legal review is required before live capital workflows.
        </div>
      </footer>
    </div>
  );
}
