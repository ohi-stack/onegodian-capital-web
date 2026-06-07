import { certificates, ledgerEntries, offerings } from '../data';

export default function Registry() {
  return (
    <main className="section">
      <div className="wrap">
        <div style={{ marginBottom: 34 }}>
          <div className="eyebrow">Capital Records Layer</div>
          <h1>Capital Registry</h1>
          <p className="lead">
            The Capital Registry organizes offering references, certificate records,
            ledger entries, disclosure status, and verification-ready administrative records.
          </p>
        </div>

        <div className="notice" style={{ marginBottom: 34 }}>
          <strong>Administrative Registry Notice</strong>
          <p>
            Registry records are internal administrative references only. They do not approve participation,
            validate securities, prove ownership, guarantee repayment, or finalize any capital record.
            Formal rights, obligations, and participation terms must be established through reviewed documents
            and applicable compliance procedures.
          </p>
        </div>

        <section style={{ marginBottom: 44 }}>
          <h2>Offering Registry</h2>
          <p className="lead">Current offering references maintained by the Capital Portal.</p>
          <div className="cards">
            {offerings.map((offering) => (
              <div className="card" key={offering.code}>
                <span className="badge">{offering.status}</span>
                <h2 style={{ marginTop: 18 }}>{offering.name}</h2>
                <p><strong>Registry Code:</strong> {offering.code}</p>
                <p><strong>Instrument Type:</strong> {offering.instrumentType}</p>
                <p>{offering.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 44 }}>
          <h2>Certificate Registry</h2>
          <p className="lead">Certificate records prepared for verification bridge integration.</p>
          <div className="cards">
            {certificates.map((certificate) => (
              <div className="card" key={certificate.id}>
                <span className="badge">{certificate.status}</span>
                <h3>{certificate.id}</h3>
                <p><strong>Instrument:</strong> {certificate.instrument}</p>
                <p><strong>Holder:</strong> {certificate.holder}</p>
                <p><strong>Issued:</strong> {certificate.issued}</p>
                <a className="btn btnGold" href={`/certificates/${certificate.id}`}>
                  Open Certificate Record
                </a>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 44 }}>
          <h2>Ledger Registry</h2>
          <p className="lead">Capital infrastructure activity references currently tracked in the portal.</p>
          <div className="cards">
            {ledgerEntries.map((entry) => (
              <div className="card" key={entry.reference}>
                <span className="badge">{entry.status}</span>
                <h3>{entry.reference}</h3>
                <p>{entry.activity}</p>
                <p><strong>Date / Stage:</strong> {entry.date}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="placeholder" style={{ marginTop: 44 }}>
          Registry API placeholder: pending QRV records, OBP-1™ references, disclosure acknowledgement logs,
          participant-safe lookup, and immutable audit event display.
        </div>
      </div>
    </main>
  );
}
