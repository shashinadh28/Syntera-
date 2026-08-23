import { useState } from 'react';
import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)',
  backgroundSize: '26px 26px'
};

export default function EngineeringTechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <WhyJoinSection />
      <RecommendedRolesSection />
      <AdditionalOpportunitiesSection />
      <ReadyToApplySection />
      <Footer />
    </div>
  );
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
          src="/engineering-technology/Engineering-and-Technology.webp"
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
              Careers & Innovation
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.1 }}
              className="font-display font-extrabold leading-[1.06] tracking-tight text-white mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Engineering and{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #BFDBFE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Technology
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
              Create, deliver, and implement the latest digital technology solutions to drive
              meaningful action for our business and clients.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.42 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#roles"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300"
                style={{
                  backgroundColor: '#2F80ED',
                  boxShadow: '0 8px 32px rgba(47,128,237,0.42)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}
              >
                Explore Open Roles
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#why-join"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.22)',
                  color: 'rgba(255,255,255,0.82)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                Why Join Us
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
                { val: '54+', label: 'Countries' },
                { val: '10K+', label: 'Consultants' },
                { val: '15+', label: 'Years of Excellence' },
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
                src="/engineering-technology/Engineering-and-Technology.webp"
                alt="Engineering & Technology"
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
                  Syntera Tech Tech Hub
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
                <div className="text-lg font-extrabold text-white leading-none">+20%</div>
                <div className="text-[10px] mt-0.5 font-semibold uppercase tracking-wider" style={{ color: 'rgba(96,165,250,0.85)' }}>
                  Tech Roles YoY
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

/* ─────────────────────────────────────────────────── SOLUTIONS ─── */
function SolutionsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-6"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{
                background: 'rgba(47,128,237,0.1)',
                border: '1px solid rgba(47,128,237,0.25)',
                color: '#2F80ED',
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Build the Future
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-ink-900 leading-[1.1] tracking-tight mb-6">
              Deliver digital solutions with our engineering and technology jobs.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 mb-8">
              Our passionate teams of consultants and specialists pride themselves on developing cutting-edge advancements. From IT architecture and large-scale transformation with Syntera Tech Platinion, to building platforms and software to address key business challenges with Syntera Tech X, and more, we work on innovative projects that define—and create—the future of business.
            </p>

            <div className="flex flex-col gap-4 border-l-2 border-accent-500 pl-5">
              <h4 className="font-bold text-ink-900 text-sm uppercase tracking-wider">Our Core Entities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold text-ink-900">Syntera Tech Platinion</h5>
                  <p className="text-xs text-slate-500 mt-1">IT architecture and structural digital transformations.</p>
                </div>
                <div>
                  <h5 className="font-bold text-ink-900">Syntera Tech X</h5>
                  <p className="text-xs text-slate-500 mt-1">Building platforms and cutting-edge software solutions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[28px] overflow-hidden shadow-xl border border-slate-100" style={{ height: '420px' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Engineering team collaboration"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Background design accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10 blur-xl opacity-80" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 rounded-full -z-10 blur-xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────── WHY JOIN ─── */
function WhyJoinSection() {
  const cards = [
    {
      img: '/engineering-technology/Gain-diverse-work-experience.webp',
      title: 'Gain diverse work experience',
      desc: 'At Syntera Tech, no two days—or projects—are alike. Our clients span a wide variety of industries and regions, which gives you the chance to work with diverse, collaborative teams and build a well-rounded skill set that will benefit you in your career at Syntera Tech—and beyond.',
    },
    {
      img: '/engineering-technology/Access-world-class-learning-programs.webp',
      title: 'Access world class learning programs',
      desc: 'Our aim is to be the best place for our people to grow and thrive. Through our personalized career-step programs, our vast repository of learning resource modules, and our apprenticeship culture, we facilitate continuous learning for employees.',
    },
    {
      img: '/engineering-technology/Take-advantage-of-flexible-working-opportunities.webp',
      title: 'Take advantage of flexible working opportunities',
      desc: 'How, where, and when people work is not a one-size-fits-all approach. From reduced working hours to hybrid work and more, we empower Syntera team members to define their work environment and patterns to suit personal, client, and business needs.',
    },
  ];

  return (
    <section id="why-join" className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-14"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-4"
            style={{
              background: 'rgba(47,128,237,0.1)',
              border: '1px solid rgba(47,128,237,0.25)',
              color: '#2F80ED',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Empowerment & Culture
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 leading-[1.05] tracking-tight">
            Why join Syntera Tech?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: i * 0.12 }}
              className="group flex flex-col h-full bg-transparent"
            >
              <div className="rounded-[20px] overflow-hidden relative shadow-sm border border-slate-200/50 mb-6" style={{ height: '260px' }}>
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-ink-900 mb-3 leading-snug">
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-5 flex-1">
                {c.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 hover:text-accent-500 transition-colors duration-200"
                style={{ color: '#2F80ED' }}
              >
                Learn More
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────── RECOMMENDED ROLES ─── */
function RecommendedRolesSection() {
  const roles = [
    {
      title: 'Software Engineering Senior Manager - X Delivery',
      tags: [
        { icon: <PinIcon />, text: 'Available in 2 Locations' },
        { icon: <FlagIcon />, text: 'ID: 57665' },
      ],
    },
    {
      title: 'PLA Manager (Enterprise)',
      tags: [
        { icon: <BriefcaseIcon />, text: 'Technology and Engineering' },
        { icon: <FlagIcon />, text: 'ID: 57273' },
        { icon: <PinIcon />, text: 'Bengaluru, Karnataka, India' },
      ],
    },
    {
      title: 'Senior Solution Analyst, Responsible AI – X Delivery',
      tags: [
        { icon: <PinIcon />, text: 'Available in 2 Locations' },
        { icon: <FlagIcon />, text: 'ID: 54742' },
      ],
    },
  ];

  return (
    <section id="roles" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="flex justify-between items-end mb-14"
        >
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-4"
              style={{
                background: 'rgba(47,128,237,0.1)',
                border: '1px solid rgba(47,128,237,0.25)',
                color: '#2F80ED',
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Join the Team
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 leading-[1.05] tracking-tight">
              Recommended Roles
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              className="group rounded-[24px] p-8 flex flex-col justify-between cursor-pointer border border-slate-100 hover:shadow-lg transition-all duration-300 min-h-[300px]"
              style={{
                backgroundColor: '#F8FAFC',
              }}
            >
              <div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-800 leading-snug group-hover:text-[#2F80ED] transition-colors duration-300">
                  {r.title}
                </h3>

                <div className="mt-6 flex flex-col gap-2.5">
                  {r.tags.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      {t.icon}
                      <span>{t.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  className="rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#2F80ED',
                  }}
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <div className="mt-12 flex justify-end">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-800 border-b-2 border-slate-800 pb-1 hover:text-accent-500 hover:border-accent-500 transition-all duration-200"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────── ADDITIONAL OPPORTUNITIES ─── */
function AdditionalOpportunitiesSection() {
  const items = [
    {
      badge: 'Artificial Intelligence',
      title: 'Explore our careers in AI at Syntera Tech',
      desc: 'Whether you’re here to build cutting-edge solutions or leverage AI in your daily work, Syntera Tech gives you the tools, training, and opportunities to advance your understanding of AI.',
    },
    {
      badge: 'Careers Blog',
      title: 'Hear Syntera team members tell their stories',
      desc: 'Tune in to our careers blog every week to get a glimpse into our impactful work, learn what life at Syntera Tech is really like, discover the tips and tricks that will help you nail your interview, and more.',
    },
    {
      badge: 'Virtual Program',
      title: 'Discover what it’s like to work with us',
      desc: 'Interested in a career at Syntera Tech? Check out OneDay@Syntera Tech, our self-paced virtual experience program to get a feel for what it’s like to work at Syntera Tech through simulated, interactive challenges.',
    },
  ];

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-14"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-4"
            style={{
              background: 'rgba(47,128,237,0.1)',
              border: '1px solid rgba(47,128,237,0.25)',
              color: '#2F80ED',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Growth & Engagement
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 leading-[1.05] tracking-tight">
            Additional Opportunities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl">
            Explore more ways to grow, learn, and engage with Syntera Tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: i * 0.12 }}
              className="group rounded-2xl p-7 flex flex-col justify-between bg-white border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <span
                  className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-5"
                  style={{
                    backgroundColor: 'rgba(47,128,237,0.06)',
                    color: '#2F80ED',
                  }}
                >
                  {it.badge}
                </span>

                <h3 className="font-display text-xl font-bold text-ink-900 mb-3 leading-snug group-hover:text-[#2F80ED] transition-colors duration-300">
                  {it.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {it.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-1.5">
                <span className="text-xs font-bold" style={{ color: '#2F80ED' }}>
                  Explore Opportunities
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2F80ED"
                  strokeWidth="2.5"
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────── READY TO APPLY ─── */
function ReadyToApplySection() {
  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-14"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 leading-[1.05] tracking-tight">
            Ready To apply?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Introduce Yourself (Double width: 6 cols out of 12) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(11,26,46,0.4)' }}
            className="lg:col-span-6 group relative rounded-[28px] overflow-hidden flex flex-col justify-between p-8 sm:p-10 cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: '#0B1A2E',
              minHeight: '280px',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Background geometric shapes on the right */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-20 flex flex-col justify-center items-end pr-6">
              <svg width="100%" height="80%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#2F80ED" />
                <path d="M70 10L110 50L70 90" stroke="#60A5FA" strokeWidth="6" />
              </svg>
            </div>

            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Introduce Yourself.
              </h3>
              <p className="text-sm leading-relaxed mt-4 max-w-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Create a profile to get notified about Syntera Tech jobs and career news that match your interests.
              </p>
            </div>

            <div className="mt-8 self-start">
              <div
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: '#2F80ED',
                }}
              >
                Join Our Talent Community
              </div>
            </div>
          </motion.div>

          {/* Card 2: Employee Benefits (3 cols out of 12) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease, delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(47,128,237,0.15)' }}
            className="lg:col-span-3 group rounded-[28px] p-8 flex flex-col justify-between cursor-pointer border border-[#2F80ED]/10 transition-all duration-300 min-h-[280px]"
            style={{
              backgroundColor: '#EAF3FF',
            }}
          >
            <div>
              <h3 className="font-display text-2xl font-extrabold text-ink-900 leading-tight" style={{ color: '#1E293B' }}>
                Employee Benefits
              </h3>
              <p className="text-sm leading-relaxed mt-4" style={{ color: '#475569' }}>
                Discover the programs and policies designed to support your wellbeing, growth, and flexibility.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-800 border-b-2 border-slate-800 pb-0.5 hover:text-accent-500 hover:border-accent-500 transition-all duration-200"
                style={{ color: '#2F80ED', borderColor: '#2F80ED' }}
              >
                Explore Benefits
              </a>
            </div>
          </motion.div>

          {/* Card 3: Need Assistance? (3 cols out of 12) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(47,128,237,0.15)' }}
            className="lg:col-span-3 group rounded-[28px] p-8 flex flex-col justify-between cursor-pointer border border-[#2F80ED]/10 transition-all duration-300 min-h-[280px]"
            style={{
              backgroundColor: '#EAF3FF',
            }}
          >
            <div>
              <h3 className="font-display text-2xl font-extrabold text-ink-900 leading-tight" style={{ color: '#1E293B' }}>
                Need Assistance?
              </h3>
              <p className="text-sm leading-relaxed mt-4" style={{ color: '#475569' }}>
                Have questions about our recruiting process? We're happy to help.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-800 border-b-2 border-slate-800 pb-0.5 hover:text-accent-500 hover:border-accent-500 transition-all duration-200"
                style={{ color: '#2F80ED', borderColor: '#2F80ED' }}
              >
                Visit Our FAQs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────── ICONS ─── */
function PinIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  );
}
