export interface ServiceMeta {
  id: string;
  timeline: string;
  startingPrice: string;
  teamSize: string;
  illustration: string;
}

export const SERVICE_META: ServiceMeta[] = [
  { id: 'web-dev', timeline: '8–12 weeks', startingPrice: '$5,000', teamSize: '2–4', illustration: 'service-web-dev' },
  { id: 'mobile-dev', timeline: '10–16 weeks', startingPrice: '$8,000', teamSize: '3–5', illustration: 'service-mobile-dev' },
  { id: 'custom-software', timeline: '12–20 weeks', startingPrice: '$12,000', teamSize: '4–6', illustration: 'service-custom-software' },
  { id: 'ui-ux-design', timeline: '4–8 weeks', startingPrice: '$3,000', teamSize: '2–3', illustration: 'service-uiux-design' },
  { id: 'cloud-solutions', timeline: '4–10 weeks', startingPrice: '$4,000', teamSize: '2–3', illustration: 'service-cloud' },
  { id: 'backend-dev', timeline: '8–14 weeks', startingPrice: '$6,000', teamSize: '2–4', illustration: 'service-backend' },
  { id: 'security', timeline: '2–6 weeks', startingPrice: '$3,500', teamSize: '1–3', illustration: 'service-security' },
  { id: 'domain-hosting', timeline: '1–3 weeks', startingPrice: '$500', teamSize: '1–2', illustration: 'service-hosting' },
  { id: 'testing', timeline: '3–8 weeks', startingPrice: '$2,500', teamSize: '2–3', illustration: 'service-testing' },
];
