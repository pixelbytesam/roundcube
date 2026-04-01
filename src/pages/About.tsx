import { Target, Eye, Zap, ArrowRight } from 'lucide-react';
import aboutHero from '@/assets/about-hero.png';
import BrutalButton from '@/components/features/BrutalButton';
import SectionHeading from '@/components/features/SectionHeading';
import StatCounter from '@/components/features/StatCounter';
import TeamCard from '@/components/features/TeamCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { STATS, TEAM_MEMBERS } from '@/constants/mockData';

function HeroBanner() {
  return (
    <section className="relative bg-brand-dark pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute top-16 left-20 size-28 border-2 border-brand-primary/20 rounded-full" />
      <div className="absolute bottom-12 right-16 size-16 bg-brand-secondary/15 rounded-xl rotate-12" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full shadow-brutal-sm mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              A small team with{' '}
              <span className="text-brand-primary">outsized</span> ambition
            </h1>
            <p className="mt-5 text-lg text-brand-gray-300 max-w-2xl text-pretty">
              We're a tight-knit crew of engineers, designers, and strategists who believe software should be built with craft, not just code.
            </p>
          </div>
          <div className="lg:col-span-5 animate-fade-up stagger-2">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-primary/20 rounded-2xl translate-x-3 translate-y-3" />
              <img
                src={aboutHero}
                alt="Abstract teamwork illustration"
                className="relative w-full rounded-2xl border-2 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 md:py-28 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
        >
          <div className="lg:col-span-5">
            <SectionHeading
              label="Our Story"
              title="Born from frustration with mediocre software"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-5 text-brand-gray-500 text-lg leading-relaxed text-pretty">
              <p>
                flatorbit started in 2025 when our founders — tired of bloated agencies delivering cookie-cutter software — decided there had to be a better way.
              </p>
              <p>
                We built flatorbit on a conviction: that small, elite teams shipping with urgency and craft will always outperform large, slow bureaucracies. Every line of code we write reflects that philosophy.
              </p>
              <p>
                Six years later, we've shipped 120+ products across fintech, health-tech, e-commerce, and SaaS — with a client satisfaction rate that speaks for itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const { ref, isVisible } = useScrollAnimation();
  const items = [
    {
      icon: Target,
      title: 'Our Mission',
      text: 'To democratize access to world-class software engineering. Every startup deserves a team that ships fast, thinks deep, and builds to last.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      text: "A world where exceptional digital products aren't a luxury — they're the standard. We're building toward that future, one project at a time.",
    },
    {
      icon: Zap,
      title: 'Our Values',
      text: 'Craft over speed. Transparency over politics. Shipping over planning. We judge ourselves by what we launch, not what we pitch.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What Drives Us"
          title="Mission, Vision & Values"
          align="center"
        />
        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`
    bg-white border-2 border-brand-dark rounded-2xl p-8 shadow-brutal
    animate-fade-up stagger-${i + 1}
    group overflow-hidden
    transform-gpu transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
    hover:-translate-y-2 hover:scale-[1.04] hover:shadow-brutal-hover
  `}
              >
                <div className="
  size-12 flex items-center justify-center
  bg-brand-primary text-white border-2 border-brand-dark rounded-xl shadow-brutal-sm mb-5
  transition-transform duration-300 ease-out
  group-hover:rotate-6 group-hover:scale-110
">
                  <item.icon className="size-5" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-brand-gray-500 text-[15px] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function StatsBar() {
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

function TeamSection() {
  const { ref, isVisible } = useScrollAnimation();

  const columns =
    TEAM_MEMBERS.length === 1
      ? "lg:grid-cols-1"
      : TEAM_MEMBERS.length === 2
        ? "lg:grid-cols-2"
        : TEAM_MEMBERS.length === 3
          ? "lg:grid-cols-3"
          : "lg:grid-cols-4";

  return (
    <section className="py-20 md:py-28 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Team"
          title="The People Behind the Pixels"
          description="A lean squad of senior-level talent. No juniors learning on your dime."
          align="center"
        />

        {isVisible && (
          <div className="flex justify-center w-full">
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-6 justify-items-center`}
            >
              {TEAM_MEMBERS.map((member, i) => (
                <div
                  key={member.id}
                  className={`animate-fade-up stagger-${i + 1} w-full max-w-xs`}
                >
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark border-2 border-brand-dark rounded-3xl p-10 md:p-16 shadow-brutal relative overflow-hidden">
          <div className="absolute top-6 right-6 size-20 border-2 border-brand-primary/30 rounded-full" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Want to join the team?
            </h2>
            <p className="text-brand-gray-300 text-lg mb-8">
              We're always looking for talented engineers and designers who care deeply about craft.
            </p>
            <BrutalButton to="/contact" variant="primary">
              Get in Touch <ArrowRight className="size-4" />
            </BrutalButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <main>
      <HeroBanner />
      <StorySection />
      <MissionVision />
      <StatsBar />
      <TeamSection />
      <CtaSection />
    </main>
  );
}
