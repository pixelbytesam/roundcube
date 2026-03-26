import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/constants/config';

const LAST_UPDATED = 'March 21, 2026';

export default function PrivacyPolicy() {
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
              Privacy Policy
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
              <h2 className="text-2xl font-bold text-brand-dark mb-3">1. Information We Collect</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                At {SITE_CONFIG.name}, we collect information you voluntarily provide when you contact us, request a quote, or engage our services. This includes your name, email address, phone number, company name, and project details. We also automatically collect certain technical data such as IP addresses, browser type, and usage analytics through cookies and similar technologies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">2. How We Use Your Information</h2>
              <p className="text-brand-gray-500 leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-brand-gray-500">
                <li>Respond to your inquiries and provide project estimates</li>
                <li>Deliver and manage the services you have requested</li>
                <li>Communicate project updates and relevant information</li>
                <li>Improve our website, services, and user experience</li>
                <li>Send occasional marketing communications (with your consent)</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">3. Data Sharing & Disclosure</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist in operating our website and delivering our services (such as hosting providers and analytics tools), but only to the extent necessary for them to perform their functions. We may also disclose information when required by law or to protect our legal rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">4. Cookies & Tracking Technologies</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie preferences through your browser settings. Essential cookies required for site functionality cannot be disabled.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">5. Data Security</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                We implement industry-standard security measures to protect your personal information, including SSL encryption, secure server infrastructure, and access controls. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">6. Data Retention</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Project-related data is typically retained for the duration of the engagement plus an additional 3 years for reference and support purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">7. Your Rights</h2>
              <p className="text-brand-gray-500 leading-relaxed mb-3">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-brand-gray-500">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">8. Third-Party Links</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">9. Children's Privacy</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us to have it removed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">10. Contact Us</h2>
              <p className="text-brand-gray-500 leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at{' '}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand-primary font-semibold hover:underline">
                  {SITE_CONFIG.email}
                </a>{' '}
                or visit our{' '}
                <Link to="/contact" className="text-brand-primary font-semibold hover:underline">
                  contact page
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
