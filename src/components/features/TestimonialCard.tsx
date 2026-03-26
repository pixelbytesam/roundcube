import type { Testimonial } from '@/types';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white border-2 border-brand-dark rounded-2xl p-6 shadow-brutal flex flex-col justify-between h-full">
      <div>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-brand-secondary text-brand-secondary" />
          ))}
        </div>
        <p className="text-brand-gray-500 text-[15px] leading-relaxed italic">
          "{testimonial.feedback}"
        </p>
      </div>
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-brand-gray-200">
        <img
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          className="size-10 rounded-full border-2 border-brand-dark object-cover"
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-sm text-brand-dark">{testimonial.name}</p>
          <p className="text-xs text-brand-gray-400">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
