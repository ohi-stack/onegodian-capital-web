import Link from 'next/link';
import PageShell from '@/components/PageShell';

const portalCards = [
  ['Offerings', '/offerings', 'Review disclosure-backed offering records and test-mode capital instrument information.'],
  ['Investor Portal', '/investor-portal', 'View account-linked instruments, certificates, disclosure acceptances, and ledger records.'],
  ['Disclosures', '/disclosures', 'Review the disclosure-first workflow required before any instrument issuance.'],
  ['Certificates', '/certificates', 'Verify certificate records, identifiers, status, and hash references.'],
  ['Compliance Status', '/compliance-status', 'Track legal, payment, data, permission, and tax/accounting readiness items.'],
  ['Support', '/support', 'Request help for dashboard access, record corrections, and certificate verification.'],
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero">
        <div className="page-section">
          <div className="eyebrow">Capital recordkeeping infrastructure</div>
          <h1>ONEGODIAN Capital Portal</h1>
          <p>
            Dedicated software infrastructure for offering records, disclosure review, investor dashboards, ledger history, and certificate verification connected to ONEGODIAN, LLC.
          </p>
          <div className="cta-row">
            <Link className="button" href="/offerings">View Offerings</Link>
            <Link className="button secondary" href="/investor-portal">Open Investor Portal</Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="notice">
          <strong>Important notice:</strong> This platform does not itself create, approve, or validate any securities offering. All offering terms, disclosure packets, eligibility rules, payment workflows, and tax/accounting treatment require qualified review before live public use.
        </div>
      </section>

      <section className="page-section">
        <h2>Portal Sections</h2>
        <div className="grid">
          {portalCards.map(([title, href, description]) => (
            <Link className="card" href={href} key={href}>
              <h3>{title}</h3>
              <p>{description}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
