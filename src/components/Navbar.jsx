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
      { label: 'Talent Solutions', href: '/talent-solutions', isRoute: true },
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
      { label: 'Databricks Google Cloud', href: '/databricks-google-cloud', isRoute: true },
    ],
  },
  {
    label: 'Interactive',
    href: '#interactive',
    dropdown: [
      { label: 'AI Readiness Quiz', href: '/ai-readiness-assessment', isRoute: true },
      { label: 'IAM Security Game', href: '/iam-maturity-check', isRoute: true },
      { label: 'Blog Directory', href: '/blog', isRoute: true },
      { label: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
    ],
  },
  { label: 'Insights', href: '#insights' },
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
    label: 'NEW PAGES',
    href: '#new-pages',
    dropdown: [
      { label: 'Our Process', href: '/our-process', isRoute: true },
      { label: 'Hosting', href: '/hosting', isRoute: true },
      { label: 'Data Engineering', href: '/data-engineering', isRoute: true },
      { label: 'QA as a Service', href: '/qa-as-a-service', isRoute: true },
      { label: 'App Development', href: '/app-development', isRoute: true },
      { label: 'Staffing', href: '/staffing', isRoute: true },
    ],
  },
  {
    label: 'More',
    href: '#more',
    dropdown: [
      { label: 'Company Leadership', href: '/company-leadership', isRoute: true },
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

  // Smooth-scroll to a hash section; if not on homepage, navigate first then scroll
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
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.4s ease',
        ...((forceWhite || scrolled)
          ? {
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
              paddingTop: '12px',
              paddingBottom: '12px',
            }
          : {
              background: 'transparent',
              paddingTop: '20px',
              paddingBottom: '20px',
            }),
      }}
    >
      <nav
        className="nav-inner"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: '3rem',
          paddingRight: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <img
            src="/LOGO/new/Syntera-LOGO.webp"
            alt="Syntera Solutions"
            style={{
              height: (forceWhite || scrolled) ? '36px' : '42px',
              width: 'auto',
              objectFit: 'contain',
              transition: 'all 0.4s ease',
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
                    fontWeight: 500,
                    color: (forceWhite || scrolled) ? 'rgba(15,23,42,0.7)' : 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = (forceWhite || scrolled) ? '#0F172A' : '#ffffff';
                    e.currentTarget.style.background = (forceWhite || scrolled) ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.07)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = (forceWhite || scrolled) ? 'rgba(15,23,42,0.7)' : 'rgba(255,255,255,0.8)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {link.label}
                </Link>
              ) : link.isHighlight ? (
                // AI & IAM — special highlighted link with blue dot
                <a
                  href={link.href}
                  onClick={(e) => handleAnchorNav(e, link.href)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1565D8',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(21,101,216,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#1565D8',
                      flexShrink: 0,
                      boxShadow: '0 0 6px rgba(21,101,216,0.6)',
                    }}
                  />
                  {link.label}
                </a>
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
                    fontWeight: 500,
                    color: (forceWhite || scrolled) ? 'rgba(15,23,42,0.7)' : 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = (forceWhite || scrolled) ? '#0F172A' : '#ffffff';
                    e.currentTarget.style.background = (forceWhite || scrolled) ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.07)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = (forceWhite || scrolled) ? 'rgba(15,23,42,0.7)' : 'rgba(255,255,255,0.8)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {link.dropdown && dropdownOpen === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '100%',
                      paddingTop: '8px',
                      zIndex: 60,
                    }}
                  >
                    <div
                      style={{
                        width: '230px',
                        background: '#ffffff',
                        border: '1px solid rgba(0,0,0,0.08)',
                        borderRadius: '14px',
                        boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                        padding: '6px',
                      }}
                    >
                      {link.dropdown.map((item) => (
                        item.isRoute ? (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => { setDropdownOpen(null); window.scrollTo(0, 0); }}
                            style={{
                              display: 'block',
                              padding: '10px 14px',
                              borderRadius: '8px',
                              fontSize: '14px',
                              color: '#334155',
                              textDecoration: 'none',
                              transition: 'all 0.15s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#EAF3FF';
                              e.currentTarget.style.color = '#1565D8';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
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
                              padding: '10px 14px',
                              borderRadius: '8px',
                              fontSize: '14px',
                              color: '#334155',
                              textDecoration: 'none',
                              transition: 'all 0.15s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#EAF3FF';
                              e.currentTarget.style.color = '#1565D8';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = '#334155';
                            }}
                          >
                            {item.label}
                          </a>
                        )
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <motion.a
            href="#contact"
            onClick={(e) => handleAnchorNav(e, '#contact')}
            className="nav-desktop-contact-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#1565D8',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '14px',
              padding: '10px 22px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(21,101,216,0.3)',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(21,101,216,0.4)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Contact Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.a>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="nav-mobile-btn"
            style={{
              display: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              border: `1px solid ${(forceWhite || scrolled) ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.2)'}`,
              background: (forceWhite || scrolled) ? '#ffffff' : 'rgba(255,255,255,0.08)',
              color: (forceWhite || scrolled) ? '#0F172A' : '#ffffff',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
                  <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
                  <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="mobile-menu-panel"
            style={{
              margin: '8px 16px',
              background: '#ffffff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '16px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
              padding: '16px',
            }}
          >
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#1E293B',
                        cursor: 'pointer',
                      }}
                      onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label)}
                    >
                      <span>{link.label}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{
                          transform: mobileDropdownOpen === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease'
                        }}
                      >
                        <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <AnimatePresence>
                      {mobileDropdownOpen === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ overflow: 'hidden', paddingLeft: '16px', borderLeft: '2px solid #E2E8F0', marginLeft: '16px', marginBottom: '8px' }}
                        >
                          {link.dropdown.map((item) => (
                            item.isRoute ? (
                              <Link
                                key={item.label}
                                to={item.href}
                                onClick={() => { setOpen(false); window.scrollTo(0, 0); }}
                                style={{
                                  display: 'block',
                                  padding: '10px 16px',
                                  fontSize: '14px',
                                  color: '#475569',
                                  textDecoration: 'none',
                                }}
                              >
                                {item.label}
                              </Link>
                            ) : (
                              <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => { handleAnchorNav(e, item.href); setOpen(false); }}
                                style={{
                                  display: 'block',
                                  padding: '10px 16px',
                                  fontSize: '14px',
                                  color: '#475569',
                                  textDecoration: 'none',
                                }}
                              >
                                {item.label}
                              </a>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.isRoute ? (
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'block',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#334155',
                      textDecoration: 'none',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {link.label}
                  </Link>
                ) : link.isHighlight ? (
                  <a
                    href={link.href}
                    onClick={(e) => { handleAnchorNav(e, link.href); setOpen(false); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#1565D8',
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1565D8', flexShrink: 0 }} />
                    {link.label}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => { handleAnchorNav(e, link.href); setOpen(false); }}
                    style={{
                      display: 'block',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#334155',
                      textDecoration: 'none',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <motion.a
                href="#contact"
                onClick={(e) => { handleAnchorNav(e, '#contact'); setOpen(false); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  background: '#1565D8',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '12px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(21,101,216,0.3)',
                  textDecoration: 'none',
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 6px 24px rgba(21,101,216,0.4)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Contact Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
