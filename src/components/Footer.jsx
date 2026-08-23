import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RevealGroup } from './Reveal.jsx';
import { fadeUp, fadeUpSmall, viewportOnce } from '../utils/motion';

const QUICK_LINKS = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'AI & IAM', href: '#ai-iam' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Success Stories', href: '#stories' },
  { label: 'Insights', href: '#insights' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  { label: 'Agentic AI', href: '/agentic-ai', isRoute: true },
  { label: 'AI Implementation', href: '/artificial-intelligence', isRoute: true },
  { label: 'IAM Solutions', href: '#iam' },
  { label: 'Data & Cloud', href: '/technology-services', isRoute: true },
  { label: 'Talent Solutions', href: '/talent-solutions', isRoute: true },
  { label: 'Pricing & Revenue', href: '/pricing-revenue-management', isRoute: true },
  { label: 'IAM Maturity Check', href: '/iam-maturity-check', isRoute: true },
];

const US_LOCATIONS = [
  {
    name: 'Austin – Branch Office',
    lines: ['2006 S Bagdad Rd, Suite 180', 'Leander, TX 78641'],
    phones: ['913.804.7687'],
  },
  {
    name: 'Denton – Corporate HQ',
    lines: ['300 N Carroll Blvd, Suite 103', 'Denton, TX 76201'],
    phones: ['919.607.2143', '913.804.7687'],
  },
  {
    name: 'Milpitas – Branch Office',
    lines: ['329 Odyssey Lane', 'Milpitas, CA 95035'],
    phones: ['669.437.1139'],
  },
  {
    name: 'Fort Mill SC – Branch Office',
    lines: ['148 Ravensara Ave', 'Fort Mill, SC 29715'],
    phones: ['424.242.4567'],
  },
];

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/synterasolutions',
    path: 'M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.69 4.54-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/synterasolutions',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22a3.7 3.7 0 01-.9 1.38 3.7 3.7 0 01-1.38.9c-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.05-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.63a5.86 5.86 0 00-2.13 1.38A5.86 5.86 0 00.63 4.14C.34 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.15.56 2.91.3.78.7 1.44 1.38 2.13.69.69 1.35 1.08 2.13 1.38.76.29 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.27 2.91-.56a5.86 5.86 0 002.13-1.38 5.86 5.86 0 001.38-2.13c.29-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.13A5.86 5.86 0 0019.86.63C19.1.34 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/syntera-solutions',
    path: 'M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.75S5.53 3.23 6.5 3.23s1.75.78 1.75 1.75-.78 1.75-1.75 1.75zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V19h-3V8h2.88v1.5h.04c.4-.75 1.38-1.55 2.84-1.55 3.04 0 3.6 2 3.6 4.59V19z',
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0B1120', borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Subtle glow accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-accent-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-page container-px py-16 sm:py-20">
        {/* ── ROW 1: Company Info + Quick Links + Services ── */}
        <RevealGroup
          staggerChildren={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10"
        >
          {/* Company Info */}
          <motion.div variants={fadeUp}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img
                src="/LOGO/new/Syntera-LOGO.webp"
                alt="Syntera Solutions"
                style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p className="mt-2 text-xs font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Your growth is our progress
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              AI + Identity. Enterprise technology delivery.
            </p>

            <div className="mt-6 text-sm text-white/65 space-y-1">
              <p className="font-semibold text-white/90">Head Office:</p>
              <p>300 N Carroll Blvd, Suite 103</p>
              <p>Denton, TX 76201</p>
              <p className="mt-2">📞 919.607.2143</p>
              <p>📞 913.804.7687</p>
              <p className="mt-2">
                <a href="mailto:info@synterasolutions.com" className="hover:text-white transition-colors">
                  📧 info@synterasolutions.com
                </a>
              </p>
            </div>

            <p className="mt-6 text-xs text-white/40">
              © 2025 Syntera Solutions All Rights Reserved.
            </p>
            <Link to="/privacy-policy" className="mt-1 block text-xs text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Quick Links
            </h4>
            <motion.ul
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-5 space-y-3"
            >
              {QUICK_LINKS.map((l) => (
                <motion.li key={l.label} variants={fadeUpSmall}>
                  {l.isRoute ? (
                    <Link
                      to={l.href}
                      className="group inline-flex items-center text-sm text-white/70 transition-colors hover:text-white"
                    >
                      <span className="relative">
                        {l.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-400 transition-all group-hover:w-full" />
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      className="group inline-flex items-center text-sm text-white/70 transition-colors hover:text-white"
                    >
                      <span className="relative">
                        {l.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-400 transition-all group-hover:w-full" />
                      </span>
                    </a>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Services
            </h4>
            <motion.ul
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3"
            >
              {SERVICES.map((s) => (
                <motion.li key={s.label} variants={fadeUpSmall}>
                  {s.isRoute ? (
                    <Link
                      to={s.href}
                      className="group inline-flex items-center text-sm text-white/70 transition-colors hover:text-white"
                    >
                      <span className="relative">
                        {s.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-400 transition-all group-hover:w-full" />
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={s.href}
                      className="group inline-flex items-center text-sm text-white/70 transition-colors hover:text-white"
                    >
                      <span className="relative">
                        {s.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-400 transition-all group-hover:w-full" />
                      </span>
                    </a>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </RevealGroup>

        {/* ── ROW 2: US Locations + India Location ── */}
        <RevealGroup
          staggerChildren={0.1}
          delay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-12 border-b border-white/10"
        >
          {/* US Locations heading — badge is a sibling element, NOT inside the heading text */}
          <div className="col-span-full flex items-center gap-2">
            <motion.span
              variants={fadeUpSmall}
              className="inline-flex h-5 w-7 items-center justify-center rounded-sm border border-white/15 bg-white/5 text-[10px] font-bold text-white/80"
              aria-hidden="true"
            >
              US
            </motion.span>
            <motion.h4
              variants={fadeUpSmall}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45"
            >
              Locations
            </motion.h4>
          </div>

          {US_LOCATIONS.map((loc) => (
            <motion.div key={loc.name} variants={fadeUp}>
              <p className="text-sm font-semibold text-white/90">{loc.name}</p>
              <ul className="mt-2 space-y-1 text-sm text-white/65">
                {loc.lines.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
                {loc.phones.map((phone, i) => (
                  <li key={`p-${i}`} className="mt-1.5">📞 {phone}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* India Location — badge is a sibling, NOT inside the heading text */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="inline-flex h-5 w-7 items-center justify-center rounded-sm border border-white/15 bg-white/5 text-[10px] font-bold text-white/80"
                aria-hidden="true"
              >
                IN
              </span>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                India Location
              </h4>
            </div>
            <p className="text-sm font-semibold text-white/90">Vijayawada, Andhra Pradesh</p>
            <ul className="mt-2 space-y-1 text-sm text-white/65">
              <li>D No: 5-141, Koudinya Nagar,</li>
              <li>Penamaluru (MD), Krishna District,</li>
              <li>Andhra Pradesh 521139</li>
              <li className="mt-2">
                <a href="mailto:info@synterasolutions.com" className="hover:text-white transition-colors">
                  📧 info@synterasolutions.com
                </a>
              </li>
              <li className="mt-1.5">📞 +91 8885555474</li>
            </ul>
          </motion.div>
        </RevealGroup>

        {/* ── ROW 3: Bottom bar ── */}
        <RevealGroup
          staggerChildren={0.1}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-xs text-white/45"
        >
          <motion.div variants={fadeUpSmall}>
            © 2025 Syntera Solutions All Rights Reserved.
          </motion.div>
          <motion.div variants={fadeUpSmall} className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:bg-accent-500/20 hover:text-white hover:shadow-glow"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </motion.div>
        </RevealGroup>
      </div>
    </footer>
  );
}
