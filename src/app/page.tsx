import Link from 'next/link';
import PageShell from '@/components/PageShell';

const featuredOfferings = [
  {
    title: 'ONEGODIAN Infrastructure Bond',
    code: 'OPIB-2025',
    terms: '7.50% · 5 Years',
    href: '/offerings',
  },
  {
    title: 'ONEGODIAN Platform Growth Note',
    code: 'OPGN-2025',
    terms: '8.00% · 7 Years',
    href: '/offerings',
  },
];

const boundaryCards = [
  {
    title: 'WordPress Public Layer',
    description: 'Public pages, educational copy, disclosure access, navigation, and campaign presentation.',
  },
  {
    title: 'WooCommerce Checkout Layer',
    description: 'Checkout-only commerce handling for approved products or document access where applicable.',
  },
  {
    title: 'Capital Portal Record Layer',
    description: 'Ledgers, certificates, readiness, disclosure gates, and investor-facing recordkeeping.',
  },
  {
    title: 'API / Verification Layer',
    description: 'Status checks, document verification, certificate lookup, and future integration endpoints.',
  },
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero capital-hero">
        <div className="page-section">
          <div className="portal-title">ONEGODIAN CAPITAL PORTAL™</div>
          <div className="eyebrow">Private Capital Infrastructure</div>
          <h1>Notes, bonds, ledgers, disclosures, and verifiable certificates.</h1>
          <p>
            The ONEGODIAN Capital Portal is a controlled recordkeeping and investor-facing interface for capital instrument documentation. It does not independently create, approve, or validate any securities offering.
          </p>
          <div className="cta-row">
            <Link className="button" href="/offerings">View Offerings</Link>
            <Link className="button secondary" href="/readiness">Review Readiness</Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow dark">Offering Records</div>
            <h2>Current record examples</h2>
          </div>
          <Link className="button compact" href="/offerings">Open Offerings</Link>
        </div>
        <div className="grid two">
          {featuredOfferings.map((offering) => (
            <article className="card offering-card" key={offering.code}>
              <span className="status-badge">Record Review</span>
              <h3>{offering.title}</h3>
              <p>{offering.code}</p>
              <p><strong>{offering.terms}</strong></p>
              <Link className="button" href={offering.href}>Review Details</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section boundary-section">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow dark">System Separation</div>
            <h2>Operating Boundary</h2>
          </div>
        </div>
        <p className="section-lead">
          WordPress presents public information, WooCommerce is checkout-only, the Capital Portal manages records, disclosures gate issuance, and certificates provide verification.
        </p>
        <div className="boundary-grid">
          {boundaryCards.map((card, index) => (
            <article className="boundary-card" key={card.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
        <div className="boundary-note">
          Operating boundary: public presentation, commerce checkout, capital records, and verification should remain separated so users understand what each system does and does not do.
        </div>
      </section>
    </PageShell>
  );
}
