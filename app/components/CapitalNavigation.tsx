import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/offerings', label: 'Offerings' },
  { href: '/investor-portal', label: 'Investor Portal' },
  { href: '/disclosures', label: 'Disclosures' },
  { href: '/certificates', label: 'Certificates' },
  { href: '/production-readiness', label: 'Readiness' },
  { href: '/registry', label: 'Registry' },
];

export default function CapitalNavigation() {
  return (
    <header className="capitalNav" aria-label="ONEGODIAN Capital Portal navigation">
      <div className="wrap capitalNavInner">
        <Link className="capitalBrand" href="/" aria-label="ONEGODIAN Capital Portal home">
          ONEGODIAN CAPITAL PORTAL™
        </Link>
        <nav className="capitalLinks" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
