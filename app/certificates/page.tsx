import { certificates } from '../data';

const statusNotes = [
  {
    title: 'Verified',
    body: 'The certificate record exists in the capital portal data layer and is available for verification review.',
  },
  {
    title: 'Pending',
    body: 'The record exists but requires additional disclosure acceptance, issuance review, or production workflow completion.',
  },
  {
    title: 'Revoked',
    body: 'The record has been withdrawn, replaced, canceled, or otherwise marked inactive by ONEGODIAN, LLC.',
  },
];

export default function Certificates() {
  return (
    <main className="section">
      <div className="wrap">
        <div style={{ marginBottom: 34 }}>
          <div className="eyebrow">Verification Layer</div>
          <h1>Certificate Verification</h1>
          <p className="lead">
            Verify ONEGODIAN Capital certificate authenticity, instrument association, holder status,
            issuance status, and production-readiness notices.
          </p>
        </div>

        <div className="notice" style={{ marginBottom: 34 }}>
          <strong>Verification Notice</strong>
          <p>
            Certificate verification confirms whether a certificate record is present in the Capital Portal recordkeeping layer.
            Verification does not independently guarantee value, repayment, transferability, eligibility, regulatory status,
            or investment suitability. All certificate activity remains subject to disclosure review, internal approval,
            document versioning, and applicable participation terms.
          </p>
        </div>

        <section style={{ marginBottom: 44 }}>
          <h2>Certificate Records</h2>
          <p className="lead">
            Current certificate records are listed below. Production verification will connect these records to QR-V,
            OBP-1™, API bridge records, and disclosure acknowledgement logs.
          </p>

          <div className="cards">
            {certificates.map((certificate) => (
              <div className="card" key={certificate.id}>
                <span className="badge">{certificate.status}</span>
                <h2 style={{ marginTop: 18 }}>{certificate.id}</h2>
                <p>{certificate.instrument}</p>
                <div style={{ marginTop: 18 }}>
                  <p><strong>Holder:</strong> {certificate.holder}</p>
                  <p><strong>Issued:</strong> {certificate.issued}</p>
                </div>
                <div className="actions" style={{ marginTop: 22 }}>
                  <a className="btn btnGold" href={`/certificates/${certificate.id}`}>
                    Open Record
                  </a>
                  <a className="btn btnGhost" href="/disclosures">
                    Review Disclosures
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 44 }}>
          <h2>Status Meanings</h2>
          <div className="cards">
            {statusNotes.map((note) => (
              <div className="card" key={note.title}>
                <span className="badge">Status</span>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="placeholder" style={{ marginTop: 44 }}>
          Production verification module pending: QR code scan, certificate lookup form, API validation,
          disclosure acknowledgement match, and audit-log display.
        </div>
      </div>
    </main>
  );
}
