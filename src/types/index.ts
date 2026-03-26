export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
  color: string;
  techStack?: string[];
  process?: ServiceProcess[];
  caseStudies?: CaseStudy[];
}

export interface ServiceProcess {
  step: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  techUsed: string[];
  outcome: string;
  imageUrl: string;
  category: 'web' | 'mobile' | 'saas';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'saas';
  techStack: string[];
  imageUrl: string;
  year: string;
  client: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  avatarUrl: string;
  rating: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  bio: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: { monthly: number; yearly: number };
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  badge?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export type ProjectCategory = 'all' | 'web' | 'mobile' | 'saas';
