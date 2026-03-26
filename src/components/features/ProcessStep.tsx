import type { ProcessStep as ProcessStepType } from '@/types';
import {
  Lightbulb,
  Palette,
  Code,
  Shield,
  Rocket,
  TrendingUp,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Palette,
  Code,
  Shield,
  Rocket,
  TrendingUp,
};

interface ProcessStepProps {
  step: ProcessStepType;
  isLast?: boolean;
}

export default function ProcessStep({ step, isLast = false }: ProcessStepProps) {
  const Icon = iconMap[step.icon] || Lightbulb;

  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="size-12 flex items-center justify-center bg-brand-primary text-white border-2 border-brand-dark rounded-xl shadow-brutal-sm shrink-0">
          <Icon className="size-5" />
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-brand-dark/15 mt-2" />
        )}
      </div>
      <div className={`pb-8 ${isLast ? 'pb-0' : ''}`}>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs font-bold text-brand-primary">{step.number}</span>
          <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
        </div>
        <p className="text-brand-gray-500 text-[15px] leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
