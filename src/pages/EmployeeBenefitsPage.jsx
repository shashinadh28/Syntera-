import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useEffect } from 'react';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(47,128,237,0.07) 1.5px, transparent 1.5px)',
  backgroundSize: '28px 28px',
};

/* ─── Animated counter ─── */
function CountUp({ to, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.floor(v).toLocaleString()),
    });
    return controls.stop;
  }, [inView, to, duration, count]);

  return <span ref={ref}>{display}{suffix}</span>;
}

/* ────────────────────────────────────────────────────── HERO ─── */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: '#0B1120' }}
    >
      {/* ── Background grid ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Full-bleed background image — faded into dark ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/employee-benefits/Employee-Benefits-homepage.webp"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.22 }}
        />
        {/* Dark gradient — stronger at top/bottom, lets the image breathe in the middle */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.55) 40%, rgba(11,17,32,0.65) 70%, rgba(11,17,32,0.97) 100%)',
          }}
        />
        {/* Left-side vignette so content stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(11,17,32,0.85) 0%, rgba(11,17,32,0.4) 50%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Glow orbs ── */}
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-[-80px] right-[-60px] w-[700px] h-[600px] rounded-full blur-[130px]"
        style={{ background: 'rgba(47,128,237,0.15)', zIndex: 1 }}
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.13, 0.06] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="pointer-events-none absolute bottom-0 left-[-80px] w-[500px] h-[400px] rounded-full blur-[110px]"
        style={{ background: 'rgba(99,102,241,0.12)', zIndex: 1 }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Text content */}
          <div>
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-7"
              style={{
                border: '1px solid rgba(47,128,237,0.35)',
                background: 'rgba(47,128,237,0.1)',
                color: '#2F80ED',
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              Benefits & Wellbeing
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.1 }}
              className="font-display font-extrabold leading-[1.06] tracking-tight text-white mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Employee{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #BFDBFE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Benefits
              </span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.55 }}
              style={{
                height: '1.5px',
                background: 'linear-gradient(90deg, rgba(47,128,237,0.7), transparent)',
                maxWidth: '340px',
                marginBottom: '1.6rem',
              }}
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.28 }}
              className="text-base sm:text-lg leading-[1.8] mb-10 max-w-lg"
              style={{ color: 'rgba(255,255,255,0.68)' }}
            >
              We invest in every Syntera Techr with our employee benefits package, crafted to support financial wellbeing, physical wellbeing, mental health, and work-life balance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.42 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#benefits"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300"
                style={{
                  backgroundColor: '#2F80ED',
                  boxShadow: '0 8px 32px rgba(47,128,237,0.42)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}
              >
                Explore Benefits
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#stats"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.22)',
                  color: 'rgba(255,255,255,0.82)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                Our Global Reach
              </a>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.62 }}
              className="mt-14 flex flex-wrap gap-8"
            >
              {[
                { val: '1000+', label: 'Total Benefits' },
                { val: '54', label: 'Countries Covered' },
                { val: '98%', label: 'Satisfaction' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-extrabold font-display text-white leading-none">{s.val}</div>
                  <div className="text-[11px] mt-1 font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.42)' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Framed image card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main image frame */}
            <div
              className="relative rounded-[28px] overflow-hidden"
              style={{
                height: '520px',
                boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)',
              }}
            >
              <img
                src="/employee-benefits/Employee-Benefits-homepage.webp"
                alt="Employee Benefits"
                className="w-full h-full object-cover object-center"
                style={{ opacity: 0.88 }}
              />
              {/* Subtle inner overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 50%, rgba(11,17,32,0.7) 100%)',
                }}
              />

              {/* Glass info tag — bottom left */}
              <div
                className="absolute bottom-5 left-5 px-4 py-2.5 rounded-xl flex items-center gap-2.5 backdrop-blur-md"
                style={{
                  background: 'rgba(11,17,32,0.65)',
                  border: '1px solid rgba(255,255,255,0.14)',
                }}
              >
                <span className="h-2 w-2 rounded-full bg-[#2F80ED] animate-pulse" />
                <span className="text-white text-[11px] font-bold uppercase tracking-wider">
                  Employee Wellness
                </span>
              </div>

              {/* Floating stat chip — top right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-5 right-5 rounded-2xl px-4 py-3"
                style={{
                  background: 'rgba(11,17,32,0.7)',
                  border: '1px solid rgba(47,128,237,0.35)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="text-lg font-extrabold text-white leading-none">24/7</div>
                <div className="text-[10px] mt-0.5 font-semibold uppercase tracking-wider" style={{ color: 'rgba(96,165,250,0.85)' }}>
                  Support Access
                </div>
              </motion.div>
            </div>

            {/* Decorative ring behind image */}
            <div
              className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full -z-10"
              style={{ background: 'rgba(47,128,237,0.12)', filter: 'blur(32px)' }}
            />
            <div
              className="absolute -top-6 -left-6 w-32 h-32 rounded-full -z-10"
              style={{ background: 'rgba(99,102,241,0.1)', filter: 'blur(24px)' }}
            />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.28)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-5 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ──────────────────────── WELLBEING INTRO SECTION ──────────────────────── */
function WellbeingSection() {
  const pillars = [
    { icon: <HeartIcon />, label: 'Physical Wellbeing', color: '#3B82F6' },
    { icon: <BrainIcon />, label: 'Mental Health', color: '#8B5CF6' },
    { icon: <StarIcon />, label: 'Social Connection', color: '#0EA5E9' },
    { icon: <CoinIcon />, label: 'Financial Health', color: '#2F80ED' },
    { icon: <HomeIcon />, label: 'Work-Life Balance', color: '#60A5FA' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease }}>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Our Philosophy
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
              Your health and wellbeing become{' '}
              <span style={{ color: '#2F80ED' }}>our priority</span> when you join.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-500 mb-6">
              We know you'll thrive if you're physically and mentally well, socially motivated,
              in good financial health, and feel connected to your workplace.
            </p>
            <p className="text-base leading-relaxed text-slate-500 mb-10">
              We're proud of our reputation for providing competitive compensation and benefits
              packages that are personalized, fair, and inclusive. You may define your work
              environment and patterns to suit personal, client or business needs, reduce your
              working hours and have flexibility in where you work.
            </p>
            <a href="#benefits"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200"
              style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}>
              See All Benefits
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </motion.div>

          {/* Right: Pillar cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="grid grid-cols-1 gap-4">
            {pillars.map((p, i) => (
              <motion.div key={p.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.65, ease, delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="group flex items-center gap-5 rounded-2xl p-5 cursor-default transition-all duration-300"
                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#EAF3FF'; e.currentTarget.style.borderColor = 'rgba(47,128,237,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.borderColor = '#E2E8F0'; }}>
                <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-xl transition-all duration-300"
                  style={{ background: `${p.color}15`, color: p.color }}>
                  {p.icon}
                </div>
                <span className="font-display font-bold text-lg text-slate-800 group-hover:text-[#2F80ED] transition-colors duration-200">
                  {p.label}
                </span>
                <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#2F80ED]"
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── OUR BENEFITS (ICONS GRID) ────────────────────── */
function BenefitsGridSection() {
  const benefits = [
    {
      img: '/employee-benefits/Medical-Dental -Vision-Insurance.webp',
      title: 'Medical, Dental & Vision Insurance',
      desc: 'Comprehensive health coverage for you and your dependents, including dental and vision care.',
      color: '#3B82F6',
    },
    {
      img: '/employee-benefits/Mental-Health-Wellbeing-Resources.webp',
      title: 'Mental Health & Wellbeing Resources',
      desc: 'Access to counseling, therapy platforms, mindfulness tools and mental wellness programs.',
      color: '#8B5CF6',
    },
    {
      img: '/employee-benefits/Annual-Fitness-Reimbursement.webp',
      title: 'Annual Fitness Reimbursement',
      desc: 'Yearly allowance to cover gym memberships, fitness apps, sports equipment or classes.',
      color: '#0EA5E9',
    },
    {
      img: '/employee-benefits/Disability-Insurance.webp',
      title: 'Life & Disability Insurance',
      desc: 'Robust life insurance and short/long-term disability coverage to protect your financial future.',
      color: '#2F80ED',
    },
    {
      img: '/employee-benefits/Medical-Second-Opinions.webp',
      title: 'Medical Second Opinions',
      desc: 'Access to world-class specialists for second medical opinions whenever you need them.',
      color: '#60A5FA',
    },
    {
      img: '/employee-benefits/Retirement-Savings-Plans.webp',
      title: 'Retirement & Savings Plans',
      desc: 'Competitive retirement plans with employer matching to help you build long-term financial security.',
      color: '#1E5DB8',
    },
  ];

  return (
    <section id="benefits" className="py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: '#F8FAFC', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
            style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Comprehensive Coverage
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-4">
            Our Benefits
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-500 max-w-2xl">
            Syntera Tech is committed to providing one of the most comprehensive benefit packages available,
            designed to help you and your family stay physically and emotionally well while supporting your financial health.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: i * 0.09 }}
              whileHover={{ y: -6, boxShadow: `0 20px 48px ${b.color}20` }}
              className="group bg-white rounded-3xl p-8 flex flex-col cursor-default transition-all duration-350"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}>
              {/* Image banner */}
              <div className="w-full h-48 mb-6 overflow-hidden rounded-2xl relative shadow-sm border border-slate-100">
                <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              {/* Accent line */}
              <div className="h-[3px] w-10 rounded-full mb-5 transition-all duration-300 group-hover:w-16"
                style={{ background: b.color }} />
              <h3 className="font-display font-extrabold text-xl text-slate-800 leading-snug mb-3 group-hover:text-slate-900 transition-colors">
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 flex-1">
                {b.desc}
              </p>
              <div className="mt-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: b.color }}>Learn More</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── STATS BANNER SECTION ───────────────────────── */
function StatsBannerSection() {
  return (
    <section id="stats" className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A6E 50%, #2F80ED 100%)' }}>

      {/* Grid bg */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      {/* Animated geometric fan — brand blue palette */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
        {[...Array(9)].map((_, i) => (
          <motion.div key={i}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.2, ease, delay: 0.05 * i }}
            className="absolute left-0 top-0 h-full origin-left"
            style={{
              width: '100%',
              background: `linear-gradient(${90 + i * 12}deg, ${
                ['rgba(47,128,237,0.5)', 'rgba(30,93,184,0.45)', 'rgba(96,165,250,0.4)',
                 'rgba(15,23,42,0.5)', 'rgba(47,128,237,0.35)', 'rgba(30,93,184,0.3)',
                 'rgba(147,197,253,0.25)', 'rgba(96,165,250,0.3)', 'rgba(47,128,237,0.2)'][i]
              } 0%, transparent 70%)`,
              transform: `rotate(${-25 + i * 5}deg) translateY(-20%)`,
              transformOrigin: 'left center',
            }} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease }}
              className="font-display text-5xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
              We offer over{' '}
              <span style={{ color: '#60A5FA' }}>1,000 benefits</span>{' '}
              across{' '}
              <span style={{ color: '#93C5FD' }}>54 countries.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="text-lg leading-relaxed mb-10"
              style={{ color: 'rgba(234,243,255,0.75)' }}>
              This way, everyone can be the best version of themselves —
              no matter where in the world they work.
            </motion.p>
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-slate-900 transition-all duration-300"
              style={{ background: '#60A5FA', boxShadow: '0 8px 32px rgba(96,165,250,0.4)', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#93C5FD'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#60A5FA'; }}>
              Explore Our Locations
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </motion.a>
          </div>

          {/* Right: floating stat boxes */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="grid grid-cols-2 gap-5">
            {[
              { num: 1000, suffix: '+', label: 'Benefits Offered', icon: <StarIcon /> },
              { num: 54, suffix: '', label: 'Countries', icon: <GlobeIcon /> },
              { num: 98, suffix: '%', label: 'Satisfaction Rate', icon: <HeartIcon /> },
              { num: 15, suffix: '+', label: 'Years of Excellence', icon: <TrophyIcon /> },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(16px)' }}>
                <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(96,165,250,0.15)', color: '#60A5FA' }}>
                  {s.icon}
                </div>
                <div className="font-display text-3xl font-extrabold text-white">
                  <CountUp to={s.num} suffix={s.suffix} duration={2} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(234,243,255,0.55)' }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── PERKS HIGHLIGHTS SECTION ──────────────────────── */
function PerksSection() {
  const perks = [
    {
      tag: 'Flexibility',
      title: 'Work On Your Terms',
      desc: 'Hybrid work, flexible hours, and reduced schedules so you can balance personal life with professional excellence.',
      img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80',
      color: '#2F80ED',
    },
    {
      tag: 'Growth',
      title: 'Continuous Learning',
      desc: 'Access world-class learning programs, mentorship, and career development tools to accelerate your growth.',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80',
      color: '#1E5DB8',
    },
    {
      tag: 'Family',
      title: 'Family-First Support',
      desc: 'Parental leave, childcare assistance, adoption support, and family health coverage for the people who matter most.',
      img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80',
      color: '#0EA5E9',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Beyond the Basics
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">
              Perks That Make a Difference
            </h2>
          </div>
          <p className="text-base leading-relaxed text-slate-500 max-w-sm">
            We go above and beyond standard benefits to create an environment where you can truly thrive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {perks.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.75, ease, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden cursor-default transition-all duration-400"
              style={{ boxShadow: '0 4px 24px rgba(15,23,42,0.08)', border: '1px solid #E2E8F0' }}>
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img src={p.img} alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" />
                <div className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to bottom, transparent 30%, ${p.color}CC 100%)` }} />
                {/* Tag */}
                <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  {p.tag}
                </span>
              </div>
              {/* Content */}
              <div className="p-7 bg-white">
                <div className="h-[3px] w-8 rounded-full mb-5 transition-all duration-300 group-hover:w-14"
                  style={{ background: p.color }} />
                <h3 className="font-display font-extrabold text-xl text-slate-800 mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── DISCOVER MORE SECTION ────────────────────────── */
function DiscoverMoreSection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: '#F8FAFC', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
            Discover More
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1 — Wide dark card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            whileHover={{ y: -5, boxShadow: '0 20px 48px rgba(11,26,46,0.4)' }}
            className="lg:col-span-6 group relative rounded-[28px] overflow-hidden flex flex-col justify-between p-8 sm:p-10 cursor-pointer transition-all duration-300 min-h-[280px]"
            style={{ backgroundColor: '#0B1A2E', border: '1px solid rgba(255,255,255,0.06)' }}>
            {/* BG geometric */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-25 flex flex-col justify-center items-end pr-6">
              <svg width="100%" height="80%" viewBox="0 0 100 100" fill="none">
                <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#2F80ED" opacity="0.7"/>
                <path d="M70 10L110 50L70 90" stroke="#60A5FA" strokeWidth="6" opacity="0.5"/>
                <circle cx="80" cy="50" r="20" stroke="#3B82F6" strokeWidth="3" opacity="0.4"/>
              </svg>
            </div>
            <div>
              <span className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-5"
                style={{ background: 'rgba(47,128,237,0.2)', color: '#60A5FA', border: '1px solid rgba(96,165,250,0.3)' }}>
                Careers
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Find a Job at Syntera Tech
              </h3>
              <p className="text-sm leading-relaxed mt-4 max-w-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Discover opportunities that match your ambitions. At Syntera Tech, you'll work with
                exceptional people, solve meaningful challenges, and grow your career across
                our global offices and disciplines.
              </p>
            </div>
            <div className="mt-8 self-start">
              <div className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 group-hover:scale-105"
                style={{ backgroundColor: '#2F80ED' }}>
                View Jobs
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease, delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(47,128,237,0.15)' }}
            className="lg:col-span-3 group rounded-[28px] p-8 flex flex-col justify-between cursor-pointer border border-[#2F80ED]/10 transition-all duration-300 min-h-[280px]"
            style={{ backgroundColor: '#EAF3FF' }}>
            <div>
              <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(47,128,237,0.12)', color: '#2F80ED' }}>
                <SimIcon />
              </div>
              <h3 className="font-display text-2xl font-extrabold leading-tight" style={{ color: '#1E293B' }}>
                Virtual Job Simulations
              </h3>
              <p className="text-sm leading-relaxed mt-4" style={{ color: '#475569' }}>
                Step into our job simulations and get a feel for the roles, challenges, and impact of our teams.
              </p>
            </div>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider pb-0.5 transition-all duration-200"
                style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}>
                Virtual Experience
              </a>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(47,128,237,0.15)' }}
            className="lg:col-span-3 group rounded-[28px] p-8 flex flex-col justify-between cursor-pointer border border-[#2F80ED]/10 transition-all duration-300 min-h-[280px]"
            style={{ backgroundColor: '#EAF3FF' }}>
            <div>
              <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(47,128,237,0.12)', color: '#2F80ED' }}>
                <FaqIcon />
              </div>
              <h3 className="font-display text-2xl font-extrabold leading-tight" style={{ color: '#1E293B' }}>
                Have Questions?
              </h3>
              <p className="text-sm leading-relaxed mt-4" style={{ color: '#475569' }}>
                Find answers to common questions about benefits, the application process,
                undergraduate programs, profile expectations, and more.
              </p>
            </div>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider pb-0.5 transition-all duration-200"
                style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}>
                Explore FAQs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── PAGE ROOT ──────────────── */
export default function EmployeeBenefitsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WellbeingSection />
      <BenefitsGridSection />
      <StatsBannerSection />
      <PerksSection />
      <DiscoverMoreSection />
      <Footer />
    </div>
  );
}

/* ─────────────────────── SVG ICONS ─────────────────────── */
function HeartIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      <polyline points="6 12 10 16 18 8" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
function BrainIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3C6.8 3 5 4.8 5 7c0 .9.3 1.7.8 2.4C4.7 10 4 11 4 12.2 4 14.3 5.7 16 7.8 16H9"/>
      <path d="M15 3c2.2 0 4 1.8 4 4 0 .9-.3 1.7-.8 2.4 1.1.6 1.8 1.6 1.8 2.8 0 2.1-1.7 3.8-3.8 3.8H15"/>
      <path d="M9 16v5M15 16v5M9 11h6"/>
    </svg>
  );
}
function StarIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
function CoinIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <path d="M9 12h6"/>
      <line x1="12" y1="12" x2="12" y2="16"/>
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}
function MedicalIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  );
}
function MindIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  );
}
function FitnessIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/>
      <path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/>
    </svg>
  );
}
function InsuranceIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      <polyline points="6.5 12 10 15.5 17.5 8" strokeWidth="2"/>
    </svg>
  );
}
function RxIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M8 8h4a2 2 0 1 1 0 4H8v4"/><line x1="14" y1="12" x2="18" y2="16"/>
    </svg>
  );
}
function RetirementIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}
function TrophyIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 21 12 17 16 21"/>
      <line x1="12" y1="17" x2="12" y2="11"/>
      <path d="M7 4H17a2 2 0 0 1 2 2v2a7 7 0 0 1-7 7 7 7 0 0 1-7-7V6a2 2 0 0 1 2-2z"/>
      <path d="M5 8H3a2 2 0 0 0-2 2 4 4 0 0 0 4 4"/><path d="M19 8h2a2 2 0 0 1 2 2 4 4 0 0 1-4 4"/>
    </svg>
  );
}
function SimIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  );
}
function FaqIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  );
}
