import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', href: '/', isRoute: true },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'Agentic AI', href: '/agentic-ai', isRoute: true },
      { label: 'AI Implementation', href: '/artificial-intelligence', isRoute: true },
      { label: 'DevOps & Agile', href: '/devops-agile', isRoute: true },
      { label: 'Risk & Security', href: '/risk-and-security', isRoute: true },
      { label: 'IAM Solutions', href: '#iam' },
      { label: 'Data & Cloud', href: '/technology-services', isRoute: true },
      { label: 'Hosting', href: '/hosting', isRoute: true },
      { label: 'Data Engineering', href: '/data-engineering', isRoute: true },
      { label: 'QA as a Service', href: '/qa-as-a-service', isRoute: true },
      { label: 'App Development', href: '/app-development', isRoute: true },
      { label: 'Talent Solutions', href: '/talent-solutions', isRoute: true },
      { label: 'Staffing', href: '/staffing', isRoute: true },
      { label: 'Workforce Development', href: '/workforce-development', isRoute: true },
      { label: 'Technology Partnerships', href: '/partnerships', isRoute: true },
      { label: 'Pricing & Revenue', href: '/pricing-revenue-management', isRoute: true },
    ],
  },
  { label: 'Industries', href: '#industries' },
  {
    label: 'Success Stories',
    href: '#stories',
    dropdown: [
      { label: 'Our Work (All Case Studies)', href: '/our-work', isRoute: true },
      { label: 'Grid Modernization', href: '/grid-modernization-integrated-ecosystems', isRoute: true },
      { label: 'J.B. Hunt', href: '/jb-hunt-the-road-to-better-data-gcp-bigquery', isRoute: true },
      { label: 'Databricks + Google Cloud', href: '/databricks-google-cloud', isRoute: true },
    ],
  },
  {
    label: 'Resources',
    href: '#resources',
    dropdown: [
      { label: 'Insights / Blog', href: '/blog', isRoute: true },
      { label: 'AI Readiness Quiz', href: '/ai-readiness-assessment', isRoute: true },
      { label: 'IAM Security Game', href: '/iam-maturity-check', isRoute: true },
      { label: 'Our Process', href: '/our-process', isRoute: true },
      { label: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
    ],
  },
  {
    label: 'Careers',
    href: '#careers',
    dropdown: [
      { label: 'Syntera Careers', href: '/syntera-careers', isRoute: true },
      { label: 'Engineering & Tech', href: '/engineering-technology', isRoute: true },
      { label: 'Values & Culture', href: '/values-and-culture', isRoute: true },
      { label: 'Employee Benefits', href: '/employee-benefits', isRoute: true },
      { label: 'Interview Process', href: '/interview-process', isRoute: true },
      { label: 'Case Interview Prep', href: '/case-interview-prep', isRoute: true },
      { label: 'Using AI in Applications', href: '/using-ai-application-process', isRoute: true },
    ],
  },
  {
    label: 'Company',
    href: '#company',
    dropdown: [
      { label: 'Leadership', href: '/company-leadership', isRoute: true },
      { label: 'Partnerships', href: '/partnerships', isRoute: true },
      { label: 'Labor Condition Applications', href: '/labor-condition-applications', isRoute: true },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [forceWhite, setForceWhite] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const dropdownTimeout = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorNav = (e, href) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: href } });
    }
    setOpen(false);
    setDropdownOpen(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const onForce = () => setForceWhite(true);
    const onRelease = () => setForceWhite(false);
    window.addEventListener('forceNavWhite', onForce);
    window.addEventListener('releaseNavWhite', onRelease);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('forceNavWhite', onForce);
      window.removeEventListener('releaseNavWhite', onRelease);
    };
  }, []);

  const handleDropdownEnter = (label) => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(null), 150);
  };

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        pointerEvents: 'auto',
        background: scrolled || open ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled || open ? '1px solid rgba(15,23,42,0.09)' : '1px solid rgba(15,23,42,0.05)',
        boxShadow: scrolled || open ? '0 4px 24px rgba(15,23,42,0.08)' : '0 1px 3px rgba(15,23,42,0.03)',
        paddingTop: '10px',
        paddingBottom: '10px',
        transition: 'background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      <nav
        className="nav-inner mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8"
        style={{
          maxWidth: '1280px',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => { setOpen(false); window.scrollTo(0, 0); }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <img
            src="/LOGO/new/Syntera-LOGO.webp"
            alt="Syntera Consulting"
            className="nav-logo h-8 sm:h-9 md:h-10 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-desktop-links hidden lg:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => link.dropdown && handleDropdownEnter(link.label)}
              onMouseLeave={() => link.dropdown && handleDropdownLeave()}
            >
              {link.isRoute ? (
                <Link
                  to={link.href}
                  onClick={() => { setOpen(false); setDropdownOpen(null); window.scrollTo(0, 0); }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 12px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: '#0F172A',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#2F80ED'; e.currentTarget.style.backgroundColor = 'rgba(47,128,237,0.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#0F172A'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  {link.label}
                </Link>
              ) : link.dropdown ? (
                <button
                  type="button"
                  onClick={(e) => handleAnchorNav(e, link.href)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 12px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: '#0F172A',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#2F80ED'; e.currentTarget.style.backgroundColor = 'rgba(47,128,237,0.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#0F172A'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  {link.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{
                      transform: dropdownOpen === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleAnchorNav(e, link.href)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 12px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: '#0F172A',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#2F80ED'; e.currentTarget.style.backgroundColor = 'rgba(47,128,237,0.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#0F172A'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  {link.label}
                </a>
              )}

              {/* Desktop Dropdown Menu */}
              {link.dropdown && (
                <AnimatePresence>
                  {dropdownOpen === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        marginTop: '6px',
                        minWidth: '220px',
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        padding: '8px',
                        boxShadow: '0 16px 40px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.06)',
                        zIndex: 100,
                        maxHeight: '380px',
                        overflowY: 'auto',
                      }}
                    >
                      {link.dropdown.map((item) =>
                        item.isRoute ? (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => { setDropdownOpen(null); setOpen(false); window.scrollTo(0, 0); }}
                            style={{
                              display: 'block',
                              padding: '9px 14px',
                              fontSize: '13.5px',
                              fontWeight: 600,
                              color: '#334155',
                              borderRadius: '10px',
                              textDecoration: 'none',
                              transition: 'all 0.15s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(47,128,237,0.08)';
                              e.currentTarget.style.color = '#2F80ED';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#334155';
                            }}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleAnchorNav(e, item.href)}
                            style={{
                              display: 'block',
                              padding: '9px 14px',
                              fontSize: '13.5px',
                              fontWeight: 600,
                              color: '#334155',
                              borderRadius: '10px',
                              textDecoration: 'none',
                              transition: 'all 0.15s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(47,128,237,0.08)';
                              e.currentTarget.style.color = '#2F80ED';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#334155';
                            }}
                          >
                            {item.label}
                          </a>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Contact Us CTA Button */}
        <div className="nav-desktop-contact-btn hidden lg:flex items-center">
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-sm"
            style={{
              backgroundColor: '#2F80ED',
              boxShadow: '0 4px 16px rgba(47,128,237,0.35)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}
          >
            Contact Us
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="nav-mobile-toggle inline-flex lg:hidden items-center justify-center p-2 rounded-xl text-slate-800 hover:text-[#2F80ED] hover:bg-blue-50/80 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-menu-panel lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
            style={{
              maxHeight: 'calc(100vh - 65px)',
              overflowY: 'auto',
            }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="border-b border-slate-100/70 last:border-b-0 pb-1">
                  {link.dropdown ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between py-3 text-[15px] font-bold text-slate-800 hover:text-[#2F80ED] transition-colors"
                      >
                        <span>{link.label}</span>
                        <div
                          className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500 transition-transform duration-200"
                          style={{
                            transform: mobileDropdownOpen === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </button>

                      <AnimatePresence>
                        {mobileDropdownOpen === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-2 pr-1 pb-3 grid grid-cols-2 gap-x-2 gap-y-0.5 overflow-hidden"
                          >
                            {link.dropdown.map((sub) =>
                              sub.isRoute ? (
                                <Link
                                  key={sub.label}
                                  to={sub.href}
                                  onClick={() => { setOpen(false); window.scrollTo(0, 0); }}
                                  className="py-2 px-3 rounded-lg text-[13.5px] font-semibold text-slate-600 hover:text-[#2F80ED] hover:bg-blue-50/60 transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ) : (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={(e) => handleAnchorNav(e, sub.href)}
                                  className="py-2 px-3 rounded-lg text-[13.5px] font-semibold text-slate-600 hover:text-[#2F80ED] hover:bg-blue-50/60 transition-colors"
                                >
                                  {sub.label}
                                </a>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : link.isRoute ? (
                    <Link
                      to={link.href}
                      onClick={() => { setOpen(false); window.scrollTo(0, 0); }}
                      className="block py-3 text-[15px] font-bold text-slate-800 hover:text-[#2F80ED] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchorNav(e, link.href)}
                      className="block py-3 text-[15px] font-bold text-slate-800 hover:text-[#2F80ED] transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}

              {/* Mobile Contact Button */}
              <div className="pt-4 pb-2">
                <Link
                  to="/contact"
                  onClick={() => { setOpen(false); window.scrollTo(0, 0); }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all active:scale-[0.98]"
                  style={{
                    backgroundColor: '#2F80ED',
                    boxShadow: '0 4px 16px rgba(47,128,237,0.35)',
                    textDecoration: 'none',
                  }}
                >
                  Contact Us
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
