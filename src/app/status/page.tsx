import PageShell from '@/components/PageShell';

const statuses = [
  ['Website', 'Online', 'Public Capital Portal frontend and navigation surface.'],
  ['Checkout', 'Boundary Required', 'WooCommerce or payment routes should remain checkout-only and separate from offering approval.'],
  ['API', 'Pending Integration', 'Verification, certificate lookup, and readiness endpoints can connect through the API layer.'],
  ['Certificates', 'Record Layer', 'Certificate records verify portal references when connected.'],
  ['Readiness', 'Review Required', 'Legal, payment, data, and disclosure controls require review before live workflows.'],
  ['Verification', 'Planned', 'Document and certificate verification should confirm references without implying regulatory approval.'],
];

export default function StatusPage() {
  return (
    <PageShell>
      <section className="hero">
        <div className="page-section">
          <div className="eyebrow">Platform Status</div>
          <h1>Status</h1>
          <p>Operational status indicators for the Capital Portal frontend, checkout boundary, API verification layer, certificates, readiness, and records.</p>
        </div>
      </section>
      <section className="page-section">
        <div className="grid two">
          {statuses.map(([title, status, description]) => (
            <article className="card" key={title}>
              <span className="status-badge">{status}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
