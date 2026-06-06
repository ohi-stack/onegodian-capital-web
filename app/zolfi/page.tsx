import { zolfiDisclosure, zolfiRoutes, zolfiServices } from './data';

export const metadata = {
  title: 'Zolfi™ Blockchain Security | ONEGODIAN Capital',
  description:
    'Zolfi™ is the blockchain security, smart contract readiness, QRV verification, and investor trust infrastructure layer inside ONEGODIAN Capital.',
};

export default function ZolfiPage() {
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div className="heroGrid">
            <div>
              <div className="eyebrow">Zolfi™ · Blockchain Security · Verification</div>
              <h1>Capital-grade blockchain security and investor trust infrastructure.</h1>
              <p>
                Zolfi™ is ONEGODIAN Capital’s blockchain security, smart contract readiness, QRV verification, and financial-interface support layer. It helps organize secure records, disclosure-aware workflows, and verification pathways for capital-platform operations.
              </p>
              <div className="actions">
                <a className="btn btnGold" href="/zolfi/blockchain-security">Review Security Layer</a>
                <a className="btn btnGhost" href="/zolfi/smart-contracts">Smart Contract Readiness</a>
                <a className="btn btnGhost" href="/api/zolfi/manifest">View Manifest</a>
              </div>
            </div>
            <div className="panel">
              <div className="screen">
                <h2>Zolfi™ Status</h2>
                <div className="statGrid">
                  <div className="stat"><b>5</b>Service Modules</div>
                  <div className="stat"><b>QRV</b>Verification Bridge</div>
                  <div className="stat"><b>API</b>Status + Manifest</div>
                  <div className="stat"><b>Live</b>Capital Integration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Zolfi™ Product and Service Modules</h2>
          <p className="lead">
            These modules convert the original Zolfi™ concept into a public, compliance-aware Capital.OneGodian.com product line.
          </p>
          <div className="cards">
            {zolfiServices.map((service) => (
              <div className="card" key={service.slug}>
                <span className="badge">Zolfi™ Module</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <a className="btn btnGold" href={`/zolfi/${service.slug}`}>Open Module</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="wrap">
          <h2>Implementation Routes</h2>
          <p className="lead">The Zolfi™ route set is now defined for public pages and API status/manifest endpoints.</p>
          <div className="cards">
            {zolfiRoutes.map((route) => (
              <div className="card" key={route}>
                <span className="badge">Route</span>
                <h3>{route}</h3>
                <p>Configured as part of the Capital.OneGodian.com Zolfi™ implementation.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Disclosure Boundary</h2>
          <p className="lead">{zolfiDisclosure}</p>
        </div>
      </section>
    </main>
  );
}
