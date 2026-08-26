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

export default function CaseInterviewPrepPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ExpectSection />
      <DosAndDontsSection />
      <GetReadySection />
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
          src="/Interview-Timeline/Case-Interview.webp"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.22 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.55) 40%, rgba(11,17,32,0.65) 70%, rgba(11,17,32,0.97) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(11,17,32,0.85) 0%, rgba(11,17,32,0.4) 50%, transparent 100%)' }} />
      </div>
      <motion.div aria-hidden animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="pointer-events-none absolute top-[-80px] right-[-60px] w-[700px] h-[600px] rounded-full blur-[130px]" style={{ background: 'rgba(47,128,237,0.15)', zIndex: 1 }} />
      <motion.div aria-hidden animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.13, 0.06] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }} className="pointer-events-none absolute bottom-0 left-[-80px] w-[500px] h-[400px] rounded-full blur-[110px]" style={{ background: 'rgba(99,102,241,0.12)', zIndex: 1 }} />

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-7" style={{ border: '1px solid rgba(47,128,237,0.35)', background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              Preparation Guide
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease, delay: 0.1 }} className="font-display font-extrabold leading-[1.06] tracking-tight text-white mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Case Interview{' '}
              <span style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #BFDBFE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Preparation</span>
            </motion.h1>
            <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, ease, delay: 0.55 }} style={{ height: '1.5px', background: 'linear-gradient(90deg, rgba(47,128,237,0.7), transparent)', maxWidth: '340px', marginBottom: '1.6rem' }} />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.28 }} className="text-base sm:text-lg leading-[1.8] mb-10 max-w-lg" style={{ color: 'rgba(255,255,255,0.68)' }}>
              Ready to go beyond and solve the world's biggest problems? Demystify case study interviews with our prep quizzes and top Syntera Consulting tips to succeed.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.42 }} className="flex flex-wrap gap-4">
              <a href="#expect" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300" style={{ backgroundColor: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.42)', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}>
                What To Expect
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <a href="#quizzes" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300" style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Practice Quizzes
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, ease, delay: 0.3 }} className="relative hidden lg:block">
            <div className="relative rounded-[28px] overflow-hidden" style={{ height: '520px', boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)' }}>
              <img src="/Interview-Timeline/Case-Interview.webp" alt="Case Interview" className="w-full h-full object-cover object-center" style={{ opacity: 0.88 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(11,17,32,0.7) 100%)' }} />
              <div className="absolute bottom-5 left-5 px-4 py-2.5 rounded-xl flex items-center gap-2.5 backdrop-blur-md" style={{ background: 'rgba(11,17,32,0.65)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <span className="h-2 w-2 rounded-full bg-[#2F80ED] animate-pulse" />
                <span className="text-white text-[11px] font-bold uppercase tracking-wider">Case Prep</span>
              </div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-5 right-5 rounded-2xl px-4 py-3" style={{ background: 'rgba(11,17,32,0.7)', border: '1px solid rgba(47,128,237,0.35)', backdropFilter: 'blur(12px)' }}>
                <div className="text-lg font-extrabold text-white leading-none">3 Cases</div>
                <div className="text-[10px] mt-0.5 font-semibold uppercase tracking-wider" style={{ color: 'rgba(96,165,250,0.85)' }}>To Practice</div>
              </motion.div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full -z-10" style={{ background: 'rgba(47,128,237,0.12)', filter: 'blur(32px)' }} />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full -z-10" style={{ background: 'rgba(99,102,241,0.1)', filter: 'blur(24px)' }} />
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.28)' }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} className="h-8 w-5 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-white/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────────── WHAT TO EXPECT ─── */
function ExpectSection() {
  return (
    <section id="expect" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left col */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            className="lg:col-span-5"
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
              Overview
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              What To Expect
            </h2>
          </motion.div>

          {/* Right col */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="lg:col-span-7 text-base sm:text-lg leading-relaxed text-slate-600 space-y-6"
          >
            <p>
              During a case study interview, or problem-solving interview, you will be presented with a realistic business challenge. Your task is to work through the problem step by step: structuring your approach, asking thoughtful questions, analyzing data, performing quick calculations, and identifying the most important factors.
            </p>
            <p>
              Throughout the process, you’re expected to communicate clearly, think logically, and demonstrate both business intuition and creativity. What makes case study interviews different is that there isn’t always a single “right” answer; what matters most is how you approach the problem and the quality of your reasoning.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────── DO'S & DON'TS ─── */
function DosAndDontsSection() {
  const dos = [
    { label: 'Listen Actively', icon: <ListenIcon /> },
    { label: 'Be Yourself', icon: <BeYourselfIcon /> },
    { label: 'Think Structurally', icon: <ThinkStructurallyIcon /> },
    { label: 'Communicate Clearly', icon: <CommunicateClearlyIcon /> },
    { label: 'Classify Assumptions', icon: <ClassifyIcon /> },
    { label: 'Show Your Thinking', icon: <ShowThinkingIcon /> },
  ];

  const donts = [
    { label: 'Panic Under Pressure', icon: <PanicIcon /> },
    { label: 'Rush Answers', icon: <RushIcon /> },
    { label: 'Overcomplicate Solutions', icon: <OvercomplicateIcon /> },
    { label: 'Ignore Feedback', icon: <IgnoreIcon /> },
    { label: 'Stay Silent', icon: <StaySilentIcon /> },
    { label: 'Interrupt Answer', icon: <InterruptIcon /> },
  ];

  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        
        {/* DO'S CONTAINER */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease }}
            className="mb-10 flex items-center gap-4"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Do's
            </h2>
            <div className="h-1 flex-1 bg-blue-200/50 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
            {dos.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[160px]"
              >
                <div className="h-14 w-14 mb-4 flex items-center justify-center rounded-xl bg-blue-50 text-[#2F80ED]">
                  {item.icon}
                </div>
                <span className="font-display font-extrabold text-sm sm:text-base text-slate-800 leading-tight">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DON'TS CONTAINER */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease }}
            className="mb-10 flex items-center gap-4"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Don'ts
            </h2>
            <div className="h-1 flex-1 bg-slate-200/80 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
            {donts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[160px]"
              >
                <div className="h-14 w-14 mb-4 flex items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                  {item.icon}
                </div>
                <span className="font-display font-extrabold text-sm sm:text-base text-slate-800 leading-tight">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────── GET READY (QUIZZES) ─── */
function GetReadySection() {
  const quizzes = [
    {
      title: 'Set A Climate Strategy',
      desc: 'The CEO of a global company wants to reduce their environmental impact. Build the business case for setting a climate target and determine what initiatives to undertake to achieve it.',
      img: '/AI-Applications/Interactive-Practice/Set-Climate-Strategy.webp',
      color: '#2F80ED', // Blue
      bgColor: 'rgba(47,128,237,0.06)'
    },
    {
      title: 'Restore Customer Satisfaction',
      desc: 'A digital bank has dropped in customer satisfaction rankings and the CEO aims to bring it back to the top three. Refresh the bank’s digital strategy and recommend next steps to the CEO.',
      img: '/AI-Applications/Interactive-Practice/Restore-CustomerSatisfaction.webp',
      color: '#8B5CF6', // Purple
      bgColor: 'rgba(139,92,246,0.06)'
    },
    {
      title: 'Support A Cloud Migration',
      desc: 'A consumer goods company wants to upgrade their enterprise resource planning (ERP) system. Cloud migration is a requisite of the upgrade. Evaluate their options and recommend an approach to the CEO.',
      img: '/AI-Applications/Interactive-Practice/Support-Cloud-Migration.webp',
      color: '#3B82F6', // Blue
      bgColor: 'rgba(59,130,246,0.06)'
    }
  ];

  return (
    <section id="quizzes" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-10"
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
            Interactive Practice
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
            Get Ready
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-3xl">
            Use our case interview prep quizzes to see if you’re ready for your case study interview.
          </p>
        </motion.div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quizzes.map((qz, i) => (
            <motion.div
              key={qz.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.75, ease, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-slate-100 flex-1"
              style={{
                outline: `2px solid ${qz.color}`,
                outlineOffset: '-2px'
              }}
            >
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={qz.img}
                  alt={qz.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/10" />
              </div>

              {/* Content */}
              <div className="p-7 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-800 leading-tight mb-4">
                    {qz.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 mb-6">
                    {qz.desc}
                  </p>
                </div>

                <div>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider transition-colors duration-200"
                    style={{ color: qz.color }}
                  >
                    Take The Quiz
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>
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
    <section className="py-12 sm:py-16 bg-[#FAFAF8] overflow-hidden" style={DOT_BG}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-8"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
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
              <h3 className="font-display text-2xl font-extrabold text-slate-800 leading-tight" style={{ color: '#1E293B' }}>
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
              <h3 className="font-display text-2xl font-extrabold text-slate-800 leading-tight" style={{ color: '#1E293B' }}>
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

/* ── DO'S ICONS ── */
function ListenIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" />
      <path d="M19 10v1a7 7 0 01-14 0v-1" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  );
}

function BeYourselfIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
    </svg>
  );
}

function ThinkStructurallyIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Structural layout: visual gears or structure hierarchy */}
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="8" y="14" width="8" height="7" rx="1" />
      <path d="M7 10v4h2" />
      <path d="M17 10v4h-2" />
    </svg>
  );
}

function CommunicateClearlyIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <path d="M15.54 8.46a5 5 0 010 7.07" />
      <path d="M19.07 4.93a10 10 0 010 14.14" />
    </svg>
  );
}

function ClassifyIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Folder/Classification outline with tags */}
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
      <line x1="7" y1="12" x2="17" y2="12" />
      <line x1="7" y1="16" x2="13" y2="16" />
    </svg>
  );
}

function ShowThinkingIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Thought bubbles representing communication */}
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

/* ── DON'TS ICONS ── */
function PanicIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function RushIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
      {/* Rush lines around clock */}
      <path d="M2 12h2M20 12h2" />
    </svg>
  );
}

function OvercomplicateIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Intricate circuits/nodes */}
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 7h10v10H7z" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    </svg>
  );
}

function IgnoreIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Speech bubble crossed out */}
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <line x1="8" y1="8" x2="16" y2="16" />
      <line x1="16" y1="8" x2="8" y2="16" />
    </svg>
  );
}

function StaySilentIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Silent speaker / Crossed microphone */}
      <line x1="1" y1="1" x2="23" y2="23" />
      <path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V5a3 3 0 00-5.94-.6" />
      <path d="M17 11.5a7 7 0 01-12 0v-1" />
    </svg>
  );
}

function InterruptIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Interrupted/slashed line chart */}
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}
