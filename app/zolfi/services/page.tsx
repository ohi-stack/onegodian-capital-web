import { zolfiDisclosure, zolfiServices } from '../data';

export const metadata = {
  title: 'Zolfi™ Services | ONEGODIAN Capital',
  description:
    'Zolfi™ services inside ONEGODIAN Capital: blockchain security review, smart contract readiness, QRV verification bridge, investor trust layer, and financial interface adaptation.',
};

export default function ZolfiServicesPage() {
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div className="heroGrid">
            <div>
              <div className="eyebrow">Zolfi™ Services · ONEGODIAN Capital</div>
              <h1>Blockchain security, verification, and capital infrastructure services.</h1>
              <p>
                Zolfi™ is organized as a Capital product line for software, blockchain-facing workflows, smart contract readiness, QRV verification, and investor-facing trust infrastructure.
              </p>
              <div className="actions">
                <a className="btn btnGold" href="/contact">Request Review</a>
                <a className="btn btnGhost" href="/zolfi/dev">Developer Access</a>
                <a className="btn btnGhost" href="/api/zolfi/manifest">View Manifest</a>
              </div>
            </div>
            <div className="panel">
              <div className="screen">
                <h2>Service Stack</h2>
                <div className="statGrid">
                  <div className="stat"><b>5</b>Modules</div>
                  <div className="stat"><b>QRV</b>Bridge</div>
                  <div className="stat"><b>Audit</b>Readiness</div>
                  <div className="stat"><b>Capital</b>Aligned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Available Zolfi™ Modules</h2>
          <p className="lead">
            Each module is designed for commercial packaging, documentation, technical review, and safe public explanation inside Capital.OneGodian.com.
          </p>
          <div className="cards">
            {zolfiServices.map((service) => (
              <div className="card" key={service.slug}>
                <span className="badge">Service Module</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <a className="btn btnGold" href={`/zolfi/${service.slug}`}>Open Service</a>
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
