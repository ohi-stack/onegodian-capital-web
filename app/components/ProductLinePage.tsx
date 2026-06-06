import { disclosureNotice, qrvInfrastructure } from '../lib/productLines';

type Feature = {
  title: string;
  body: string;
};

type ProductLinePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
  features: Feature[];
  proofPoints?: string[];
};

export default function ProductLinePage({
  eyebrow,
  title,
  description,
  primaryCta,
  primaryHref,
  secondaryCta = 'Review Verification',
  secondaryHref = 'https://verify.qrv.network',
  features,
  proofPoints = [],
}: ProductLinePageProps) {
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div className="heroGrid">
            <div>
              <div className="eyebrow">{eyebrow}</div>
              <h1>{title}</h1>
              <p>{description}</p>
              <div className="actions">
                <a className="btn btnGold" href={primaryHref}>{primaryCta}</a>
                <a className="btn btnGhost" href={secondaryHref}>{secondaryCta}</a>
              </div>
            </div>
            <div className="panel">
              <div className="screen">
                <h2>QRV Infrastructure</h2>
                <div className="statGrid">
                  <div className="stat"><b>API</b>Zolfi backend</div>
                  <div className="stat"><b>DEV</b>Developer docs</div>
                  <div className="stat"><b>VERIFY</b>Verification layer</div>
                  <div className="stat"><b>REG</b>Registry proof</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Product Scope</h2>
          <p className="lead">This page is part of ONEGODIAN Capital and is powered by QRV Network infrastructure. It is not presented as a standalone public destination.</p>
          <div className="cards">
            {features.map((feature) => (
              <article className="card" key={feature.title}>
                <span className="badge">Capital Product Line</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="wrap">
          <h2>Disclosure and Verification References</h2>
          <div className="notice"><strong>Disclosure:</strong> {disclosureNotice}</div>
          <div className="cards">
            <article className="card">
              <span className="badge">Verification</span>
              <h3>QRV Verification</h3>
              <p>Verification records, public proof references, and issued credential checks should resolve through QRV Network verification infrastructure.</p>
              <a className="btn btnGold" href={qrvInfrastructure.verification}>Open Verification</a>
            </article>
            <article className="card">
              <span className="badge">Registry</span>
              <h3>Registry / Proof Layer</h3>
              <p>Registry references and proof-layer records should resolve through QRV Network registry infrastructure.</p>
              <a className="btn btnGold" href={qrvInfrastructure.registry}>Open Registry</a>
            </article>
            <article className="card">
              <span className="badge">Monitoring</span>
              <h3>Status Monitoring</h3>
              <p>Operational status for Zolfi infrastructure is mapped to QRV Network monitoring endpoints.</p>
              <a className="btn btnGold" href={qrvInfrastructure.monitoring}>Open Status</a>
            </article>
          </div>
        </div>
      </section>

      {proofPoints.length > 0 && (
        <section className="section">
          <div className="wrap">
            <h2>Execution Notes</h2>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Item</th><th>Status</th></tr></thead>
                <tbody>
                  {proofPoints.map((point) => (
                    <tr key={point}><td>{point}</td><td>Capital infrastructure mapping active</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
