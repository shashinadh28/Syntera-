import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RevealGroup } from './Reveal.jsx';
import { fadeUp, fadeUpSmall } from '../utils/motion';

const RESOURCES = [
  { label: 'Contact Us', href: '/contact', isRoute: true },
  { label: 'Syntera Careers', href: '/syntera-careers', isRoute: true },
  { label: 'Labor Condition Applications', href: '/labor-condition-applications', isRoute: true },
  { label: 'Technology Partnerships', href: '/partnerships', isRoute: true },
];

const POLICIES = [
  { label: '1095-C Request', href: '/1095-c-request', isRoute: true },
  { label: 'Low Voltage and Security Licensing', href: '/low-voltage-security-licensing', isRoute: true },
  { label: 'Mandatory Notices', href: '/mandatory-notices', isRoute: true },
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

/* Decorative "network globe" mark behind the Resources / Policies columns —
   nods to Syntera's technology-consulting focus without competing with the
   copy in front of it. */
function NetworkMark() {
  return (
    <svg
      className="absolute -right-24 -top-16 h-[560px] w-[720px] opacity-90 sm:h-[620px] sm:w-[820px]"
      viewBox="0 0 900 700"
      fill="none"
      aria-hidden="true"
    >
      <line x1="452.7" y1="457.5" x2="529.1" y2="403.4" stroke="#5B9DFF" stroke-width="0.6" opacity="0.09" />
      <line x1="847.6" y1="391.1" x2="855.7" y2="485.6" stroke="#5B9DFF" stroke-width="0.6" opacity="0.1" />
      <line x1="847.6" y1="391.1" x2="817.2" y2="338.2" stroke="#5B9DFF" stroke-width="0.6" opacity="0.23" />
      <line x1="898.7" y1="295.3" x2="825.2" y2="273.3" stroke="#5B9DFF" stroke-width="0.6" opacity="0.12" />
      <line x1="898.7" y1="295.3" x2="924.3" y2="222.0" stroke="#5B9DFF" stroke-width="0.6" opacity="0.21" />
      <line x1="898.7" y1="295.3" x2="875.8" y2="208.8" stroke="#5B9DFF" stroke-width="0.6" opacity="0.24" />
      <line x1="739.9" y1="347.0" x2="759.0" y2="342.2" stroke="#5B9DFF" stroke-width="0.6" opacity="0.21" />
      <line x1="739.9" y1="347.0" x2="738.8" y2="385.5" stroke="#5B9DFF" stroke-width="0.6" opacity="0.24" />
      <line x1="510.1" y1="404.6" x2="482.3" y2="373.6" stroke="#5B9DFF" stroke-width="0.6" opacity="0.21" />
      <line x1="510.1" y1="404.6" x2="481.2" y2="323.2" stroke="#5B9DFF" stroke-width="0.6" opacity="0.23" />
      <line x1="791.9" y1="426.0" x2="833.5" y2="438.9" stroke="#5B9DFF" stroke-width="0.6" opacity="0.22" />
      <line x1="791.9" y1="426.0" x2="855.7" y2="485.6" stroke="#5B9DFF" stroke-width="0.6" opacity="0.22" />
      <line x1="791.9" y1="426.0" x2="817.2" y2="338.2" stroke="#5B9DFF" stroke-width="0.6" opacity="0.08" />
      <line x1="791.9" y1="426.0" x2="759.0" y2="342.2" stroke="#5B9DFF" stroke-width="0.6" opacity="0.14" />
      <line x1="650.4" y1="127.2" x2="572.1" y2="145.7" stroke="#5B9DFF" stroke-width="0.6" opacity="0.19" />
      <line x1="834.3" y1="457.8" x2="855.7" y2="485.6" stroke="#5B9DFF" stroke-width="0.6" opacity="0.24" />
      <line x1="834.3" y1="457.8" x2="858.5" y2="382.2" stroke="#5B9DFF" stroke-width="0.6" opacity="0.24" />
      <line x1="671.7" y1="603.9" x2="622.2" y2="592.3" stroke="#5B9DFF" stroke-width="0.6" opacity="0.1" />
      <line x1="515.0" y1="153.9" x2="486.7" y2="193.6" stroke="#5B9DFF" stroke-width="0.6" opacity="0.18" />
      <line x1="515.0" y1="153.9" x2="554.2" y2="113.3" stroke="#5B9DFF" stroke-width="0.6" opacity="0.2" />
      <line x1="515.0" y1="153.9" x2="508.9" y2="168.0" stroke="#5B9DFF" stroke-width="0.6" opacity="0.24" />
      <line x1="833.5" y1="438.9" x2="855.7" y2="485.6" stroke="#5B9DFF" stroke-width="0.6" opacity="0.19" />
      <line x1="833.5" y1="438.9" x2="858.5" y2="382.2" stroke="#5B9DFF" stroke-width="0.6" opacity="0.13" />
      <line x1="947.7" y1="337.5" x2="948.5" y2="325.7" stroke="#5B9DFF" stroke-width="0.6" opacity="0.13" />
      <line x1="825.2" y1="273.3" x2="817.2" y2="338.2" stroke="#5B9DFF" stroke-width="0.6" opacity="0.1" />
      <line x1="807.5" y1="343.6" x2="858.5" y2="382.2" stroke="#5B9DFF" stroke-width="0.6" opacity="0.17" />
      <line x1="807.5" y1="343.6" x2="738.8" y2="385.5" stroke="#5B9DFF" stroke-width="0.6" opacity="0.13" />
      <line x1="486.7" y1="193.6" x2="410.6" y2="186.8" stroke="#5B9DFF" stroke-width="0.6" opacity="0.16" />
      <line x1="534.5" y1="54.8" x2="603.2" y2="37.9" stroke="#5B9DFF" stroke-width="0.6" opacity="0.09" />
      <line x1="448.0" y1="247.7" x2="401.4" y2="311.6" stroke="#5B9DFF" stroke-width="0.6" opacity="0.22" />
      <line x1="448.0" y1="247.7" x2="481.2" y2="323.2" stroke="#5B9DFF" stroke-width="0.6" opacity="0.11" />
      <line x1="817.2" y1="338.2" x2="759.0" y2="342.2" stroke="#5B9DFF" stroke-width="0.6" opacity="0.12" />
      <line x1="817.2" y1="338.2" x2="867.0" y2="366.4" stroke="#5B9DFF" stroke-width="0.6" opacity="0.15" />
      <line x1="416.9" y1="280.9" x2="410.6" y2="186.8" stroke="#5B9DFF" stroke-width="0.6" opacity="0.2" />
      <line x1="416.9" y1="280.9" x2="481.2" y2="323.2" stroke="#5B9DFF" stroke-width="0.6" opacity="0.19" />
      <line x1="759.0" y1="342.2" x2="738.8" y2="385.5" stroke="#5B9DFF" stroke-width="0.6" opacity="0.21" />
      <line x1="572.1" y1="145.7" x2="589.6" y2="151.6" stroke="#5B9DFF" stroke-width="0.6" opacity="0.15" />
      <line x1="572.1" y1="145.7" x2="539.3" y2="180.6" stroke="#5B9DFF" stroke-width="0.6" opacity="0.24" />
      <line x1="572.1" y1="145.7" x2="508.9" y2="168.0" stroke="#5B9DFF" stroke-width="0.6" opacity="0.12" />
      <line x1="867.0" y1="366.4" x2="948.5" y2="325.7" stroke="#5B9DFF" stroke-width="0.6" opacity="0.12" />
      <line x1="577.1" y1="351.2" x2="635.2" y2="349.9" stroke="#5B9DFF" stroke-width="0.6" opacity="0.09" />
      <circle cx="733.7" cy="35.0" r="1.5" fill="#5B9DFF" opacity="0.77" />
      <circle cx="515.0" cy="153.9" r="1.7" fill="#5B9DFF" opacity="0.38" />
      <circle cx="791.9" cy="426.0" r="1.9" fill="#5B9DFF" opacity="0.69" />
      <circle cx="603.2" cy="37.9" r="1.4" fill="#5B9DFF" opacity="0.44" />
      <circle cx="481.2" cy="323.2" r="2.6" fill="#5B9DFF" opacity="0.64" />
      <circle cx="739.9" cy="347.0" r="1.8" fill="#5B9DFF" opacity="0.56" />
      <circle cx="482.3" cy="373.6" r="1.3" fill="#5B9DFF" opacity="0.38" />
      <circle cx="833.5" cy="438.9" r="1.6" fill="#5B9DFF" opacity="0.6" />
      <circle cx="554.2" cy="113.3" r="1.4" fill="#5B9DFF" opacity="0.38" />
      <circle cx="924.3" cy="222.0" r="1.2" fill="#5B9DFF" opacity="0.63" />
      <circle cx="858.5" cy="382.2" r="1.4" fill="#5B9DFF" opacity="0.79" />
      <circle cx="834.3" cy="457.8" r="2.4" fill="#5B9DFF" opacity="0.29" />
      <circle cx="671.7" cy="603.9" r="1.5" fill="#5B9DFF" opacity="0.65" />
      <circle cx="577.1" cy="351.2" r="1.4" fill="#5B9DFF" opacity="0.33" />
      <circle cx="847.6" cy="391.1" r="2.5" fill="#5B9DFF" opacity="0.59" />
      <circle cx="867.0" cy="366.4" r="1.8" fill="#5B9DFF" opacity="0.72" />
      <circle cx="772.7" cy="47.5" r="2.3" fill="#5B9DFF" opacity="0.36" />
      <circle cx="486.7" cy="193.6" r="1.2" fill="#5B9DFF" opacity="0.51" />
      <circle cx="397.9" cy="159.7" r="1.7" fill="#5B9DFF" opacity="0.53" />
      <circle cx="410.6" cy="186.8" r="2.2" fill="#5B9DFF" opacity="0.65" />
      <circle cx="731.4" cy="238.9" r="2.6" fill="#5B9DFF" opacity="0.31" />
      <circle cx="572.1" cy="145.7" r="1.7" fill="#5B9DFF" opacity="0.45" />
      <circle cx="510.2" cy="582.0" r="2.4" fill="#5B9DFF" opacity="0.4" />
      <circle cx="738.8" cy="385.5" r="1.4" fill="#5B9DFF" opacity="0.52" />
      <circle cx="452.7" cy="457.5" r="1.7" fill="#5B9DFF" opacity="0.42" />
      <circle cx="448.0" cy="247.7" r="1.5" fill="#5B9DFF" opacity="0.8" />
      <circle cx="684.2" cy="430.8" r="1.8" fill="#5B9DFF" opacity="0.77" />
      <circle cx="855.7" cy="485.6" r="1.9" fill="#5B9DFF" opacity="0.28" />
      <circle cx="539.3" cy="180.6" r="2.6" fill="#5B9DFF" opacity="0.75" />
      <circle cx="875.8" cy="208.8" r="2.6" fill="#5B9DFF" opacity="0.81" />
      <circle cx="743.3" cy="257.4" r="2.4" fill="#5B9DFF" opacity="0.35" />
      <circle cx="898.7" cy="295.3" r="1.8" fill="#5B9DFF" opacity="0.38" />
      <circle cx="508.9" cy="168.0" r="1.7" fill="#5B9DFF" opacity="0.29" />
      <circle cx="686.8" cy="177.6" r="1.7" fill="#5B9DFF" opacity="0.84" />
      <circle cx="700.8" cy="558.7" r="1.5" fill="#5B9DFF" opacity="0.72" />
      <circle cx="589.6" cy="151.6" r="1.8" fill="#5B9DFF" opacity="0.5" />
      <circle cx="948.5" cy="325.7" r="2.5" fill="#5B9DFF" opacity="0.85" />
      <circle cx="415.8" cy="396.5" r="1.9" fill="#5B9DFF" opacity="0.68" />
      <circle cx="825.2" cy="273.3" r="1.3" fill="#5B9DFF" opacity="0.43" />
      <circle cx="388.1" cy="249.0" r="2.6" fill="#5B9DFF" opacity="0.6" />
      <circle cx="947.7" cy="337.5" r="1.9" fill="#5B9DFF" opacity="0.7" />
      <circle cx="759.0" cy="342.2" r="1.2" fill="#5B9DFF" opacity="0.6" />
      <circle cx="510.1" cy="404.6" r="1.9" fill="#5B9DFF" opacity="0.76" />
      <circle cx="416.9" cy="280.9" r="1.3" fill="#5B9DFF" opacity="0.83" />
      <circle cx="622.2" cy="592.3" r="1.2" fill="#5B9DFF" opacity="0.36" />
      <circle cx="875.5" cy="178.0" r="2.0" fill="#5B9DFF" opacity="0.66" />
      <circle cx="650.4" cy="127.2" r="1.5" fill="#5B9DFF" opacity="0.32" />
      <circle cx="529.1" cy="403.4" r="2.4" fill="#5B9DFF" opacity="0.4" />
      <circle cx="715.4" cy="111.7" r="2.0" fill="#5B9DFF" opacity="0.62" />
      <circle cx="807.5" cy="343.6" r="1.7" fill="#5B9DFF" opacity="0.6" />
      <circle cx="817.2" cy="338.2" r="1.9" fill="#5B9DFF" opacity="0.81" />
      <circle cx="534.5" cy="54.8" r="1.4" fill="#5B9DFF" opacity="0.68" />
      <circle cx="401.4" cy="311.6" r="1.5" fill="#5B9DFF" opacity="0.49" />
      <circle cx="809.5" cy="97.0" r="2.1" fill="#5B9DFF" opacity="0.43" />
      <circle cx="635.2" cy="349.9" r="1.6" fill="#5B9DFF" opacity="0.7" />
    </svg>
  );
}

function FooterLink({ item }) {
  const content = (
    <span className="group inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
      <span className="text-accent-400 transition-transform duration-200 group-hover:translate-x-0.5">
        &#8250;
      </span>
      <span className="relative">
        {item.label}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-400 transition-all duration-300 group-hover:w-full" />
      </span>
    </span>
  );

  if (item.isRoute) {
    return (
      <Link to={item.href} onClick={() => window.scrollTo(0, 0)}>
        {content}
      </Link>
    );
  }
  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white">
      <div className="relative">
        {/* ── Dark diagonal panel ── */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 left-[28%] bg-[#0B1120] sm:left-[36%] lg:left-[38%]"
          style={{
            clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 14%)',
            borderTopLeftRadius: '48px',
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <NetworkMark />
          </div>
        </div>

        <div className="relative mx-auto max-w-page container-px pt-14 pb-12 sm:pt-16">
          <RevealGroup
            staggerChildren={0.12}
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Company info — sits on the light panel */}
            <motion.div variants={fadeUp} className="footer-company-col lg:col-span-2">
              <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <img
                  src="/LOGO/new/Syntera-LOGO.webp"
                  alt="Syntera Consulting"
                  style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
                />
              </Link>
              <p className="mt-3 text-sm font-medium tracking-wide text-accent-500">
                Your growth is our progress
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
                A new world of opportunity awaits. We stand ready to partner side by side with you — developing solutions that transform your technology stack, your business, and your workforce. Where Talent Meets Technology.
              </p>

              {/* Contact */}
              <div className="mt-6 space-y-2.5 text-sm text-slate-700">
                <a href="mailto:Info@synterainc.com" className="flex items-center gap-2.5 hover:text-accent-500 transition-colors">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-accent-400 text-accent-500">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6h18v12H3z" strokeLinejoin="round" />
                      <path d="M3 7l9 6 9-6" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Info@synterainc.com
                </a>
                <a href="mailto:hr@synterainc.com" className="flex items-center gap-2.5 hover:text-accent-500 transition-colors">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-accent-400 text-accent-500">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="3.2" />
                      <path d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4" strokeLinecap="round" />
                    </svg>
                  </span>
                  HR: hr@synterainc.com
                </a>
              </div>

              <div className="mt-5 h-px w-full max-w-sm bg-slate-200" />

              <div className="mt-5 flex gap-2.5 text-sm text-slate-700">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-accent-400 text-accent-500">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s7-6.1 7-11.5A7 7 0 105 9.5C5 14.9 12 21 12 21z" strokeLinejoin="round" />
                    <circle cx="12" cy="9.5" r="2.3" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-accent-500">Main Address:</p>
                  <p>3415 Custer Road, Suite 153</p>
                  <p>Plano, Texas 75023</p>
                </div>
              </div>
            </motion.div>

            {/* Resources — sits on the dark panel */}
            <motion.div variants={fadeUp} className="relative">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Resources</h4>
              <div className="mt-2 h-0.5 w-8 bg-accent-400" />
              <ul className="mt-5 space-y-3.5">
                {RESOURCES.map((item) => (
                  <li key={item.label}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Policies — sits on the dark panel */}
            <motion.div variants={fadeUp} className="relative border-white/10 sm:border-l sm:pl-10">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Policies</h4>
              <div className="mt-2 h-0.5 w-8 bg-accent-400" />
              <ul className="mt-5 space-y-3.5">
                {POLICIES.map((item) => (
                  <li key={item.label}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </motion.div>
          </RevealGroup>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-200">
        <RevealGroup
          staggerChildren={0.1}
          className="mx-auto flex max-w-page container-px flex-col items-center justify-between gap-6 py-6 text-xs text-slate-500 sm:flex-row"
        >
          <motion.div variants={fadeUpSmall} className="text-center sm:text-left space-y-1">
            <div>© 2025 Syntera Consulting | Technology &amp; Talent Solutions All Rights Reserved.</div>
            <div className="text-[11px] text-slate-400 font-medium">©️ 2026 Syntera Consulting LLC. All Rights Reserved</div>
          </motion.div>
          <motion.div variants={fadeUpSmall} className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:bg-accent-50 hover:text-accent-500"
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