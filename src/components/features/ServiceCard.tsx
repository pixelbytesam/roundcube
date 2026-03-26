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
  ArrowRight,
} from 'lucide-react';
import type { Service } from '@/types';

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
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Globe;
  const isDark = service.color === 'bg-brand-dark';

  return (
    <Link
      to={`/services/${service.id}`}
      className={`group block border-2 border-brand-dark rounded-2xl overflow-hidden shadow-brutal transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-hover animate-fade-up stagger-${Math.min(index + 1, 6)}`}
    >
      <div className={`p-6 h-full flex flex-col ${isDark ? 'bg-brand-dark' : service.color}`}>
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full border-2 border-brand-dark ${
              isDark ? 'bg-white/10 text-white' : 'bg-brand-secondary text-brand-dark'
            }`}
          >
            {service.number}
          </span>
          <div
            className={`size-14 flex items-center justify-center rounded-xl border-2 transition-transform duration-200 group-hover:-rotate-6 group-hover:bg-primary group-hover:text-white ${
              isDark
                ? ' border-white/20 text-white'
                : ' border-brand-dark text-black'
            }`}
          >
            <Icon className="size-6" />
          </div>
        </div>
        <h3
          className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-brand-dark'}`}
        >
          {service.title}
        </h3>
        <p
          className={`text-md leading-relaxed flex-1 ${
            isDark ? 'text-brand-gray-300' : 'text-brand-gray-500'
          }`}
        >
          {service.shortDescription}
        </p>
        <div
          className={`inline-flex items-center gap-2 text-sm font-semibold mt-4 transition-all duration-200 group-hover:gap-3 ${
            isDark ? 'text-brand-secondary' : 'text-brand-primary'
          }`}
        >
          Learn More <ArrowRight className="size-4" />
        </div>
      </div>
    </Link>
  );
}
