import PageShell from '@/components/PageShell';

const disclosures = [
  ['Disclosure Center', 'Central access point for disclosure packets, acknowledgements, and review sequencing.'],
  ['Risk Disclosures', 'Plain-language risk materials and supporting notices before any eligible record workflow proceeds.'],
  ['Acknowledgement Gate', 'Disclosure review should gate issuance, certificate access, and investor-facing record visibility where required.'],
];

export default function DisclosuresPage() {
  return (
    <PageShell>
      <section className="hero">
        <div className="page-section">
          <div className="eyebrow">Disclosure Gate</div>
          <h1>Disclosures</h1>
          <p>Review disclosure materials, acknowledgement requirements, readiness notes, and supporting documentation before any capital record workflow advances.</p>
        </div>
      </section>
      <section className="page-section">
        <div className="grid">
          {disclosures.map(([title, description]) => (
            <article className="card" key={title}>
              <span className="status-badge">Review Required</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
