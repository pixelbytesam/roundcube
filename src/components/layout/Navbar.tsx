import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/constants/config';

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
<header
  className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 ${
    scrolled || mobileOpen
      ? 'bg-white border-b-2 border-brand-dark shadow-brutal-sm'
      : 'bg-white border-b border-brand-dark/10 lg:bg-transparent lg:border-b-0' 
      /* ^ Notice we keep bg-white as default for mobile, only lg: goes transparent */
  }`}
>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="size-9 bg-brand-primary border-2 border-brand-dark rounded-lg shadow-brutal-sm flex items-center justify-center">
            <span className="text-white font-bold text-xl"> <img src="/logo12.png" alt="RoundCube Logo" className='w-44' /> </span>
          </div>
          <span
            className={`text-xl font-bold transition-colors ${
              scrolled || mobileOpen ? 'text-brand-dark' : 'text-brand-dark lg:text-white'
            }`}
          >
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              location.pathname === link.path ||
              (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'text-brand-primary bg-brand-primary/10'
                      : scrolled
                        ? 'text-brand-dark hover:text-brand-primary hover:bg-brand-cream'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-brand-primary rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2 text-sm font-semibold bg-brand-primary text-white border-2 border-brand-dark rounded-xl shadow-brutal-sm transition-all duration-150 hover:bg-brand-primary-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-pressed"
        >
          Let's Talk
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden size-10 flex items-center justify-center border-2 rounded-lg transition-colors ${
            scrolled || mobileOpen
              ? 'bg-white border-brand-dark text-brand-dark'
              : 'bg-white border-brand-dark text-brand-dark'
          }`}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu - full screen overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="h-full overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-primary/10 text-brand-primary'
                        : 'text-brand-dark hover:bg-brand-cream'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="size-4 text-brand-gray-400" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 pt-6 border-t border-brand-gray-200">
            <Link
              to="/contact"
              className="block text-center px-4 py-3.5 bg-brand-primary text-white font-semibold rounded-xl border-2 border-brand-dark shadow-brutal-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-pressed"
            >
              Let's Talk
            </Link>
          </div>
    
        </div>
      </div>
    </header>
  );
}
