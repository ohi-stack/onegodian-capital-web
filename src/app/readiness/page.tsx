import PageShell from '@/components/PageShell';

const readinessItems = [
  ['Legal Review', 'Offering documents, disclosures, eligibility rules, and terms require qualified review before live use.'],
  ['Payment Workflow', 'Checkout and payment routing must remain separated from offering approval and record validation.'],
  ['Data Controls', 'Investor-facing records, certificates, ledgers, and acknowledgements require controlled access and retention rules.'],
  ['Verification', 'Certificate and document verification endpoints should confirm record references without implying regulatory approval.'],
];

export default function ReadinessPage() {
  return (
    <PageShell>
      <section className="hero">
        <div className="page-section">
          <div className="eyebrow">Production Controls</div>
          <h1>Readiness</h1>
          <p>Track the operating readiness of disclosure gates, payment boundaries, recordkeeping controls, certificate verification, and support workflows.</p>
        </div>
      </section>
      <section className="page-section">
        <div className="grid two">
          {readinessItems.map(([title, description]) => (
            <article className="card" key={title}>
              <span className="status-badge">Required</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
