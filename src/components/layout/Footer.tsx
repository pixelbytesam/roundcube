import { Link } from 'react-router-dom';
import { SITE_CONFIG, NAV_LINKS } from '@/constants/config';
import { SERVICES } from '@/constants/mockData';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t-2 border-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-9 bg-brand-primary border-2 border-white rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RC</span>
              </div>
              <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-brand-gray-400 text-[15px] leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-3 mt-6">
              {Object.entries(SITE_CONFIG.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg text-sm font-semibold capitalize hover:bg-brand-primary hover:border-brand-primary transition-colors"
                  aria-label={`Visit our ${name}`}
                >
                  {name.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-4 text-sm uppercase text-brand-gray-300">Pages</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-brand-gray-400 hover:text-white transition-colors text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-bold mb-4 text-sm uppercase text-brand-gray-300">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.id}`}
                    className="text-brand-gray-400 hover:text-white transition-colors text-[15px]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-bold mb-4 text-sm uppercase text-brand-gray-300">Contact</h4>
            <ul className="space-y-2.5">
              <li className="text-brand-gray-400 text-[15px]">{SITE_CONFIG.email}</li>
              <li className="text-brand-gray-400 text-[15px]">{SITE_CONFIG.phone}</li>
              <li className="text-brand-gray-400 text-[15px]">{SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray-400 text-sm">
            © 2026 {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="text-brand-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-brand-gray-400 text-sm hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/refund" className="text-brand-gray-400 text-sm hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
