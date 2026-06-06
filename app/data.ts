export type Offering = {
  name: string;
  code: string;
  instrumentType: string;
  rate: string;
  term: string;
  status: 'Active' | 'Readiness Gate' | 'Draft' | 'Closed';
  minimum: string;
  maximum: string;
  summary: string;
  disclosureStatus: string;
};

export type CertificateRecord = {
  id: string;
  holder: string;
  instrument: string;
  status: 'Verified' | 'Pending' | 'Revoked';
  issued: string;
  verificationUrl: string;
};

export type LedgerEntry = {
  date: string;
  reference: string;
  activity: string;
  status: string;
};

export type ProductLine = {
  name: string;
  slug: string;
  positioning: string;
  summary: string;
  publicUrl: string;
  apiLayer?: string;
  docsLayer?: string;
  statusLayer?: string;
  verificationLayer: string;
  registryLayer: string;
};

export const offerings: Offering[] = [
  {
    name: 'ONEGODIAN Founder Note™',
    code: 'OGFN-2025',
    instrumentType: 'Private Note',
    rate: '7.00%',
    term: '5 Years',
    status: 'Active',
    minimum: '$500',
    maximum: '$25,000',
    summary:
      'Founder-aligned private capital record for early supporters, subject to disclosure review, eligibility screening, and final approval.',
    disclosureStatus: 'Disclosure packet required before issuance',
  },
  {
    name: 'ONEGODIAN Infrastructure Bond™',
    code: 'OGIB-2025',
    instrumentType: 'Infrastructure Bond',
    rate: '7.50%',
    term: '10 Years',
    status: 'Active',
    minimum: '$1,000',
    maximum: '$50,000',
    summary:
      'Infrastructure-focused capital record for platform, documentation, verification, and operational buildout funding.',
    disclosureStatus: 'Eligibility and acknowledgement gate active',
  },
  {
    name: 'ONEGODIAN Platform Growth Note™',
    code: 'OPGN-2025',
    instrumentType: 'Growth Note',
    rate: '8.00%',
    term: '7 Years',
    status: 'Readiness Gate',
    minimum: '$250',
    maximum: '$10,000',
    summary:
      'Growth-oriented instrument record reserved for production-ready deployment after operational and legal review.',
    disclosureStatus: 'Production readiness review required before activation',
  },
];

export const capitalProductLines: ProductLine[] = [
  {
    name: 'Zolfi',
    slug: 'zolfi',
    positioning:
      'ONEGODIAN Capital’s blockchain security, smart contract intelligence, and post-quantum readiness product line.',
    summary:
      'Zolfi organizes blockchain security review, smart contract intelligence, verification workflows, and post-quantum readiness planning under ONEGODIAN Capital.',
    publicUrl: 'https://capital.onegodian.com/zolfi',
    apiLayer: 'https://api.zolfi.qrv.network',
    docsLayer: 'https://dev.zolfi.qrv.network',
    statusLayer: 'https://status.zolfi.qrv.network',
    verificationLayer: 'https://verify.qrv.network',
    registryLayer: 'https://registry.qrv.network',
  },
  {
    name: 'Instryx',
    slug: 'instryx',
    positioning:
      'ONEGODIAN Capital’s infrastructure intelligence, investment readiness, and execution analytics product line.',
    summary:
      'Instryx supports capital infrastructure review, investment readiness tracking, investor intelligence, and execution analytics under ONEGODIAN Capital.',
    publicUrl: 'https://capital.onegodian.com/instryx',
    verificationLayer: 'https://verify.qrv.network',
    registryLayer: 'https://registry.qrv.network',
  },
];

export const certificates: CertificateRecord[] = [
  {
    id: 'OGC-CERT-0001',
    holder: 'Investor Record Pending',
    instrument: 'ONEGODIAN Founder Note™',
    status: 'Verified',
    issued: 'Pending production issuance',
    verificationUrl: 'https://capital.onegodian.com/certificates/OGC-CERT-0001',
  },
  {
    id: 'OGC-CERT-0002',
    holder: 'Investor Record Pending',
    instrument: 'ONEGODIAN Infrastructure Bond™',
    status: 'Pending',
    issued: 'Awaiting disclosure acceptance',
    verificationUrl: 'https://capital.onegodian.com/certificates/OGC-CERT-0002',
  },
];

export const ledgerEntries: LedgerEntry[] = [
  {
    date: 'Production Setup',
    reference: 'CAP-LEDGER-001',
    activity: 'Capital portal node deployed on Hostinger',
    status: 'Live shell',
  },
  {
    date: 'Data Layer',
    reference: 'CAP-LEDGER-002',
    activity: 'Seed offering and certificate records established',
    status: 'In progress',
  },
  {
    date: 'Verification Layer',
    reference: 'CAP-LEDGER-003',
    activity: 'Certificate and disclosure pages prepared for QRV/API bridge',
    status: 'Pending integration',
  },
  {
    date: 'Product Lines',
    reference: 'CAP-LEDGER-004',
    activity: 'Zolfi and Instryx merged into Capital Portal as ONEGODIAN Capital product lines',
    status: 'Active routing',
  },
];

export const readinessItems = [
  ['Hostinger Node Deployment', 'Active', 'capital.onegodian.com is operating as the Node/Next.js capital interface.'],
  ['Public Offerings UI', 'Improved', 'Offering cards, instrument metadata, disclosure notices, and status badges are rendered.'],
  ['Investor Portal UI', 'Improved', 'Dashboard cards, certificate records, ledger entries, and next-step actions are rendered.'],
  ['Zolfi Product Line', 'Active Routing', 'Zolfi is presented at /zolfi as a ONEGODIAN Capital product line powered by QRV Network infrastructure.'],
  ['Instryx Product Line', 'Active Routing', 'Instryx is presented at /instryx as a ONEGODIAN Capital product line powered by QRV Network infrastructure.'],
  ['Database/API Bridge', 'Planned Integration', 'Live API, Prisma/PostgreSQL, and webhook processing remain part of the controlled deployment roadmap.'],
  ['WooCommerce Bridge', 'Planned Integration', 'Checkout-only product linkage and post-disclosure certificate issuance remain part of the controlled deployment roadmap.'],
];
