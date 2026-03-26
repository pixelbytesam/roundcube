import type { Feature } from '@/types';
import {
  Handshake,
  UserCheck,
  Zap,
  Smartphone,
  BarChart3,
  Rocket
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Handshake,
  UserCheck,
  Zap,
  Smartphone,
  BarChart3,
  Rocket,
};

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = iconMap[feature.icon] || Zap;

  return (
    <div
      className={`group bg-white border-2 border-brand-dark rounded-2xl p-6 shadow-brutal transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-hover animate-fade-up stagger-${index + 1}`}
    >
      <div className="size-12 flex items-center justify-center bg-brand-cream border-2 border-brand-dark rounded-xl mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all duration-200">
        <Icon className="size-5" />
      </div>
      <h3 className="text-lg font-bold text-brand-dark mb-2">{feature.title}</h3>
      <p className="text-brand-gray-500 text-[15px] leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
