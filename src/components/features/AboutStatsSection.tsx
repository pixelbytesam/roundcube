import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from '@/components/features/SectionHeading';
import { Star } from 'lucide-react';

export default function AboutStatsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-brand-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT SECTION */}
          <div className="lg:col-span-5">
            <SectionHeading
              label="Mission"
              title="Our focus is simple"
            />

            <p className="text-3xl md:text-4xl font-bold text-brand-primary -mt-6 mb-4">
              Design to convert
            </p>

            <p className="text-lg text-brand-gray-500 leading-relaxed text-pretty">
              We promise to deliver beyond your expectations for your business.
            </p>

            {/* Partners */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {[
                  'photo-1494790108377-be9c29b29330',
                  'photo-1507003211169-0a1dd7228f2d',
                  'photo-1438761681033-6461ffad8d80',
                  'photo-1472099645785-5658abf4ff4e'
                ].map((id) => (
                  <img
                    key={id}
                    src={`https://images.unsplash.com/${id}?w=40&h=40&fit=crop`}
                    alt="partner"
                    className="size-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              <span className="text-sm font-semibold text-brand-dark">
                40+ Partners
              </span>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="lg:col-span-7">
            {isVisible && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up">

                {/* ROI CARD */}
                <div className="bg-white border-2 border-brand-dark rounded-2xl p-6 shadow-brutal">
                  <p className="text-sm text-brand-gray-500 mb-1">
                    Earn back on your investment within 30 days
                  </p>

                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-5xl md:text-6xl font-bold text-brand-dark">
                      90
                    </span>
                    <span className="text-2xl font-bold text-brand-gray-400">
                      %
                    </span>
                  </div>

                  <p className="text-sm font-medium text-brand-gray-400 mt-1">
                    Return on investment (ROI)
                  </p>
                </div>

                {/* REVENUE CARD */}
                <div className="bg-white border-2 border-brand-dark rounded-2xl p-6 shadow-brutal">
                  <p className="text-sm text-brand-gray-500 mb-1">
                    Through our custom-tailored systems
                  </p>

                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-5xl md:text-6xl font-bold text-brand-dark">
                      $2.5
                    </span>
                    <span className="text-2xl font-bold text-brand-gray-400">
                      M+
                    </span>
                  </div>

                  <p className="text-sm font-medium text-brand-gray-400 mt-1">
                    Revenue generated
                  </p>
                </div>

                {/* PROJECTS CARD */}
                <div className="bg-brand-dark border-2 border-brand-dark rounded-2xl p-6 shadow-brutal text-white">
                  <p className="text-sm text-brand-gray-500 mb-1">
                    We delivered projects worldwide
                  </p>

                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-5xl md:text-6xl font-bold text-white">
                      10+
                    </span>
                  </div>

                  <p className="text-sm font-medium text-brand-gray-400 mt-1">
                    Helping service-based companies secure more clients
                  </p>
                </div>

                {/* RATING CARD */}
                <div className="bg-brand-dark border-2 border-brand-dark rounded-2xl p-6 shadow-brutal text-white">
                  <p className="text-sm text-brand-gray-500 mb-1">
                    Proof of how we work
                  </p>

                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-5xl font-bold text-brand-secondary">
                      4.8
                    </span>
                    <span className="text-xl text-brand-gray-400">
                      /5
                    </span>
                  </div>

                  <div className="flex gap-1 mt-3 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-brand-secondary text-brand-secondary"
                      />
                    ))}
                  </div>

                  <p className="text-xs font-semibold text-brand-gray-400 uppercase tracking-wider">
                    Trusted by clients worldwide
                  </p>
                </div>

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}