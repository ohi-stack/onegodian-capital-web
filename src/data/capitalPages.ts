export type CapitalPage = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  notice?: string;
  sections: {
    title: string;
    items: string[];
  }[];
  ctas: {
    label: string;
    href: string;
  }[];
};

export const capitalPages: CapitalPage[] = [
  {
    slug: 'opportunities-fund',
    title: 'OneGodian Opportunities Fund™',
    eyebrow: 'Workforce & Economic Development',
    summary:
      'A capital planning page for workforce participation, contractor opportunities, service expansion, project support, and economic development initiatives connected to ONEGODIAN, LLC.',
    notice: 'All capital participation requires disclosure review and acknowledgement before any payment, allocation, agreement, or participation record is treated as active.',
    sections: [
      {
        title: 'What the Fund Supports',
        items: [
          'Flexible workforce participation and contributor onboarding.',
          'Service-network growth across care services, translation, field support, business support, and community outreach.',
          'Operational tools for payments, verification, records, disclosures, and participant dashboards.',
          'Economic development initiatives that can be tracked, reviewed, and scaled through the Capital Portal.',
        ],
      },
      {
        title: 'Participation Controls',
        items: [
          'Disclosure review before participation.',
          'Documented eligibility and acknowledgement workflow.',
          'Verification connection to QRV.Network where applicable.',
          'No guarantee of return, employment, assignment volume, or project outcome.',
        ],
      },
    ],
    ctas: [
      { label: 'Review Disclosures', href: '/disclosures' },
      { label: 'Open Compliance Center', href: '/compliance-center' },
    ],
  },
  {
    slug: 'community-workforce',
    title: 'Community Workforce Network™',
    eyebrow: 'Flexible Work Infrastructure',
    summary:
      'The participation model for contributors, contractors, ambassadors, service providers, and task-based workers who may accept available opportunities on a flexible schedule.',
    notice: 'Training and certifications should be managed through u.OneGodian.com. Capital.OneGodian.com tracks workforce infrastructure, disclosures, verification, and participation readiness.',
    sections: [
      {
        title: 'Contributor Categories',
        items: [
          'Community contributors and ambassadors.',
          'Independent contractors and service providers.',
          'Care-service participants for non-medical homemaker and companion support.',
          'Translation, media, outreach, field-support, and business-support contributors.',
        ],
      },
      {
        title: 'Flexible Work Model',
        items: [
          'Participants may review available opportunities and accept work based on availability, location, skill, and verification status.',
          'Assignments should include scope, compensation terms, completion requirements, and verification steps.',
          'Payments should be processed only through approved payment workflows after completion and review.',
        ],
      },
    ],
    ctas: [
      { label: 'View Service Network', href: '/service-network' },
      { label: 'Review Participant Agreement', href: '/participant-agreement' },
    ],
  },
  {
    slug: 'economic-development',
    title: 'Economic Development Platform',
    eyebrow: 'Capital & Enterprise Infrastructure',
    summary:
      'The economic development node for ONEGODIAN, LLC projects, services, capital systems, workforce expansion, and revenue-generating infrastructure.',
    notice: 'This page is informational and operational. It does not create, approve, or validate any securities offering or guaranteed economic result.',
    sections: [
      {
        title: 'Development Areas',
        items: [
          'Revenue-generating services and digital commerce systems.',
          'Community-based workforce and contributor pathways.',
          'Service marketplace development for care, translation, business support, and field services.',
          'Capital readiness, disclosure workflows, and verification records.',
        ],
      },
      {
        title: 'Infrastructure Objective',
        items: [
          'Centralize economic development pages under Capital.OneGodian.com.',
          'Keep training and certifications linked to u.OneGodian.com.',
          'Keep product checkout and service sales linked to OneGodian.com where appropriate.',
          'Keep verification and credential records connected to QRV.Network.',
        ],
      },
    ],
    ctas: [
      { label: 'View Opportunities Fund', href: '/opportunities-fund' },
      { label: 'View Verification Center', href: '/verification' },
    ],
  },
  {
    slug: 'service-network',
    title: 'OneGodian Service Network™',
    eyebrow: 'Service Marketplace Infrastructure',
    summary:
      'The service-network hub for categories that can be offered, assigned, tracked, verified, and scaled through the OneGodian ecosystem.',
    notice: 'Each service category must use appropriate scope limits, participant agreements, payment records, and compliance review before live public rollout.',
    sections: [
      {
        title: 'Service Categories',
        items: [
          'Homemaker and companion services.',
          'Spanish to English and Xhosa to English translation services.',
          'Business support, administrative support, and research tasks.',
          'Community outreach, local errands, property photos, media support, and field assignments.',
        ],
      },
      {
        title: 'Operational Requirements',
        items: [
          'Defined service scope and pricing model.',
          'Contributor verification and role classification.',
          'Task completion documentation and customer confirmation.',
          'Payment workflow, support process, and recordkeeping protocol.',
        ],
      },
    ],
    ctas: [
      { label: 'Care Services', href: '/care-services' },
      { label: 'Translation Network', href: '/translation-network' },
    ],
  },
  {
    slug: 'care-services',
    title: 'Homemaker & Companion Services',
    eyebrow: 'Care-Service Workforce Category',
    summary:
      'A practical service category for non-medical homemaker assistance, companion visits, household support, errands, and family-support coordination.',
    notice: 'Services must be described as non-medical unless properly licensed or otherwise authorized. This page should not represent skilled nursing, medical treatment, or clinical care.',
    sections: [
      {
        title: 'Supported Services',
        items: [
          'Companion visits, conversation, check-ins, and social support.',
          'Light housekeeping, laundry assistance, organization, and meal preparation support.',
          'Grocery assistance, appointment accompaniment, errands, and transportation assistance where available.',
          'Family support coordination and safety check-ins within approved non-medical scope.',
        ],
      },
      {
        title: 'Readiness Requirements',
        items: [
          'Clear service scope and non-medical limitation language.',
          'Contributor screening, verification, and conduct standards.',
          'Client intake, assignment tracking, completion notes, and payment records.',
          'Escalation process for safety concerns, complaints, and service corrections.',
        ],
      },
    ],
    ctas: [
      { label: 'Review Participant Agreement', href: '/participant-agreement' },
      { label: 'Open Compliance Center', href: '/compliance-center' },
    ],
  },
  {
    slug: 'translation-network',
    title: 'OneGodian Translation Network™',
    eyebrow: 'Language Service Workforce Category',
    summary:
      'A flexible work and service category for Spanish ↔ English and Xhosa ↔ English translation, document support, transcription, subtitles, and community communications.',
    notice: 'Certified, legal, medical, court, immigration, or regulated translations may require qualified professional review before delivery or use.',
    sections: [
      {
        title: 'Translation Services',
        items: [
          'Spanish to English and English to Spanish translation.',
          'Xhosa to English and English to Xhosa translation.',
          'Document translation, audio transcription, subtitle translation, and business communications.',
          'Community outreach materials, website copy, letters, forms, and media captions.',
        ],
      },
      {
        title: 'Network Controls',
        items: [
          'Translator profile, language pair, skill level, and verification status.',
          'File intake, scope confirmation, delivery deadline, and revision process.',
          'Confidentiality rules for private, business, or sensitive documents.',
          'Clear separation between general translation and certified/regulated translation services.',
        ],
      },
    ],
    ctas: [
      { label: 'View Service Network', href: '/service-network' },
      { label: 'Review Risk Factors', href: '/risk-factors' },
    ],
  },
  {
    slug: 'risk-factors',
    title: 'Risk Factors',
    eyebrow: 'Compliance',
    summary:
      'Risk disclosures for capital participation, service expansion, workforce programs, technology systems, contractor participation, and early-stage business execution.',
    notice: 'No page on this site should be interpreted as a promise of return, employment, assignment volume, liquidity, approval, or guaranteed outcome.',
    sections: [
      {
        title: 'Primary Risk Categories',
        items: [
          'Business risk, capital risk, market risk, execution risk, technology risk, and payment risk.',
          'Service delivery risk, workforce availability risk, client satisfaction risk, and operational capacity risk.',
          'Compliance risk, tax/accounting risk, recordkeeping risk, and third-party platform dependency risk.',
        ],
      },
      {
        title: 'Required Participant Understanding',
        items: [
          'Participants must review disclosures before capital participation or platform participation.',
          'Independent professional advice may be required before financial, legal, tax, or business decisions.',
          'ONEGODIAN, LLC may update policies, workflows, eligibility, and service availability as operations mature.',
        ],
      },
    ],
    ctas: [
      { label: 'Read Disclosures', href: '/disclosures' },
      { label: 'Read Participant Agreement', href: '/participant-agreement' },
    ],
  },
  {
    slug: 'participant-agreement',
    title: 'Participant Agreement',
    eyebrow: 'Compliance',
    summary:
      'Agreement framework for contributors, contractors, service providers, supporters, and capital participants using the Capital Portal infrastructure.',
    notice: 'This page is a framework and should receive legal review before being treated as a final binding agreement.',
    sections: [
      {
        title: 'Agreement Topics',
        items: [
          'Participant role, scope, eligibility, verification, conduct standards, and platform rules.',
          'Independent contractor or contributor classification where applicable.',
          'Payment terms, task completion requirements, correction process, and support procedures.',
          'Confidentiality, document handling, data use, disclosure acknowledgement, and policy updates.',
        ],
      },
      {
        title: 'Acknowledgement Requirements',
        items: [
          'Participant must review applicable disclosures and risk factors.',
          'Participant must provide accurate information and maintain current profile records.',
          'Participant must not represent authority, employment status, licensing, or service scope beyond written approval.',
        ],
      },
    ],
    ctas: [
      { label: 'Open Verification Center', href: '/verification' },
      { label: 'Open Compliance Center', href: '/compliance-center' },
    ],
  },
  {
    slug: 'verification',
    title: 'Verification Center',
    eyebrow: 'Trust & Recordkeeping',
    summary:
      'Verification hub for contributor status, service-provider status, document records, certificate references, disclosure acknowledgements, and QRV.Network trust-layer integrations.',
    notice: 'Verification confirms record status within the applicable OneGodian system only. It does not replace legal, regulatory, banking, licensing, or third-party due diligence.',
    sections: [
      {
        title: 'Verification Areas',
        items: [
          'Identity and contributor verification.',
          'Service-provider verification and role status.',
          'Document, certificate, disclosure, and acknowledgement verification.',
          'QRV.Network references for credential and trust-layer records where applicable.',
        ],
      },
      {
        title: 'Status Levels',
        items: [
          'Submitted: information received but not yet reviewed.',
          'Under Review: records are being checked for completeness.',
          'Verified: record has been approved for the applicable internal purpose.',
          'Restricted or Revoked: record is limited, expired, corrected, or no longer active.',
        ],
      },
    ],
    ctas: [
      { label: 'Compliance Center', href: '/compliance-center' },
      { label: 'Disclosure Center', href: '/disclosures' },
    ],
  },
  {
    slug: 'compliance-center',
    title: 'Compliance Center',
    eyebrow: 'Disclosure-First Operations',
    summary:
      'Central compliance hub for disclosures, risk factors, participant agreements, verification, documentation, operating policies, and review workflows.',
    notice: 'All capital participation requires disclosure review and acknowledgement. Compliance infrastructure must be maintained before live public capital workflows are promoted.',
    sections: [
      {
        title: 'Compliance Resources',
        items: [
          'Disclosure Center and acknowledgement workflows.',
          'Risk Factors for capital, workforce, services, technology, and early-stage execution.',
          'Participant Agreement for contributors, contractors, service providers, supporters, and capital participants.',
          'Verification Center for contributor status, documents, certificates, and QRV.Network references.',
        ],
      },
      {
        title: 'Operational Review Areas',
        items: [
          'Legal review, payment review, data and privacy review, tax/accounting review, and workflow review.',
          'Service scope review for care services, translation, business support, and field work.',
          'Policy updates, support requests, correction process, and document-retention standards.',
        ],
      },
    ],
    ctas: [
      { label: 'Review Disclosures', href: '/disclosures' },
      { label: 'Review Risk Factors', href: '/risk-factors' },
    ],
  },
];

export const capitalPageMap = Object.fromEntries(capitalPages.map((page) => [page.slug, page]));
