import { offerings } from '../data';

export default function Offerings() {
  return (
    <main className="section">
      <div className="wrap">
        <div style={{ marginBottom: 32 }}>
          <div className="eyebrow">Capital Infrastructure</div>
          <h1>Capital Offerings</h1>
          <p className="lead">
            All offerings are subject to disclosure review, eligibility verification,
            operational readiness assessment, and internal approval workflows.
          </p>
        </div>

        <div className="cards">
          {offerings.map((offering) => (
            <div className="card" key={offering.code}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                <span className="badge">{offering.status}</span>
                <span className="badge">{offering.instrumentType}</span>
              </div>

              <h2 style={{ marginTop: 18 }}>{offering.name}</h2>

              <p style={{ opacity: 0.8 }}>{offering.code}</p>

              <div style={{ marginTop: 20, marginBottom: 20 }}>
                <p><strong>Rate:</strong> {offering.rate}</p>
                <p><strong>Term:</strong> {offering.term}</p>
                <p><strong>Minimum:</strong> {offering.minimum}</p>
                <p><strong>Maximum:</strong> {offering.maximum}</p>
              </div>

              <p>{offering.summary}</p>

              <div className="placeholder" style={{ marginTop: 24 }}>
                <strong>Disclosure Status</strong>
                <p style={{ marginTop: 8 }}>{offering.disclosureStatus}</p>
              </div>

              <div className="actions" style={{ marginTop: 24 }}>
                <a className="btn btnGold" href="/disclosures">
                  Review Disclosures
                </a>

                <a className="btn btnGhost" href="/investor-portal">
                  Investor Portal
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
