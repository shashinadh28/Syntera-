import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom';

const ease = [0.22, 1, 0.36, 1];

/* ── Inline SVG icons ── */
const RelationshipsIcon = ({ active }) => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke={active ? 'white' : 'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="32,8 52,40 12,40" />
    <polygon points="32,28 46,52 18,52" opacity="0.55" />
    <line x1="32" y1="8" x2="32" y2="28" />
  </svg>
);
const GrowthIcon = ({ active }) => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke={active ? 'white' : 'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 52 Q32 36 40 28 Q46 20 46 12" />
    <path d="M32 52 Q32 36 24 28 Q18 20 18 12" />
    <path d="M28 16 L32 10 L36 16" />
    <ellipse cx="32" cy="54" rx="10" ry="4" />
    <line x1="22" y1="34" x2="14" y2="30" /><line x1="42" y1="34" x2="50" y2="30" />
  </svg>
);
const ServingIcon = ({ active }) => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke={active ? 'white' : 'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 34 C22 28 14 20 20 12 C24 6 32 10 32 16 C32 10 40 6 44 12 C50 20 42 28 32 34Z" />
    <polygon points="32,38 48,56 16,56" opacity="0.5" />
    <polygon points="24,44 32,56 16,56" opacity="0.3" />
    <polygon points="40,44 48,56 32,56" opacity="0.3" />
  </svg>
);
const PerformanceIcon = ({ active }) => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke={active ? 'white' : 'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="32,8 52,44 12,44" />
    <path d="M22 36 Q32 20 42 36" strokeWidth="1.2" />
    <line x1="32" y1="36" x2="32" y2="28" />
    <circle cx="32" cy="36" r="2.5" fill={active ? 'white' : 'currentColor'} />
    <path d="M18 48 L46 48" strokeWidth="1.2" />
  </svg>
);
const InclusionIcon = ({ active }) => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke={active ? 'white' : 'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="32" cy="26" r="8" />
    <circle cx="16" cy="36" r="6" opacity="0.6" />
    <circle cx="48" cy="36" r="6" opacity="0.6" />
    <path d="M20 50 Q24 44 32 44 Q40 44 44 50" />
    <path d="M8 56 Q10 50 16 48" opacity="0.6" />
    <path d="M56 56 Q54 50 48 48" opacity="0.6" />
  </svg>
);
const CommunicationIcon = ({ active }) => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke={active ? 'white' : 'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 14 H54 Q58 14 58 18 V38 Q58 42 54 42 H36 L28 52 L28 42 H10 Q6 42 6 38 V18 Q6 14 10 14Z" />
    <line x1="18" y1="26" x2="46" y2="26" /><line x1="18" y1="32" x2="38" y2="32" />
  </svg>
);

const VALUES = [
  {
    id: 'relationships',
    icon: (active) => <RelationshipsIcon active={active} />,
    label: 'Relationships',
    headline: 'People are the heart of our business.',
    body: 'We value deep, interpersonal relationships to enable collaboration and foster growth and development. We view every interaction as an opportunity to strengthen our relationships internally and externally.',
    color: '#2F80ED',
    num: '01',
    type: 'blue', // even → blue
  },
  {
    id: 'growth',
    icon: (active) => <GrowthIcon active={active} />,
    label: 'Personal & Professional Growth',
    headline: 'One of the greatest gifts is to help someone achieve their goals.',
    body: 'We have a duty to develop ourselves and an obligation to understand, grow and support those around us both at home and at work. We are thirsty for wisdom, eager for opportunity and accountable for improvement.',
    color: '#1E293B',
    num: '02',
    type: 'dark', // odd → dark grey
  },
  {
    id: 'serving',
    icon: (active) => <ServingIcon active={active} />,
    label: 'Serving Others',
    headline: 'We strive for excellence through serving others.',
    body: 'We delight in the opportunity to serve the needs of our customers, consultants and one another. We draw personal meaning from service at work and in the communities we serve.',
    color: '#2F80ED',
    num: '03',
    type: 'blue',
  },
  {
    id: 'performance',
    icon: (active) => <PerformanceIcon active={active} />,
    label: 'Performance',
    headline: 'Our role is to drive positive outcomes for people and our business.',
    body: 'We push to achieve extraordinary results in concert with our character and ethics, showing up with energy and passion to win together. We believe in the power of goals and the force of will, and we tackle challenges with grit and resilience.',
    color: '#1E293B',
    num: '04',
    type: 'dark',
  },
  {
    id: 'inclusion',
    icon: (active) => <InclusionIcon active={active} />,
    label: 'Inclusion',
    headline: 'We seek out and embrace diverse backgrounds and individual perspectives.',
    body: 'We believe that leveraging differences and fostering full participation of every employee positions us to achieve our goals and create opportunity for all. We practice unbiased empathy to ensure every person feels seen and heard.',
    color: '#2F80ED',
    num: '05',
    type: 'blue',
  },
  {
    id: 'communication',
    icon: (active) => <CommunicationIcon active={active} />,
    label: 'Open Communication',
    headline: 'Caring and respectful sharing of information is a responsibility of everyone.',
    body: 'We see honest feedback as fundamental to authentic relationships, knowing that context and coaching make us better. We err on the side of communicating more as opposed to less while staying true to our commitments and acting in harmony with our words.',
    color: '#1E293B',
    num: '06',
    type: 'dark',
  },
];

/* ══════════════════════════════════════════════ HERO ══════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — increased opacity */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.42 }}
        />
      </div>

      {/* Blue gradient overlay */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(30,58,110,0.80) 50%, rgba(47,128,237,0.68) 100%)' }} />

      {/* Subtle grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Animated glow orbs */}
      <motion.div aria-hidden
        animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-32 right-0 w-[700px] h-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(47,128,237,0.3) 0%, transparent 65%)' }} />
      <motion.div aria-hidden
        animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="pointer-events-none absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(30,93,184,0.28) 0%, transparent 65%)' }} />

      {/* Floating decorative rings */}
      {[100, 200, 320].map((size, i) => (
        <motion.div key={i} aria-hidden
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 28 + i * 10, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute right-[12%] top-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
          style={{ width: size, height: size }} />
      ))}

      {/* Content — CENTERED */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 py-32 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-8"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', color: '#93C5FD' }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
          Who We Are
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 56 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.04] tracking-tight text-white mb-7">
          Our Purpose{' '}
          <span style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 50%, #BFDBFE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            and Values
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.28 }}
          className="text-lg sm:text-xl leading-relaxed max-w-2xl mb-12"
          style={{ color: 'rgba(219,234,254,0.80)' }}>
          We're transformation partners fueled by our purpose—creating a new world of opportunity
          for our customers, consultants and each other.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.45 }}
          className="flex flex-wrap gap-4 justify-center">
          <a href="#values"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white transition-all duration-300"
            style={{ background: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.5)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1E5DB8'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#2F80ED'; }}>
            Explore Our Values
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
          <a href="#connect"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-all duration-300"
            style={{ border: '1.5px solid rgba(255,255,255,0.24)', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
            Let's Connect
          </a>
        </motion.div>

        {/* Bottom value pills */}
        <motion.div
          initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.65 }}
          className="mt-20 flex flex-wrap gap-3 justify-center">
          {VALUES.map((v, i) => (
            <motion.span key={v.id}
              initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease, delay: 0.7 + i * 0.07 }}
              className="rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(219,234,254,0.85)', backdropFilter: 'blur(8px)' }}>
              {v.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.35)' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-5 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════ INTRO TEXT ══════════════════════ */
function IntroSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce} transition={{ duration: 0.8, ease }}
          className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
            style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Our Foundation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Our deeply rooted values shape our culture,{' '}
            <span style={{ color: '#2F80ED' }}>our character</span> and our commitments.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-500">
            We live them in every interaction with each other and those we serve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════ SCROLL-FILL VALUE CARD ══════════════ */
function ValueCard({ v, i }) {
  const ref = useRef(null);
  const [filled, setFilled] = useState(false);

  const isBlue = v.type === 'blue';
  const fillColor = isBlue ? '#2F80ED' : '#1E293B';
  const accentColor = isBlue ? '#60A5FA' : '#94A3B8';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFilled(entry.isIntersecting && entry.intersectionRatio >= 0.45),
      { threshold: 0.45 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.65, ease, delay: i * 0.05 }}
      className="group relative w-full overflow-hidden"
      style={{
        borderTop: i === 0 ? '1px solid #E2E8F0' : 'none',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>

      {/* Animated fill background */}
      <motion.div
        animate={{
          scaleY: filled ? 1 : 0,
          opacity: filled ? 1 : 0,
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 origin-bottom"
        style={{ background: fillColor }}
      />

      {/* Shimmer overlay on fill */}
      {filled && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)', zIndex: 1 }}
        />
      )}

      {/* Decorative number watermark */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontSize: '9rem',
          fontWeight: 900,
          lineHeight: 1,
          opacity: filled ? 0.07 : 0.04,
          color: filled ? 'white' : fillColor,
          transition: 'all 0.5s ease',
          zIndex: 0,
          fontFamily: 'serif',
        }}>
        {v.num}
      </div>

      {/* Left accent bar */}
      <motion.div
        animate={{ scaleY: filled ? 1 : 0 }}
        transition={{ duration: 0.4, ease }}
        className="absolute left-0 top-0 bottom-0 w-1.5 origin-top"
        style={{ background: filled ? accentColor : fillColor, zIndex: 2 }}
      />

      {/* Inner content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr_2fr] lg:grid-cols-[110px_300px_1fr_180px] gap-6 lg:gap-10 items-center">

          {/* Number */}
          <div className="hidden sm:flex items-center">
            <span className="font-display text-5xl font-extrabold leading-none transition-all duration-500"
              style={{ color: filled ? 'rgba(255,255,255,0.25)' : '#E2E8F0' }}>
              {v.num}
            </span>
          </div>

          {/* Icon + Title */}
          <div className="flex items-center gap-5">
            <motion.div
              animate={{
                background: filled
                  ? 'rgba(255,255,255,0.12)'
                  : '#F1F5F9',
                borderColor: filled
                  ? 'rgba(255,255,255,0.2)'
                  : '#E2E8F0',
              }}
              transition={{ duration: 0.4 }}
              className="shrink-0 h-16 w-16 rounded-2xl flex items-center justify-center border-2"
              style={{ boxShadow: filled ? '0 4px 20px rgba(0,0,0,0.15)' : 'none' }}>
              <div className="h-9 w-9" style={{ color: filled ? 'white' : '#94A3B8' }}>
                {v.icon(filled)}
              </div>
            </motion.div>
            <div>
              <h3 className="font-display font-extrabold text-xl leading-snug transition-colors duration-300"
                style={{ color: filled ? 'white' : '#1E293B' }}>
                {v.label}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider mt-1 transition-colors duration-300"
                style={{ color: filled ? 'rgba(255,255,255,0.5)' : '#94A3B8' }}>
                Core Value
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-sm font-semibold leading-snug mb-2 transition-colors duration-300"
              style={{ color: filled ? 'rgba(255,255,255,0.95)' : '#374151' }}>
              {v.headline}
            </p>
            <p className="text-sm leading-relaxed transition-colors duration-300"
              style={{ color: filled ? 'rgba(255,255,255,0.65)' : '#6B7280' }}>
              {v.body}
            </p>
          </div>

          {/* CTA arrow */}
          <div className="hidden lg:flex items-center justify-end">
            <motion.div
              animate={{
                x: filled ? 0 : -12,
                opacity: filled ? 1 : 0,
                scale: filled ? 1 : 0.85,
              }}
              transition={{ duration: 0.35, ease }}
              className="h-13 w-13 h-12 w-12 rounded-full flex items-center justify-center"
              style={{
                background: filled ? 'rgba(255,255,255,0.2)' : 'transparent',
                border: '2px solid rgba(255,255,255,0.35)',
                backdropFilter: 'blur(4px)',
              }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <motion.div
        animate={{ scaleX: filled ? 1 : 0, opacity: filled ? 1 : 0 }}
        transition={{ duration: 0.5, ease }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
        style={{
          background: isBlue
            ? 'linear-gradient(90deg, #93C5FD 0%, rgba(147,197,253,0) 100%)'
            : 'linear-gradient(90deg, #64748B 0%, rgba(100,116,139,0) 100%)',
          zIndex: 2,
        }}
      />
    </motion.div>
  );
}

/* ══════════════════════════════════ VALUES ROWS ══════════════════════ */
function ValuesSection() {
  return (
    <section id="values" className="pb-8 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce} transition={{ duration: 0.7, ease }}
          className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">Core Values</span>
          <div className="h-px flex-1 bg-slate-200" />
        </motion.div>
      </div>

      <div className="flex flex-col">
        {VALUES.map((v, i) => (
          <ValueCard key={v.id} v={v} i={i} />
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════ CONNECT / CTA SECTION ══════════════════════ */
function ConnectSection() {
  const navigate = useNavigate();

  return (
    <section id="connect" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1800&q=80"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.12 }}
        />
      </div>

      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(248,250,252,0.97) 0%, rgba(234,243,255,0.95) 50%, rgba(239,246,255,0.97) 100%)' }} />

      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(47,128,237,0.07) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce} transition={{ duration: 0.85, ease }}
          className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-8"
            style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.22)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Get In Touch
          </span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
            Interested in speaking<br className="hidden sm:block" />
            <span style={{ color: '#2F80ED' }}> with Syntera Solutions?</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate-500 max-w-xl mx-auto mb-12">
            Whether you're a business looking for transformation partners or a consultant ready to grow,
            we'd love to connect with you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.04, boxShadow: '0 16px 48px rgba(47,128,237,0.5)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 18 }}
              className="inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-bold text-white tracking-wider uppercase"
              style={{ background: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.38)', border: 'none', cursor: 'pointer', letterSpacing: '0.1em' }}>
              Let's Connect
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </motion.button>

            <motion.a
              href="/employee-benefits"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-all duration-300"
              style={{ border: '1.5px solid #CBD5E1', color: '#475569', textDecoration: 'none', background: 'white' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2F80ED'; e.currentTarget.style.color = '#2F80ED'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#CBD5E1'; e.currentTarget.style.color = '#475569'; }}>
              Explore Benefits
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce} transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-16 flex flex-wrap justify-center gap-8">
            {[
              { icon: '🌍', label: '54+ Countries' },
              { icon: '👥', label: '10,000+ Consultants' },
              { icon: '⭐', label: '98% Satisfaction' },
              { icon: '🏆', label: '15+ Years of Excellence' },
            ].map(badge => (
              <div key={badge.label} className="flex items-center gap-2">
                <span className="text-xl">{badge.icon}</span>
                <span className="text-sm font-semibold text-slate-500">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════ PAGE ROOT ══════════════════════ */
export default function ValuesCulturePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <ValuesSection />
      <ConnectSection />
      <Footer />
    </div>
  );
}