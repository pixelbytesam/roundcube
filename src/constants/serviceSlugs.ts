/**
 * Maps SEO-friendly URL slugs → internal service IDs.
 * Used for standalone landing page routes like /web-development.
 */
export interface ServiceSlug {
  slug: string;
  serviceId: string;
}

export const SERVICE_SLUGS: ServiceSlug[] = [
  { slug: 'web-development', serviceId: 'web-dev' },
  { slug: 'mobile-app-development', serviceId: 'mobile-dev' },
  { slug: 'custom-software-development', serviceId: 'custom-software' },
  { slug: 'ui-ux-design', serviceId: 'ui-ux-design' },
  { slug: 'cloud-solutions', serviceId: 'cloud-solutions' },
  { slug: 'backend-development', serviceId: 'backend-dev' },
  { slug: 'security-enhancement', serviceId: 'security' },
  { slug: 'domain-hosting-services', serviceId: 'domain-hosting' },
  { slug: 'landing-pages', serviceId: 'landing-pages' },
  { slug: 'software-testing', serviceId: 'testing' },
];

/** Lookup: serviceId → slug */
export const SERVICE_ID_TO_SLUG: Record<string, string> = Object.fromEntries(
  SERVICE_SLUGS.map((s) => [s.serviceId, s.slug])
);

/** Lookup: slug → serviceId */
export const SLUG_TO_SERVICE_ID: Record<string, string> = Object.fromEntries(
  SERVICE_SLUGS.map((s) => [s.slug, s.serviceId])
);
