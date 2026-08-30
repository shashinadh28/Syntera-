import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion';

const ease = [0.22, 1, 0.36, 1];

const DIFFERENTIATORS = [
  {
    num: '01',
    title: 'Speed with precision',
    description: 'Pre-vetted AI engineers and IAM architects delivered in days — never weeks. Our specialist network means you never sacrifice quality for speed.',
    icon: SpeedIcon,
    color: '#1565D8',
  },
  {
    num: '02',
    title: 'Outcome-aligned delivery',
    description: 'We do not just fill roles or hand off code. Every engagement is structured around your business outcomes — with measurable checkpoints and clear accountability.',
    icon: TargetIcon,
    color: '#6366f1',
  },
  {
    num: '03',
    title: 'Transparent governance',
    description: 'Full visibility into every engagement. Clear SLAs, open reporting, named delivery owners, and proactive escalation before problems become delays.',
    icon: ShieldIcon,
    color: '#0B6E56',
  },
  {
    num: '04',
    title: 'Flexible engagement models',
    description: 'From a single AI engineer to a full delivery team with a PMO — choose the model that fits your need, timeline, and budget.',
    icon: FlexIcon,
    color: '#3C3489',
  },
];

export default function FindTalents() {
  return (
    <section
      id="why-syntera"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{
        backgroundColor: '#FAFAF8',
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.14) 1.5px, transparent 1.5px)',
        backgroundSize: '26px 26px',
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="find-talents-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Content ───────────────────────────────────── */}
          <div className="find-talents-text-col flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Why Syntera Consulting
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.85, ease, delay: 0.08 }}
              className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-ink-900"
            >
              Why leading technology organizations choose{' '}
              <span style={{ color: '#1565D8' }}>Syntera Consulting.</span>
            </motion.h2>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: 0.16 }}
              className="mt-4 text-base leading-relaxed text-ink-500 max-w-lg"
            >
              Deep domain expertise in AI and identity security meets operational discipline — built to deliver outcomes that move the needle.
            </motion.p>

            {/* Differentiator rows */}
            <div className="mt-8 space-y-4">
              {DIFFERENTIATORS.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={d.num}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.65, ease, delay: 0.2 + i * 0.1 }}
                    className="group flex items-start gap-4 p-5 rounded-2xl bg-white cursor-default transition-shadow duration-400 hover:shadow-md"
                    style={{ border: '1px solid rgba(15,23,42,0.07)' }}
                  >
                    {/* Icon box */}
                    <span
                      className="shrink-0 grid h-11 w-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${d.color}12`,
                        border: `1px solid ${d.color}25`,
                        color: d.color,
                      }}
                    >
                      <Icon />
                    </span>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-[10px] font-bold uppercase tracking-[0.2em]"
                          style={{ color: d.color }}
                        >
                          {d.num}
                        </span>
                        <span
                          className="h-px flex-1"
                          style={{ background: `${d.color}20` }}
                        />
                      </div>
                      <h3 className="font-display text-base font-bold text-ink-900 leading-snug">
                        {d.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-500">
                        {d.description}
                      </p>
                    </div>

                    {/* Left accent bar */}
                    <span
                      className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: d.color }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: Image ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.0, ease, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Decorative dot grid behind image */}
            <div
              aria-hidden
              className="absolute -top-6 -right-6 w-32 h-32 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.3) 1.5px, transparent 1.5px)',
                backgroundSize: '14px 14px',
                borderRadius: '8px',
              }}
            />
            <div
              aria-hidden
              className="absolute -bottom-6 -left-6 w-24 h-24 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(47,128,237,0.5) 1.5px, transparent 1.5px)',
                backgroundSize: '14px 14px',
                borderRadius: '8px',
              }}
            />

            {/* Floating brand blue ring */}
            <motion.div
              aria-hidden
              className="absolute -top-8 -right-8 w-24 h-24 rounded-full"
              style={{ border: '2px solid rgba(47,128,237,0.2)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Image */}
            <div
              className="overflow-hidden shadow-2xl"
              style={{ borderRadius: '24px' }}
            >
              <img
                src="/why-ancile/employee_discuss.png"
                alt="Syntera Consulting team collaborating"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3', display: 'block' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* Icons */
function SpeedIcon() {
  return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z" strokeLinejoin="round" strokeLinecap="round" /></svg>;
}
function TargetIcon() {
  return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
}
function ShieldIcon() {
  return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" strokeLinecap="round" /></svg>;
}
function FlexIcon() {
  return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>;
}
