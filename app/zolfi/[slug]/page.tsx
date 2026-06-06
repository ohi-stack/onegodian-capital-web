import { getZolfiService, zolfiDisclosure, zolfiServices } from '../data';

export function generateStaticParams() {
  return zolfiServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getZolfiService(slug);

  return {
    title: service ? `${service.title} | ONEGODIAN Capital` : 'Zolfi™ Module | ONEGODIAN Capital',
    description: service?.summary || 'Zolfi™ capital infrastructure module.',
  };
}

export default async function ZolfiModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getZolfiService(slug);

  if (!service) {
    return (
      <main>
        <section className="section">
          <div className="wrap">
            <h1>Zolfi™ Module Not Found</h1>
            <p className="lead">This Zolfi™ module is not defined in the Capital service catalog.</p>
            <a className="btn btnGold" href="/zolfi">Return to Zolfi™</a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div className="heroGrid">
            <div>
              <div className="eyebrow">Zolfi™ Capital Module</div>
              <h1>{service.title}</h1>
              <p>{service.summary}</p>
              <div className="actions">
                <a className="btn btnGold" href="/zolfi">Back to Zolfi™</a>
                <a className="btn btnGhost" href="/disclosures">Review Disclosures</a>
                <a className="btn btnGhost" href="/certificates">Verify Certificates</a>
              </div>
            </div>
            <div className="panel">
              <div className="screen">
                <h2>Module Readiness</h2>
                <div className="statGrid">
                  <div className="stat"><b>Defined</b>Catalog</div>
                  <div className="stat"><b>Linked</b>Capital Routes</div>
                  <div className="stat"><b>Bounded</b>Disclosure</div>
                  <div className="stat"><b>Ready</b>Review Path</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Deliverables</h2>
          <p className="lead">The module is structured for documentation, technical review, commercial packaging, and investor-facing explanation.</p>
          <div className="cards">
            {service.deliverables.map((deliverable) => (
              <div className="card" key={deliverable}>
                <span className="badge">Deliverable</span>
                <h3>{deliverable}</h3>
                <p>Prepared as part of the Zolfi™ capital infrastructure implementation pathway.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="wrap">
          <h2>Disclosure Boundary</h2>
          <p className="lead">{zolfiDisclosure}</p>
        </div>
      </section>
    </main>
  );
}
