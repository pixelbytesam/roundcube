import { ArrowRight } from 'lucide-react';
import BrutalButton from '@/components/features/BrutalButton';
import SectionHeading from '@/components/features/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FEATURED_CASE_STUDY = {
  title: 'Stackboard — From Zero to $250K ARR in 6 Months',
  client: 'Stackboard Labs',
  problem:
    'Stackboard Labs needed a real-time collaborative project management platform that could compete with established players like Asana and Monday.com.',
  solution:
    'We built a full-stack SaaS platform with Next.js, WebSocket-powered real-time kanban boards, CRDT-based conflict resolution for collaborative editing, and Stripe integration for subscription billing.',
  metrics: [
    { label: 'Time to Launch', value: '12 weeks' },
    { label: 'Concurrent Users', value: '5,000+' },
    { label: 'First Year ARR', value: '$250K' },
    { label: 'Uptime', value: '99.95%' },
  ],
  techStack: ['Next.js', 'PostgreSQL', 'WebSocket', 'Redis', 'Stripe', 'Docker'],
  imageUrl:
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop',
};

export default function CaseStudyHighlight() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Featured Case Study"
          title="See How We Deliver Results"
          align="center"
        />
        {isVisible && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-up">
            {/* Image + metrics */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-primary/10 rounded-2xl translate-x-3 translate-y-3" />
                <img
                  src={FEATURED_CASE_STUDY.imageUrl}
                  alt={FEATURED_CASE_STUDY.title}
                  className="relative w-full rounded-2xl border-2 border-brand-dark shadow-brutal object-cover aspect-[4/3]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {FEATURED_CASE_STUDY.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-brand-cream border-2 border-brand-dark rounded-xl p-4 shadow-brutal-sm text-center"
                  >
                    <p className="text-2xl font-bold text-brand-primary">{metric.value}</p>
                    <p className="text-xs font-medium text-brand-gray-400 mt-0.5">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <span className="text-sm font-semibold text-brand-primary">
                {FEATURED_CASE_STUDY.client}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mt-2 mb-6 text-balance">
                {FEATURED_CASE_STUDY.title}
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-bold text-brand-gray-400 uppercase tracking-wider mb-2">
                    The Challenge
                  </h4>
                  <p className="text-brand-gray-500 leading-relaxed">
                    {FEATURED_CASE_STUDY.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-gray-400 uppercase tracking-wider mb-2">
                    Our Solution
                  </h4>
                  <p className="text-brand-gray-500 leading-relaxed">
                    {FEATURED_CASE_STUDY.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-bold text-brand-gray-400 uppercase tracking-wider mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {FEATURED_CASE_STUDY.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-semibold bg-brand-cream border-2 border-brand-dark rounded-lg shadow-brutal-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <BrutalButton to="/portfolio" variant="primary">
                  View All Projects <ArrowRight className="size-4" />
                </BrutalButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
