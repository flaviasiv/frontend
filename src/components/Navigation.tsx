import React, { useEffect, useState, useRef } from 'react';
import Button from './Button';

const NAV_LINKS = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#terapia', label: 'Terapia' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#reviews', label: 'Reviews' },
];

// Debounce helper for scroll performance
const debounce = (func: (...args: unknown[]) => void, wait: number) => {
  let timeout: number;
  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), wait);
  };
};

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect prefers-reduced-motion on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle menu open/close body scroll lock
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  // Handle scroll state detection with debounce and smart hide/show
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      const currentScrollY = window.scrollY;

      // Update scrolled state
      setIsScrolled(currentScrollY > scrollThreshold);

      // Smart hide/show: hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // Calculate scroll progress (0-100%)
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / windowHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    // Debounced version for smooth performance
    const debouncedHandleScroll = debounce(handleScroll, 10);

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  return (
    <nav className="relative z-50">
      {/* Mobile navigation */}
      <div className="md:hidden">
        <div
          className={`fixed inset-x-0 top-0 z-50 ${
            prefersReducedMotion ? '' : 'transition-all duration-300'
          } ${
            isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : ''
          }`}
          style={{
            transform: (isVisible || isMenuOpen) ? 'translateY(0)' : 'translateY(-100%)',
            transition: prefersReducedMotion ? 'none' : 'all 0.3s ease-in-out',
          }}
        >
          {/* Scroll progress bar */}
          {isScrolled && (
            <div
              className="absolute bottom-0 left-0 h-[2px] bg-eco-accent"
              style={{
                width: `${scrollProgress}%`,
                transition: prefersReducedMotion ? 'none' : 'width 0.1s ease-out',
              }}
              aria-hidden="true"
            />
          )}
          <div className={`flex items-center justify-between px-10 ${
            prefersReducedMotion ? '' : 'transition-all duration-300'
          } ${
            isScrolled ? 'py-3' : 'py-5'
          }`}>
            <img
              src="/images/logo-icon-white.svg"
              alt="Eco Terapia"
              className={`drop-shadow-md ${
                prefersReducedMotion ? '' : 'transition-all duration-300'
              } ${
                isScrolled ? 'h-[32px] w-[32px]' : 'h-[40px] w-[40px]'
              }`}
            />
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`flex items-center justify-center rounded-full bg-white shadow-md ${
                prefersReducedMotion ? '' : 'transition-all duration-300 hover:scale-105'
              } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eco-headline ${
                isScrolled ? 'h-10 w-10' : 'h-12 w-12'
              }`}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                className={`h-6 w-6 text-eco-headline ${
                  prefersReducedMotion ? '' : 'transition-transform duration-300'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 7.5H20M4 12H16M4 16.5H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu dropdown (only visible when open, with backdrop) */}
          {isMenuOpen && (
            <div className={`border-t border-eco-divider bg-white/98 shadow-eco-card-sm backdrop-blur-mobile-nav ${
              prefersReducedMotion ? '' : 'animate-fadeIn'
            }`}>
              <div className="flex flex-col gap-4 px-10 pb-8 pt-4">
                <div className="divide-y divide-eco-divider border-t border-eco-divider">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-[30px] text-center text-mobile-link font-bold tracking-tighter-2.5 text-eco-headline transition-colors hover:text-eco-caption"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <Button
                  href="#contato"
                  as="a"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Learn More
                </Button>
              </div>
            </div>
          )}
        </div>
        {/* Minimal spacer to offset fixed navigation */}
        <div className="h-[60px]" />
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex md:flex-col md:items-center">
        <div className="flex w-full max-w-[1200px] items-center justify-between pt-5 pb-20">
          <img
            src="/images/logo-horizontal.svg"
            alt="Eco Terapia"
            className="h-[29px] w-auto"
          />
          <Button as="a" href="#contato">
            Falar com especialista
          </Button>
          <div className="fixed left-1/2 top-4 -translate-x-1/2">
            <div className="flex items-center gap-[27px] rounded-eco-pill bg-white/40 px-6 py-5 backdrop-blur-mobile-nav">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-mobile-link font-bold tracking-tighter-2.5 text-eco-headline transition-colors hover:text-eco-caption"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
