import { useState, useEffect, useCallback, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export default function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = testimonials.length;

  const goTo = useCallback(
    (index: number, dir: 'left' | 'right') => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % total, 'right');
  }, [current, total, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total, 'left');
  }, [current, total, goTo]);

  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(next, autoPlayInterval);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isPaused, next, autoPlayInterval]);

  const t = testimonials[current];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-brand-dark bg-white shadow-brutal">
        <div
          key={current}
          className={`p-8 md:p-12 transition-all duration-500 ease-out ${
            direction === 'right'
              ? 'animate-slide-in-right'
              : 'animate-slide-in-left'
          }`}
        >
          {/* Stars */}
          <div className="flex gap-1 mb-6 justify-center">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="size-5 fill-brand-secondary text-brand-secondary" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl  text-brand-dark font-medium leading-relaxed text-center max-w-2xl mx-auto text-balance">
           <span className='text-3xl'>"</span>{t.feedback} <span className='text-3xl'>"</span>
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center mt-8 pt-6 border-t border-brand-gray-200">
            <img
              src={t.avatarUrl}
              alt={t.name}
              className="size-14 rounded-full border-2 border-brand-dark object-cover shadow-brutal-sm"
            />
            <p className="mt-3 font-bold text-brand-dark">{t.name}</p>
            <p className="text-sm text-brand-gray-400">
              {t.role}, {t.company}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 size-12 flex items-center justify-center bg-white border-2 border-brand-dark rounded-xl shadow-brutal-sm transition-all duration-150 hover:bg-brand-cream active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-pressed"
      >
        <ChevronLeft className="size-5 text-brand-dark" />
      </button>
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 size-12 flex items-center justify-center bg-white border-2 border-brand-dark rounded-xl shadow-brutal-sm transition-all duration-150 hover:bg-brand-cream active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-pressed"
      >
        <ChevronRight className="size-5 text-brand-dark" />
      </button>

      {/* Dot navigation */}
      <div className="flex items-center justify-center gap-2.5 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 'right' : 'left')}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`rounded-full border-2 border-brand-dark transition-all duration-300 ${
              i === current
                ? 'w-8 h-3 bg-brand-primary shadow-brutal-sm'
                : 'size-3 bg-white hover:bg-brand-cream'
            }`}
          />
        ))}
      </div>

      {/* Pause indicator */}
      {isPaused && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-brand-dark/80 text-white text-xs font-medium rounded-full">
          Paused
        </div>
      )}
    </div>
  );
}
