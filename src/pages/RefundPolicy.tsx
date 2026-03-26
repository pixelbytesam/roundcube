import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/constants/config';

const LAST_UPDATED = 'March 21, 2026';

export default function RefundPolicy() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-brand-dark pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute top-20 right-20 size-32 border-2 border-brand-secondary/20 rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-brand-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Refund Policy
            </h1>
            <p className="mt-4 text-brand-gray-300">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-primary" />
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-brand-dark rounded-2xl p-8 md:p-12 shadow-brutal space-y-8">
            <div className="bg-brand-secondary/15 border-2 border-brand-dark rounded-xl p-6">
              <p className="text-sm font-semibold text-brand-dark">
                At {SITE_CONFIG.name}, we are committed to client satisfaction. This policy outlines the circumstances under which refunds may be issued and the process for requesting one.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">1. Project Deposits</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                All projects require an upfront deposit (typically 30–50% of the total project cost) to begin work. The deposit covers initial discovery, planning, and early development activities. Deposits are generally non-refundable once work has commenced, as they compensate for resources allocated and opportunity cost.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">2. Refund Eligibility</h2>
              <p className="text-brand-gray-500 leading-relaxed mb-3">Refunds may be considered in the following situations:</p>
              <ul className="list-disc list-inside space-y-2 text-brand-gray-500">
                <li><span className="font-semibold text-brand-dark">Project not started:</span> Full refund if no work has begun and the request is made within 7 days of payment</li>
                <li><span className="font-semibold text-brand-dark">Service not delivered:</span> Proportional refund for any milestones not completed</li>
                <li><span className="font-semibold text-brand-dark">Quality issues:</span> If deliverables substantially fail to meet agreed specifications and cannot be remedied within a reasonable revision period</li>
                <li><span className="font-semibold text-brand-dark">Duplicate payment:</span> Full refund for any accidental duplicate charges</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">3. Non-Refundable Items</h2>
              <p className="text-brand-gray-500 leading-relaxed mb-3">The following are not eligible for refunds:</p>
              <ul className="list-disc list-inside space-y-2 text-brand-gray-500">
                <li>Completed and approved milestones or deliverables</li>
                <li>Third-party costs (domain registrations, hosting fees, software licenses, API subscriptions)</li>
                <li>Custom work completed to specification but later deemed unnecessary by the client</li>
                <li>Rush or expedited delivery surcharges</li>
                <li>Consultation and discovery fees once the session has been conducted</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">4. Revision Policy</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                Before a refund is considered for quality-related concerns, we will offer a revision period. Each project agreement specifies the number of included revision rounds (typically 2–3 rounds). We are committed to addressing all legitimate concerns through revisions before processing any refund requests.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">5. How to Request a Refund</h2>
              <p className="text-brand-gray-500 leading-relaxed mb-3">To request a refund:</p>
              <ol className="list-decimal list-inside space-y-2 text-brand-gray-500">
                <li>Email us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand-primary font-semibold hover:underline">{SITE_CONFIG.email}</a> with the subject line "Refund Request"</li>
                <li>Include your project name, invoice number, and the reason for the request</li>
                <li>Provide specific details about the issue, including any documentation</li>
                <li>Our team will review the request and respond within 5 business days</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">6. Refund Processing</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                Approved refunds will be processed within 10–15 business days and returned to the original payment method. Partial refunds will be calculated based on the percentage of work completed versus the total project scope, as mutually assessed by both parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">7. Subscription & Retainer Plans</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                For clients on monthly retainer or subscription plans, cancellation must be submitted at least 14 days before the next billing cycle. No refunds are issued for the current billing period. Upon cancellation, you retain access to all deliverables produced during active billing periods.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">8. Dispute Resolution</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                If a refund request is denied and you disagree with the decision, we offer mediation through a mutually agreed-upon third party. Our goal is always to reach a fair resolution that maintains the professional relationship and ensures client satisfaction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">9. Contact</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                For refund inquiries, contact us at{' '}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand-primary font-semibold hover:underline">
                  {SITE_CONFIG.email}
                </a>{' '}
                or call{' '}
                <span className="font-semibold text-brand-dark">{SITE_CONFIG.phone}</span>. You can also{' '}
                <Link to="/contact" className="text-brand-primary font-semibold hover:underline">
                  submit a request through our contact form
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
