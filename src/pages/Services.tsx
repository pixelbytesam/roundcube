import { Link } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  Cpu,
  Palette,
  Cloud,
  Server,
  ShieldCheck,
  Globe2,
  Bug,
  LayoutTemplate,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
} from 'lucide-react';
import BrutalButton from '@/components/features/BrutalButton';
import SectionHeading from '@/components/features/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SERVICES } from '@/constants/mockData';
import { SERVICE_META } from '@/constants/servicesMeta';
import type { Service } from '@/types';
import { SERVICE_ID_TO_SLUG } from '@/constants/serviceSlugs';

import serviceWebDev from '@/assets/service-web-dev.png';
import serviceMobileDev from '@/assets/service-mobile-dev.png';
import serviceCustomSoftware from '@/assets/service-custom-software.png';
import serviceUiuxDesign from '@/assets/service-uiux-design.png';
import serviceCloud from '@/assets/service-cloud.png';
import serviceBackend from '@/assets/service-backend.png';
import serviceSecurity from '@/assets/service-security.png';
import serviceHosting from '@/assets/service-hosting.png';
import serviceTesting from '@/assets/service-testing.png';
import serviceLandingPages from '@/assets/service-landing-pages.png';

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
  LayoutTemplate,
};

const illustrationMap: Record<string, string> = {
  'service-web-dev': serviceWebDev,
  'service-landing-pages': serviceLandingPages,
  'service-mobile-dev': serviceMobileDev,
  'service-custom-software': serviceCustomSoftware,
  'service-uiux-design': serviceUiuxDesign,
  'service-cloud': serviceCloud,
  'service-backend': serviceBackend,
  'service-security': serviceSecurity,
  'service-hosting': serviceHosting,
  'service-testing': serviceTesting,
};

/* ─── Hero Banner ─── */
function HeroBanner() {
  return (
    <section className="relative bg-brand-dark pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute top-20 right-20 size-32 border-2 border-brand-secondary/20 rounded-full" />
      <div className="absolute bottom-10 left-16 size-20 bg-brand-primary/10 rounded-2xl rotate-45" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl m-auto text-center animate-fade-up">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full shadow-brutal-sm mb-6">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            End-to-end {' '}
            <span className="text-brand-primary block">digital services</span> for ambitious teams
          </h1>
          <p className="mt-5 text-lg text-brand-gray-300 max-w-2xl text-pretty">
            From concept to cloud — we cover every layer of the modern tech stack so you can focus on growing your business.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-primary" />
    </section>
  );
}

/* ─── Single Zigzag Service Block ─── */
function ZigzagServiceBlock({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = iconMap[service.icon] || Globe;
  const isEven = index % 2 === 1;
  const meta = SERVICE_META.find((m) => m.id === service.id);
  const illustration = meta ? illustrationMap[meta.illustration] : undefined;

  const checkFeatures = service.features.slice(0, 4);
  const techListItems = service.features;

  const textContent = (
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-4">
        <div className="size-14 flex items-center justify-center bg-brand-primary/15 border-2 border-brand-primary/30 rounded-2xl shadow-[3px_3px_0px_0px_rgba(217,119,87,0.2)]">
          <Icon className="size-6 text-brand-primary" />
        </div>
        <span className="text-7xl md:text-8xl jersey-20-regular font-bold text-brand-dark/80 leading-none select-none">
          {service.number}
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
        {service.title}
      </h2>

      <p className="text-brand-gray-500 text-[15px] md:text-base leading-relaxed mb-6 max-w-lg text-pretty">
        {service.longDescription.split('.').slice(0, 2).join('.') + '.'}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
        {checkFeatures.map((feature) => (
          <div key={feature} className="flex items-center gap-2.5">
            <CheckCircle className="size-5 text-brand-primary shrink-0" />
            <span className="text-sm md:text-[15px] font-medium text-brand-dark">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div>
        <Link
          to={`/${SERVICE_ID_TO_SLUG[service.id] || service.id}`}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-brand-dark border-2 border-brand-dark rounded-xl transition-all duration-200 hover:bg-brand-dark hover:text-white hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px]"
        >
          View Details <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );

  const darkCard = (
    <div className="bg-brand-dark border-2 border-brand-dark rounded-2xl shadow-brutal h-full overflow-hidden">
      {/* Illustration at top */}
      {illustration && (
        <div className="relative h-44 md:h-52 overflow-hidden">
          <img
            src={illustration}
            alt={`${service.title} illustration`}
            className="w-full h-full object-cover opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark/90" />
        </div>
      )}
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-10 flex items-center justify-center bg-brand-primary rounded-xl">
            <Icon className="size-5 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white">{service.title}</h3>
        </div>
        <div className="space-y-3">
          {techListItems.map((item, i) => (
            <div
              key={item}
              className="flex items-center gap-4 px-4 py-3.5 bg-white/[0.05] border border-white/[0.08] rounded-xl transition-all duration-200 hover:bg-white/[0.08] hover:border-white/[0.12]"
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
  );

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
      >
        {isEven ? (
          <>
            <div className="lg:order-2">{textContent}</div>
            <div className="lg:order-1">{darkCard}</div>
          </>
        ) : (
          <>
            <div>{textContent}</div>
            <div>{darkCard}</div>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Zigzag Services Section ─── */
function ZigzagServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20 md:space-y-28">
          {SERVICES.map((service, i) => (
            <ZigzagServiceBlock key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Comparison Table ─── */
function ComparisonTable() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="At a Glance"
          title="Service Comparison"
          description="Timelines, budgets, and team sizes for every service we offer."
          align="center"
        />
        {isVisible && (
          <div className="animate-fade-up overflow-x-auto -mx-4 px-4">
            <div className="min-w-[700px]">
              <div className="bg-white border-2 border-brand-dark rounded-2xl shadow-brutal overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-4 bg-brand-dark text-white">
                  <div className="px-6 py-4 font-bold text-sm">Service</div>
                  <div className="px-6 py-4 font-bold text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-4 text-brand-secondary" />
                      Timeline
                    </span>
                  </div>
                  <div className="px-6 py-4 font-bold text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="size-4 text-brand-secondary" />
                      Starting Price
                    </span>
                  </div>
                  <div className="px-6 py-4 font-bold text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="size-4 text-brand-secondary" />
                      Team Size
                    </span>
                  </div>
                </div>

                {/* Rows */}
                {SERVICES.map((service, i) => {
                  const meta = SERVICE_META.find((m) => m.id === service.id);
                  const Icon = iconMap[service.icon] || Globe;
                  return (
                    <Link
                      key={service.id}
                      to={`/${SERVICE_ID_TO_SLUG[service.id] || service.id}`}
                      className={`grid grid-cols-4 items-center transition-colors duration-150 hover:bg-brand-primary/5 group ${i < SERVICES.length - 1 ? 'border-b border-brand-dark/10' : ''
                        }`}
                    >
                      <div className="px-6 py-4 flex items-center gap-3">
                        <div className="size-9 flex items-center justify-center bg-brand-primary/10 border border-brand-primary/20 rounded-lg shrink-0">
                          <Icon className="size-4 text-brand-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                            {service.title}
                          </p>
                          <p className="text-xs text-brand-gray-400 mt-0.5 hidden sm:block">
                            {service.shortDescription.slice(0, 40)}...
                          </p>
                        </div>
                      </div>
                      <div className="px-6 py-4">
                        <span className="text-sm font-semibold text-brand-dark">
                          {meta?.timeline || '—'}
                        </span>
                      </div>
                      <div className="px-6 py-4">
                        <span className="text-sm font-bold text-brand-primary">
                          {meta?.startingPrice || '—'}
                        </span>
                      </div>
                      <div className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-brand-secondary/20 text-brand-dark border border-brand-dark/10 rounded-full">
                          <Users className="size-3" />
                          {meta?.teamSize || '—'}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */
function CtaBanner() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark border-2 border-brand-dark rounded-3xl p-10 md:p-16 shadow-brutal relative overflow-hidden">
          <div className="absolute top-8 right-8 size-20 border-2 border-brand-secondary/20 rounded-full" />
          <div className="absolute bottom-6 left-6 size-14 bg-brand-primary/10 rounded-xl rotate-12" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Need a service not listed here?
            </h2>
            <p className="text-brand-gray-300 text-lg max-w-xl mx-auto mb-8">
              We love custom challenges. Tell us what you are building and we will figure out how to make it happen.
            </p>
            <BrutalButton to="/contact" variant="primary">
              Let's Discuss <ArrowRight className="size-4" />
            </BrutalButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <main>
      <HeroBanner />
      <ZigzagServicesSection />
      <ComparisonTable />
      <CtaBanner />
    </main>
  );
}
