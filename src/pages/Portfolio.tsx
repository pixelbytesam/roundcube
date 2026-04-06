import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import BrutalButton from '@/components/features/BrutalButton';
import SectionHeading from '@/components/features/SectionHeading';
import ProjectCard from '@/components/features/ProjectCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PROJECTS } from '@/constants/mockData';
import type { ProjectCategory } from '@/types';

const FILTERS: { label: string; value: ProjectCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'SaaS', value: 'saas' },
];

function HeroBanner() {
  return (
    <section className="relative bg-brand-dark pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute top-24 right-24 size-24 border-2 border-brand-secondary/20 rounded-full" />
      <div className="absolute bottom-16 left-12 size-14 bg-brand-primary/15 rounded-lg rotate-45" />
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full shadow-brutal-sm mb-6">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            Work that{' '}
            <span className="text-brand-primary">speaks</span> for itself
          </h1>
          <p className="mt-5 text-lg text-brand-gray-300 max-w-2xl text-pretty">
            Real products, real users, real results. Browse our portfolio of shipped software across web, mobile, and SaaS.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectsGrid() {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const { ref, isVisible } = useScrollAnimation();
  const filtered =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="py-20 md:py-28 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading
            title="Featured Projects"
            description="Each project represents months of focused engineering and design craft."
          />
          <div className="flex flex-wrap gap-2 shrink-0">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 text-sm font-semibold border-2 border-brand-dark rounded-xl transition-all duration-150 active:translate-x-[1px] active:translate-y-[1px] cursor-pointer ${
                  filter === f.value
                    ? 'bg-brand-primary text-white shadow-brutal-sm'
                    : 'bg-white text-brand-dark hover:bg-brand-cream'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <div key={project.id} className={`animate-fade-up stagger-${Math.min(i + 1, 6)}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
        {filtered.length === 0 && (
          <div className="text-center py-16 bg-white border-2 border-brand-dark rounded-2xl shadow-brutal">
            <p className="text-brand-gray-500 text-lg">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark border-2 border-brand-dark rounded-3xl p-10 md:p-16 shadow-brutal relative overflow-hidden">
          <div className="absolute top-8 right-8 size-20 border-2 border-brand-secondary/20 rounded-full" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Want your project here?
            </h2>
            <p className="text-brand-gray-300 text-lg mb-8">
              Let's build something you'll be proud to show off. We're ready when you are.
            </p>
            <BrutalButton to="/contact" variant="primary">
              Start Your Project <ArrowRight className="size-4" />
            </BrutalButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <main>
      <HeroBanner />
      <ProjectsGrid />
      <CtaBanner />
    </main>
  );
}
