import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const { ref, isVisible } = useScrollAnimation();
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  const textColor = light ? 'text-white' : 'text-brand-dark';
  const mutedColor = light ? 'text-brand-gray-300' : 'text-brand-gray-500';

  return (
    <div
      ref={ref}
      className={`max-w-2xl mb-12 ${alignClass} ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full shadow-brutal-sm mb-4">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-balance ${textColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed text-pretty ${mutedColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
