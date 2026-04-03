import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Globe,
  Smartphone,
  Cpu,
  Palette,
  Cloud,
  Server,
  ShieldCheck,
  Globe2,
  Bug,
  Lightbulb,
  Code,
  Shield,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import BrutalButton from '@/components/features/BrutalButton';
import SectionHeading from '@/components/features/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SERVICES } from '@/constants/mockData';
import { SERVICE_META } from '@/constants/servicesMeta';
import type { Service, CaseStudy } from '@/types';

import serviceWebDev from '@/assets/service-web-dev.png';
import serviceMobileDev from '@/assets/service-mobile-dev.png';
import serviceCustomSoftware from '@/assets/service-custom-software.png';
import serviceUiuxDesign from '@/assets/service-uiux-design.png';
import serviceCloud from '@/assets/service-cloud.png';
import serviceBackend from '@/assets/service-backend.png';
import serviceSecurity from '@/assets/service-security.png';
import serviceHosting from '@/assets/service-hosting.png';
import serviceTesting from '@/assets/service-testing.png';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Cpu,
  Palette,
  Cloud,
  Server,
  ShieldCheck,
  Globe2,
  Bug,
};

const processIconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Palette,
  Code,
  Shield,
  Rocket,
  TrendingUp,
  Globe,
  Smartphone,
  Cpu,
  Cloud,
  Server,
  ShieldCheck,
  Globe2,
  Bug,
};

const illustrationMap: Record<string, string> = {
  'web-development': serviceWebDev,
  'mobile-app-development': serviceMobileDev,
  'landing-pages': serviceWebDev,
  'custom-software-development': serviceCustomSoftware,
  'ui-ux-design': serviceUiuxDesign,
  'cloud-solutions': serviceCloud,
  'backend-development': serviceBackend,
  'security': serviceSecurity,
  'domain-hosting': serviceHosting,
  'testing': serviceTesting,
};

/* ─── Hero with faded number + icon ─── */
function ServiceHero({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Globe;
  const illustration = illustrationMap[service.id];
  const meta = SERVICE_META.find((m) => m.id === service.id);

  return (
    <section className="relative bg-brand-dark pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute top-20 right-20 size-32 border-2 border-brand-secondary/15 rounded-full" />
      <div className="absolute bottom-10 left-16 size-20 bg-brand-primary/10 rounded-2xl rotate-45" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-brand-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="size-4" />
              All Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="size-16 flex items-center justify-center bg-brand-primary/15 border-2 border-brand-primary/30 rounded-2xl shadow-[3px_3px_0px_0px_rgba(217,119,87,0.3)]">
                <Icon className="size-7 text-brand-primary" />
              </div>
              <span className="text-8xl md:text-9xl font-bold text-white/[0.06] leading-none select-none">
                {service.number}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-xl text-balance">
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-brand-gray-300 max-w-xl text-pretty">
              {service.longDescription}
            </p>

            {/* Quick meta badges */}
            {meta && (
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/10 border border-white/15 text-white rounded-full">
                  Timeline: {meta.timeline}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-brand-primary/20 border border-brand-primary/30 text-brand-primary rounded-full">
                  From {meta.startingPrice}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-brand-secondary/20 border border-brand-secondary/30 text-brand-secondary rounded-full">
                  Team of {meta.teamSize}
                </span>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              <BrutalButton to="/contact" variant="primary">
                Discuss Your Project <ArrowRight className="size-4" />
              </BrutalButton>
              <BrutalButton to="/pricing" variant="outline">
                View Pricing
              </BrutalButton>
            </div>
          </div>

          {/* Hero illustration */}
          {illustration && (
            <div className="animate-fade-up stagger-2 hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-primary/10 rounded-3xl translate-x-3 translate-y-3 border-2 border-white/10" />
                <img
                  src={illustration}
                  alt={`${service.title} illustration`}
                  className="relative w-full rounded-3xl border-2 border-white/15"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-primary" />
    </section>
  );
}

/* ─── Zigzag Features with Checkmarks ─── */
function FeaturesZigzag({ service }: { service: Service }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = iconMap[service.icon] || Globe;
  const half = Math.ceil(service.features.length / 2);
  const leftFeatures = service.features.slice(0, half);
  const rightFeatures = service.features.slice(half);

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {/* Left: text + checkmarks */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded-full uppercase tracking-wider mb-4">
              What's Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
              Features & Benefits
            </h2>
            <p className="text-brand-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              Everything you get when you choose our {service.title.toLowerCase()} service — built for results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              <div className="space-y-3">
                {leftFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle className="size-5 text-brand-primary shrink-0" />
                    <span className="text-sm font-medium text-brand-dark">{f}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {rightFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle className="size-5 text-brand-primary shrink-0" />
                    <span className="text-sm font-medium text-brand-dark">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: dark card with numbered features */}
          <div className="bg-brand-dark border-2 border-brand-dark rounded-2xl p-6 md:p-8 shadow-brutal">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 flex items-center justify-center bg-brand-primary rounded-xl">
                <Icon className="size-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Core Capabilities</h3>
            </div>
            <div className="space-y-3">
              {service.features.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-4 px-4 py-3.5 bg-white/[0.05] border border-white/[0.08] rounded-xl transition-all duration-200 hover:bg-white/[0.08]"
                >
                  <span className="text-sm font-bold text-brand-primary tabular-nums min-w-[28px]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Tech Stack (zigzag: dark card left, text right) ─── */
function TechStackZigzag({ service }: { service: Service }) {
  const { ref, isVisible } = useScrollAnimation();
  if (!service.techStack || service.techStack.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {/* Left: tech badges */}
          <div className="bg-white border-2 border-brand-dark rounded-2xl p-8 shadow-brutal">
            <h3 className="text-xl font-bold text-brand-dark mb-6">Technologies We Use</h3>
            <div className="flex flex-wrap gap-3">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-3 text-sm font-semibold bg-brand-cream border-2 border-brand-dark rounded-xl shadow-brutal-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-brutal hover:bg-brand-primary hover:text-white hover:border-brand-dark"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold bg-brand-secondary/20 text-brand-dark border border-brand-dark/10 rounded-full uppercase tracking-wider mb-4">
              Tech Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
              Built With the Best Tools
            </h2>
            <p className="text-brand-gray-500 text-base leading-relaxed max-w-lg">
              We pick tools based on your project needs — not trends. Every technology in our stack is battle-tested and chosen for reliability, performance, and developer experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Process Timeline ─── */
function ProcessTimeline({ service }: { service: Service }) {
  const { ref, isVisible } = useScrollAnimation();
  if (!service.process || service.process.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="How We Deliver"
          description="A proven workflow from discovery to deployment."
          align="center"
        />
        {isVisible && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {service.process.map((step, i) => {
              const StepIcon = processIconMap[service.icon] || Lightbulb;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`animate-fade-up stagger-${Math.min(i + 1, 6)} ${
                    isLeft ? '' : 'lg:mt-12'
                  }`}
                >
                  <div className="relative bg-brand-cream border-2 border-brand-dark rounded-2xl p-6 shadow-brutal transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-hover">
                    <div className="flex items-start gap-4">
                      <div className="size-12 flex items-center justify-center bg-brand-primary text-white border-2 border-brand-dark rounded-xl shadow-brutal-sm shrink-0">
                        <span className="text-sm font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-brand-dark mb-1">{step.title}</h3>
                        <p className="text-sm text-brand-gray-500 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {/* Connector line for desktop */}
                    {i < service.process!.length - 1 && (
                      <div className="hidden lg:block absolute -bottom-5 left-1/2 w-0.5 h-5 bg-brand-dark/10" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Case Study Card ─── */
function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="bg-white border-2 border-brand-dark rounded-2xl overflow-hidden shadow-brutal transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-hover">
      <div className="relative h-48 overflow-hidden">
        <img
          src={study.imageUrl}
          alt={study.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full uppercase">
          {study.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-dark mb-1">{study.title}</h3>
        <p className="text-sm font-medium text-brand-primary mb-4">{study.client}</p>

        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-bold text-brand-gray-400 uppercase tracking-wider mb-1">Problem</h4>
            <p className="text-sm text-brand-gray-500 leading-relaxed">{study.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-gray-400 uppercase tracking-wider mb-1">Solution</h4>
            <p className="text-sm text-brand-gray-500 leading-relaxed">{study.solution}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-gray-400 uppercase tracking-wider mb-1">Outcome</h4>
            <p className="text-sm font-medium text-brand-primary leading-relaxed">{study.outcome}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-brand-gray-200">
          {study.techUsed.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-medium bg-brand-cream text-brand-dark border border-brand-dark/20 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Case Studies Section ─── */
function CaseStudiesSection({ service }: { service: Service }) {
  const { ref, isVisible } = useScrollAnimation();
  if (!service.caseStudies || service.caseStudies.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Case Studies"
          title="Related Projects"
          description="Real results from real clients using this service."
        />
        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up">
            {service.caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CtaSection({ service }: { service: Service }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark border-2 border-brand-dark rounded-3xl p-10 md:p-16 shadow-brutal relative overflow-hidden">
          <div className="absolute top-8 right-8 size-20 border-2 border-brand-secondary/20 rounded-full" />
          <div className="absolute bottom-6 left-6 size-14 bg-brand-primary/15 rounded-xl rotate-12" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Ready to get started with{' '}
              <span className="text-brand-primary">{service.title}</span>?
            </h2>
            <p className="text-brand-gray-300 text-lg mb-8">
              Let us discuss your project requirements and build something exceptional together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <BrutalButton to="/contact" variant="primary">
                Start Your Project <ArrowRight className="size-4" />
              </BrutalButton>
              <BrutalButton to="/pricing" variant="outline">
                View Pricing
              </BrutalButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Export ─── */
export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-brand-cream">
        <div className="text-center px-4">
          <div className="text-8xl font-bold text-brand-dark/10 mb-4">404</div>
          <h1 className="text-3xl font-bold text-brand-dark mb-3">Service Not Found</h1>
          <p className="text-brand-gray-500 text-lg mb-8">
            The service you are looking for does not exist.
          </p>
          <BrutalButton to="/services" variant="primary">
            View All Services <ArrowRight className="size-4" />
          </BrutalButton>
        </div>
      </main>
    );
  }

  return (
    <main>
      <ServiceHero service={service} />
      <FeaturesZigzag service={service} />
      <TechStackZigzag service={service} />
      <ProcessTimeline service={service} />
      <CaseStudiesSection service={service} />
      <CtaSection service={service} />
    </main>
  );
}
