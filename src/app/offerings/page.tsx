import PageShell from '@/components/PageShell';

const offerings = [
  {
    type: 'Bond',
    status: 'Review Required',
    title: 'ONEGODIAN Infrastructure Bond — Test Record',
    description: 'Disclosure-backed test record for platform workflow validation. Not active for public capital use.',
  },
  {
    type: 'Note',
    status: 'Draft',
    title: 'ONEGODIAN Platform Growth Note — Test Record',
    description: 'Configurable note-style record used to validate disclosure, ledger, and certificate flows.',
  },
];

export default function OfferingsPage() {
  return (
    <PageShell>
      <section className="hero"><div className="page-section"><div className="eyebrow">Disclosure-backed records</div><h1>Capital Offerings</h1><p>Review available ONEGODIAN Capital Portal offering records. Each record must remain disclosure-backed and legally reviewed before public use.</p></div></section>
      <section className="page-section"><div className="grid">{offerings.map((offering) => (<article className="card" key={offering.title}><span className="status-badge">{offering.type}</span><h2>{offering.title}</h2><p>{offering.description}</p><p><strong>Status:</strong> {offering.status}</p><div className="notice"><strong>Disclosure review is required before instrument issuance.</strong></div></article>))}</div></section>
    </PageShell>
  );
}
