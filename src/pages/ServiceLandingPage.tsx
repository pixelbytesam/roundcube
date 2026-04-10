import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  Cpu,
  Palette,
  Cloud,
  Server,
  ShieldCheck,
  Globe2,
  Bug,
  Clock,
  Users,
  Zap,
  Award,
  Phone,
  Mail,
} from 'lucide-react';
import BrutalButton from '@/components/features/BrutalButton';
import SectionHeading from '@/components/features/SectionHeading';
import TestimonialCard from '@/components/features/TestimonialCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SERVICES, TESTIMONIALS, STATS } from '@/constants/mockData';
import { SERVICE_META } from '@/constants/servicesMeta';
import { SLUG_TO_SERVICE_ID, SERVICE_ID_TO_SLUG } from '@/constants/serviceSlugs';
import { SITE_CONFIG } from '@/constants/config';
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
import serviceLandingPages from '@/assets/service-landing-pages.png';

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, Cpu, Palette, Cloud, Server, ShieldCheck, Globe2, Bug,
};

const illustrationMap: Record<string, string> = {
  'web-dev': serviceWebDev,
  'mobile-dev': serviceMobileDev,
  'custom-software': serviceCustomSoftware,
  'ui-ux-design': serviceUiuxDesign,
  'cloud-solutions': serviceCloud,
  'backend-dev': serviceBackend,
  'security': serviceSecurity,
  'domain-hosting': serviceHosting,
    'landing-pages': serviceLandingPages,
  'testing': serviceTesting,
};

/* ═══════════════════════════════════════════════════════
   1. HERO — bold headline, badges, dual CTAs
   ═══════════════════════════════════════════════════════ */
function LandingHero({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Globe;
  const illustration = illustrationMap[service.id];
  const meta = SERVICE_META.find((m) => m.id === service.id);

  return (
    <section className="relative bg-brand-dark pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-16 right-10 size-36 border-2 border-brand-secondary/10 rounded-full" />
      <div className="absolute bottom-20 left-12 size-24 bg-brand-primary/8 rounded-3xl rotate-12" />
      <div className="absolute top-32 left-[40%] size-10 bg-brand-secondary/15 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-brand-gray-400 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-brand-primary">{service.title}</span>
            </div>

            {/* Icon + number */}
            <div className="flex items-center gap-4 mb-6">
              <div className="size-16 flex items-center justify-center bg-brand-primary border-2 border-brand-primary rounded-2xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]">
                <Icon className="size-7 text-white" />
              </div>
              <span className="text-9xl font-bold jersey-20-regular text-white/70 leading-none select-none hidden sm:block">
                {service.number}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white leading-[1.08] tracking-tight text-balance">
              {service.title}{' '}
              <span className="text-brand-primary">Services</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-brand-gray-300 max-w-xl leading-relaxed">
              {service.longDescription}
            </p>

            {/* Quick meta badges */}
            {meta && (
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-white/10 border border-white/15 text-white rounded-full">
                  <Clock className="size-3.5" /> {meta.timeline}
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-brand-primary/20 border border-brand-primary/30 text-brand-primary rounded-full">
                  From {meta.startingPrice}
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-brand-secondary/20 border border-brand-secondary/30 text-brand-secondary rounded-full">
                  <Users className="size-3.5" /> Team of {meta.teamSize}
                </span>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              <BrutalButton to="/contact" variant="primary">
                Get a Free Quote <ArrowRight className="size-4" />
              </BrutalButton>
              <BrutalButton to="/portfolio" variant="outline">
                See Our Work
              </BrutalButton>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex items-center gap-6 flex-wrap">
              {STATS.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white tabular-nums">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-brand-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero illustration */}
          {illustration && (
            <div className="animate-fade-up stagger-2 hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-3 bg-brand-primary/10 rounded-3xl blur-2xl" />
                <div className="absolute inset-0 bg-brand-primary/15 rounded-3xl translate-x-4 translate-y-4 border-2 border-white/10" />
                <img
                  src={illustration}
                  alt={`${service.title} services illustration`}
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

/* ═══════════════════════════════════════════════════════
   2. VALUE PROPOSITION — what the client gets
   ═══════════════════════════════════════════════════════ */
function ValueProposition({ service }: { service: Service }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = iconMap[service.icon] || Globe;

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Left — checklist */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded-full uppercase tracking-wider mb-4">
              What's Included
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3 leading-tight">
              Everything You Need for{' '}
              <span className="text-brand-primary">{service.title}</span>
            </h2>
            <p className="text-brand-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              From strategy to execution — here is what comes standard when you partner with us for {service.title.toLowerCase()}.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-brand-cream border border-brand-dark/10 rounded-xl px-4 py-3 transition-all duration-200 hover:border-brand-primary/30 hover:bg-brand-primary/5"
                >
                  <CheckCircle className="size-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-brand-dark">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dark numbered card */}
          <div className="bg-brand-dark border-2 border-brand-dark rounded-2xl p-6 md:p-8 shadow-brutal">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-11 flex items-center justify-center bg-brand-primary rounded-xl">
                <Icon className="size-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Core Technologies</h3>
            </div>
            {service.techStack && service.techStack.length > 0 && (
              <div className="space-y-2.5 mb-6">
                {service.techStack.map((tech, i) => (
                  <div
                    key={tech}
                    className="flex items-center gap-4 px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl transition-all duration-200 hover:bg-white/[0.08]"
                  >
                    <span className="text-sm font-bold text-brand-primary tabular-nums min-w-[28px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium text-white/90">{tech}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="pt-4 border-t border-white/10">
              <p className="text-brand-gray-400 text-sm leading-relaxed">
                We pick tools based on your project requirements — not trends. Every choice is deliberate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   3. PROCESS — How we deliver this service
   ═══════════════════════════════════════════════════════ */
function ProcessSection({ service }: { service: Service }) {
  const { ref, isVisible } = useScrollAnimation();
  if (!service.process || service.process.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title={`How We Deliver ${service.title}`}
          description="A proven, transparent workflow so you always know where your project stands."
          align="center"
        />
        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, i) => (
              <div
                key={step.step}
                className={`animate-fade-up stagger-${Math.min(i + 1, 6)} relative bg-white border-2 border-brand-dark rounded-2xl p-6 shadow-brutal transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-hover`}
              >
                {/* Step number */}
                <div className="size-12 flex items-center justify-center bg-brand-primary text-white border-2 border-brand-dark rounded-xl shadow-brutal-sm mb-4">
                  <span className="text-sm font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-sm text-brand-gray-500 leading-relaxed">
                  {step.description}
                </p>
                {/* Faded number */}
                <span className="absolute top-4 right-5 text-5xl font-bold text-brand-dark/70 jersey-20-regular leading-none select-none">
                  {step.step}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   4. CASE STUDIES — Real results
   ═══════════════════════════════════════════════════════ */
function CaseStudiesSection({ service }: { service: Service }) {
  const { ref, isVisible } = useScrollAnimation();
  if (!service.caseStudies || service.caseStudies.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Case Studies"
          title="Real Projects, Real Results"
          description={`See how we have helped companies succeed with ${service.title.toLowerCase()}.`}
          align="center"
        />
        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.caseStudies.map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <div className={`animate-fade-up stagger-${Math.min(index + 1, 4)} bg-brand-cream border-2 border-brand-dark rounded-2xl overflow-hidden shadow-brutal transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-hover`}>
      <div className="relative h-52 overflow-hidden">
        <img src={study.imageUrl} alt={study.title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
        <span className="absolute bottom-3 left-4 px-3 py-1 text-xs font-semibold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full uppercase">
          {study.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-dark mb-1">{study.title}</h3>
        <p className="text-sm font-medium text-brand-primary mb-4">{study.client}</p>

        <div className="space-y-3">
          <div>
            <h4 className="text-xs font-bold text-brand-gray-400 uppercase tracking-wider mb-1">Challenge</h4>
            <p className="text-sm text-brand-gray-500 leading-relaxed">{study.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-gray-400 uppercase tracking-wider mb-1">Solution</h4>
            <p className="text-sm text-brand-gray-500 leading-relaxed">{study.solution}</p>
          </div>
          <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-xl px-4 py-3">
            <h4 className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">Outcome</h4>
            <p className="text-sm font-semibold text-brand-dark leading-relaxed">{study.outcome}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-brand-dark/10">
          {study.techUsed.map((tech) => (
            <span key={tech} className="px-2.5 py-0.5 text-xs font-medium bg-white text-brand-dark border border-brand-dark/15 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   5. SOCIAL PROOF — Testimonials + trust bar
   ═══════════════════════════════════════════════════════ */
function SocialProofSection({ service }: { service: Service }) {
  const { ref, isVisible } = useScrollAnimation();

  // Find testimonials related to this service's case studies
  const relatedCompanies = (service.caseStudies || []).map((c) => c.client);
  const relatedTestimonials = TESTIMONIALS.filter((t) => relatedCompanies.includes(t.company));
  const displayTestimonials = relatedTestimonials.length >= 2 ? relatedTestimonials : TESTIMONIALS.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Social Proof"
          title="Trusted by Industry Leaders"
          description="Here is what our clients say about working with us."
          align="center"
        />

        {/* Trust bar */}
        {isVisible && (
          <div className="animate-fade-up mb-12">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {[
                { icon: Award, label: '20+ Projects Delivered' },
                { icon: Star, label: '4.8/5 Average Rating' },
                { icon: Users, label: '85+ Happy Clients' },
                { icon: Zap, label: '24–48hr Response Time' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 px-5 py-3 bg-white border-2 border-brand-dark/10 rounded-xl">
                  <item.icon className="size-5 text-brand-primary" />
                  <span className="text-sm font-semibold text-brand-dark">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up stagger-2">
            {displayTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )} */}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   6. RELATED SERVICES — Cross-sell
   ═══════════════════════════════════════════════════════ */
function RelatedServicesSection({ service }: { service: Service }) {
  const { ref, isVisible } = useScrollAnimation();
  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Explore More"
          title="Related Services"
          description="We offer a full spectrum of digital services. Here are a few that pair well."
          align="center"
        />
        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s, i) => {
              const SIcon = iconMap[s.icon] || Globe;
              const slug = SERVICE_ID_TO_SLUG[s.id] || s.id;
              return (
                <Link
                  key={s.id}
                  to={`/${slug}`}
                  className={`animate-fade-up stagger-${i + 1} group bg-brand-cream border-2 border-brand-dark rounded-2xl p-6 shadow-brutal transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-hover`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-12 flex items-center justify-center bg-brand-primary/10 border-2 border-brand-primary/25 rounded-xl transition-colors group-hover:bg-brand-primary group-hover:border-brand-dark">
                      <SIcon className="size-5 text-brand-primary transition-colors group-hover:text-white" />
                    </div>
                    <span className="text-5xl font-bold text-brand-dark/70 jersey-20-regular leading-none select-none">
                      {s.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-brand-gray-500 leading-relaxed mb-4">
                    {s.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                    Learn More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   7. CONVERSION CTA — Get in touch
   ═══════════════════════════════════════════════════════ */
function ConversionCta({ service }: { service: Service }) {
  return (
    <section className="py-20 md:py-28 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-brand-primary/10 border-2 border-brand-primary/30 rounded-3xl p-10 md:p-16 overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-6 right-6 size-28 border-2 border-brand-secondary/15 rounded-full" />
          <div className="absolute bottom-8 left-8 size-20 bg-brand-secondary/10 rounded-2xl rotate-12" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
                Ready to start your{' '}
                <span className="text-brand-primary">{service.title.toLowerCase()}</span>{' '}
                project?
              </h2>
              <p className="mt-4 text-lg text-brand-gray-300 max-w-lg">
                Book a free 30-minute consultation. We will discuss your goals, timeline, and budget — no strings attached.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <BrutalButton to="/contact" variant="primary">
                  Book Free Consultation <ArrowRight className="size-4" />
                </BrutalButton>
                <BrutalButton to="/pricing" variant="outline">
                  View Pricing Plans
                </BrutalButton>
              </div>
            </div>

            {/* Contact quick info */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-white mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-brand-gray-300 hover:text-white transition-colors"
                >
                  <div className="size-10 flex items-center justify-center bg-brand-primary/20 border border-brand-primary/30 rounded-lg">
                    <Mail className="size-4 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-gray-400">Email us</p>
                    <p className="text-sm font-semibold">{SITE_CONFIG.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-brand-gray-300 hover:text-white transition-colors"
                >
                  <div className="size-10 flex items-center justify-center bg-brand-secondary/20 border border-brand-secondary/30 rounded-lg">
                    <Phone className="size-4 text-brand-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-gray-400">Call us</p>
                    <p className="text-sm font-semibold">{SITE_CONFIG.phone}</p>
                  </div>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="size-2.5 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-sm text-brand-gray-300">Typically responds within 2 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════ */
export default function ServiceLandingPage() {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  // Extract slug from URL path (works for both /:slug and direct routes)
  const pathname = window.location.pathname.replace(/^\//, '');
  const slug = paramSlug || pathname;
  const serviceId = slug ? SLUG_TO_SERVICE_ID[slug] : undefined;
  const service = serviceId ? SERVICES.find((s) => s.id === serviceId) : undefined;

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-brand-cream">
        <div className="text-center px-4">
          <div className="text-8xl font-bold text-brand-dark/10 mb-4">404</div>
          <h1 className="text-3xl font-bold text-brand-dark mb-3">Service Not Found</h1>
          <p className="text-brand-gray-500 text-lg mb-8">
            The service page you are looking for does not exist.
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
      <LandingHero service={service} />
      <ValueProposition service={service} />
      <ProcessSection service={service} />
      <CaseStudiesSection service={service} />
      <SocialProofSection service={service} />
      <RelatedServicesSection service={service} />
      <ConversionCta service={service} />
    </main>
  );
}
