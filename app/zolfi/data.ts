export const zolfiServices = [
  {
    title: 'Zolfi™ Blockchain Security Review',
    slug: 'blockchain-security',
    summary:
      'Commercial review service for blockchain-facing workflows, wallet-related UX, transaction records, and smart contract readiness mapping.',
    deliverables: [
      'Workflow risk map',
      'Wallet and transaction UX review',
      'Security-readiness checklist',
      'Capital disclosure alignment notes',
    ],
  },
  {
    title: 'Zolfi™ Smart Contract Readiness Package',
    slug: 'smart-contracts',
    summary:
      'Documentation and implementation planning package for smart contract-enabled products, contribution flows, certificates, and digital asset records.',
    deliverables: [
      'Smart contract use-case definition',
      'Readiness checklist',
      'Data boundary review',
      'Implementation notes for engineering review',
    ],
  },
  {
    title: 'Zolfi™ QRV / Verification Bridge',
    slug: 'verification',
    summary:
      'Integration pathway between capital records, QRV verification, certificates, public proof pages, and investor-facing trust documentation.',
    deliverables: [
      'Verification flow map',
      'Certificate linkage notes',
      'QRV reference structure',
      'Public proof-page requirements',
    ],
  },
  {
    title: 'Zolfi™ Investor Trust Layer',
    slug: 'investor-trust-layer',
    summary:
      'Capital portal module explaining verification, audit trails, disclosures, registry alignment, and transaction-confidence controls.',
    deliverables: [
      'Trust-layer overview',
      'Disclosure dependency map',
      'Audit trail outline',
      'Investor-facing status language',
    ],
  },
  {
    title: 'Zolfi™ Financial Interface Adapter',
    slug: 'roadmap',
    summary:
      'Interface layer for connecting capital workflows with payments, registry records, document status, and platform readiness controls.',
    deliverables: [
      'Interface architecture notes',
      'Payment and record flow map',
      'Registry integration checklist',
      'Roadmap for production handoff',
    ],
  },
];

export const zolfiRoutes = [
  '/zolfi',
  '/zolfi/blockchain-security',
  '/zolfi/smart-contracts',
  '/zolfi/verification',
  '/zolfi/investor-trust-layer',
  '/zolfi/roadmap',
  '/api/zolfi/status',
  '/api/zolfi/manifest',
];

export const zolfiDisclosure =
  'Zolfi™ materials on Capital.OneGodian.com are provided by ONEGODIAN, LLC for software, infrastructure, education, documentation, and commercial platform development. Nothing on this page is legal, investment, tax, banking, securities, or governmental advice. Any regulated activity requires appropriate professional review and separate written approval.';

export const zolfiManifest = {
  id: 'zolfi-capital',
  name: 'Zolfi™ Capital Integration',
  status: 'implemented',
  host: 'capital.onegodian.com',
  owner: 'ONEGODIAN, LLC',
  classification: 'commercial software, blockchain security, verification, and capital infrastructure support layer',
  routes: zolfiRoutes,
  services: zolfiServices.map(({ title, slug, summary }) => ({ title, slug, summary })),
  boundaries: {
    mayExpose: [
      'public product descriptions',
      'commercial offers',
      'disclosure notices',
      'status indicators',
      'high-level technical diagrams',
      'verified records and certificate links',
    ],
    mustNotExpose: [
      'private keys',
      'wallet seed phrases',
      'production credentials',
      'unreviewed investment claims',
      'proprietary smart contract internals not ready for release',
      'governance claims belonging to INO rather than ONEGODIAN, LLC',
    ],
  },
};

export function getZolfiService(slug: string) {
  return zolfiServices.find((service) => service.slug === slug);
}
