import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];

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

export default function WorkforceDevelopmentPage() {
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

/* ═══════════════════════════════════════════════ HERO ═══ */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: '#0B1120' }}
    >
      {/* Grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Workforce_Development/Workforce-Development_homepage.webp"
          alt="Workforce Development"
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

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-7"
              style={{ border: '1px solid rgba(47,128,237,0.35)', background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              Workforce Development
            </motion.span>

            <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease, delay: 0.1 }}
              className="font-display font-extrabold leading-[1.06] tracking-tight text-white mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Future-proof Your{' '}
              <span style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #BFDBFE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Workforce
              </span>
            </motion.h1>

            <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, ease, delay: 0.55 }}
              style={{ height: '1.5px', background: 'linear-gradient(90deg, rgba(47,128,237,0.7), transparent)', maxWidth: '340px', marginBottom: '1.6rem' }} />

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.28 }}
              className="text-base sm:text-lg leading-[1.8] mb-10 max-w-lg" style={{ color: 'rgba(255,255,255,0.68)' }}>
              When your people thrive, so does your business. Empowered, engaged teams are the foundation of innovation and growth. We ensure your teams keep pace with changing technology, data streams and modern ways of working.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.42 }} className="flex flex-wrap gap-4">
              <a href="#overview" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300"
                style={{ backgroundColor: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.42)', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}>
                Explore Solutions
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
                style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Talk to an Expert
              </Link>
            </motion.div>
          </div>

          {/* Right floating card */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, ease, delay: 0.3 }} className="relative hidden lg:block">
            <div className="relative rounded-[28px] overflow-hidden" style={{ height: '520px', boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)' }}>
              <img src="/Workforce_Development/Workforce-Development_homepage.webp" alt="Workforce Development" className="w-full h-full object-cover object-center" style={{ opacity: 0.88 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(11,17,32,0.7) 100%)' }} />
              <div className="absolute bottom-5 left-5 px-4 py-2.5 rounded-xl flex items-center gap-2.5 backdrop-blur-md" style={{ background: 'rgba(11,17,32,0.65)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <span className="h-2 w-2 rounded-full bg-[#2F80ED] animate-pulse" />
                <span className="text-white text-[11px] font-bold uppercase tracking-wider">Workforce Transformation</span>
              </div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-5 right-5 rounded-2xl px-4 py-3"
                style={{ background: 'rgba(11,17,32,0.7)', border: '1px solid rgba(47,128,237,0.35)', backdropFilter: 'blur(12px)' }}>
                <div className="text-lg font-extrabold text-white leading-none">1M+ Learners</div>
                <div className="text-[10px] mt-0.5 font-semibold uppercase tracking-wider" style={{ color: 'rgba(96,165,250,0.85)' }}>15+ Countries Since 1985</div>
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

/* ═══════════════════════ OVERVIEW SECTION — Enhanced with rich visual layout ═══ */
function OverviewSection() {
  const pillars = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      title: 'Accelerate Growth',
      desc: 'Spark innovation by building a future-ready workforce equipped with modern skills and tools.',
      color: '#2F80ED',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Boost Engagement',
      desc: 'Increase employee engagement and retention through meaningful learning experiences.',
      color: '#6366F1',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
        </svg>
      ),
      title: 'Upskill & Reskill',
      desc: 'Elevate existing talent with targeted programs for evolving roles and responsibilities.',
      color: '#0D9488',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'Modern Learning',
      desc: 'Adopt cutting-edge methods and technologies that enhance productivity and measurable impact.',
      color: '#F59E0B',
    },
  ];

  return (
    <section id="overview" className="py-24 sm:py-32 overflow-hidden relative" style={{ backgroundColor: '#FAFAF8' }}>
      {/* Dot background */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.06) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Top: Label + Title + Desc */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce} transition={{ duration: 0.75, ease }}
            className="lg:col-span-5"
          >
            <Pill>Overview</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Comprehensive.{' '}
              <span style={{ color: '#2F80ED' }}>Transformative.</span>{' '}
              Human-Centered.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce} transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-base sm:text-lg leading-relaxed text-slate-500">
              Our approach to workforce transformation can accelerate growth and spark innovation, boost employee engagement and retention, upskill or reskill your existing talent, and adopt modern learning methods and technologies that enhance productivity.
            </p>
            <p className="text-slate-600 font-semibold text-base leading-relaxed">
              When your people thrive, so does your business. Empowered, engaged teams are the foundation of innovation and growth.
            </p>
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { val: '150+', label: 'Custom Programs' },
                { val: '1M+', label: 'Learners Reached' },
                { val: '94%', label: 'Satisfaction Rate' },
              ].map((s) => (
                <div key={s.val} className="text-center p-4 rounded-2xl" style={{ background: 'rgba(47,128,237,0.05)', border: '1px solid rgba(47,128,237,0.12)' }}>
                  <div className="font-display font-extrabold text-2xl text-blue-500 leading-none mb-1">{s.val}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 4 pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: `0 20px 40px ${item.color}18` }}
              className="bg-white p-7 rounded-3xl border border-slate-100 hover:border-slate-200 shadow-sm transition-all duration-300 cursor-default group"
            >
              {/* Icon */}
              <div
                className="h-12 w-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}25` }}
              >
                {item.icon}
              </div>
              {/* Accent line */}
              <div className="h-[3px] w-8 rounded-full mb-4 transition-all duration-300 group-hover:w-12" style={{ background: item.color }} />
              <h3 className="font-display font-extrabold text-slate-800 text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ IN IT WITH YOU ═══ */
function InItWithYouSection() {
  const stats = [
    { value: '150+', label: 'Customized training programs annually' },
    { value: '1M+', label: 'Learners reached across 15+ countries since 1985' },
    { value: '94%', label: 'Customer satisfaction with our services' },
  ];

  const bullets = [
    'Integrate business and IT through innovative learning experiences that enable new ways of working',
    'Increase, measure and sustain business performance through workforce skills development, reskilling and technology adoption programs',
    'Partner with broader communities to build high-performing inclusive teams',
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden border-b border-slate-100 relative" style={{ backgroundColor: '#0B1120' }}>
      {/* Dark grid bg */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] blur-[120px]" style={{ background: 'rgba(47,128,237,0.08)' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(47,128,237,0.1)', border: '1px solid rgba(47,128,237,0.25)', color: '#2F80ED' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />In It With You
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-[1.06] tracking-tight mb-6">
              The Right Partner for Workforce Transformation
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              With the right partner, organizations can unlock their talent's potential. Together, we can develop tailored workforce development solutions to achieve your workforce transformation goals. Through our focus on corporate social responsibility and inclusivity in the workplace, we partner with broader communities to build high-performing teams.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              {bullets.map((text, i) => (
                <motion.div
                  key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce} transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(47,128,237,0.15)', border: '1px solid rgba(47,128,237,0.35)', color: '#60A5FA' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed font-semibold" style={{ color: 'rgba(255,255,255,0.75)' }}>{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease, delay: 0.15 }}>
            <div className="rounded-3xl p-8 sm:p-10 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
              <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: '#2F80ED' }} />
              <div className="absolute right-0 bottom-0 pointer-events-none opacity-5">
                <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#2F80ED" />
                </svg>
              </div>
              <div className="h-1 w-12 rounded-full mb-6 bg-[#2F80ED]" />
              <h3 className="font-display text-2xl font-extrabold text-white mb-2">At a Glance</h3>
              <p className="leading-relaxed text-sm mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>Decades of expertise. Measurable impact. Global reach.</p>
              <div className="flex flex-col gap-6">
                {stats.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                    transition={{ duration: 0.55, ease, delay: i * 0.1 }}
                    className="flex items-start gap-4 pb-6 last:pb-0" style={{ borderBottom: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                    <div className="font-display font-extrabold leading-none min-w-[80px]" style={{ fontSize: '2rem', color: '#60A5FA' }}>{s.value}</div>
                    <p className="text-sm leading-relaxed pt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ CAPABILITIES — with images ═══ */
function CapabilitiesSection() {
  const capabilities = [
    {
      title: 'Learning Advisory Services',
      desc: 'Your workforce is unique—your training should be too. We collaborate with you to design learning experiences that inspire your workforce and reflect the realities of your organization. From strategic learning consultations to in-depth training services—we have your learning needs covered.',
      image: '/Workforce_Development/Our-Capabilities/Learning-Advisory-Services.webp',
      accent: '#2F80ED',
    },
    {
      title: 'Instructor-Led Training',
      desc: "For more than 40 years, we've been a trusted partner in delivering dedicated learning solutions. Our comprehensive catalog of over 500 instructor-led courses offers a wide breadth of skill development opportunities each year.",
      image: '/Workforce_Development/Our-Capabilities/Instructor-Led-Training.webp',
      accent: '#6366F1',
    },
    {
      title: 'Building New Talent Pipelines',
      desc: 'Together, we can design customized recruitment strategies, skills-based trainings and managed workforce programs that upskill candidates for peak performance—building a sustainable, job-ready talent pipeline.',
      image: '/Workforce_Development/Our-Capabilities/Building-New-Talent-Pipelines.webp',
      accent: '#0D9488',
    },
    {
      title: 'Technology Adoption',
      desc: 'Our learning strategy empowers end users with the practical skills they need to succeed—so your organization can realize the value of its technology investments. Tailored for accelerating time to productivity and enhancing user satisfaction.',
      image: '/Workforce_Development/Our-Capabilities/Technology-Adoption.webp',
      accent: '#F59E0B',
    },
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 overflow-hidden border-b border-slate-100 relative"
      style={{ backgroundColor: '#FAFAF8', backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' }}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="max-w-3xl mb-16">
          <Pill>Our Capabilities</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
            Powered by Expertise, Delivered with Impact
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-500">
            Powered by expertise across full-stack technologies and elite partnerships with the top enterprise platforms, our workforce development services get you from job-readiness to full productivity. You'll accelerate workforce performance and achieve measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-400 cursor-default"
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
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
              <div className="bg-white p-7">
                <div className="h-[2px] w-8 rounded-full mb-4 transition-all duration-300 group-hover:w-16" style={{ background: c.accent }} />
                <h3 className="font-display font-extrabold text-slate-800 text-xl leading-snug mb-3">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                <div className="flex items-center gap-1.5 mt-5">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: c.accent }}>Learn More</span>
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke={c.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ OUR APPROACH ═══ */
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
      title: 'Risk & Security',
      desc: 'Implement security-first strategies to safeguard your enterprise.',
      link: '/risk-and-security',
      image: '/Workforce_Development/Our-Approach/Risk-Security.jpg',
      accent: '#CC0000',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-16">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }} className="lg:col-span-5">
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
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.75, ease, delay: i * 0.12 }}
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


/* ═══════════════════════════ PARTNERSHIPS — with brand logo SVG components ═══ */
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
    <section className="py-24 sm:py-32 bg-white overflow-hidden border-b border-slate-100"
      style={{ backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.9, ease }} className="lg:col-span-5">
            <Pill>Our Partnerships</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-800 leading-[1.1] tracking-tight mb-6">
              Best-in-Class Integrations
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-500 mb-8">
              The world's leading technology and software providers partner with us because of our scale, full-stack capabilities and speed. Together, we can deliver new, sustainable growth across your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-bold px-7 py-3 rounded-xl transition-all duration-300"
              style={{ border: '2px solid #84CC16', color: '#0F172A', background: '#ffffff', textDecoration: 'none', fontSize: '14px' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.borderColor = '#65A30D'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#84CC16'; }}
            >
              Meet Our Partners
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="lg:col-span-7 grid grid-cols-2 gap-4">
            {brandLogos.map((brand, i) => (
              <motion.div
                key={brand.key}
                initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce} transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.06)' }}
                className="bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-6 transition-all duration-300 min-h-[90px]"
                style={{
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                  gridColumn: brand.key === 'salesforce' ? 'span 2' : 'auto',
                  maxWidth: brand.key === 'salesforce' ? '50%' : '100%',
                  justifySelf: brand.key === 'salesforce' ? 'center' : 'stretch',
                  width: brand.key === 'salesforce' ? '100%' : 'auto',
                }}
              >
                <brand.component />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ INSIGHTS — with images ═══ */
function InsightsSection() {
  const insights = [
    {
      color: '#2F80ED',
      tag: 'Success Story',
      title: 'Featured Insights',
      desc: 'Investing in Agile — Financial institution increases speed and quality of services through workforce agile transformation.',
      image: '/Workforce_Development/Featured-Insights/Featured-Insights.webp',
    },
    {
      color: '#1E5DB8',
      tag: 'Success Story',
      title: 'Continuous Education in the Digital Health Age',
      desc: 'A healthcare education program collaborated with Syntera Solutions to modernize their online presence with innovative learning solutions to help improve geriatric care.',
      image: '/Workforce_Development/Featured-Insights/Continuous-Education-Digital-Health-Age.webp',
    },
    {
      color: '#6366F1',
      tag: 'Success Story',
      title: 'Next-Level Learning',
      desc: 'A global technology company delivers next-level IT learning solutions, enabling measurable performance gains across their workforce.',
      image: '/Workforce_Development/Featured-Insights/Next-Level-Learning.webp',
    },
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden relative" style={{ backgroundColor: '#FAFAF8' }}>
      {/* Dot bg */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <Pill>Featured Insights</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">Thinking Forward</h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200 whitespace-nowrap"
            style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}>
            See More <ArrowRight size={12} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {insights.map((ins, i) => (
            <motion.div
              key={ins.title}
              initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce} transition={{ duration: 0.75, ease, delay: i * 0.12 }}
              whileHover={{ y: -8, boxShadow: `0 20px 48px ${ins.color}18` }}
              className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-400 border border-slate-100 shadow-sm bg-white"
            >
              {/* Image area */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={ins.image}
                  alt={ins.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(11,17,32,0.55) 100%)' }} />
                <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: ins.color }}>
                  {ins.tag}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: ins.color }} />
              </div>

              {/* Text */}
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
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ first: '', last: '', email: '', company: '', title: '', need: '', message: '' });
  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); if (!agreed) return; setSubmitted(true); };

  const steps = [
    { num: '01', title: 'Discovery Call', desc: 'We align on your workforce goals, skill gaps, and transformation vision.' },
    { num: '02', title: 'Program Design', desc: 'A tailored learning roadmap matched to your industry and team dynamics.' },
    { num: '03', title: 'Delivery & Coaching', desc: 'Instructor-led or blended learning with measurable progress tracking.' },
    { num: '04', title: 'Outcomes & Sustain', desc: 'We ensure lasting impact with reinforcement programs and performance metrics.' },
  ];

  return (
    <section id="contact-wd" className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E5DB8 50%, #2F80ED 100%)' }}>
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full blur-[90px]" style={{ background: 'radial-gradient(circle, rgba(30,93,184,0.2) 0%, transparent 70%)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle, rgba(47,128,237,0.25) 0%, transparent 70%)' }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#EAF3FF' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />Interested in speaking with Syntera Solutions?
            </motion.span>

            <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.85, ease, delay: 0.08 }}
              className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-white mb-4">
              Transform Your Workforce Today
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              className="text-base leading-[1.9] max-w-sm mb-10" style={{ color: 'rgba(234,243,255,0.85)' }}>
              Let's discuss how we can build tailored workforce development solutions to achieve your transformation goals.
            </motion.p>

            <div className="space-y-5 mb-10">
              {steps.map((s, i) => (
                <motion.div key={s.num} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
                  transition={{ duration: 0.65, ease, delay: 0.2 + i * 0.1 }} className="flex items-start gap-4">
                  <span className="shrink-0 grid h-11 w-11 place-items-center rounded-xl font-bold text-sm"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: '#EAF3FF' }}>{s.num}</span>
                  <div className="pt-1">
                    <h4 className="text-white font-bold text-sm mb-1">{s.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(234,243,255,0.75)' }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <motion.div initial={{ opacity: 0, x: 40, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.15 }}>
            <div style={{ background: '#fff', borderRadius: '28px', padding: '36px 32px', boxShadow: '0 24px 64px rgba(0,0,0,0.28), 0 4px 16px rgba(0,0,0,0.12)' }}>
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="h-20 w-20 rounded-full grid place-items-center mb-6" style={{ background: 'rgba(47,128,237,0.1)' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">Request Sent!</h3>
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#475569' }}>Thanks—our team will follow up within one business day.</p>
                  <button onClick={() => { setSubmitted(false); setAgreed(false); }} className="mt-8 text-sm font-semibold" style={{ color: '#2F80ED', background: 'none', border: 'none', cursor: 'pointer' }}>Send another →</button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Start a Conversation</h3>
                    <p className="text-sm" style={{ color: '#64748b' }}>Fill in the form and we'll follow up with a tailored plan.</p>
                    <div style={{ width: '48px', height: '3px', background: '#2F80ED', borderRadius: '999px', marginTop: '14px' }} />
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                    <div className="grid grid-cols-2 gap-3">
                      <FF label="First Name" name="first" value={form.first} onChange={handleChange} required />
                      <FF label="Last Name" name="last" value={form.last} onChange={handleChange} required />
                    </div>
                    <FF label="Work Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                    <FF label="Company" name="company" value={form.company} onChange={handleChange} required />
                    <FF label="Title / Role" name="title" value={form.title} onChange={handleChange} />
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>Service Area</label>
                      <div className="relative">
                        <select name="need" value={form.need} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none appearance-none pr-9"
                          style={{ border: '1.5px solid #e5e7eb', color: form.need ? '#111827' : '#9ca3af' }}>
                          <option value="">Select...</option>
                          {['Learning Advisory Services', 'Instructor-Led Training', 'Building New Talent Pipelines', 'Technology Adoption', 'Multiple / Other'].map(o => <option key={o}>{o}</option>)}
                        </select>
                        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" style={{ color: '#9ca3af' }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M6 8L1 3h10L6 8z" /></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>Message</label>
                      <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Describe your workforce goals..."
                        className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none resize-none" style={{ border: '1.5px solid #e5e7eb' }} />
                    </div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <div onClick={() => setAgreed(!agreed)} className="w-5 h-5 mt-0.5 shrink-0 rounded-md border-2 flex items-center justify-center transition-all duration-200 cursor-pointer"
                        style={{ background: agreed ? '#2F80ED' : '#fff', borderColor: agreed ? '#2F80ED' : '#d1d5db' }}>
                        {agreed && <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="#fff" strokeWidth="2.5"><path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                      </div>
                      <span className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>
                        I agree to Syntera Solutions' <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Privacy Policy</a> and <a href="/contact" style={{ color: '#2F80ED', fontWeight: 600 }}>Terms</a> *
                      </span>
                    </label>
                    <motion.button type="submit"
                      style={{ width: '100%', background: '#2F80ED', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(47,128,237,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                      whileHover={{ scale: 1.02, boxShadow: '0 12px 32px rgba(47,128,237,0.55)' }} whileTap={{ scale: 0.98 }}>
                      Send Request
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </motion.button>
                    <p className="text-center text-xs" style={{ color: '#9ca3af' }}>Your data is 100% secure & never shared</p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FF({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>
        {label}{required && <span style={{ color: '#2F80ED' }}> *</span>}
      </label>
      <input type={type} name={name} value={value} onChange={onChange} required={required}
        className="w-full px-4 py-3 rounded-xl text-sm bg-white focus:outline-none"
        style={{ border: '1.5px solid #e5e7eb', color: '#111827' }} />
    </div>
  );
}
