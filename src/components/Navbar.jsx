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

  const isVisible = scrolled || forceWhite || open;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        pointerEvents: isVisible ? 'auto' : 'none',
        background: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(15,23,42,0.08)',
        boxShadow: '0 4px 24px rgba(15,23,42,0.08)',
        paddingTop: '12px',
        paddingBottom: '12px',
        transition: 'background 0.3s ease, padding 0.3s ease, opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      <nav
        className="nav-inner"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src="/LOGO/new/Syntera-LOGO.webp"
            alt="Syntera | Technology & Talent Solutions"
            style={{
              height: '38px',
              width: 'auto',
              objectFit: 'contain',
              transition: 'all 0.3s ease',
            }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '4px', listStyle: 'none', margin: 0, padding: 0 }}>
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
                    padding: '8px 14px',
                    fontSize: '14px',
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
                    padding: '8px 14px',
                    fontSize: '14px',
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
                    padding: '8px 14px',
                    fontSize: '14px',
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

        {/* Contact Us CTA Button */}
        <div className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center' }}>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300"
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
          className="nav-mobile-toggle"
          aria-label="Toggle navigation"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#0F172A',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: '#FFFFFF',
              borderBottom: '1px solid #E2E8F0',
              overflow: 'hidden',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              paddingTop: '1rem',
              paddingBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 0',
                          fontSize: '15px',
                          fontWeight: 600,
                          color: '#0F172A',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        {link.label}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          style={{
                            transform: mobileDropdownOpen === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>

                      {mobileDropdownOpen === link.label && (
                        <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '4px', paddingBottom: '8px' }}>
                          {link.dropdown.map((sub) =>
                            sub.isRoute ? (
                              <Link
                                key={sub.label}
                                to={sub.href}
                                onClick={() => { setOpen(false); window.scrollTo(0, 0); }}
                                style={{
                                  padding: '6px 0',
                                  fontSize: '14px',
                                  fontWeight: 500,
                                  color: '#475569',
                                  textDecoration: 'none',
                                }}
                              >
                                {sub.label}
                              </Link>
                            ) : (
                              <a
                                key={sub.label}
                                href={sub.href}
                                onClick={(e) => handleAnchorNav(e, sub.href)}
                                style={{
                                  padding: '6px 0',
                                  fontSize: '14px',
                                  fontWeight: 500,
                                  color: '#475569',
                                  textDecoration: 'none',
                                }}
                              >
                                {sub.label}
                              </a>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ) : link.isRoute ? (
                    <Link
                      to={link.href}
                      onClick={() => { setOpen(false); window.scrollTo(0, 0); }}
                      style={{
                        display: 'block',
                        padding: '10px 0',
                        fontSize: '15px',
                        fontWeight: 600,
                        color: '#0F172A',
                        textDecoration: 'none',
                      }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchorNav(e, link.href)}
                      style={{
                        display: 'block',
                        padding: '10px 0',
                        fontSize: '15px',
                        fontWeight: 600,
                        color: '#0F172A',
                        textDecoration: 'none',
                      }}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}

              <div style={{ paddingTop: '1rem' }}>
                <Link
                  to="/contact"
                  onClick={() => { setOpen(false); window.scrollTo(0, 0); }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold uppercase tracking-wider text-white"
                  style={{
                    backgroundColor: '#2F80ED',
                    boxShadow: '0 4px 16px rgba(47,128,237,0.35)',
                    textDecoration: 'none',
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
