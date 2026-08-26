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
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=80"
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
              Infrastructure you{' '}
              <span style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #BFDBFE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                never have to think about.
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
              Fully managed application and infrastructure hosting — we provision, secure, monitor, and maintain your environments so your team can focus entirely on building.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.35 }}
              className="text-sm leading-[1.7] mb-10 max-w-lg"
              style={{ color: 'rgba(255,255,255,0.52)' }}
            >
              Built on enterprise-grade cloud foundations with multi-region availability, automated failovers, and 24/7 on-call engineering response.
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
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80"
                alt="Cloud Infrastructure & Hosting"
                className="w-full h-full object-cover object-center"
                style={{ opacity: 0.88 }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(11,17,32,0.75) 100%)' }} />
              
              <div className="absolute bottom-6 left-6 px-5 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-md" style={{ background: 'rgba(11,17,32,0.7)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <span className="h-2.5 w-2.5 rounded-full bg-[#2F80ED] animate-pulse" />
                <div>
                  <div className="text-white text-xs font-bold uppercase tracking-wider">Multi-Region Cloud Hosting</div>
                  <div className="text-[11px] text-slate-300">AWS · Azure · GCP Production Deployments</div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 right-6 rounded-2xl px-5 py-3.5"
                style={{ background: 'rgba(11,17,32,0.75)', border: '1px solid rgba(47,128,237,0.35)', backdropFilter: 'blur(12px)' }}
              >
                <div className="text-xl font-extrabold text-white leading-none">99.99%</div>
                <div className="text-[10px] mt-1 font-semibold uppercase tracking-wider" style={{ color: 'rgba(96,165,250,0.9)' }}>Uptime SLA</div>
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
              Hosting
            </h2>
            <div className="h-1 w-14 rounded-full mt-5" style={{ background: '#2F80ED' }} />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              Eficens&apos; managed hosting service takes the operational burden of running production infrastructure off your team&apos;s plate. From initial provisioning and security hardening through 24/7 monitoring, patching, and incident response, we handle every layer of the stack.
            </p>
            <p className="text-base leading-relaxed text-slate-500">
              Our hosting environments are built on enterprise-grade cloud infrastructure with multi-region availability, automated backups, and SLA-backed uptime guarantees. Whether you&apos;re hosting a startup MVP or a high-traffic enterprise application, we build the environment to match your requirements and grow with your load.
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
    id: 'cloud',
    tag: 'Cloud Hosting',
    title: 'Managed Cloud Hosting',
    desc: 'Fully managed environments on AWS, Azure, or GCP — provisioned with security best practices, cost controls, and auto-scaling baked in.',
    color: '#2F80ED',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    num: '02',
    id: 'monitoring',
    tag: '24/7 Monitoring',
    title: '24/7 Monitoring & Alerting',
    desc: 'Round-the-clock infrastructure monitoring with proactive alerting and on-call response before issues affect your users.',
    color: '#1E5DB8',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: '03',
    id: 'security',
    tag: 'Security & Compliance',
    title: 'Security & Compliance',
    desc: 'Regular vulnerability scanning, patch management, WAF configuration, and compliance controls aligned to SOC 2, ISO 27001, and GDPR.',
    color: '#0EA5E9',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: '04',
    id: 'backups',
    tag: 'Backups & DR',
    title: 'Automated Backups & DR',
    desc: 'Scheduled backups with tested restoration procedures and documented disaster-recovery runbooks for every environment we manage.',
    color: '#6366F1',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    num: '05',
    id: 'performance',
    tag: 'Performance',
    title: 'Performance Optimisation',
    desc: 'CDN configuration, caching strategy, database tuning, and continuous performance reviews to keep response times low as traffic grows.',
    color: '#0284C7',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    num: '06',
    id: 'support',
    tag: 'Dedicated Support',
    title: 'Dedicated Support',
    desc: 'A named infrastructure engineer familiar with your environment, available via Slack or ticket for routine requests and urgent escalations.',
    color: '#3B82F6',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
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
                  Consult Infrastructure Engineers <ArrowRight />
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
    industry: 'EdTech',
    color: '#2F80ED',
    statNumber: '41K',
    statLabel: 'Concurrent users, zero downtime',
    challenge:
      'An online learning platform expected 40,000 concurrent users during national exam season — 8× their normal peak — and their single-region setup had buckled at 5,000 users the previous year.',
    whatWeDid:
      'Eficens designed and deployed a multi-region auto-scaling architecture on AWS. The platform sustained 41,000 concurrent users during peak with zero downtime and response times under 200ms throughout.',
  },
  {
    industry: 'FinTech / Compliance',
    color: '#1E5DB8',
    statNumber: '8 weeks',
    statLabel: 'SOC 2 Type II compliant infra delivered',
    challenge:
      'A regulated payments company needed SOC 2 Type II compliant infrastructure before their enterprise sales pipeline would close — their existing setup had no audit logging, encryption-at-rest, or access controls.',
    whatWeDid:
      'Eficens built a fully compliant AWS environment from scratch in 8 weeks, implementing HashiCorp Vault, centralised audit logging, and least-privilege IAM. The company passed their SOC 2 audit first time.',
  },
  {
    industry: 'Consumer Tech / Startup',
    color: '#0EA5E9',
    statNumber: '100K',
    statLabel: 'MAU served with predictable, scalable infra',
    challenge:
      'A consumer app went from 5,000 to 100,000 monthly active users in 4 months after a viral moment — their fixed infrastructure couldn’t scale and costs were spiralling unpredictably.',
    whatWeDid:
      'Eficens migrated the app to an auto-scaling ECS architecture with cost-aware spot instance strategies. The platform now scales to any load automatically and infrastructure costs grew at only 40% the rate of user growth.',
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
  { value: 99.99, isDec: true, suffix: '%', label: 'Guaranteed uptime SLA', color: '#2F80ED' },
  { custom: '< 5 min', label: 'Mean time to alert on incidents', color: '#1E5DB8' },
  { value: 100, suffix: '%', label: 'Environments with automated backups', color: '#0EA5E9' },
  { custom: '24/7', label: 'Monitoring & on-call coverage', color: '#0B1A2E' },
];

function NumbersSection() {
  return (
    <section className="py-14 sm:py-32 overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.7, ease }} className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-4"
            style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.2)', color: '#2F80ED' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Reliability Standards
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
  'AWS', 'Azure', 'GCP', 'Nginx', 'Cloudflare', 'Terraform',
  'Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'PagerDuty', 'Vault', 'Wazuh'
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
              Technology Stack
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
              Engineered with Enterprise Cloud Standards
            </h2>
            <p className="text-base leading-relaxed text-slate-500 mb-6">
              Our hosting architectures integrate industry-standard cloud providers, infrastructure-as-code automation, container orchestration, and real-time telemetry systems.
            </p>
            <p className="text-base leading-relaxed text-slate-500 mb-8">
              Every component is strictly hardened, audited, and configured for high availability across distributed regions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200"
              style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}
            >
              Discuss Your Stack Requirements <ArrowRight size={12} />
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
    cat: 'Managed Hosting',
    type: 'Blog',
    date: 'Best Practices',
    title: 'Managed Hosting vs. DIY Cloud: The Real Cost Comparison for Engineering Teams That Are Scaling',
    body: 'Running your own cloud infrastructure feels like the cheaper option until you add up the engineering hours. Here’s an honest cost model for both approaches.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80',
    color: '#2F80ED',
    link: 'https://www.eficens.ai/resources/hosting-managed-vs-diy-cloud',
  },
  {
    cat: 'Infrastructure SLA',
    type: 'Blog',
    date: 'Reliability',
    title: 'What 99.99% Uptime Actually Means — and How to Build Infrastructure That Delivers It',
    body: '99.99% uptime sounds impressive. It allows 52 minutes of downtime per year. Here’s what architecture, monitoring, and operational practice it actually takes to hit that number.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80',
    color: '#1E5DB8',
    link: 'https://www.eficens.ai/resources/hosting-uptime-sla',
  },
  {
    cat: 'Cloud Security',
    type: 'Blog',
    date: 'Compliance',
    title: 'Security-First Hosting: The Infrastructure Checklist That Keeps Enterprise Clients and Auditors Happy',
    body: 'Enterprise clients and compliance auditors ask the same questions. Here’s the infrastructure checklist that answers them — and why getting these right early saves months of catch-up later.',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80',
    color: '#0EA5E9',
    link: 'https://www.eficens.ai/resources/hosting-security-compliance',
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
            Let&apos;s talk about how our Hosting practice can help your team move faster.
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

export default function HostingPage() {
  useEffect(() => {
    document.title = 'Infrastructure you never have to think about | Hosting | Eficens Services';
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
