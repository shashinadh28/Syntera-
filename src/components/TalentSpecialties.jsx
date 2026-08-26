import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';

const ease = [0.22, 1, 0.36, 1];

const ACCENT = '#1565D8';

/* FEATURE CARDS — AI + IAM first, large, prominent */
const FEATURE_SPECIALTIES = [
  {
    name: 'AI / ML Engineering',
    sub: 'LLM · GenAI · MLOps · Agents · Prompt Engineering',
    img: '/specialities/Software_Engineering.webp',
    icon: BrainIcon,
    accentColor: '#0B6E56',
    isNew: true,
  },
  {
    name: 'IAM Engineering',
    sub: 'Okta · SailPoint · CyberArk · Entra ID · Ping · PAM · IGA',
    img: '/specialities/Cybersecurity.webp',
    icon: ShieldLockIcon,
    accentColor: '#3C3489',
    isNew: true,
  },
];

/* STANDARD CARDS */
const STANDARD_SPECIALTIES = [
  {
    name: 'Data Engineering',
    sub: 'Pipelines · Platforms · Lakehouse · dbt · Spark',
    img: '/specialities/Data-Engineering.webp',
    icon: DatabaseIcon,
    accentColor: ACCENT,
  },
  {
    name: 'Cloud / DevOps',
    sub: 'AWS · Azure · GCP · CI/CD · SRE · Terraform · Kubernetes',
    img: '/specialities/Cloud-DevOps.webp',
    icon: CloudIcon,
    accentColor: ACCENT,
  },
  {
    name: 'Cybersecurity',
    sub: 'Security Engineering · SIEM · SOC · Threat Detection',
    img: '/specialities/QA-Automation.webp',
    icon: ShieldIcon,
    accentColor: ACCENT,
  },
  {
    name: 'QA / Automation',
    sub: 'Quality Engineering · Selenium · Cypress · API Testing',
    img: '/specialities/QA-Automation.webp',
    icon: CheckIcon,
    accentColor: ACCENT,
  },
  {
    name: 'Software Engineering',
    sub: 'Full-Stack · Backend · Frontend · React · Node · Python',
    img: '/specialities/Software_Engineering.webp',
    icon: CodeIcon,
    accentColor: ACCENT,
  },
  {
    name: 'Product / PMO / BA',
    sub: 'Product Management · Business Analysis · PMO',
    img: '/specialities/Business-Analysis.webp',
    icon: ChartIcon,
    accentColor: ACCENT,
  },
];

/* Subtle grid-line background */
const GRID_BG = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
  `,
  backgroundSize: '48px 48px',
};

export default function TalentSpecialties() {
  return (
    <section
      id="specialties"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ backgroundColor: '#0A1628', ...GRID_BG }}
    >
      {/* Pulsing rings */}
      <PulseRing size={500} top="-160px" right="-160px" delay={0} />
      <PulseRing size={320} top="-100px" right="-100px" delay={1} />
      <PulseRing size={400} bottom="-120px" left="-120px" delay={0.6} />

      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -top-32 right-0 w-[600px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(21,101,216,0.07)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 left-0 w-[500px] h-[400px] rounded-full blur-[100px]" style={{ background: 'rgba(21,101,216,0.05)' }} />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ border: `1px solid ${ACCENT}40`, background: `${ACCENT}12`, color: ACCENT }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
            Specialties
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
            style={{ color: '#FFFFFF' }}
          >
            Talent for the roles that power{' '}
            <span style={{ color: ACCENT }}>AI implementation and identity security.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            We specialize in the roles that power modern technology delivery — placed
            fast, aligned precisely, accountable always.
          </motion.p>
        </motion.div>

        {/* Featured AI + IAM tiles — full width, large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {FEATURE_SPECIALTIES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${s.accentColor}30`,
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                {/* Image header — taller for feature cards */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.15) 60%, transparent 100%)' }}
                  />
                  {/* NEW badge */}
                  <span
                    className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: s.accentColor, color: '#fff' }}
                  >
                    New
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 relative z-10">
                  <motion.span
                    className="inline-grid h-12 w-12 place-items-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${s.accentColor}18`,
                      border: `1px solid ${s.accentColor}35`,
                      color: s.accentColor,
                    }}
                  >
                    <Icon />
                  </motion.span>

                  <h3 className="font-display text-xl font-bold leading-snug mb-1" style={{ color: '#FFFFFF' }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {s.sub}
                  </p>
                </div>

                {/* Hover accents */}
                <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" style={{ background: `${s.accentColor}06` }} />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${s.accentColor}, transparent)` }} />
                <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ boxShadow: `inset 0 0 0 1px ${s.accentColor}35` }} />
              </motion.div>
            );
          })}
        </div>

        {/* Standard 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {STANDARD_SPECIALTIES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                {/* Image header */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.1) 60%, transparent 100%)' }}
                  />
                </div>

                {/* Body */}
                <div className="p-6 relative z-10">
                  <motion.span
                    className="inline-grid h-11 w-11 place-items-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${ACCENT}15`,
                      border: `1px solid ${ACCENT}30`,
                      color: ACCENT,
                    }}
                  >
                    <Icon />
                  </motion.span>

                  <h3 className="font-display text-lg font-bold leading-snug mb-1" style={{ color: '#FFFFFF' }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
                    {s.sub}
                  </p>
                </div>

                {/* Hover wash */}
                <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" style={{ background: `${ACCENT}06` }} />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }} />
                <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ boxShadow: `inset 0 0 0 1px ${ACCENT}30` }} />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.5, duration: 0.7, ease }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: ACCENT, color: '#fff', fontWeight: 700,
              fontSize: '15px', padding: '14px 32px', borderRadius: '50px',
              textDecoration: 'none', boxShadow: '0 8px 32px rgba(21,101,216,0.35)',
              letterSpacing: '0.01em',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(21,101,216,0.5)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Request Talent
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function PulseRing({ size, delay = 0, top, bottom, left, right }) {
  return (
    <motion.div
      aria-hidden className="pointer-events-none absolute rounded-full"
      style={{ width: size, height: size, border: `1.5px solid ${ACCENT}15`, top, bottom, left, right }}
      animate={{ scale: [1, 1.18, 1], opacity: [0.7, 0, 0.7] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

/* Icons */
function BrainIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z" />
    </svg>
  );
}
function ShieldLockIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <rect x="9" y="11" width="6" height="5" rx="1" />
      <path d="M10 11V9a2 2 0 0 1 4 0v2" />
    </svg>
  );
}
function CodeIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" /><polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function DatabaseIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /></svg>; }
function CloudIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" strokeLinejoin="round" strokeLinecap="round" /></svg>; }
function CheckIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" /><polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function ShieldIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" strokeLinecap="round" /></svg>; }
function ChartIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round" /><line x1="12" y1="20" x2="12" y2="4" strokeLinecap="round" /><line x1="6" y1="20" x2="6" y2="14" strokeLinecap="round" /></svg>; }
