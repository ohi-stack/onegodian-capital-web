import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://odefi.onegodian.com';

const staticRoutes = [
  '/',
  '/offerings',
  '/investor-portal',
  '/disclosures',
  '/certificates',
  '/production-readiness',
  '/registry',
  '/zolfi',
  '/zolfi/blockchain-security',
  '/zolfi/smart-contracts',
  '/zolfi/verification',
  '/zolfi/investor-trust-layer',
  '/zolfi/roadmap',
  '/zolfi/services',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/investor-portal') ? 0.9 : 0.7,
  }));
}
