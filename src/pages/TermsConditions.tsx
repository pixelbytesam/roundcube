import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/constants/config';

const LAST_UPDATED = 'March 21, 2026';

export default function TermsConditions() {
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
              Terms & Conditions
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
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">1. Acceptance of Terms</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                By accessing and using the {SITE_CONFIG.name} website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">2. Services Description</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                {SITE_CONFIG.name} provides digital development services including web development, mobile app development, custom software development, UI/UX design, cloud solutions, backend development, security enhancement, domain and hosting services, and software testing. The specific scope, deliverables, and timeline for each project will be defined in a separate Statement of Work (SOW) or project agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">3. Project Agreements</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                All projects are governed by individual project agreements that outline the scope of work, deliverables, timeline, payment terms, and other project-specific terms. In the event of a conflict between these general Terms and a project agreement, the project agreement shall prevail.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">4. Intellectual Property</h2>
              <p className="text-brand-gray-500 leading-relaxed mb-3">
                Upon full payment, all custom code, designs, and deliverables created specifically for your project will be transferred to you. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-brand-gray-500">
                <li>Source code and compiled applications</li>
                <li>Design files and assets created for your project</li>
                <li>Documentation and technical specifications</li>
              </ul>
              <p className="text-brand-gray-500 leading-relaxed mt-3">
                {SITE_CONFIG.name} retains the right to use general knowledge, techniques, and non-proprietary tools developed during the project. We may also showcase the completed project in our portfolio unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">5. Payment Terms</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                Payment terms are specified in each project agreement. Generally, projects require a deposit before work begins, with remaining payments tied to milestone completions. All invoices are due within 14 days of issuance unless otherwise specified. Late payments may incur a 1.5% monthly interest charge and may result in suspension of work.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">6. Client Responsibilities</h2>
              <p className="text-brand-gray-500 leading-relaxed mb-3">To ensure successful project delivery, clients are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-brand-gray-500">
                <li>Providing timely feedback and approvals at agreed milestones</li>
                <li>Supplying all required content, assets, and access credentials</li>
                <li>Designating a primary point of contact for project communication</li>
                <li>Reviewing and testing deliverables within agreed timeframes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">7. Warranties & Disclaimers</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                {SITE_CONFIG.name} warrants that all services will be performed in a professional and workmanlike manner consistent with industry standards. We provide a 30-day warranty period after project delivery to address any defects or bugs in the delivered work. Beyond this warranty period, additional support and maintenance are available under separate agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">8. Limitation of Liability</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                To the maximum extent permitted by law, {SITE_CONFIG.name}'s total liability for any claim arising from or related to our services shall not exceed the total fees paid by the client for the specific project giving rise to the claim. We shall not be liable for any indirect, incidental, consequential, or punitive damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">9. Confidentiality</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                Both parties agree to maintain the confidentiality of all proprietary information shared during the engagement. This includes business plans, technical specifications, financial information, and any other information designated as confidential. This obligation survives the termination of the engagement for a period of 2 years.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">10. Termination</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                Either party may terminate a project agreement with 30 days written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date. All deliverables completed and paid for will be transferred to the client. Deposits are non-refundable unless otherwise stated in the project agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">11. Governing Law</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                These Terms and Conditions are governed by and construed in accordance with the laws of the State of California, United States. Any disputes arising from these terms shall be resolved through good-faith negotiation, and if necessary, binding arbitration in San Francisco, California.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">12. Changes to Terms</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">13. Contact</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                For questions about these Terms, contact us at{' '}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand-primary font-semibold hover:underline">
                  {SITE_CONFIG.email}
                </a>{' '}
                or{' '}
                <Link to="/contact" className="text-brand-primary font-semibold hover:underline">
                  reach out through our contact page
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
