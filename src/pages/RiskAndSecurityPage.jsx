import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];

const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)',
  backgroundSize: '26px 26px',
};

const GRID_BG = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
  backgroundSize: '48px 48px',
};

const ArrowRight = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const Pill = ({ children, color = '#2F80ED' }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
    style={{ background: `${color}14`, border: `1px solid ${color}30`, color }}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);

/* ── Brand Logo Components (same as PartnershipsPage) ── */
function AWSLogo() {
  return (
    <svg viewBox="0 0 100 45" className="h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 12.8h3.3v13.6c0 2.2 1.4 3.3 3.5 3.3s3.5-1.1 3.5-3.3V12.8H26v13.8c0 4-2.6 6-6.5 6s-6.5-2-6.5-6V12.8zm17.6 19.8c-2.3 0-4.2-.9-4.8-2.6h3c.4.8 1.1 1.2 2 1.2 1 0 1.6-.4 1.6-1.1v-.2c-.5-.6-1.5-1-2.9-1.3-2.6-.6-4.5-1.5-4.5-3.8 0-2.3 2-3.7 4.5-3.7 2.1 0 3.7.8 4.3 2.3h-2.9c-.3-.7-.9-1-1.6-1-.9 0-1.4.3-1.4.9 0 .6.7.9 2 1.2 2.6.5 4.5 1.5 4.5 3.7 0 2.7-2.1 3.9-4.8 3.9zm13-8.8V12.8h3v20H43v-2.3c-.6 1.8-2 2.7-4.2 2.7-3.7 0-6.1-2.7-6.1-6.7s2.4-6.7 6.1-6.7c2.2 0 3.6.9 4.2 2.8V23.8zm-3.6 6.8c2 0 3.2-1.3 3.2-3.8s-1.2-3.8-3.2-3.8-3.2 1.3-3.2 3.8 1.2 3.8 3.2 3.8z" fill="#232F3E"/>
      <path d="M11 36.5c16.5 6 36.5 6.5 52 1.5.8-.3 1.4.5.8 1-3.2 2.7-9.5 5.5-17.5 6.5-10.5 1.2-22.5.2-34.5-5.5-.6-.3-.3-1.1.4-1.1l.8-.4z" fill="#FF9900"/>
    </svg>
  );
}

function GoogleCloudLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.002 2l8.225 4.75v9.5l-8.225 4.75-8.225-4.75v-9.5L12.002 2z" fill="#4285F4"/>
        <path d="M12.002 2L3.777 6.75v9.5l8.225 4.75V2z" fill="#34A853"/>
        <path d="M12.002 2v9.5l8.225 4.75V6.75L12.002 2z" fill="#EA4335"/>
        <path d="M12.002 11.5l-8.225 4.75 8.225 4.75v-9.5z" fill="#FBBC05"/>
      </svg>
      <span className="font-display text-sm font-bold text-slate-800 tracking-tight">Google Cloud</span>
    </div>
  );
}

function MicrosoftLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 23 23" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022"/>
        <rect x="12.5" y="0" width="10.5" height="10.5" fill="#7FBA00"/>
        <rect x="0" y="12.5" width="10.5" height="10.5" fill="#00A4EF"/>
        <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"/>
      </svg>
      <div className="text-left">
        <div className="font-display text-xs font-black text-slate-900 tracking-wide leading-none">Microsoft</div>
        <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest leading-normal">Solutions Partner</div>
      </div>
    </div>
  );
}

function RedHatLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="h-7 w-7 rounded-full flex items-center justify-center" style={{ background: '#CC0000' }}>
        <span className="text-white font-extrabold text-[10px]">RH</span>
      </div>
      <span className="font-display text-sm font-extrabold text-slate-900 tracking-tighter">Red Hat</span>
    </div>
  );
}

function SnowflakeLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.585 13.545l-1.698-.98 1.698-.98a.75.75 0 0 0-.75-1.3l-1.697.98V9.038a.75.75 0 0 0-1.5 0v2.227l-5.138-2.966V4.112l1.803 1.04a.75.75 0 0 0 .75-1.3l-2.303-1.33v-1.77a.75.75 0 0 0-1.5 0v1.77L9.947 3.852a.75.75 0 0 0 .75 1.3l1.803-1.04v4.187L7.362 11.265V9.038a.75.75 0 0 0-1.5 0v2.227l-1.697-.98a.75.75 0 0 0-.75 1.3l1.697.98-1.697.98a.75.75 0 0 0 .75 1.3l1.697-.98v2.227a.75.75 0 0 0 1.5 0V13.87l5.138 2.966v4.187l-1.803-1.04a.75.75 0 0 0-.75 1.3l2.303 1.33v1.767a.75.75 0 0 0 1.5 0v-1.767l2.303-1.33a.75.75 0 0 0-.75-1.3l-1.803 1.04v-4.187l5.138-2.966v2.227a.75.75 0 0 0 1.5 0v-2.227l1.697.98a.75.75 0 0 0 .75-1.3z"/>
      </svg>
      <span className="font-display text-sm font-extrabold text-[#29B6F6] tracking-wide">snowflake</span>
    </div>
  );
}

function ServiceNowLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg viewBox="0 0 100 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-1.8 9.5l2.4-2.4 1.1 1.1-3.5 3.5L5.7 11.2l1.1-1.1 1.4 1.4z" fill="#81B924"/>
        <text x="22" y="17" fill="#0F172A" fontFamily="sans-serif" fontWeight="900" fontSize="16px" letterSpacing="-0.02em">servicenow.</text>
      </svg>
    </div>
  );
}

function SalesforceLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="h-7 w-7 rounded-full flex items-center justify-center" style={{ background: '#00A1E0' }}>
        <svg viewBox="0 0 24 16" className="h-3 w-auto" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 4c-.1 0-.2 0-.3.1C17.3 2.3 15.5 1 13.5 1c-1.5 0-2.9.8-3.7 2C9.2 2.4 8.3 2 7.4 2 5.6 2 4 3.3 3.7 5.1 2.6 5.4 1.8 6.5 1.8 7.7 1.8 9.1 3 10 4.3 10H18c1.3 0 2.5-.9 2.5-2.2C20.5 5.5 19.4 4 18 4z"/>
        </svg>
      </div>
      <span className="font-display text-sm font-extrabold text-[#00A1E0] tracking-tight">salesforce</span>
    </div>
  );
}

export default function RiskAndSecurityPage() {
  useEffect(() => {
    document.title = 'Risk and Security — Unified Cyber Protection | Syntera Consulting';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <InItWithYouSection />
      <CapabilitiesSection />
      <OurApproachSection />
      <PartnershipsSection />
      <InsightsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ HERO ═══ */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: '#0B1120' }}
    >
      {/* Box grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Background image full-bleed clone style */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Risk-and-Security/Risk-and-Security-homepage.webp"
          alt="Risk and Security"
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.24 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.55) 40%, rgba(11,17,32,0.65) 70%, rgba(11,17,32,0.97) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(11,17,32,0.85) 0%, rgba(11,17,32,0.4) 50%, transparent 100%)' }} />
      </div>

      {/* Glowing orbs */}
      <motion.div aria-hidden animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="pointer-events-none absolute top-[-80px] right-[-60px] w-[700px] h-[600px] rounded-full blur-[130px]" style={{ background: 'rgba(47,128,237,0.15)', zIndex: 1 }} />
      <motion.div aria-hidden animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.13, 0.06] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }} className="pointer-events-none absolute bottom-0 left-[-80px] w-[500px] h-[400px] rounded-full blur-[110px]" style={{ background: 'rgba(99,102,241,0.12)', zIndex: 1 }} />

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-7" style={{ border: '1px solid rgba(47,128,237,0.35)', background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              Cyber Resilience
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease, delay: 0.1 }} className="font-display font-extrabold leading-[1.06] tracking-tight text-white mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Risk and{' '}
              <span style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #BFDBFE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Security</span>
            </motion.h1>
            <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, ease, delay: 0.55 }} style={{ height: '1.5px', background: 'linear-gradient(90deg, rgba(47,128,237,0.7), transparent)', maxWidth: '340px', marginBottom: '1.6rem' }} />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.28 }} className="text-base sm:text-lg leading-[1.8] mb-10 max-w-lg" style={{ color: 'rgba(255,255,255,0.68)' }}>
              Unified, proactive cybersecurity strategies that safeguard every layer of your enterprise. Mitigate threats, optimize assets, and secure data privacy.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.42 }} className="flex flex-wrap gap-4">
              <a href="#overview" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300" style={{ backgroundColor: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.42)', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}>
                Explore Protection
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300" style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Talk to an Expert
              </Link>
            </motion.div>
          </div>

          {/* Floating visual card on right */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, ease, delay: 0.3 }} className="relative hidden lg:block">
            <div className="relative rounded-[28px] overflow-hidden" style={{ height: '520px', boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)' }}>
              <img src="/Risk-and-Security/Risk-and-Security-homepage.webp" alt="Risk and Security Overview" className="w-full h-full object-cover object-center" style={{ opacity: 0.88 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(11,17,32,0.7) 100%)' }} />
              <div className="absolute bottom-5 left-5 px-4 py-2.5 rounded-xl flex items-center gap-2.5 backdrop-blur-md" style={{ background: 'rgba(11,17,32,0.65)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <span className="h-2 w-2 rounded-full bg-[#2F80ED] animate-pulse" />
                <span className="text-white text-[11px] font-bold uppercase tracking-wider">Unified Cyber Defense</span>
              </div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-5 right-5 rounded-2xl px-4 py-3" style={{ background: 'rgba(11,17,32,0.7)', border: '1px solid rgba(47,128,237,0.35)', backdropFilter: 'blur(12px)' }}>
                <div className="text-lg font-extrabold text-white leading-none">GRC Integrated</div>
                <div className="text-[10px] mt-0.5 font-semibold uppercase tracking-wider" style={{ color: 'rgba(96,165,250,0.85)' }}>Decades of Expertise</div>
              </motion.div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full -z-10" style={{ background: 'rgba(47,128,237,0.12)', filter: 'blur(32px)' }} />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full -z-10" style={{ background: 'rgba(99,102,241,0.1)', filter: 'blur(24px)' }} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.28)' }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} className="h-8 w-5 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-white/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════ OVERVIEW SECTION — white ═══ */
function OverviewSection() {
  const GRC_DELIVERABLES = [
    { title: 'Regulatory Compliance', desc: 'Minimizing legal and financial exposure through robust framework auditing.' },
    { title: 'Risk Mitigation', desc: 'Identifying and eliminating vulnerabilities to proactively prevent costly security breaches.' },
    { title: 'Operational Efficiency', desc: 'Streamlining security workflows and processes with a fully unified modern framework.' },
    { title: 'Proactive Monitoring', desc: 'Detecting systems threat vectors early to prevent expensive operational disruptions.' }
  ];

  return (
    <section id="overview" className="py-14 sm:py-32 border-b border-slate-100 overflow-hidden" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            className="lg:col-span-5"
          >
            <Pill>Overview</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Comprehensive. Integrated. Proactive.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="lg:col-span-7 text-base sm:text-lg leading-relaxed text-slate-500 space-y-6"
          >
            <p>
              In the digital age, security means thinking bigger: a unified, proactive strategy that safeguards every layer. Our integrated approach transforms protection into a smarter, more resilient cyber landscape—built to counter today’s evolving threats and tomorrow’s unknowns. By addressing risks across every domain, our solutions protect what matters most: your assets and your data.
            </p>
            <p className="text-slate-600 font-semibold">
              Backed by decades of cross-industry expertise, we embed Governance, Risk and Compliance (GRC) into every aspect of our solutions to assess and mitigate risks across your environment.
            </p>
          </motion.div>
        </div>

        {/* 4 Mini deliverables cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GRC_DELIVERABLES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white p-7 rounded-3xl border border-slate-100 hover:border-blue-500/20 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="h-2 w-10 rounded-full bg-blue-500 mb-5" />
              <h3 className="font-display font-extrabold text-slate-800 text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ IN IT WITH YOU — BOX GRID BG ═══ */
function InItWithYouSection() {
  const bulletPoints = [
    'Proactively protecting assets and neutralizing risks while ensuring compliance',
    'Unifying IT, business operations and infrastructure-wide data to manage evolving threats',
    'Applying best practices to maintain confidentiality, integrity and availability'
  ];

  return (
    <section className="py-14 sm:py-32 overflow-hidden border-b border-slate-100 relative" style={{ backgroundColor: '#0B1120' }}>
      {/* Grid overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      {/* Blue glow top-center */}
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] blur-[110px]" style={{ background: 'rgba(47,128,237,0.09)' }} />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease }}
            className="text-white"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ background: 'rgba(47,128,237,0.1)', border: '1px solid rgba(47,128,237,0.25)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              In It With You
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-[1.06] tracking-tight mb-6">
              Holistic Threat &amp; Infrastructure Monitoring
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
              We offer a centralized, holistic view of cybersecurity and critical infrastructure monitoring. Our tool-agnostic models unify IT, operations and data for agile, scalable solutions tailored to your environment. The goal? Transform and maintain enterprise security through compliance and data privacy.
            </p>
            
            <div className="flex flex-col gap-4 mt-8">
              {bulletPoints.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(47,128,237,0.15)', border: '1px solid rgba(47,128,237,0.3)', color: '#60A5FA' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed font-semibold" style={{ color: 'rgba(255,255,255,0.82)' }}>{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="rounded-3xl p-8 sm:p-10 relative overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
          >
            {/* Accent top stripe */}
            <span className="absolute inset-x-0 top-0 h-[3px] rounded-t-3xl" style={{ background: '#2F80ED' }} />
            {/* Visual background elements */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-5">
              <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#2F80ED" />
              </svg>
            </div>
            
            <div className="h-1 w-12 rounded-full mb-6" style={{ background: '#2F80ED' }} />
            <h3 className="font-display text-2xl font-extrabold text-white mb-4">Enterprise Defense Model</h3>
            <p className="leading-relaxed text-sm mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Syntera Consulting unifies operational signals across physical, virtual, and cloud architectures. Our models adapt to your existing stack—enforcing compliance controls without vendor lock-in.
            </p>
            <div className="rounded-2xl p-5" style={{ background: 'rgba(47,128,237,0.1)', border: '1px solid rgba(47,128,237,0.2)' }}>
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#60A5FA' }}>Security Architecture</span>
              <p className="font-extrabold text-lg mt-1 text-white">Holistic. Agnostic. Scalable.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ CAPABILITIES — white dot bg ═══ */
function CapabilitiesSection() {
  const capabilities = [
    {
      title: 'Governance, Risk and Compliance',
      desc: 'Secure your data and strengthen your security posture with integrated GRC foundational security frameworks, ensuring regulatory compliance across infrastructure, cloud and data sources.',
      image: '/Risk-and-Security/Our-Capabilities/Governance-Risk-and-Compliance.webp',
      accent: '#2F80ED',
    },
    {
      title: 'AI Governance',
      desc: 'The cornerstone of AI security. Implement policies, guidelines, controls and risk assessments that dictate how AI systems should be developed, deployed and monitored.',
      image: '/Risk-and-Security/Our-Capabilities/AI-Governance.webp',
      accent: '#6366F1',
    },
    {
      title: 'Identity and Access Management',
      desc: 'Fingerprint Scanning Technology Concept. Secure and optimize enterprise directories. Establish robust controls to manage user access, authentication systems, and privileges.',
      image: '/Risk-and-Security/Our-Capabilities/Identity-and-Access-Management.webp',
      accent: '#0D9488',
    },
    {
      title: 'Threat and Vulnerability Management',
      desc: 'Stay ahead of potential threats before they become major issues with strategic planning, roadmapping and clearly defined KPIs. Identify and prioritize vulnerabilities, aligning security controls with your risk profile.',
      image: '/Risk-and-Security/Our-Capabilities/Threat-and-Vulnerability-Management.webp',
      accent: '#F59E0B',
    },
    {
      title: 'Application Security / DevSecOps',
      desc: 'Implement robust, integrated security frameworks to protect applications across their life cycles. By aligning with organizational governance and regulatory compliance, ensure adherence to industry standards.',
      image: '/Risk-and-Security/Our-Capabilities/Application-Security-DevSecOps.webp',
      accent: '#EF4444',
    },
    {
      title: 'Cybersecurity Operations',
      desc: 'Integrate information security and IT operations to streamline processes, enhance efficiency and boost security. From threat analysis to SOC implementation, discover cybersecurity solutions that deliver robust defense.',
      image: '/Risk-and-Security/Our-Capabilities/Cybersecurity-Operations.webp',
      accent: '#10B981',
    },
    {
      title: 'AML, Fraud Detection & Prevention',
      desc: 'Safeguard your organization’s environment by implementing a proactive approach to detect and manage suspicious activity. With programs tailored to stay on top of risk assessments and alerts.',
      image: '/Risk-and-Security/Our-Capabilities/AML-Fraud-Detection-Prevention.webp',
      accent: '#8B5CF6',
    },
    {
      title: 'Asset Management',
      desc: 'Secure and optimize assets across your infrastructure with improved asset visibility, streamlined management, asset monitoring, vulnerability alignment and risk mitigation.',
      image: '/Risk-and-Security/Our-Capabilities/Asset-Management.webp',
      accent: '#EC4899',
    },
  ];

  return (
    <section id="capabilities" className="py-14 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mb-20"
        >
          <Pill>Our Capabilities</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
            Foundational Protection &amp; Defense Operations
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-500">
            In today’s threat landscape, security isn’t optional—it’s foundational. We design and implement strategies that mitigate risk, ensure compliance and drive sustainable results. Defensive operations and infrastructure monitoring empower your organization to protect assets, adapt for the future and meet business objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: i * 0.07 }}
              className="group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-400 cursor-default"
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(11,17,32,0.6) 100%)' }} />
                {/* Accent line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: c.accent }} />
              </div>

              {/* Content */}
              <div className="bg-white p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                <div>
                  <div className="h-1.5 w-10 rounded-full mb-4 transition-all duration-300 group-hover:w-16" style={{ background: c.accent }} />
                  <h3 className="font-display font-extrabold text-slate-800 text-base leading-snug mb-2.5">{c.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ OUR APPROACH SECTION ═══ */
function OurApproachSection() {
  const approaches = [
    {
      title: 'DevOps & Agile',
      desc: 'Accelerate speed and delivery for scalable growth.',
      link: '/devops-agile',
      image: '/Workforce_Development/Our-Approach/DevOps-Agile.jpg',
      accent: '#2F80ED',
    },
    {
      title: 'Workforce Development',
      desc: 'Our innovative workforce solutions help unlock your team’s highest performance.',
      link: '/workforce-development',
      image: '/Workforce_Development/Workforce-Development_homepage.webp',
      accent: '#6366F1',
    }
  ];

  return (
    <section className="py-14 sm:py-32 bg-white overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            className="lg:col-span-5"
          >
            <Pill>Our Approach</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              How We Do It
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {approaches.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.75, ease, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-400 cursor-default"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(11,17,32,0.6) 100%)' }} />
                {/* Accent line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: item.accent }} />
              </div>

              {/* Content */}
              <div className="bg-white p-8 sm:p-10">
                <div className="h-1.5 w-12 rounded-full mb-6 transition-all duration-300 group-hover:w-20" style={{ background: item.accent }} />
                <h3 className="font-display text-2xl font-extrabold text-slate-800 leading-snug mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-base mb-8">{item.desc}</p>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200 self-start"
                  style={{ color: item.accent, borderBottom: `2px solid ${item.accent}`, textDecoration: 'none' }}
                >
                  Learn More <ArrowRight size={12} color={item.accent} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ PARTNERSHIPS — WITH REAL SVG LOGOS ═══ */
function PartnershipsSection() {
  const brandLogos = [
    { component: AWSLogo, key: 'aws' },
    { component: GoogleCloudLogo, key: 'gcp' },
    { component: MicrosoftLogo, key: 'microsoft' },
    { component: RedHatLogo, key: 'redhat' },
    { component: SnowflakeLogo, key: 'snowflake' },
    { component: ServiceNowLogo, key: 'servicenow' },
    { component: SalesforceLogo, key: 'salesforce' },
  ];

  return (
    <section className="py-14 sm:py-32 bg-white overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-5"
          >
            <span className="text-blue-500 font-semibold text-lg font-display block mb-4">Our Partnerships</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-800 leading-[1.1] tracking-tight mb-6">
              Best-in-Class Integrations
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-500 mb-8">
              The world's leading technology and software providers partner with us because of our scale, full-stack capabilities and speed. Together, we can deliver new, sustainable growth across your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-bold px-7 py-3 rounded-xl transition-all duration-300"
              style={{
                border: '2px solid #84CC16',
                color: '#0F172A',
                background: '#ffffff',
                textDecoration: 'none',
                fontSize: '14px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F8FAFC';
                e.currentTarget.style.borderColor = '#65A30D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#84CC16';
              }}
            >
              Meet Our Partners
            </Link>
          </motion.div>

          {/* Right panel - clean logo icons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 items-center justify-items-center"
          >
            {brandLogos.map((logo, i) => {
              const LogoComponent = logo.component;
              return (
                <motion.div
                  key={logo.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                  className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                  style={{
                    gridColumn: logo.key === 'salesforce' ? 'span 2 sm:span-1' : 'auto',
                  }}
                >
                  <LogoComponent />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ FEATURED INSIGHTS — DOTTED BG ═══ */
function InsightsSection() {
  const insights = [
    {
      color: '#2F80ED',
      tag: 'Article',
      title: 'Mitigate Risk With Security in the Cloud',
      desc: "Take the complexity out of compliance in the cloud by leveraging the automation power landing zones provide.",
      image: '/Risk-and-Security/Featured-Insights/Mitigate-Risk-With-Security-Cloud.webp',
    },
    {
      color: '#1E5DB8',
      tag: 'Success Story',
      title: 'Cloud Capital: Investing in a Seamless AWS Migration',
      desc: "See how a global investment management company cut costs and boosted security with Syntera Consulting' AWS migration—enabling fast, reliable service and future-ready innovation.",
      image: '/Risk-and-Security/Featured-Insights/Cloud-Capital-Investing-Seamless-AWS-Migration.webp',
    },
    {
      color: '#6366F1',
      tag: 'Success Story',
      title: 'GLBA Compliance at Scale on AWS',
      desc: 'A major U.S. mortgage lender achieved 100% GLBA compliance across 1.3 PB and 13.5B objects using an AWS-based data anonymization solution with Syntera Consulting',
      image: '/Risk-and-Security/Featured-Insights/GLBA-Compliance-Scale-AWS.webp',
    }
  ];

  return (
    <section className="py-14 sm:py-32 overflow-hidden" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8"
        >
          <div>
            <Pill>Featured Insights</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">Thinking Forward</h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200 whitespace-nowrap"
            style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}
          >
            See More <ArrowRight size={12} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {insights.map((ins, i) => (
            <motion.div
              key={ins.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.75, ease, delay: i * 0.12 }}
              whileHover={{ y: -8, boxShadow: `0 20px 48px ${ins.color}28` }}
              className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-400 border border-slate-100 shadow-sm"
              style={{ background: '#fff' }}
            >
              {/* Real photo banner */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={ins.image}
                  alt={ins.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(11,17,32,0.12) 0%, rgba(11,17,32,0.55) 100%)' }} />
                <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: ins.color }}>
                  {ins.tag}
                </span>
              </div>
              <div className="p-7 bg-white">
                <div className="h-[2px] w-8 rounded-full mb-5 transition-all duration-300 group-hover:w-14" style={{ background: ins.color }} />
                <h3 className="font-display font-extrabold text-lg text-slate-800 leading-snug mb-3 group-hover:text-slate-900 transition-colors">
                  {ins.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 mb-5">{ins.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider" style={{ color: ins.color }}>
                  Read Now <ArrowRight size={11} color={ins.color} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ FINAL CTA ═══ */
function FinalCTASection() {
  return (
    <section className="py-14 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease }}
          className="rounded-3xl p-10 sm:p-14 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#0F172A 0%,#1E3A6E 60%,#2F80ED 100%)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: '#93C5FD' }}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" /> Connect With Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
                Interested in speaking with Syntera Consulting?
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(191,219,254,0.72)' }}>
                Let’s discuss how we can embed GRC, secure operations, and proactive threat management into your business architecture.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300"
                  style={{ background: '#60A5FA', color: '#0F172A', textDecoration: 'none', boxShadow: '0 6px 24px rgba(96,165,250,0.4)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#93C5FD'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#60A5FA'; }}
                >
                  Get in Touch <ArrowRight />
                </Link>
                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300"
                  style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  Explore Capabilities
                </a>
              </div>
            </div>
            {/* Visual element on right */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {[80, 140, 200, 260].map((r, i) => (
                  <motion.div key={i} animate={{ rotate: i % 2 === 0 ? 360 : -360 }} transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }} className="absolute rounded-full border border-white/10" style={{ width: r, height: r, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                ))}
                <div className="relative z-10 h-32 w-32 rounded-full flex items-center justify-center" style={{ background: 'rgba(47,128,237,0.2)', border: '2px solid rgba(96,165,250,0.4)', backdropFilter: 'blur(12px)' }}>
                  <span className="text-5xl">🛡️</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
