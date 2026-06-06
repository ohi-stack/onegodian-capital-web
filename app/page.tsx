const offerings = [
  ['ONEGODIAN Founder Note™', 'OGFN-2025', '7.00%', '5 Years', 'Active'],
  ['ONEGODIAN Infrastructure Bond™', 'OGIB-2025', '7.50%', '10 Years', 'Active'],
  ['ONEGODIAN Platform Growth Note™', 'OPGN-2025', '8.00%', '7 Years', 'Readiness Gate'],
];

const capitalStack = [
  {
    title: 'Public Information Layer',
    body: 'OneGodian.org and OneGodian.com present public information, commerce pages, product education, and participant-facing notices.',
  },
  {
    title: 'Commerce Checkout Layer',
    body: 'WooCommerce and Stripe support checkout, receipts, product purchase records, and paid access workflows where applicable.',
  },
  {
    title: 'Capital Records Layer',
    body: 'The Capital Portal organizes offering records, ledger references, disclosure status, readiness tracking, and participant documentation.',
  },
  {
    title: 'Disclosure Gate Layer',
    body: 'Disclosure review and acknowledgement must occur before any capital participation, document issuance, or investor-facing workflow proceeds.',
  },
  {
    title: 'Verification Layer',
    body: 'Certificates, registry records, QRV references, and verification links provide structured evidence of issued documentation and record status.',
  },
  {
    title: 'Infrastructure Expansion Layer',
    body: 'Zolfi, Instryx, OMOS, and the OneGodian App extend the portal into reporting, system intelligence, financial operations, and ecosystem sync.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div className="heroGrid">
            <div>
              <div className="eyebrow">Private Capital Infrastructure</div>
              <h1>Notes, bonds, ledgers, disclosures, and verifiable certificates.</h1>
              <p>
                The ONEGODIAN Capital Portal is a controlled recordkeeping and investor-facing interface for capital instrument documentation. It does not independently create, approve, or validate any securities offering.
              </p>
              <div className="actions">
                <a className="btn btnGold" href="/offerings">View Offerings</a>
                <a className="btn btnGhost" href="/investor-portal">Access Investor Portal</a>
                <a className="btn btnGhost" href="/certificates">Verify Certificates</a>
              </div>
            </div>
            <div className="panel">
              <div className="screen">
                <h2>Portal Status</h2>
                <div className="statGrid">
                  <div className="stat"><b>3</b>Offering Records</div>
                  <div className="stat"><b>100%</b>Disclosure Gate</div>
                  <div className="stat"><b>QR</b>Certificate Verification</div>
                  <div className="stat"><b>Live</b>Readiness Controlled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Capital Offerings</h2>
          <p className="lead">Review offering records, disclosure packet status, eligibility notices, and instrument categories.</p>
          <div className="cards">
            {offerings.map((o) => (
              <div className="card" key={o[0]}>
                <span className="badge">{o[4]}</span>
                <h3>{o[0]}</h3>
                <p>{o[1]}</p>
                <p><strong>{o[2]}</strong> · {o[3]}</p>
                <a className="btn btnGold" href="/offerings">Review Details</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="wrap">
          <h2>Capital Infrastructure Stack</h2>
          <p className="lead">
            WordPress presents public information, WooCommerce supports checkout, the Capital Portal manages records, disclosures gate issuance, and certificates provide verification.
          </p>
          <div className="cards">
            {capitalStack.map((layer) => (
              <div className="card" key={layer.title}>
                <span className="badge">Infrastructure Layer</span>
                <h3>{layer.title}</h3>
                <p>{layer.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
