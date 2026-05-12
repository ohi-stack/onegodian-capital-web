const disclosureItems = [
  {
    title: 'Required Disclosures',
    status: 'Required',
    body: 'Participants must review the applicable offering, risk, eligibility, and operational disclosures before any capital record may proceed.',
  },
  {
    title: 'Eligibility Notice',
    status: 'Review Gate',
    body: 'Participation may require identity, jurisdiction, suitability, contribution limit, and internal approval review before acceptance.',
  },
  {
    title: 'Risk Acknowledgement',
    status: 'Acknowledgement Required',
    body: 'Capital participation involves risk. No page in this portal should be treated as legal, tax, accounting, investment, or securities advice.',
  },
  {
    title: 'Offering-Specific Disclosures',
    status: 'Instrument Level',
    body: 'Each note, bond, certificate, or instrument record may carry separate terms, restrictions, disclosures, and readiness requirements.',
  },
  {
    title: 'Electronic Signature / Acknowledgement',
    status: 'Pending Integration',
    body: 'The production workflow will record electronic acknowledgement, timestamp, version, IP/reference metadata, and audit trail records.',
  },
  {
    title: 'Download Disclosure Packet',
    status: 'Document Center',
    body: 'Disclosure packets should be versioned, downloadable, and tied to the exact offering record reviewed by the participant.',
  },
];

export default function Disclosures() {
  return (
    <main className="section">
      <div className="wrap">
        <div style={{ marginBottom: 34 }}>
          <div className="eyebrow">Compliance Workflow</div>
          <h1>Disclosure Center</h1>
          <p className="lead">
            All capital participation requires disclosure review and acknowledgement.
          </p>
        </div>

        <div className="notice" style={{ marginBottom: 34 }}>
          <strong>Important Notice</strong>
          <p>
            This portal is a documentation, recordkeeping, disclosure, and verification interface.
            It does not independently create, approve, recommend, or validate any securities offering.
            Final documents, eligibility rules, and acceptance workflows must be reviewed before participation.
          </p>
        </div>

        <div className="cards">
          {disclosureItems.map((item) => (
            <div className="card" key={item.title}>
              <span className="badge">{item.status}</span>
              <h2 style={{ marginTop: 18 }}>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))}
        </div>

        <div className="placeholder" style={{ marginTop: 44 }}>
          Disclosure acknowledgement workflow placeholder: pending database, authentication, document versioning, and audit-log integration.
        </div>
      </div>
    </main>
  );
}
