import { readinessItems } from '../data';

const layerStatus = [
  ['Branding', '~80%', 'Visual identity, tone, and capital portal framing are substantially established.'],
  ['Layout', '~70%', 'Core page layout, cards, notices, and responsive sections are present but still need deeper production polish.'],
  ['Routing', '~60%', 'Primary routes exist or are being added; secondary legal, compliance, and detail routes remain in progress.'],
  ['Production Data', '~10%', 'Most records are still static seed data and need live database/API integration.'],
  ['Investor Systems', '~5%', 'Investor portal shell exists but authentication, profiles, statements, and account records are pending.'],
  ['Admin Systems', '~5%', 'Admin workflows are not yet connected to production controls, review queues, or approval logs.'],
  ['Verification Layer', '~15%', 'Certificate verification pages exist, but QRV/API validation and audit matching remain pending.'],
  ['Compliance Workflow', '~10%', 'Disclosure language exists, but acknowledgement capture, versioning, and review logs are pending.'],
];

export default function ProductionReadiness() {
  return (
    <main className="section">
      <div className="wrap">
        <div style={{ marginBottom: 34 }}>
          <div className="eyebrow">Production Capital Compliance Infrastructure</div>
          <h1>Production Readiness</h1>
          <p className="lead">
            Capital.OneGodian.com is being developed as a production capital compliance infrastructure node for offerings,
            disclosures, investor records, certificates, verification, and readiness-controlled participation workflows.
          </p>
        </div>

        <div className="notice" style={{ marginBottom: 34 }}>
          <strong>Readiness Notice</strong>
          <p>
            This page tracks the current build condition of the ONEGODIAN Capital Portal. Status values are internal
            production-readiness indicators only. They do not represent legal approval, securities qualification,
            investor eligibility, banking approval, or regulatory clearance.
          </p>
        </div>

        <section style={{ marginBottom: 44 }}>
          <h2>Layer Status</h2>
          <p className="lead">Current production readiness by platform layer.</p>
          <div className="cards">
            {layerStatus.map(([layer, percent, body]) => (
              <div className="card" key={layer}>
                <span className="badge">{percent}</span>
                <h2 style={{ marginTop: 18 }}>{layer}</h2>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 44 }}>
          <h2>Current Readiness Items</h2>
          <div className="cards">
            {readinessItems.map(([title, status, body]) => (
              <div className="card" key={title}>
                <span className="badge">{status}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 44 }}>
          <h2>Required Before Production Acceptance</h2>
          <div className="cards">
            <div className="card">
              <span className="badge">Data</span>
              <h3>Live Data Layer</h3>
              <p>Connect Prisma/PostgreSQL or approved database storage for offerings, certificates, ledger entries, participants, disclosures, and acknowledgements.</p>
            </div>
            <div className="card">
              <span className="badge">Compliance</span>
              <h3>Acknowledgement Capture</h3>
              <p>Record disclosure version, participant acknowledgement, timestamp, source reference, IP/reference metadata, and audit-log record.</p>
            </div>
            <div className="card">
              <span className="badge">Verification</span>
              <h3>QRV / API Bridge</h3>
              <p>Connect certificate lookup, QR verification, OBP-1™ or QRV validation, and public-safe certificate status display.</p>
            </div>
          </div>
        </section>

        <div className="placeholder" style={{ marginTop: 44 }}>
          Production readiness dashboard placeholder: pending live deployment checks, build logs, API health checks,
          document version controls, and admin review workflow integration.
        </div>
      </div>
    </main>
  );
}
