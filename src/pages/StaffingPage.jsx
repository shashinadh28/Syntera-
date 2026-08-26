import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];

const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.10) 1.5px, transparent 1.5px)',
  backgroundSize: '26px 26px',
};

const ArrowRight = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

function CountUp({ to, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    if (!inView) return;
    const c = animate(count, to, { duration, ease: 'easeOut', onUpdate: v => setDisplay(Math.floor(v).toLocaleString()) });
    return c.stop;
  }, [inView, to, duration, count]);
  return <span ref={ref}>{display}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════════ HERO ═══ */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: '#0B1120' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.18 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,17,32,0.94) 0%, rgba(11,17,32,0.65) 40%, rgba(11,17,32,0.7) 70%, rgba(11,17,32,0.98) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(11,17,32,0.9) 0%, rgba(11,17,32,0.45) 50%, transparent 100%)' }} />
      </div>

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

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-7"
              style={{ border: '1px solid rgba(47,128,237,0.35)', background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              Eficens Services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.1 }}
              className="font-display font-extrabold leading-[1.06] tracking-tight text-white mb-6"
              style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4rem)' }}
            >
              Scale your team{' '}
              <span style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #BFDBFE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                without compromise.
              </span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.55 }}
              style={{ height: '1.5px', background: 'linear-gradient(90deg, rgba(47,128,237,0.7), transparent)', maxWidth: '340px', marginBottom: '1.6rem' }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.28 }}
              className="text-base sm:text-lg leading-[1.8] mb-6 max-w-lg"
              style={{ color: 'rgba(255,255,255,0.72)' }}
            >
              Senior engineering talent, pre-vetted and ready to embed in your team — contract, dedicated squads, or contract-to-hire across North America and global talent hubs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.35 }}
              className="text-sm leading-[1.7] mb-10 max-w-lg"
              style={{ color: 'rgba(255,255,255,0.52)' }}
            >
              Accelerate your roadmap with senior engineers who understand production codebases and scale requirements from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.42 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300"
                style={{ backgroundColor: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.42)', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}
              >
                Talk to our team
                <ArrowRight />
              </Link>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
                style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                Service Capabilities
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[28px] overflow-hidden" style={{ height: '500px', boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Engineering Staffing & Team Augmentation"
                className="w-full h-full object-cover object-center"
                style={{ opacity: 0.88 }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(11,17,32,0.75) 100%)' }} />
              
              <div className="absolute bottom-6 left-6 px-5 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-md" style={{ background: 'rgba(11,17,32,0.7)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <span className="h-2.5 w-2.5 rounded-full bg-[#2F80ED] animate-pulse" />
                <div>
                  <div className="text-white text-xs font-bold uppercase tracking-wider">Engineering Staffing</div>
                  <div className="text-[11px] text-slate-300">Staff Augmentation · Dedicated Teams · Contract-to-Hire</div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 right-6 rounded-2xl px-5 py-3.5"
                style={{ background: 'rgba(11,17,32,0.75)', border: '1px solid rgba(47,128,237,0.35)', backdropFilter: 'blur(12px)' }}
              >
                <div className="text-xl font-extrabold text-white leading-none">5-10 Days</div>
                <div className="text-[10px] mt-1 font-semibold uppercase tracking-wider" style={{ color: 'rgba(96,165,250,0.9)' }}>Candidate Placement</div>
              </motion.div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full -z-10" style={{ background: 'rgba(47,128,237,0.12)', filter: 'blur(32px)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════ WHAT WE DO SECTION ═══ */
function WhatWeDoSection() {
  return (
    <section className="py-12 sm:py-16 overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-4"
              style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              What we do
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Staffing &amp; Talent
            </h2>
            <div className="h-1 w-14 rounded-full mt-5" style={{ background: '#2F80ED' }} />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              Eficens&apos; Staffing practice connects technology leaders with senior software engineers, data architects, QA automation engineers, and DevOps specialists. We rigorously assess both technical depth and communication skills so candidates contribute meaningfully from their first week.
            </p>
            <p className="text-base leading-relaxed text-slate-500">
              Whether you need a single specialist to unblock a critical sprint or a complete cross-functional team to build a new product line, we handle sourcing, vetting, compliance, and onboarding with speed and transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════ CAPABILITIES SECTION ═══ */
const CAPABILITIES = [
  {
    num: '01',
    id: 'vetted',
    tag: 'Pre-Vetted Engineers',
    title: 'Pre-Vetted Engineers',
    desc: 'Every candidate completes a multi-stage technical assessment covering systems design, coding proficiency, and domain knowledge before they reach your team.',
    color: '#2F80ED',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '02',
    id: 'augmentation',
    tag: 'Staff Augmentation',
    title: 'Staff Augmentation',
    desc: 'Embed skilled engineers directly into your existing squads to accelerate delivery without the cost and lead-time of a full hire.',
    color: '#1E5DB8',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    id: 'teams',
    tag: 'Dedicated Teams',
    title: 'Dedicated Teams',
    desc: 'We assemble complete cross-functional teams — frontend, backend, QA, DevOps — aligned to your product roadmap and working under your direction.',
    color: '#0EA5E9',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    num: '04',
    id: 'hire',
    tag: 'Contract-to-Hire',
    title: 'Contract-to-Hire',
    desc: 'Trial professionals on real work before committing to a permanent offer, reducing hiring risk and onboarding time.',
    color: '#6366F1',
    img: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '05',
    id: 'compliance',
    tag: 'Compliance & Payroll',
    title: 'Compliance & Payroll',
    desc: 'We manage employment contracts, tax compliance, and benefits administration across multiple geographies, keeping your legal exposure minimal.',
    color: '#0284C7',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    num: '06',
    id: 'rapid',
    tag: 'Rapid Deployment',
    title: 'Rapid Deployment',
    desc: 'Our talent pipeline means qualified candidates are typically available within 5–10 business days, not months.',
    color: '#3B82F6',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

function CapabilitiesSection() {
  const [active, setActive] = useState(0);
  const cap = CAPABILITIES[active];

  return (
    <section id="capabilities" className="py-14 sm:py-32 overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
            style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Service Capabilities
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">
            What We Deliver
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="flex flex-wrap gap-2.5 mb-10">
          {CAPABILITIES.map((s, i) => (
            <button key={s.id} onClick={() => setActive(i)}
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer"
              style={active === i
                ? { background: s.color, color: '#fff', boxShadow: `0 6px 24px ${s.color}44` }
                : { background: '#F1F5F9', color: '#64748B', border: '1px solid #E2E8F0' }}>
              <span style={{ color: active === i ? '#fff' : s.color }}>{s.icon}</span>
              {s.tag}
            </button>
          ))}
        </motion.div>

        {/* Active Tab Featured Card */}
        <AnimatePresence mode="wait">
          <motion.div key={cap.id}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-3xl overflow-hidden mb-12"
            style={{ border: '1px solid #E2E8F0', boxShadow: '0 4px 40px rgba(15,23,42,0.07)' }}>
            
            <div className="p-10 sm:p-14 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${cap.color}15`, color: cap.color, border: `1px solid ${cap.color}25` }}>
                    {cap.icon}
                  </div>
                  <span className="text-3xl font-extrabold font-mono text-slate-300">
                    {cap.num}
                  </span>
                </div>
                <div className="h-1 w-12 rounded-full mb-7" style={{ background: cap.color }} />
                <h3 className="font-display text-3xl font-extrabold text-slate-900 mb-5">{cap.title}</h3>
                <p className="text-base leading-relaxed text-slate-500">{cap.desc}</p>
              </div>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300"
                  style={{ background: cap.color, boxShadow: `0 6px 24px ${cap.color}44`, textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                >
                  Request Talent Profiles <ArrowRight />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden min-h-[300px] lg:min-h-0">
              <img src={cap.img} alt={cap.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${cap.color}25 0%, transparent 60%)` }} />
              <div className="absolute top-6 right-6 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
                style={{ background: cap.color, boxShadow: `0 4px 16px ${cap.color}55` }}>
                {cap.tag}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: `0 16px 40px ${c.color}15`, borderColor: c.color }}
              onClick={() => setActive(i)}
              className="rounded-3xl bg-white overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(15,23,42,0.04)' }}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(15,23,42,0.65) 100%)' }} />
                <div className="absolute top-4 left-4 h-10 w-10 rounded-xl flex items-center justify-center backdrop-blur-md"
                  style={{ background: 'rgba(255,255,255,0.92)', color: c.color, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                  {c.icon}
                </div>
                <span className="absolute top-4 right-4 font-mono text-xs font-bold text-white px-3 py-1 rounded-full backdrop-blur-md"
                  style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  {c.num}
                </span>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-display font-extrabold text-lg text-slate-900 mb-2">{c.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════ CASE STUDIES SECTION ═══ */
const CASE_STUDIES = [
  {
    industry: 'Enterprise SaaS',
    color: '#2F80ED',
    statNumber: '6 Engineers',
    statLabel: 'Embedded in 7 days to clear platform backlog',
    challenge:
      'A Series B SaaS company signed 3 enterprise deals that required custom security features — but their internal team was fully allocated to core product development.',
    whatWeDid:
      'Eficens deployed 6 pre-vetted senior backend and DevOps engineers within 7 business days. The custom security features were delivered on schedule without delaying the main roadmap.',
  },
  {
    industry: 'FinTech',
    color: '#1E5DB8',
    statNumber: '100%',
    statLabel: 'Retention across 12-month contract period',
    challenge:
      'A fintech scaling up its mobile app experienced 40% attrition in their contractor team due to poor screening and culture fit from traditional staffing agencies.',
    whatWeDid:
      'Eficens provided a dedicated squad of 5 React Native engineers evaluated for both technical proficiency and team fit. All 5 completed their 12-month contract, and 3 converted to full-time hires.',
  },
  {
    industry: 'HealthTech',
    color: '#0EA5E9',
    statNumber: '3 Weeks',
    statLabel: 'HIPAA compliance audit readiness achieved',
    challenge:
      'A digital health startup needed HIPAA-certified DevOps engineers to harden their cloud infrastructure before a crucial partner audit in less than a month.',
    whatWeDid:
      'Eficens deployed 2 senior Cloud & Security engineers with healthcare experience. They remediated 34 infrastructure gaps, enabling the startup to pass the HIPAA audit with zero non-conformances.',
  },
];

function CaseStudiesSection() {
  return (
    <section className="py-14 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
            style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Proven in the Field
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-4">
            Real outcomes, real clients.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-500">
            Every engagement is different. Here&apos;s how we&apos;ve delivered for clients across industries with problems like yours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((c, i) => (
            <motion.div
              key={c.industry}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, ease, delay: i * 0.12 }}
              whileHover={{ y: -8, boxShadow: `0 20px 48px ${c.color}15` }}
              className="bg-white rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(15,23,42,0.04)' }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full"
                    style={{ background: `${c.color}12`, color: c.color, border: `1px solid ${c.color}25` }}>
                    {c.industry}
                  </span>
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      The challenge
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: c.color }}>
                      What we did
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {c.whatWeDid}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-display text-3xl font-extrabold text-slate-900">
                    {c.statNumber}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {c.statLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════ BY THE NUMBERS ═══ */
const METRICS = [
  { custom: '5–10 Days', label: 'Average candidate placement speed', color: '#2F80ED' },
  { value: 96, suffix: '%', label: 'Assessment pass-rate accuracy', color: '#1E5DB8' },
  { value: 500, suffix: '+', label: 'Senior engineers in talent network', color: '#0EA5E9' },
  { value: 92, suffix: '%', label: 'Contractor-to-perm conversion rate', color: '#0B1A2E' },
];

function NumbersSection() {
  return (
    <section className="py-14 sm:py-32 overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.7, ease }} className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-4"
            style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Talent Standards
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            By the Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="p-8 rounded-3xl flex flex-col justify-between text-center"
              style={{
                background: i === 3 ? '#0B1A2E' : '#F8FAFC',
                border: i === 3 ? 'none' : '1px solid #E2E8F0',
                boxShadow: '0 4px 20px rgba(15,23,42,0.04)',
              }}
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3" style={{ color: i === 3 ? '#60A5FA' : m.color }}>
                {m.custom ? m.custom : <CountUp to={m.value} suffix={m.suffix} />}
              </div>
              <div className="text-xs sm:text-sm font-semibold" style={{ color: i === 3 ? 'rgba(255,255,255,0.7)' : '#64748B' }}>
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════ TECH STACK SECTION ═══ */
const TECH_STACK = [
  'Full-Stack Engineers', 'Frontend (React/Vue/Angular)', 'Backend (Node/Python/Java)',
  'Data Engineers', 'DevOps & SRE', 'Cloud Architects', 'QA Automation', 'Mobile (iOS/Android/RN)',
  'Cybersecurity', 'AI / ML Engineers', 'Solution Architects', 'Scrum Masters'
];

function TechStackSection() {
  return (
    <section className="py-14 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.9, ease }}>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Talent Profiles
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
              Specialist Engineering Talent Pool
            </h2>
            <p className="text-base leading-relaxed text-slate-500 mb-6">
              We match senior talent across full-stack development, cloud infrastructure, AI engineering, cybersecurity, and data architecture.
            </p>
            <p className="text-base leading-relaxed text-slate-500 mb-8">
              Every candidate is vetted for technical execution, communication skills, and real-world system design capability.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200"
              style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}
            >
              Request Specific Role Profiles <ArrowRight size={12} />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(47,128,237,0.15)', borderColor: '#2F80ED' }}
                className="bg-white rounded-2xl p-6 flex items-center justify-center text-center transition-all duration-300"
                style={{ border: '1px solid #E2E8F0', minHeight: '90px' }}
              >
                <span className="font-display font-extrabold text-sm sm:text-base text-slate-800">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════ RESOURCES SECTION ═══ */
const RESOURCES = [
  {
    cat: 'Team Scaling',
    type: 'Blog',
    date: 'Staffing Strategy',
    title: 'Staff Augmentation vs. Agency Hire vs. FTE: The Total Cost Model for Engineering Leaders',
    body: 'Headcount cost isn’t just salary. When you factor in recruitment fees, onboarding delay, overhead, and severance risk, the total cost model changes dramatically.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
    color: '#2F80ED',
    link: 'https://www.eficens.ai/resources/staffing-augmentation-vs-fte-cost-model',
  },
  {
    cat: 'Talent Vetting',
    type: 'Blog',
    date: 'Technical Assessment',
    title: 'How We Vet Engineers: The 4-Stage Assessment Matrix That Filters Out 94% of Applicants',
    body: 'Resume screening and LeetCode questions miss real-world execution ability. Here’s the 4-stage practical assessment matrix we use to evaluate senior engineers.',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=700&q=80',
    color: '#1E5DB8',
    link: 'https://www.eficens.ai/resources/staffing-4-stage-assessment-matrix',
  },
  {
    cat: 'Team Culture',
    type: 'Blog',
    date: 'Remote Engineering',
    title: 'Integrating Embedded Engineers: 5 Practices for Day-One Productivity and Squad Alignment',
    body: 'Contract engineers succeed or fail based on onboarding clarity. Here are 5 lightweight practices that get augmented engineers making pull requests on Day 2.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80',
    color: '#0EA5E9',
    link: 'https://www.eficens.ai/resources/staffing-integrating-embedded-engineers',
  },
];

function ResourcesSection() {
  return (
    <section className="py-14 sm:py-32 overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Resources
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">
              Further Reading
            </h2>
          </div>
          <a href="https://www.eficens.ai/resources" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200 whitespace-nowrap"
            style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}>
            View all resources <ArrowRight size={12} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {RESOURCES.map((res, i) => (
            <motion.a
              key={res.title}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.75, ease, delay: i * 0.12 }}
              whileHover={{ y: -8, boxShadow: `0 20px 48px ${res.color}18` }}
              className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-400 block no-underline"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 16px rgba(15,23,42,0.05)', textDecoration: 'none' }}
            >
              <div className="relative h-52 overflow-hidden">
                <img src={res.img} alt={res.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 40%, ${res.color}BB 100%)` }} />
                <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ background: res.color }}>
                  {res.type}
                </span>
              </div>
              <div className="p-7 bg-white">
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: res.color }}>{res.cat}</p>
                <p className="text-xs text-slate-400 mb-4">{res.date}</p>
                <div className="h-[2px] w-8 rounded-full mb-5 transition-all duration-300 group-hover:w-14" style={{ background: res.color }} />
                <h3 className="font-display font-extrabold text-lg text-slate-800 leading-snug mb-3 group-hover:text-slate-900 transition-colors">
                  {res.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 mb-5">{res.body}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider" style={{ color: res.color }}>
                  Read Article <ArrowRight size={11} color={res.color} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════ FINAL CTA ═══ */
function FinalCTASection() {
  return (
    <section className="relative py-14 sm:py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1120 0%, #0F1F45 50%, #1E3A6E 100%)' }}>
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
      <motion.div aria-hidden animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.14, 0.06] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-[-60px] right-[-80px] w-[500px] h-[400px] rounded-full" style={{ background: 'rgba(47,128,237,0.18)', filter: 'blur(80px)' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease }}>
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(47,128,237,0.15)', color: '#93C5FD', border: '1px solid rgba(47,128,237,0.35)' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
            Get Started
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.06] tracking-tight mb-6"
            style={{ background: 'linear-gradient(135deg, #ffffff 0%, #BFDBFE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Ready to get started?
          </h2>
          <p className="text-base sm:text-lg leading-[1.8] mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Let&apos;s talk about how our Staffing practice can help your team move faster.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-bold text-white transition-all duration-300"
              style={{ background: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.45)', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1E5DB8'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2F80ED'; }}
            >
              Talk to our team <ArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function StaffingPage() {
  useEffect(() => {
    document.title = 'Scale your team without compromise | Staffing | Eficens Services';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <CapabilitiesSection />
      <CaseStudiesSection />
      <NumbersSection />
      <TechStackSection />
      <ResourcesSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
