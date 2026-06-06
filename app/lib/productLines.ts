export const qrvInfrastructure = {
  api: 'https://api.zolfi.qrv.network',
  developerDocs: 'https://dev.zolfi.qrv.network',
  monitoring: 'https://status.zolfi.qrv.network',
  verification: 'https://verify.qrv.network',
  registry: 'https://registry.qrv.network',
};

export const disclosureNotice =
  'All capital participation requires disclosure review and acknowledgement.';

export const productLines = {
  zolfi: {
    name: 'Zolfi',
    label: 'Blockchain Security Product Line',
    publicPath: '/zolfi',
    destination: 'capital.onegodian.com/zolfi',
    description:
      'Zolfi is ONEGODIAN Capital’s blockchain security, smart contract intelligence, and post-quantum readiness product line, powered by QRV Network infrastructure.',
    pillars: [
      'Blockchain security review',
      'Smart contract intelligence',
      'Post-quantum readiness',
      'QRV verification and registry proof',
    ],
    routes: [
      { href: '/zolfi/security', label: 'Security' },
      { href: '/zolfi/smart-contracts', label: 'Smart Contracts' },
      { href: '/zolfi/post-quantum-readiness', label: 'Post-Quantum Readiness' },
      { href: '/zolfi/verification', label: 'Verification' },
    ],
    cta: 'Review Zolfi Security',
  },
  instryx: {
    name: 'Instryx',
    label: 'Infrastructure Intelligence Product Line',
    publicPath: '/instryx',
    destination: 'capital.onegodian.com/instryx',
    description:
      'Instryx is ONEGODIAN Capital’s infrastructure intelligence, investment readiness, and execution analytics product line, powered by QRV Network infrastructure.',
    pillars: [
      'Infrastructure readiness',
      'Investment readiness intelligence',
      'Execution analytics',
      'Capital workflow reporting',
    ],
    routes: [
      { href: '/instryx/readiness', label: 'Readiness' },
      { href: '/instryx/investor-intelligence', label: 'Investor Intelligence' },
      { href: '/instryx/execution-analytics', label: 'Execution Analytics' },
    ],
    cta: 'Review Instryx Readiness',
  },
};

export type ProductLineKey = keyof typeof productLines;
