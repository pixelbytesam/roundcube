import { useState } from 'react';
import { Check, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import BrutalButton from '@/components/features/BrutalButton';
import SectionHeading from '@/components/features/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PRICING_PLANS, FAQS } from '@/constants/mockData';

function HeroBanner() {
  return (
    <section className="relative bg-brand-dark pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="absolute top-20 right-24 size-28 border-2 border-brand-secondary/20 rounded-full" />
      <div className="absolute bottom-12 left-16 size-16 bg-brand-primary/10 rounded-xl rotate-45" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full shadow-brutal-sm mb-6">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            Simple, transparent{' '}
            <span className="text-brand-primary">pricing</span>
          </h1>
          <p className="mt-5 text-lg text-brand-gray-300 max-w-2xl mx-auto text-pretty">
            No hidden fees, no surprises. Choose the plan that fits your stage and scale as you grow.
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingToggle({
  isYearly,
  onToggle,
}: {
  isYearly: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span
        className={`text-sm font-semibold transition-colors ${
          !isYearly ? 'text-brand-dark' : 'text-brand-gray-400'
        }`}
      >
        Monthly
      </span>
      <button
        onClick={onToggle}
        className="relative w-14 h-8 bg-brand-dark border-2 border-brand-dark rounded-full p-0.5 transition-colors cursor-pointer"
        aria-label="Toggle yearly pricing"
      >
        <div
          className={`size-6 bg-brand-primary rounded-full transition-transform duration-300 ${
            isYearly ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
      <span
        className={`text-sm font-semibold transition-colors ${
          isYearly ? 'text-brand-dark' : 'text-brand-gray-400'
        }`}
      >
        Yearly
      </span>
      {isYearly && (
        <span className="px-3 py-1 text-xs font-bold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full shadow-brutal-sm">
          Save 15%
        </span>
      )}
    </div>
  );
}

function PricingCards({ isYearly }: { isYearly: boolean }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingToggle isYearly={isYearly} onToggle={() => {}} />
        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {PRICING_PLANS.map((plan, i) => {
              const price = isYearly ? plan.price.yearly : plan.price.monthly;
              const isCustom = price === 0;

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl border-2 border-brand-dark p-8 transition-all duration-200 hover:-translate-y-1 animate-fade-up stagger-${i + 1} ${
                    plan.highlighted
                      ? 'bg-brand-dark text-white shadow-[8px_8px_0px_0px_#d97757] scale-[1.02]'
                      : 'bg-white shadow-brutal'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full shadow-brutal-sm">
                        <Sparkles className="size-3" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        plan.highlighted ? 'text-white' : 'text-brand-dark'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        plan.highlighted ? 'text-brand-gray-300' : 'text-brand-gray-500'
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    {isCustom ? (
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`text-4xl font-bold ${
                            plan.highlighted ? 'text-brand-secondary' : 'text-brand-primary'
                          }`}
                        >
                          Custom
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`text-4xl font-bold tabular-nums ${
                            plan.highlighted ? 'text-brand-secondary' : 'text-brand-primary'
                          }`}
                        >
                          ₹{price.toLocaleString()}
                        </span>
                        <span
                          className={`text-sm ${
                            plan.highlighted ? 'text-brand-gray-400' : 'text-brand-gray-400'
                          }`}
                        >
                          /month
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`size-5 flex items-center justify-center rounded-md shrink-0 mt-0.5 ${
                            plan.highlighted
                              ? 'bg-brand-primary/20'
                              : 'bg-brand-primary/10'
                          }`}
                        >
                          <Check
                            className={`size-3 ${
                              plan.highlighted ? 'text-brand-secondary' : 'text-brand-primary'
                            }`}
                          />
                        </div>
                        <span
                          className={`text-sm ${
                            plan.highlighted ? 'text-brand-gray-300' : 'text-brand-gray-500'
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.cta === 'Contact Sales' ? (
                    <BrutalButton
                      to="/contact"
                      variant={plan.highlighted ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      {plan.cta} <ArrowRight className="size-4" />
                    </BrutalButton>
                  ) : (
                    <BrutalButton
                      to="/contact"
                      variant={plan.highlighted ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      {plan.cta} <ArrowRight className="size-4" />
                    </BrutalButton>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: (typeof FAQS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border-2 border-brand-dark rounded-2xl shadow-brutal-sm overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
      >
        <h3 className="text-[15px] sm:text-base font-bold text-brand-dark pr-4">
          {faq.question}
        </h3>
        <ChevronDown
          className={`size-5 text-brand-gray-400 shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-brand-gray-500 text-[15px] leading-relaxed -mt-1">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with us."
          align="center"
        />
        {isVisible && (
          <div className="space-y-4 animate-fade-up">
            {FAQS.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark border-2 border-brand-dark rounded-3xl p-10 md:p-16 shadow-brutal relative overflow-hidden">
          <div className="absolute top-6 right-6 size-24 border-2 border-brand-primary/30 rounded-full" />
          <div className="absolute bottom-8 left-8 size-16 bg-brand-secondary/20 rounded-xl rotate-12" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Not sure which plan fits?
            </h2>
            <p className="text-brand-gray-300 text-lg mb-8">
              Book a free 30-minute consultation. We will help you find the perfect fit for your stage and budget.
            </p>
            <BrutalButton to="/contact" variant="primary">
              Book Free Consultation <ArrowRight className="size-4" />
            </BrutalButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main>
      <HeroBanner />
      <section className="pt-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingToggle isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />
        </div>
      </section>
      <PricingCardsSection isYearly={isYearly} />
      <FAQSection />
      <CtaBanner />
    </main>
  );
}

function PricingCardsSection({ isYearly }: { isYearly: boolean }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="pb-20 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isVisible && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {PRICING_PLANS.map((plan, i) => {
              const price = isYearly ? plan.price.yearly : plan.price.monthly;
              const isCustom = price === 0;

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl border-2 border-brand-dark p-8 transition-all duration-200 hover:-translate-y-1 animate-fade-up stagger-${i + 1} ${
                    plan.highlighted
                      ? 'bg-brand-dark text-white shadow-[8px_8px_0px_0px_#d97757] md:scale-[1.03]'
                      : 'bg-white shadow-brutal'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold bg-brand-secondary text-brand-dark border-2 border-brand-dark rounded-full shadow-brutal-sm whitespace-nowrap">
                        <Sparkles className="size-3" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        plan.highlighted ? 'text-white' : 'text-brand-dark'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        plan.highlighted ? 'text-brand-gray-300' : 'text-brand-gray-500'
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div
                    className={`mb-6 pb-6 border-b ${
                      plan.highlighted ? 'border-white/15' : 'border-brand-gray-200'
                    }`}
                  >
                    {isCustom ? (
                      <span
                        className={`text-4xl font-bold ${
                          plan.highlighted ? 'text-brand-secondary' : 'text-brand-primary'
                        }`}
                      >
                        Custom
                      </span>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`text-4xl font-bold tabular-nums ${
                            plan.highlighted ? 'text-brand-secondary' : 'text-brand-primary'
                          }`}
                        >
                          ₹{price.toLocaleString()}
                        </span>
                        <span
                          className={`text-sm ${
                            plan.highlighted ? 'text-brand-gray-400' : 'text-brand-gray-400'
                          }`}
                        >
                          /month
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`size-5 flex items-center justify-center rounded-md shrink-0 mt-0.5 ${
                            plan.highlighted
                              ? 'bg-brand-primary/30'
                              : 'bg-brand-primary/10'
                          }`}
                        >
                          <Check
                            className={`size-3 ${
                              plan.highlighted ? 'text-brand-secondary' : 'text-brand-primary'
                            }`}
                          />
                        </div>
                        <span
                          className={`text-sm ${
                            plan.highlighted ? 'text-brand-gray-300' : 'text-brand-gray-500'
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <BrutalButton
                    to="/contact"
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {plan.cta} <ArrowRight className="size-4" />
                  </BrutalButton>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
