import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)',
  backgroundSize: '26px 26px'
};

export default function InterviewProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ExpectSection />
      <LookForSection />
      <TipsSection />
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
      {/* Background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Interview-Timeline/Interview-Process.webp"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.22 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.55) 40%, rgba(11,17,32,0.65) 70%, rgba(11,17,32,0.97) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(11,17,32,0.85) 0%, rgba(11,17,32,0.4) 50%, transparent 100%)',
          }}
        />
      </div>

      {/* Glow orbs */}
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

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
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
              Careers & Hiring
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.1 }}
              className="font-display font-extrabold leading-[1.06] tracking-tight text-white mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Interview{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #BFDBFE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Process
              </span>
            </motion.h1>

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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.28 }}
              className="text-base sm:text-lg leading-[1.8] mb-10 max-w-lg"
              style={{ color: 'rgba(255,255,255,0.68)' }}
            >
              Our consulting interview process is a two-way conversation. As you learn about us, we'll get to know your skills, achievements, and experiences. We value diverse voices and want you to bring your personality to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.42 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#expect"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300"
                style={{ backgroundColor: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.42)', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}
              >
                What To Expect
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#criteria"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
                style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                Hiring Criteria
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.62 }}
              className="mt-14 flex flex-wrap gap-8"
            >
              {[
                { val: '4', label: 'Interview Stages' },
                { val: '2-4', label: 'Weeks Process' },
                { val: '100%', label: 'Human Decision' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-extrabold font-display text-white leading-none">{s.val}</div>
                  <div className="text-[11px] mt-1 font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.42)' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Framed image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div
              className="relative rounded-[28px] overflow-hidden"
              style={{
                height: '520px',
                boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)',
              }}
            >
              <img
                src="/Interview-Timeline/Interview-Process.webp"
                alt="Interview Process"
                className="w-full h-full object-cover object-center"
                style={{ opacity: 0.88 }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(11,17,32,0.7) 100%)' }}
              />
              <div
                className="absolute bottom-5 left-5 px-4 py-2.5 rounded-xl flex items-center gap-2.5 backdrop-blur-md"
                style={{ background: 'rgba(11,17,32,0.65)', border: '1px solid rgba(255,255,255,0.14)' }}
              >
                <span className="h-2 w-2 rounded-full bg-[#2F80ED] animate-pulse" />
                <span className="text-white text-[11px] font-bold uppercase tracking-wider">Syntera Consulting Hiring</span>
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-5 right-5 rounded-2xl px-4 py-3"
                style={{ background: 'rgba(11,17,32,0.7)', border: '1px solid rgba(47,128,237,0.35)', backdropFilter: 'blur(12px)' }}
              >
                <div className="text-lg font-extrabold text-white leading-none">4 Steps</div>
                <div className="text-[10px] mt-0.5 font-semibold uppercase tracking-wider" style={{ color: 'rgba(96,165,250,0.85)' }}>To Your Role</div>
              </motion.div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full -z-10" style={{ background: 'rgba(47,128,237,0.12)', filter: 'blur(32px)' }} />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full -z-10" style={{ background: 'rgba(99,102,241,0.1)', filter: 'blur(24px)' }} />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.28)' }}>Scroll</span>
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

/* ─────────────────────────────────────────────────── WHAT TO EXPECT ─── */
function ExpectSection() {
  const steps = [
    {
      id: 1,
      title: 'Application',
      description: 'Submit your application by clicking on “Apply” and logging into our portal.',
      image: '/Interview-Timeline/Application.webp',
      link: 'Using AI In Your Application Process',
      href: '/using-ai-application-process',
      isRoute: true,
    },
    {
      id: 2,
      title: 'Skill Interview',
      description: 'In this traditional interview, we explore your experience, skills, and motivation.',
      image: '/Interview-Timeline/Skill-Interview.webp',
      link: null,
    },
    {
      id: 3,
      title: 'Case Interview',
      description: 'For client facing roles, we assess problem-solving and analytical skills in a case interview.',
      image: '/Interview-Timeline/Case-Interview.webp',
      link: 'Case Interview Preparation',
      href: '/case-interview-prep',
      isRoute: true,
    },
    {
      id: 4,
      title: 'Team Interview',
      description: 'If you’re applying for a client-facing role, we will assess your problem-solving and communication.',
      image: '/Interview-Timeline/Team-Interview.webp',
      link: null,
    },
  ];

  return (
    <section id="expect" className="py-14 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#2F80ED] rounded-full blur-[140px]" />
        <div className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-[#60A5FA] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-10 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] mb-6 shadow-sm"
            style={{
              background: 'rgba(47,128,237,0.1)',
              border: '1px solid rgba(47,128,237,0.25)',
              color: '#2F80ED',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(47,128,237,0.15)' }}
            transition={{ duration: 0.3 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F80ED]" />
            Interview Timeline
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 leading-[1.1] mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            What to <span style={{ color: '#2F80ED' }}>expect</span>
          </motion.h2>
          <motion.p
            className="text-slate-500 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Throughout our consulting interview process, you’ll have the chance to showcase your problem-solving skills, curiosity, and collaboration style.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 items-start">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                className="flex-1 relative flex flex-col items-center"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.85, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative mb-8 flex justify-center w-full">
                  <div className="relative">
                    <motion.div
                      className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-[3px] border-dashed absolute inset-0"
                      style={{ borderColor: 'rgba(47,128,237,0.35)' }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full flex items-center justify-center relative">
                      <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                        <img src={step.image} alt={step.title} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-[#2F80ED]/10 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                      <div className="absolute -top-2 -left-2 w-12 h-12 sm:w-14 sm:h-14 bg-[#2F80ED] text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold shadow-xl border-4 border-[#F8FAFC]">
                        {String(step.id).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center px-2 flex flex-col items-center flex-1">
                  <motion.h3
                    className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    whileHover={{ scale: 1.03, color: '#2F80ED' }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-slate-500 leading-relaxed text-sm sm:text-base max-w-xs mx-auto mb-5"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  >
                    {step.description}
                  </motion.p>
                  
                  {step.link && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                      className="mt-auto pt-2"
                    >
                      {step.isRoute ? (
                        <Link
                          to={step.href}
                          className="inline-flex items-center gap-1 text-xs font-bold border-b pb-0.5 border-[#2F80ED]/30 text-[#2F80ED] hover:text-[#1E5DB8] hover:border-[#1E5DB8] transition-all duration-200"
                        >
                          {step.link}
                        </Link>
                      ) : (
                        <a
                          href={step.href || '#'}
                          className="inline-flex items-center gap-1 text-xs font-bold border-b pb-0.5 border-[#2F80ED]/30 text-[#2F80ED] hover:text-[#1E5DB8] hover:border-[#1E5DB8] transition-all duration-200"
                        >
                          {step.link}
                        </a>
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:flex items-center justify-center px-2 -mt-24"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.15 + 0.6, duration: 0.4, type: 'spring', bounce: 0.3 }}
                >
                  <div className="relative flex items-center justify-center w-12 h-12">
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-[#2F80ED] rounded-full opacity-15 blur-md"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </motion.div>
              )}
              
              {index < steps.length - 1 && (
                <motion.div
                  className="lg:hidden flex justify-center my-6"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.15 + 0.8 }}
                >
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── hiring criteria ─── */
function LookForSection() {
  const attributes = [
    {
      title: 'Integrity',
      icon: <GraduationIcon />,
      color: '#2F80ED',
      bgColor: 'rgba(47,128,237,0.06)',
      borderColor: 'rgba(47,128,237,0.15)',
    },
    {
      title: 'Intellectual Curiosity',
      icon: <CuriosityIcon />,
      color: '#8B5CF6',
      bgColor: 'rgba(139,92,246,0.06)',
      borderColor: 'rgba(139,92,246,0.15)',
    },
    {
      title: 'Creative Thinking',
      icon: <CreativeIcon />,
      color: '#3B82F6',
      bgColor: 'rgba(59,130,246,0.06)',
      borderColor: 'rgba(59,130,246,0.15)',
    },
    {
      title: 'Collaborative Mindset',
      icon: <CollabIcon />,
      color: '#0EA5E9',
      bgColor: 'rgba(14,165,233,0.06)',
      borderColor: 'rgba(14,165,233,0.15)',
    },
    {
      title: 'Drive',
      icon: <DriveIcon />,
      color: '#1E293B',
      bgColor: 'rgba(30,41,59,0.04)',
      borderColor: 'rgba(30,41,59,0.1)',
    },
  ];

  return (
    <section id="criteria" className="py-12 sm:py-16" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-10 max-w-4xl"
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
            Hiring Criteria
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-5">
            What our consulting interviewers look for
          </h2>
          <p className="text-base leading-relaxed text-slate-500 max-w-3xl">
            Spotting trends. Advising senior leaders. Cutting fresh tracks. Moving quickly and creatively. Finding storylines in data sets. Making the world better. Syntera Consulting' experienced hires do all this and more. Here are just a few examples of the value our experienced professionals deliver.
          </p>
        </motion.div>

        {/* Attributes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-stretch">
          {attributes.map((attr, i) => (
            <motion.div
              key={attr.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-200/40 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div 
                className="h-16 w-16 mb-6 flex items-center justify-center rounded-2xl transition-all duration-300"
                style={{ 
                  backgroundColor: attr.bgColor,
                  color: attr.color,
                  border: `1px solid ${attr.borderColor}`
                }}
              >
                {attr.icon}
              </div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-800 leading-snug">
                {attr.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────── TIPS ─── */
// TEMPORARILY HIDDEN: Advice & Insights — Syntera Consulting consultant interview tips
function TipsSection() { return null; }

/* ───────────────────────────────────────────── READY TO APPLY ─── */
function ReadyToApplySection() {
  return (
    <section className="py-12 sm:py-16 bg-[#FAFAF8] overflow-hidden" style={DOT_BG}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-8"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-900 leading-[1.05] tracking-tight">
            Ready To Apply?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Find a Job (Double width: 6 cols out of 12) */}
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
            {/* Geometric stripes background overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-20 flex flex-col justify-center items-end pr-6">
              <svg width="100%" height="80%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="#2F80ED" />
                <path d="M70 10L110 50L70 90" stroke="#60A5FA" strokeWidth="6" />
              </svg>
            </div>

            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Find a Job at Syntera Consulting
              </h3>
              <p className="text-sm leading-relaxed mt-4 max-w-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Discover opportunities that match your ambitions. At Syntera Consulting, you’ll work with exceptional people, solve meaningful challenges, and grow your career across our global offices and disciplines.
              </p>
            </div>

            <div className="mt-8 self-start">
              <div
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: '#2F80ED',
                }}
              >
                View Jobs
              </div>
            </div>
          </motion.div>

          {/* Card 2: Syntera Consulting on Campus (3 cols out of 12) */}
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
                Syntera Consulting on Campus
              </h3>
              <p className="text-sm leading-relaxed mt-4" style={{ color: '#475569' }}>
                Explore opportunities to meet our team on campus or online, learn about recruiting timelines, and get connected with Syntera Consulting at your campus.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-800 border-b-2 border-slate-800 pb-0.5 hover:text-accent-500 hover:border-accent-500 transition-all duration-200"
                style={{ color: '#2F80ED', borderColor: '#2F80ED' }}
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Card 3: FAQs (3 cols out of 12) */}
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
                Frequently Asked Questions
              </h3>
              <p className="text-sm leading-relaxed mt-4" style={{ color: '#475569' }}>
                Find answers to common questions about benefits, the application process, undergraduate programs, profile expectations, and more.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-800 border-b-2 border-slate-800 pb-0.5 hover:text-accent-500 hover:border-accent-500 transition-all duration-200"
                style={{ color: '#2F80ED', borderColor: '#2F80ED' }}
              >
                Explore FAQs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────── SVG ICONS ─── */
function GraduationIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12v4c0 2 2.5 3.5 6 3.5s6-1.5 6-3.5v-4" />
      <path d="M12 10h5v6" />
      <circle cx="17" cy="17.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function CuriosityIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 5V2M12 5V2M15 5V2" />
      <path d="M9 19v3M12 19v3M15 19v3" />
      <path d="M5 9H2M5 12H2M5 15H2" />
      <path d="M19 9h3M19 12h3M19 15h3" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 9.5V7h2" />
      <path d="M9.5 12H7v2" />
    </svg>
  );
}

function CreativeIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c1.2-1.2 2-2.8 2-4.5A5 5 0 007 9.5c0 1.7.8 3.3 2 4.5v2h6v-2z" />
      <path d="M9 18h6v2H9z" />
      <path d="M10.5 22h3v-2h-3z" />
      <path d="M12 2v2M4.9 4.9l1.4 1.4M2 9.5h2M19.1 4.9l-1.4 1.4M20 9.5h2" />
    </svg>
  );
}

function CollabIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Left head */}
      <path d="M3 21v-1a3 3 0 013-3h2a3 3 0 013 3v1" />
      <circle cx="7" cy="12" r="3" />
      
      {/* Right head */}
      <path d="M13 21v-1a3 3 0 013-3h2a3 3 0 013 3v1" />
      <circle cx="17" cy="12" r="3" />
      
      {/* Left speech bubble */}
      <path d="M5 3h3.5a1 1 0 011 1v1.5a1 1 0 01-1 1H7l-1.5 1.5V6.5H5a1 1 0 01-1-1V4a1 1 0 011-1z" />
      
      {/* Right speech bubble */}
      <path d="M15.5 2H19a1 1 0 011 1v1.5a1 1 0 01-1 1h-1.5L16 7V5.5h-0.5a1 1 0 01-1-1V3a1 1 0 011-1z" />
    </svg>
  );
}

function DriveIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 010 8h-1" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <line x1="6" y1="2" x2="14" y2="2" />
    </svg>
  );
}
