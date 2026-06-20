import PageShell from '@/components/PageShell';

const cards = [
  ['Access Layer', 'Investor-facing access should remain gated by disclosure review, identity checks, and applicable eligibility rules.'],
  ['Record View', 'View assigned records, disclosure acknowledgements, ledger references, and certificate status when enabled.'],
  ['Support Path', 'Use controlled support channels for corrections, document access, or certificate verification questions.'],
];

export default function InvestorPortalPage() {
  return (
    <PageShell>
      <section className="hero">
        <div className="page-section">
          <div className="eyebrow">Investor Interface</div>
          <h1>Investor Portal</h1>
          <p>Controlled access for eligible investor-facing records, document review status, disclosure acknowledgements, certificate references, and ledger history.</p>
        </div>
      </section>
      <section className="page-section">
        <div className="grid">
          {cards.map(([title, description]) => (
            <article className="card" key={title}>
              <span className="status-badge">Controlled</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="notice">
          <strong>Important:</strong> This portal is a recordkeeping and document-access interface. It does not independently create, approve, or validate any securities offering.
        </div>
      </section>
    </PageShell>
  );
}
