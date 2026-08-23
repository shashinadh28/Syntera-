import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';

const ease = [0.22, 1, 0.36, 1];

const TILES = [
  {
    icon: BrainIcon,
    headline: 'AI-powered identity security',
    body: 'Behavioral analytics, AI-driven access reviews, anomaly detection, and identity threat response that goes beyond traditional SIEM. Protect your identity layer with intelligence.',
  },
  {
    icon: CertificateIcon,
    headline: 'Responsible AI governance',
    body: 'Access controls for AI models and agents, LLM security guardrails, model audit trails, role-based AI permissions, and readiness for EU AI Act compliance requirements.',
  },
  {
    icon: ShieldCheckIcon,
    headline: 'End-to-end delivery partner',
    body: 'One engagement covers AI implementation and IAM architecture — no handoffs between vendors, no coordination gaps, unified accountability for both workstreams.',
  },
];

export default function AIIAMIntersection() {
  return (
    <section
      id="ai-iam"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: '#0A1628' }}
    >
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />

      {/* Glow accents */}
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px]" style={{ background: 'rgba(21,101,216,0.12)' }} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full blur-[100px]" style={{ background: 'rgba(11,110,86,0.08)' }} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full blur-[100px]" style={{ background: 'rgba(60,52,137,0.08)' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
            style={{ border: '1px solid rgba(21,101,216,0.3)', background: 'rgba(21,101,216,0.1)', color: '#1565D8' }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#1565D8' }} />
            The Intersection
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight text-white"
          >
            <span style={{ color: '#1565D8' }}>AI and identity</span> are not separate problems.{' '}
            They are the same problem.
          </motion.h2>

          {/* Body paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-7 text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Every AI system you deploy creates new identity challenges: which users can access which models,
            which agents can act on behalf of which identities, and how you audit, govern, and protect the AI access layer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease, delay: 0.28 }}
            className="mt-4 text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Syntera Solutions sits at this crossroads by design. We have the AI implementation depth and the IAM architecture expertise
            to help you build AI systems that are governed from day one — not secured as an afterthought.
          </motion.p>
        </motion.div>

        {/* Feature tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {TILES.map((tile, i) => {
            const Icon = tile.icon;
            return (
              <motion.div
                key={tile.headline}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                className="group relative rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Icon */}
                <div
                  className="h-12 w-12 rounded-xl grid place-items-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(21,101,216,0.15)', border: '1px solid rgba(21,101,216,0.25)', color: '#1565D8' }}
                >
                  <Icon />
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{tile.headline}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{tile.body}</p>

                {/* Hover accent line */}
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(90deg, transparent, #1565D8, transparent)' }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4, duration: 0.7, ease }}
          className="flex justify-center"
        >
          <motion.a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              border: '1.5px solid #1565D8', color: '#fff', fontWeight: 700,
              fontSize: '15px', padding: '14px 32px', borderRadius: '50px',
              textDecoration: 'none', background: 'rgba(21,101,216,0.12)',
              backdropFilter: 'blur(8px)',
              letterSpacing: '0.01em',
            }}
            whileHover={{ scale: 1.04, background: 'rgba(21,101,216,0.25)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Explore the AI + IAM Approach
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

/* Icons */
function BrainIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z" />
    </svg>
  );
}
function CertificateIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
function ShieldCheckIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
