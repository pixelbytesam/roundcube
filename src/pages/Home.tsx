import { ArrowRight, Sparkles } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.png';
import processIllustration from '@/assets/process-illustration.png';
import BrutalButton from '@/components/features/BrutalButton';
import SectionHeading from '@/components/features/SectionHeading';
import ServiceCard from '@/components/features/ServiceCard';
import ProjectCard from '@/components/features/ProjectCard';
import TestimonialCarousel from '@/components/features/TestimonialCarousel';
import ProcessStep from '@/components/features/ProcessStep';
import StatCounter from '@/components/features/StatCounter';
import FeatureCard from '@/components/features/FeatureCard';
import AboutStatsSection from '@/components/features/AboutStatsSection';
import TechStackSection from '@/components/features/TechStackSection';
import CaseStudyHighlight from '@/components/features/CaseStudyHighlight';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  SERVICES,
  PROJECTS,
  TESTIMONIALS,
  PROCESS_STEPS,
  STATS,
  FEATURES,
} from '@/constants/mockData';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from 'react';
import HeroHeading from '@/components/HeroHeadingLoop';
import LoadingFallback from './LoadingFallback';
import FlatOrbitHero from '@/components/features/FlatOrbitHero';


/* ─── 1. HERO ─── */
function HeroSection() {

  const heroRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(smoothY, [-300, 300], [10, -10]);
  const rotateY = useTransform(smoothX, [-300, 300], [-10, 10]);

  const translateX = useTransform(smoothX, [-300, 300], [-20, 20]);
  const translateY = useTransform(smoothY, [-300, 300], [-20, 20]);

  const scale = useTransform(smoothY, [-300, 300], [1.03, 0.97]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };


  return (
    <section className="relative overflow-hidden bg-brand-dark  pb-20 md:pt-36 md:pb-28" ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <div className="absolute top-24 left-8 size-20 border-2 border-brand-secondary/20 rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-32 right-[38%] size-10 bg-brand-primary/20 rounded-lg rotate-12" />
      <div className="absolute top-40 right-12 size-6 bg-brand-secondary/30 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 rounded-full mb-6">
              <Sparkles className="size-4 text-brand-secondary" />
              <span className="text-sm font-medium text-white/80">
                Trusted by 85+ companies worldwide
              </span>
            </div>

            <HeroHeading />

            <p className="mt-6 text-lg md:text-xl text-brand-gray-300 max-w-xl leading-relaxed">
              From web apps to cloud infrastructure — we turn bold ideas into scalable, production-grade software.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <BrutalButton to="/contact" variant="primary">
                Start Your Project <ArrowRight className="size-4" />
              </BrutalButton>
              <BrutalButton to="/portfolio" variant="outline">
                View Our Work
              </BrutalButton>
            </div>

            <div className="mt-12 flex items-center gap-8 flex-wrap">
              {STATS.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-white tabular-nums">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-brand-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-up stagger-2">
            <motion.div
              style={{
                rotateX,
                rotateY,
                translateX,
                translateY,
                scale,
              }}
              className="w-full flex justify-center perspective-[1200px]"
            >
              <FlatOrbitHero />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ─── 2. ABOUT / STATS ─── */
/* Uses AboutStatsSection component */

/* ─── 3. SERVICES ─── */
function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="End-to-end digital services for ambitious teams — from concept to cloud and beyond."
          />
          <BrutalButton to="/services" variant="outline" className="shrink-0">
            View All Services <ArrowRight className="size-4" />
          </BrutalButton>
        </div>
        {isVisible && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {SERVICES.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── 4. HOW WE WORK ─── */
function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 md:py-28 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <SectionHeading
              label="How We Work"
              title="From Idea to Launch"
              description="Six battle-tested phases that turn your vision into a shipped product."
            />
            {isVisible && (
              <div className="mt-2">
                {PROCESS_STEPS.map((step, i) => (
                  <div key={step.number} className={`animate-fade-up stagger-${Math.min(i + 1, 6)}`}>
                    <ProcessStep step={step} isLast={i === PROCESS_STEPS.length - 1} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="sticky top-28">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-primary/10 rounded-3xl translate-x-3 translate-y-3" />
                <img
                  src="/home/process.svg"
                  alt="Development process illustration"
                  className="relative w-full p-12 rounded-3xl border-2 border-brand-dark/20"
                />
              </div>
              <div className="mt-6 bg-brand-secondary/20 border-2 border-brand-dark rounded-2xl p-5 shadow-brutal">
                <p className="text-sm font-semibold text-brand-dark mb-1">Average Timeline</p>
                <p className="text-3xl font-bold text-brand-primary">1–14 weeks</p>
                <p className="text-sm text-brand-gray-500 mt-0.5">From kickoff to production launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 5. FEATURES ─── */
export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 md:py-28 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Us"
          title="Built Different, By Design"
          description="We are not a generic dev shop. Here is what makes working with us different."
          align="center"
        />
        {isVisible && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.id} feature={feature} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function StorySectionV2() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP CENTER CONTENT */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full shadow-brutal-sm mb-6">
            Our Story
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            Built to break boring software
          </h2>

          <p className="mt-5 text-lg text-brand-gray-500 leading-relaxed">
            Flatorbit was created with one goal — to eliminate slow, bloated,
            and ineffective digital products. We build fast, think deeply,
            and focus only on what drives results.
          </p>
        </div>

        {/* ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* BIG CARD */}
          <div className="bg-brand-dark text-white border-2 border-brand-dark rounded-3xl p-10 shadow-brutal flex flex-col justify-between">
            <div>
              <p className="text-sm text-brand-gray-400 mb-3">
                Our Core Belief
              </p>
              <h3 className="text-3xl font-bold leading-snug">
                Design is not decoration.
                <br /> It’s conversion.
              </h3>
            </div>

            <p className="text-brand-gray-300 mt-6 text-sm">
              Every UI we craft is engineered to guide users, reduce friction,
              and drive measurable outcomes.
            </p>
          </div>

          {/* STACKED SMALL CARDS */}
          <div className="grid gap-6">

            <div className="bg-white border-2 border-brand-dark rounded-2xl p-6 shadow-brutal">
              <p className="text-sm text-brand-gray-400 mb-2">
                Speed matters
              </p>
              <h3 className="text-4xl font-bold text-brand-dark">3x</h3>
              <p className="text-sm text-brand-gray-500 mt-2">
                Faster delivery than traditional agencies
              </p>
            </div>

            <div className="bg-white border-2 border-brand-dark rounded-2xl p-6 shadow-brutal">
              <p className="text-sm text-brand-gray-400 mb-2">
                Approach
              </p>
              <h3 className="text-4xl font-bold text-brand-dark">Lean</h3>
              <p className="text-sm text-brand-gray-500 mt-2">
                focused on impact, not noise
              </p>
            </div>

          </div>

          {/* WIDE CARD */}
          {/* <div className="md:col-span-2 bg-white border-2 border-brand-dark rounded-2xl p-8 shadow-brutal flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <p className="text-sm text-brand-gray-400 mb-2">
                Our journey so far
              </p>
              <h3 className="text-3xl font-bold text-brand-dark">
                10+ Products shipped
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i)=>(
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"/>
                ))}
              </div>
              <span className="text-sm font-semibold text-brand-dark">
                Trusted partners
              </span>
            </div>

          </div> */}

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-16 bg-brand-primary text-white border-2 border-brand-dark rounded-3xl p-10 text-center shadow-brutal">
          <h3 className="text-2xl md:text-3xl font-bold">
            We don’t build features. We build outcomes.
          </h3>
        </div>

      </div>
    </section>
  );
}

/* ─── 6. CTA (mid-page) ─── */
function CtaMidSection() {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-brand-primary/10 border-2 border-brand-primary/30 rounded-3xl p-10 md:p-16 overflow-hidden">
          <div className="absolute top-6 right-6 size-24 border-2 border-brand-secondary/20 rounded-full" />
          <div className="absolute bottom-8 left-8 size-16 bg-brand-secondary/10 rounded-xl rotate-12" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              Let's build your{' '}
              <span className="text-brand-secondary">product</span>
            </h2>
            <p className="mt-4 text-lg text-brand-gray-300">
              Whether you have a full spec or just a napkin sketch — we are ready to make it real.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
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

/* ─── 7. CASE STUDY HIGHLIGHT ─── */
/* Uses CaseStudyHighlight component */

/* ─── 8. PROJECTS PREVIEW ─── */
function ProjectsPreview() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 md:py-28 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <SectionHeading
            label="Our Work"
            title="Projects We're Proud Of"
            description="Real products built for real companies."
          />
          <BrutalButton to="/portfolio" variant="outline" className="shrink-0">
            View All Projects <ArrowRight className="size-4" />
          </BrutalButton>
        </div>
        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((project, i) => (
              <div key={project.id} className={`animate-fade-up stagger-${i + 1}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── 9. STATS BAR ─── */
function StatsSection() {
  return (
    <section className="py-16 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 10. TESTIMONIALS ─── */
function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Don't take our word for it — here's what the people behind the products have to say."
          align="center"
        />
        {isVisible && (
          <div className="animate-fade-up">
            <TestimonialCarousel testimonials={TESTIMONIALS} autoPlayInterval={5000} />
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── 11. FINAL CTA ─── */
function FinalCtaSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-brand-dark border-2 border-brand-dark rounded-3xl p-10 md:p-16 shadow-brutal overflow-hidden">
          <div className="absolute top-6 right-6 size-24 border-2 border-brand-primary/30 rounded-full" />
          <div className="absolute bottom-8 left-8 size-16 bg-brand-secondary/20 rounded-xl rotate-12" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              Ready to build your next{' '}
              <span className="text-brand-primary">big product</span>?
            </h2>
            <p className="mt-4 text-lg text-brand-gray-300 text-pretty">
              No fluff, no endless meetings — just great software, shipped fast. Let's get started.
            </p>
            <div className="mt-8">
              <BrutalButton to="/contact" variant="primary">
                Start Your Project <ArrowRight className="size-4" />
              </BrutalButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HOME EXPORT ─── */
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutStatsSection />
      <ServicesSection />
      <StorySectionV2 />
      <ProcessSection />
      <FeaturesSection />
      <CtaMidSection />
      <TechStackSection />
      <CaseStudyHighlight />
      <ProjectsPreview />
      <StatsSection />
      <TestimonialsSection />
      <FinalCtaSection />
      {/* <LoadingFallback /> */}
    </main>
  );
}
