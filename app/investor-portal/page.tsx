import { certificates, ledgerEntries, offerings } from '../data';

export default function Investor() {
  return (
    <main className="section">
      <div className="wrap">
        <div style={{ marginBottom: 36 }}>
          <div className="eyebrow">Investor Operations</div>
          <h1>Investor Portal</h1>
          <p className="lead">
            Access instruments, certificates, disclosures, operational notices,
            and ledger records through the ONEGODIAN Capital infrastructure node.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <span className="badge">Dashboard</span>
            <h2>Portfolio Overview</h2>
            <div className="statGrid" style={{ marginTop: 24 }}>
              <div className="stat">
                <b>{offerings.length}</b>
                Active Records
              </div>
              <div className="stat">
                <b>{certificates.length}</b>
                Certificate Records
              </div>
              <div className="stat">
                <b>{ledgerEntries.length}</b>
                Ledger Entries
              </div>
              <div className="stat">
                <b>Hostinger</b>
                Node Runtime
              </div>
            </div>
          </div>

          <div className="card">
            <span className="badge">Access</span>
            <h2>Next Production Features</h2>
            <ul style={{ lineHeight: 1.9, paddingLeft: 18 }}>
              <li>Investor authentication</li>
              <li>Disclosure acknowledgement workflow</li>
              <li>Certificate issuance engine</li>
              <li>Prisma/PostgreSQL integration</li>
              <li>QR-V verification bridge</li>
              <li>WooCommerce webhook processing</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 60 }}>
          <h2>Certificate Records</h2>

          <div className="cards">
            {certificates.map((certificate) => (
              <div className="card" key={certificate.id}>
                <span className="badge">{certificate.status}</span>

                <h3 style={{ marginTop: 18 }}>{certificate.id}</h3>

                <p>{certificate.instrument}</p>

                <div style={{ marginTop: 18 }}>
                  <p><strong>Holder:</strong> {certificate.holder}</p>
                  <p><strong>Issued:</strong> {certificate.issued}</p>
                </div>

                <a
                  className="btn btnGold"
                  style={{ marginTop: 22 }}
                  href={certificate.verificationUrl}
                >
                  Verify Certificate
                </a>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 60 }}>
          <h2>Ledger Activity</h2>

          <div className="cards">
            {ledgerEntries.map((entry) => (
              <div className="card" key={entry.reference}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="badge">{entry.status}</span>
                  <span>{entry.reference}</span>
                </div>

                <h3 style={{ marginTop: 18 }}>{entry.activity}</h3>

                <p>{entry.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
