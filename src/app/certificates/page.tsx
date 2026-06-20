import PageShell from '@/components/PageShell';

const certificateCards = [
  ['Certificate Lookup', 'Verify certificate identifiers, record status, issue references, and hash metadata when connected.'],
  ['Document Integrity', 'Keep certificate records tied to controlled ledgers, disclosure gates, and verification status.'],
  ['Verification Notes', 'Certificate verification confirms a portal record reference only; it does not represent offering approval or regulatory validation.'],
];

export default function CertificatesPage() {
  return (
    <PageShell>
      <section className="hero">
        <div className="page-section">
          <div className="eyebrow">Verification Records</div>
          <h1>Certificates</h1>
          <p>Certificate verification for controlled capital records, document references, ledger status, and readiness-linked issuance workflows.</p>
        </div>
      </section>
      <section className="page-section">
        <div className="grid">
          {certificateCards.map(([title, description]) => (
            <article className="card" key={title}>
              <span className="status-badge">Verification</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
