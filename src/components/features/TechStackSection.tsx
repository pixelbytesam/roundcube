import {
  Code,
  Globe,
  FileCode,
  Paintbrush,
  Layers,
  Server,
  Terminal,
  Cpu,
  Share2,
  Database,
  Smartphone,
  Feather,
  Cloud,
  Network,
  Triangle,
  GitBranch,
  Box,
  Blocks,
} from 'lucide-react';
import { TECH_STACK } from '@/constants/mockData';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from '@/components/features/SectionHeading';

const iconMap: Record<string, React.ElementType> = {
  Code, Globe, FileCode, Paintbrush, Layers,
  Server, Terminal, Cpu, Share2, Database,
  Smartphone, Feather, Cloud, Network, Triangle,
  GitBranch, Box, Blocks,
};

export default function TechStackSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Expertise"
          title="Technologies We Master"
          description="We stay sharp across the full modern stack — here are the tools we use every day."
          align="center"
        />
        {isVisible && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_STACK.map((category, ci) => (
              <div
                key={category.title}
                className={`bg-brand-cream border-2 border-brand-dark rounded-2xl p-6 shadow-brutal animate-fade-up stagger-${ci + 1}`}
              >
                <h3 className="text-lg font-bold text-brand-dark mb-5 pb-3 border-b-2 border-brand-dark/10">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => {
                    const Icon = iconMap[item.icon] || Code;
                    return (
                      <div
                        key={item.name}
                        className="flex items-center gap-3 px-3 py-2 bg-white rounded-xl border border-brand-dark/10 transition-all duration-150 hover:border-brand-primary hover:bg-brand-primary/5"
                      >
                        <Icon className="size-4 text-brand-primary shrink-0" />
                        <span className="text-sm font-medium text-brand-dark">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
