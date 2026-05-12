const readinessRows = [
  { layer: 'Branding', status: '~80%' },
  { layer: 'Layout', status: '~70%' },
  { layer: 'Routing', status: '~60%' },
  { layer: 'Production Data', status: '~10%' },
  { layer: 'Investor Systems', status: '~5%' },
  { layer: 'Admin Systems', status: '~5%' },
  { layer: 'Verification Layer', status: '~15%' },
  { layer: 'Compliance Workflow', status: '~10%' },
];

export default function CapitalReadinessTable() {
  return (
    <section className="section sectionAlt">
      <div className="wrap">
        <div className="eyebrow">Production Status</div>
        <h2>Capital Infrastructure Readiness</h2>
        <p className="lead">
          Current operating maturity estimate for the capital.onegodian.com Hostinger Node application.
        </p>

        <div className="table-wrap" style={{ marginTop: 28 }}>
          <table>
            <thead>
              <tr>
                <th>Layer</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {readinessRows.map((row) => (
                <tr key={row.layer}>
                  <td>{row.layer}</td>
                  <td><strong>{row.status}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
