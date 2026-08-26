import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RevealGroup } from './Reveal.jsx';
import { viewportOnce, fadeUpSmall, easePremium } from '../utils/motion';

// COMPACT CARDS for home page
const CARDS = [
  {
    id: 'ai-implementation',
    badge: 'AI IMPLEMENTATION',
    badgeColor: '#0B6E56',
    badgeBg: 'rgba(11,110,86,0.1)',
    accent: '#0B6E56',
    headline: 'Design, build, and scale AI systems for production.',
    bullets: ['GenAI & LLM Integration', 'AI Agents & Workflows', 'MLOps & Governance'],
    icon: BrainIcon,
    image: '/capabilities/AI-IMPLEMENTATION.webp',
  },
  {
    id: 'iam',
    badge: 'IDENTITY & ACCESS MANAGEMENT',
    badgeColor: '#3C3489',
    badgeBg: 'rgba(60,52,137,0.1)',
    accent: '#3C3489',
    headline: 'Secure every identity. Control every access point.',
    bullets: ['Zero Trust Architecture', 'IGA & PAM', 'Okta · SailPoint · CyberArk'],
    icon: ShieldLockIcon,
    image: '/capabilities/IDENTITY-ACCESS-MANAGEMENT.webp',
  },
  {
    id: 'data-cloud',
    badge: 'DATA & CLOUD',
    badgeColor: '#1565D8',
    badgeBg: 'rgba(21,101,216,0.1)',
    accent: '#1565D8',
    headline: 'Data platforms and cloud infrastructure for AI-ready enterprises.',
    bullets: ['Data Lakehouses', 'Real-time Pipelines', 'AWS · Azure · GCP'],
    icon: DatabaseIcon,
    image: '/capabilities/DATA-CLOUD.webp',
  },
  {
    id: 'talent',
    badge: 'TALENT SOLUTIONS',
    badgeColor: '#6B4EFF',
    badgeBg: 'rgba(107,78,255,0.1)',
    accent: '#6B4EFF',
    headline: 'Specialized engineering talent when you need to move fast.',
    bullets: ['Staff Augmentation', 'Direct Hire', 'Project Teams'],
    icon: UsersIcon,
    image: '/capabilities/TALENT-SOLUTIONS.webp',
  },
];

export default function FeatureCards() {
  return (
    <section id="services" className="relative py-12 sm:py-16 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <RevealGroup
          staggerChildren={0.18}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <motion.span
            variants={fadeUpSmall}
            className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            What We Do
          </motion.span>
          <motion.h2
            variants={fadeUpSmall}
            className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight"
            style={{ color: '#1A1A18' }}
          >
            Built for the technology challenges<br className="hidden sm:block" /> that define the next decade.
          </motion.h2>
          <motion.p
            variants={fadeUpSmall}
            className="mt-5 text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: '#3D3D3A' }}
          >
            Syntera Consulting combines deep technical expertise in AI and identity security with a delivery-first mindset.
            We build, implement, and staff the systems that enterprise organizations depend on.
          </motion.p>
        </RevealGroup>

        {/* Compact 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              id={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.75, ease: easePremium, delay: i * 0.1 }}
            >
              <CompactCard card={card} />
            </motion.div>
          ))}
        </div>

        {/* See all capabilities CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: easePremium }}
          className="flex justify-center"
        >
          <Link
            to="/capabilities"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300"
            style={{
              background: '#0B1120',
              color: '#fff',
              textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(11,17,32,0.18)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#1E3A6E'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(47,128,237,0.28)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#0B1120'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(11,17,32,0.18)'; }}
          >
            Explore All Capabilities
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CompactCard({ card }) {
  const Icon = card.icon;
  return (
    <div
      className="group relative h-full flex flex-col rounded-2xl bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden cursor-pointer"
      style={{
        border: '1px solid rgba(15,23,42,0.08)',
        boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
      }}
    >
      {/* Image area with real photo */}
      <div className="relative overflow-hidden" style={{ height: '160px' }}>
        <img
          src={card.image}
          alt={card.badge}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 45%, rgba(15,23,42,0.45) 100%)' }} />
        {/* Hover accent line */}
        <div
          className="absolute inset-x-0 bottom-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: card.accent }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Badge */}
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] mb-3 self-start"
          style={{ background: card.badgeBg, color: card.badgeColor }}
        >
          {card.badge}
        </span>

        {/* Headline */}
        <h3
          className="text-base font-bold leading-snug mb-4 flex-1"
          style={{ color: '#1A1A18', fontFamily: '"Inter", sans-serif' }}
        >
          {card.headline}
        </h3>

        {/* Mini bullets */}
        <ul className="space-y-1.5 mb-5">
          {card.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-xs" style={{ color: '#64748b' }}>
              <span
                className="shrink-0 h-3.5 w-3.5 rounded-full grid place-items-center"
                style={{ background: `${card.accent}15`, color: card.accent }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-2 w-2">
                  <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>

        {/* Learn more */}
        <Link
          to="/capabilities"
          className="inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-200"
          style={{ color: card.accent, textDecoration: 'none' }}
        >
          Learn more
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            className="transition-transform duration-200 group-hover:translate-x-0.5">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

/* Icons */
function BrainIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z" />
    </svg>
  );
}

function ShieldLockIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <rect x="9" y="11" width="6" height="5" rx="1" />
      <path d="M10 11V9a2 2 0 0 1 4 0v2" />
    </svg>
  );
}

function DatabaseIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function UsersIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
