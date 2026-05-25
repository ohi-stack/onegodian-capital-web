const disclosureItems = [
  {
    title: 'General Capital Participation Disclosure',
    status: 'Required',
    body: 'Applies to all contributions, capital-support actions, project funding, sponsorships, paid access, and participation pathways connected to ONEGODIAN, LLC.',
  },
  {
    title: 'Offering and Instrument Disclosure',
    status: 'Instrument Level',
    body: 'Applies to any OneGodian-branded note, bond, certificate, digital participation instrument, funding round, capital raise, or similar structure.',
  },
  {
    title: 'Digital Asset and Token Disclosure',
    status: 'Digital Asset Review',
    body: 'Applies to ODT, OBT, ODC, OBC, ODIN Credits™, OBP-1™-verified assets, blockchain-linked records, digital certificates, token concepts, or any related digital participation system.',
  },
  {
    title: 'Platform and Technology Disclosure',
    status: 'Platform Review',
    body: 'Applies to capital participation connected to app.OneGodian.com, capital.OneGodian.com, OMOS.OneGodian.com, QuantumOHI.com, OneGodian.com, OneGodian.org, or related software, plugin, bridge, registry, dashboard, or API systems.',
  },
  {
    title: 'Business and Execution Risk Disclosure',
    status: 'Risk Review',
    body: 'Applies to all participants reviewing ONEGODIAN, LLC business plans, revenue systems, capital strategy, product roadmap, deployment schedule, or operational milestones.',
  },
  {
    title: 'Contributor and Supporter Disclosure',
    status: 'Supporter Review',
    body: 'Applies to voluntary contributors, supporters, campaign participants, subscribers, product purchasers, sponsors, and non-investment supporters of ONEGODIAN, LLC.',
  },
];

const acknowledgements = [
  'They are responsible for reading all applicable disclosures before participating.',
  'They understand that capital participation may involve financial, operational, market, technology, regulatory, and execution risks.',
  'They understand that no profit, return, appreciation, redemption, distribution, repayment, benefit, listing, token value, market price, or business outcome is guaranteed.',
  'They understand that ONEGODIAN, LLC is a private Connecticut limited liability company and not a bank, broker-dealer, investment adviser, exchange, securities marketplace, government agency, or public authority.',
  'They understand that all capital-related materials are subject to revision, correction, legal review, and compliance updates.',
  'They understand that participation may be denied, paused, refunded, canceled, limited, or modified if required for compliance, operational readiness, eligibility review, or risk management.',
  'They understand that any projected values, timelines, platform features, technology integrations, token concepts, revenue models, or development milestones are forward-looking and may change.',
];

export default function Disclosures() {
  return (
    <main className="section">
      <div className="wrap">
        <div style={{ marginBottom: 34 }}>
          <div className="eyebrow">Disclosure Center</div>
          <h1>Disclosure Center</h1>
          <p className="lead">
            All capital participation requires disclosure review and acknowledgement.
          </p>
        </div>

        <div className="notice" style={{ marginBottom: 34 }}>
          <strong>Disclosure Review Required</strong>
          <p>
            The Disclosure Center is the official review area for individuals, contributors, members, partners, and potential capital participants who are evaluating any ONEGODIAN, LLC capital-related opportunity, contribution pathway, instrument, offering, project, or participation program.
          </p>
          <p>
            Before taking any action, each participant must review the applicable disclosures, understand the nature of the opportunity, and acknowledge that participation is voluntary, risk-bearing, and subject to the terms, conditions, eligibility requirements, and documentation provided by ONEGODIAN, LLC.
          </p>
        </div>

        <div className="notice" style={{ marginBottom: 34 }}>
          <strong>Important Notice</strong>
          <p>
            Capital participation with ONEGODIAN, LLC is not automatic, guaranteed, or unconditional. Any contribution, purchase, funding participation, sponsorship, note, bond, token-related participation, digital instrument, membership-linked benefit, or project-support arrangement must be reviewed through the proper disclosure process before acceptance.
          </p>
          <p>
            Nothing on this page should be understood as legal, tax, accounting, investment, banking, securities, or financial advice. Participants are encouraged to consult their own qualified legal, tax, accounting, or financial professionals before participating.
          </p>
        </div>

        <section style={{ marginBottom: 44 }}>
          <h2>What Participants Must Acknowledge</h2>
          <p className="lead">By reviewing the Disclosure Center, each participant acknowledges that:</p>
          <div className="cards">
            {acknowledgements.map((item, index) => (
              <div className="card" key={item}>
                <span className="badge">Acknowledgement {index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 44 }}>
          <h2>Disclosure Categories</h2>
          <p className="lead">Participants should review the applicable disclosure category before proceeding.</p>
          <div className="cards">
            {disclosureItems.map((item) => (
              <div className="card" key={item.title}>
                <span className="badge">{item.status}</span>
                <h2 style={{ marginTop: 18 }}>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="notice" style={{ marginBottom: 34 }}>
          <strong>Required Acknowledgement</strong>
          <p>
            Before submitting any capital participation form, contribution, purchase, funding request, onboarding form, investor inquiry, partnership request, or related transaction, the participant must acknowledge the following:
          </p>
          <blockquote>
            I have reviewed the applicable ONEGODIAN, LLC disclosures. I understand that participation is voluntary and may involve risk. I understand that no return, profit, repayment, token value, appreciation, platform outcome, business result, or future benefit is guaranteed. I understand that I should consult my own legal, tax, accounting, or financial adviser before participating.
          </blockquote>
        </div>

        <div className="notice" style={{ marginBottom: 34 }}>
          <strong>No Public Offering Unless Stated in Formal Documents</strong>
          <p>
            Unless expressly stated in a formal, legally reviewed offering document, nothing published on capital.OneGodian.com constitutes a public securities offering, solicitation to invest, brokered transaction, crowdfunding offering, banking product, deposit account, insured financial product, or guaranteed investment opportunity.
          </p>
          <p>
            All materials are provided for informational, educational, business development, platform documentation, and participant review purposes only.
          </p>
        </div>

        <div className="notice" style={{ marginBottom: 34 }}>
          <strong>Forward-Looking Statement Notice</strong>
          <p>
            Some materials on capital.OneGodian.com may describe future plans, projected systems, roadmap items, platform development, estimated valuations, expected features, potential revenue streams, funding goals, or business objectives. These statements are forward-looking and are not guarantees.
          </p>
          <p>
            Actual results may differ materially due to market conditions, funding availability, legal review, technology development, operational execution, regulatory requirements, third-party integrations, banking access, hosting infrastructure, customer adoption, and other factors.
          </p>
        </div>

        <div className="notice" style={{ marginBottom: 34 }}>
          <strong>Participant Responsibility</strong>
          <p>
            Each participant is responsible for performing their own review before participating. This includes reviewing the applicable disclosures, understanding the risks, asking questions, keeping copies of relevant documents, and seeking independent professional advice where appropriate.
          </p>
          <p>
            Participation should only occur after the participant fully understands the nature of the transaction or support pathway.
          </p>
        </div>

        <div className="notice" style={{ marginBottom: 34 }}>
          <strong>Compliance Review Status</strong>
          <p>
            ONEGODIAN, LLC may update, revise, expand, or replace disclosure materials as its platforms, products, funding structures, digital systems, and business operations develop.
          </p>
          <p>
            The Disclosure Center should be treated as a living compliance and participant-review area. The most current version posted on capital.OneGodian.com controls unless a separately executed written agreement states otherwise.
          </p>
        </div>

        <div className="notice" style={{ marginBottom: 34 }}>
          <strong>Contact for Disclosure Questions</strong>
          <p>
            For questions about disclosures, capital participation review, contributor acknowledgement, or platform documentation, participants should contact ONEGODIAN, LLC through the official contact method listed on capital.OneGodian.com.
          </p>
        </div>

        <div className="placeholder" style={{ marginTop: 44 }}>
          Disclosure acknowledgement workflow placeholder: pending database, authentication, document versioning, electronic acknowledgement, timestamping, IP/reference metadata, and audit-log integration.
        </div>
      </div>
    </main>
  );
}
