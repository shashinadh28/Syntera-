import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { viewportOnce } from '../utils/motion';

const ease = [0.22, 1, 0.36, 1];

const TOOLS = [
  {
    id: 'ai-readiness',
    href: '/ai-readiness-assessment',
    badge: 'FREE ASSESSMENT',
    badgeColor: '#0D9488',
    badgeBg: 'rgba(13,148,136,0.1)',
    badgeBorder: 'rgba(13,148,136,0.25)',
    accent: '#0D9488',
    accentLight: 'rgba(13,148,136,0.08)',
    accentBorder: 'rgba(13,148,136,0.18)',
    title: 'AI Readiness Assessment',
    sub: 'Know exactly where your AI program stands.',
    description:
      'Score your organization across 8 critical pillars — strategy, data architecture, MLOps, identity security, talent, regulatory readiness, cost management, and feedback loops. Get a personalized maturity score in under 3 minutes.',
    stat: { val: '3 min', label: 'to complete' },
    pillars: ['AI Strategy', 'MLOps', 'Data Architecture', 'Identity Security', 'Compliance'],
    cta: 'Take the Free Assessment',
    icon: AIIcon,
    glow: '#0D9488',
  },
  {
    id: 'iam-maturity',
    href: '/iam-maturity-check',
    badge: 'SECURITY CHALLENGE',
    badgeColor: '#3C3489',
    badgeBg: 'rgba(60,52,137,0.1)',
    badgeBorder: 'rgba(60,52,137,0.25)',
    accent: '#3C3489',
    accentLight: 'rgba(60,52,137,0.07)',
    accentBorder: 'rgba(60,52,137,0.15)',
    title: 'IAM Maturity Check',
    sub: 'Can you spot the identity security vulnerability?',
    description:
      'Test your engineering intelligence against 6 real-world enterprise cyber threat scenarios. Each scenario exposes a critical identity governance failure — from orphaned credentials to standing privilege abuse. Find the flaws before attackers do.',
    stat: { val: '6 scenarios', label: 'real-world threats' },
    pillars: ['Access Lifecycle', 'Privilege Management', 'Zero Trust', 'JIT Access', 'Compliance'],
    cta: 'Start the Challenge',
    icon: ShieldIcon,
    glow: '#3C3489',
  },
];

export default function AssessmentPromoSection() {
  return (
    <section
      id="assessments"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ backgroundColor: '#0B1120' }}
    >
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
        }}
      />
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-[140px]"
        style={{ background: 'rgba(13,148,136,0.08)' }} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full blur-[140px]"
        style={{ background: 'rgba(60,52,137,0.1)' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Free Interactive Tools
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-white mb-4">
            Measure where you stand. <br />
            <span style={{ background: 'linear-gradient(135deg, #5EEAD4 0%, #60A5FA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              In minutes, not months.
            </span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Two free diagnostic tools designed by Syntera Consulting engineers. Get personalized scores, identify critical gaps, and walk away with an action plan.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease, delay: i * 0.12 }}
            >
              <PromoCard tool={tool} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoCard({ tool }) {
  const Icon = tool.icon;
  return (
    <Link
      to={tool.href}
      style={{ textDecoration: 'none' }}
      className="group block h-full"
    >
      <div
        className="relative h-full rounded-3xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1"
        style={{
          background: `linear-gradient(135deg, ${tool.accentLight} 0%, rgba(255,255,255,0.02) 100%)`,
          border: `1px solid ${tool.accentBorder}`,
          boxShadow: '0 4px 32px rgba(0,0,0,0.25)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 16px 56px rgba(0,0,0,0.4), 0 0 0 1px ${tool.accent}40`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.25)';
        }}
      >
        {/* Top glow on hover */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${tool.accent}, transparent)` }}
        />

        {/* Pulsing ring in corner */}
        <div aria-hidden className="absolute top-6 right-6 pointer-events-none">
          <div className="relative flex items-center justify-center">
            <div className="animate-ping absolute rounded-full opacity-30"
              style={{ width: '48px', height: '48px', background: tool.accent }} />
            <div className="relative h-10 w-10 rounded-full flex items-center justify-center"
              style={{ background: `${tool.accent}20`, border: `1px solid ${tool.accent}35` }}>
              <Icon size={18} color={tool.accent} />
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-10">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] mb-5"
            style={{ background: tool.badgeBg, color: tool.badgeColor, border: `1px solid ${tool.badgeBorder}` }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            {tool.badge}
          </span>

          {/* Title */}
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2 pr-16">
            {tool.title}
          </h3>
          <p className="text-sm font-semibold mb-4" style={{ color: tool.badgeColor }}>
            {tool.sub}
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {tool.description}
          </p>

          {/* Pillars */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tool.pillars.map((p) => (
              <span key={p} className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {p}
              </span>
            ))}
          </div>

          {/* Stat + CTA */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-display text-2xl font-extrabold" style={{ color: tool.accent }}>
                {tool.stat.val}
              </div>
              <div className="text-xs text-slate-400">{tool.stat.label}</div>
            </div>
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
              style={{ background: tool.accent, boxShadow: `0 6px 20px ${tool.glow}40` }}
            >
              {tool.cta}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* Icons */
function AIIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z" />
    </svg>
  );
}

function ShieldIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <rect x="9" y="11" width="6" height="5" rx="1" />
      <path d="M10 11V9a2 2 0 0 1 4 0v2" />
    </svg>
  );
}
