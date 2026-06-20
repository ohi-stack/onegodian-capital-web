import PageShell from '@/components/PageShell';

const recordTypes = [
  ['Offering Records', 'Draft and review-stage instrument records, terms summaries, disclosure references, and lifecycle status.'],
  ['Disclosure Records', 'Acknowledgement history, packet references, review gates, and controlled-access documentation.'],
  ['Certificate Records', 'Certificate identifiers, verification status, hash references, and related ledger pointers.'],
  ['Ledger Records', 'Recordkeeping references for issuance, updates, corrections, and historical traceability.'],
];

export default function RecordsPage() {
  return (
    <PageShell>
      <section className="hero">
        <div className="page-section">
          <div className="eyebrow">Recordkeeping Layer</div>
          <h1>Capital Records</h1>
          <p>Structured capital documentation records for offerings, disclosures, certificates, ledgers, and verification references.</p>
        </div>
      </section>
      <section className="page-section">
        <div className="grid two">
          {recordTypes.map(([title, description]) => (
            <article className="card" key={title}>
              <span className="status-badge">Record Type</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="notice">
          <strong>Boundary note:</strong> Records preserve documentation and workflow status. They do not independently approve capital activity or replace qualified legal, tax, accounting, or regulatory review.
        </div>
      </section>
    </PageShell>
  );
}
