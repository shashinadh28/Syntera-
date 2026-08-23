import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];

/* CaseInterviewPrep-inspired: subtle dark dots on warm off-white */
const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.10) 1.5px, transparent 1.5px)',
  backgroundSize: '26px 26px',
};

const ArrowRight = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ══ Label pill shared ══ */
const Pill = ({ children, color = '#2F80ED' }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
    style={{ background: `${color}14`, border: `1px solid ${color}30`, color }}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" />
    {children}
  </span>
);

/* ══ Section heading shared ══ */
const SectionHeading = ({ pill, title, subtitle, pillColor }) => (
  <div className="mb-14">
    <Pill color={pillColor}>{pill}</Pill>
    <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-4">{title}</h2>
    {subtitle && <p className="text-base sm:text-lg leading-relaxed text-slate-500 max-w-3xl">{subtitle}</p>}
  </div>
);

export default function AgenticAIPage() {
  useEffect(() => {
    document.title = 'Agentic AI — Autonomous Decision-Making | Syntera Solutions';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhatIsAgenticSection />
      <TheChangeAgentSection />
      <CoreComponentsSection />
      <HistorySection />
      <MarketPerspectiveSection />
      <OurPerspectiveSection />
      <ChallengesSection />
      <BenefitsSection />
      <TGSPartnerPortfolioSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ HERO ═══ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>

      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/agentic-ai/agentic-ai-homepage.png"
          alt="Agentic AI — Autonomous Decision-Making"
          className="w-full h-full object-cover object-center"
        />
        {/* Heavy dark gradient left → transparent right — matches screenshot */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(105deg, rgba(4,10,30,0.97) 0%, rgba(4,10,30,0.92) 38%, rgba(4,10,30,0.5) 60%, rgba(4,10,30,0.05) 100%)'
        }} />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40" style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(4,10,30,0.9) 100%)'
        }} />
      </div>

      {/* Animated blue glow — left accent */}
      <motion.div aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-[-80px] left-[-60px] w-[600px] h-[500px] rounded-full z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(47,128,237,0.45) 0%, transparent 70%)', filter: 'blur(72px)' }}
      />

      {/* Content — left side */}
      <div
        className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-16 flex flex-col justify-center"
        style={{ minHeight: '100vh', paddingTop: '7rem', paddingBottom: '5rem' }}
      >
        <div style={{ maxWidth: '580px' }}>

          {/* Pill label */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(8,16,48,0.88)', border: '1px solid rgba(47,128,237,0.55)',
              color: '#93C5FD', fontWeight: 700, fontSize: '11px',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '8px 16px', borderRadius: '50px',
              backdropFilter: 'blur(8px)', marginBottom: '2rem',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#60A5FA', display: 'inline-block' }} />
            Agentic AI
          </motion.span>

          {/* Giant headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.25rem)',
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '1.5rem',
            }}
          >
            Agentic AI{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 55%, #BFDBFE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Autonomous<br />Decision-Making
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.25 }}
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.1rem)',
              color: 'rgba(255,255,255,0.76)',
              lineHeight: 1.78,
              maxWidth: '460px',
              marginBottom: '2.5rem',
            }}
          >
            Advancing Problem-Solving in AI — where intelligent agents perceive, reason, and act with unprecedented autonomy to solve complex enterprise challenges.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.4 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}
          >
            <a
              href="#what-is-agentic"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#2F80ED', color: '#fff',
                fontWeight: 700, fontSize: '0.925rem',
                padding: '14px 28px', borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 8px 28px rgba(47,128,237,0.55)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1E5DB8'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2F80ED'; }}
            >
              Explore Agentic AI
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '2px solid rgba(255,255,255,0.38)',
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 700, fontSize: '0.925rem',
                padding: '14px 28px', borderRadius: '50px',
                textDecoration: 'none', backgroundColor: 'transparent',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.09)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              Talk to an Expert
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ height: '32px', width: '20px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '6px' }}
        >
          <div style={{ height: '6px', width: '6px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.35)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════ WHAT IS AGENTIC AI — white ═══ */
function WhatIsAgenticSection() {
  return (
    <section id="what-is-agentic" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }}>
            <Pill>What is Agentic AI</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
              The Next Frontier of Enterprise AI
            </h2>
            <p className="text-base leading-relaxed text-slate-500 mb-5">
              Agentic AI operates through autonomous AI agents specifically designed to perform complex tasks by interpreting contextual information, making decisions based on that interpretation and executing actions aligned with predetermined objectives.
            </p>
            <p className="text-base leading-relaxed text-slate-500 mb-8">
              This functionality bridges the traditional gap between static programming approaches and the dynamic adaptability required for modern enterprise challenges. By combining sophisticated decision-making capabilities with contextual understanding and adaptive behavior, agentic AI enables the automation of intricate work.
            </p>
            <a href="#change-agent"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200"
              style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}>
              Learn More <ArrowRight size={12} />
            </a>
          </motion.div>

          {/* Right visual — 3 glass cards */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="grid grid-cols-1 gap-4">
            {[
              { icon: '👁️', title: 'Perceive', desc: 'Gather real-time contextual signals from data streams, APIs and environment sensors.' },
              { icon: '🧠', title: 'Reason', desc: 'Apply multi-step planning and large language model intelligence to evaluate options.' },
              { icon: '⚡', title: 'Act', desc: 'Execute autonomous actions, trigger workflows and self-correct based on outcomes.' },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.55, ease, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(47,128,237,0.12)' }}
                className="flex items-start gap-5 rounded-2xl p-6 bg-white transition-all duration-300"
                style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}>
                <div className="h-12 w-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.15)' }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-slate-800 text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ THE CHANGE AGENT — #F8FAFC dot bg ═══ */
function TheChangeAgentSection() {
  return (
    <section id="change-agent" className="py-24 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="max-w-3xl mb-16">
          <Pill>The Change Agent</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-5">
            Technology Investments at a Crucial Inflection Point
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-500">
            Technology investments—especially in AI—remain top priorities for businesses right now to improve efficiency and problem-solving. Agentic AI, the latest generation of AI for enterprises, offers the groundbreaking ability to translate knowledge into autonomous action to facilitate productivity and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reinforcement Learning card */}
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }}
            whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(47,128,237,0.15)' }}
            className="bg-white rounded-3xl p-8 sm:p-10 transition-all duration-300"
            style={{ border: '1.5px solid rgba(47,128,237,0.2)', boxShadow: '0 8px 40px rgba(47,128,237,0.08)' }}>
            <div className="h-1 w-12 rounded-full mb-6" style={{ background: '#2F80ED' }} />
            <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-4">Reimagining Problem-Solving</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Agentic AI operates through autonomous AI agents specifically designed to perform complex tasks by interpreting contextual information, making decisions based on that interpretation and executing actions aligned with predetermined objectives. This functionality bridges the traditional gap between static programming approaches and the dynamic adaptability required for modern enterprise challenges.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Contextual Understanding', 'Adaptive Behavior', 'Decision Intelligence', 'Autonomous Execution'].map(tag => (
                <div key={tag} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700"
                  style={{ background: 'rgba(47,128,237,0.06)', border: '1px solid rgba(47,128,237,0.12)' }}>
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contextual Analysis card */}
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease, delay: 0.12 }}
            whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(14,165,233,0.12)' }}
            className="bg-white rounded-3xl p-8 sm:p-10 transition-all duration-300"
            style={{ border: '1.5px solid rgba(14,165,233,0.2)', boxShadow: '0 8px 40px rgba(14,165,233,0.06)' }}>
            <div className="h-1 w-12 rounded-full mb-6" style={{ background: '#0EA5E9' }} />
            <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-4">Human-Machine Collaboration</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              By combining sophisticated decision-making capabilities with contextual understanding and adaptive behavior, agentic AI enables the automation of intricate work. This represents a fundamental shift in how enterprises approach complex operational challenges.
            </p>
            <div className="rounded-2xl p-5" style={{ background: 'linear-gradient(135deg,#0F172A 0%,#1E3A6E 100%)' }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(147,197,253,0.7)' }}>Enterprise Impact</p>
              <p className="text-white font-extrabold text-xl">Automation of intricate, multi-step enterprise workflows</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ CORE COMPONENTS — white grid bg ═══ */
function CoreComponentsSection() {
  const components = [
    { color: '#2F80ED', title: 'AI Agents', img: '/agentic-ai/Blueprint-Architecture/AI-Agents.webp', desc: 'Autonomous software entities that perceive their environment, make decisions, and take actions to achieve specific goals without continuous human intervention.' },
    { color: '#1E5DB8', title: 'Orchestration Layer', img: '/agentic-ai/Blueprint-Architecture/Orchestration-Layer.webp', desc: 'Coordinates multiple agents, manages task distribution, and ensures coherent execution across complex multi-agent workflows.' },
    { color: '#0EA5E9', title: 'Tool Integration', img: '/agentic-ai/Blueprint-Architecture/Tool-Integration.webp', desc: 'Enables agents to interact with external APIs, databases, and services—extending their capabilities far beyond language model boundaries.' },
    { color: '#6366F1', title: 'Memory Systems', img: '/agentic-ai/Blueprint-Architecture/Memory-Systems.webp', desc: 'Short-term and long-term memory architectures that allow agents to retain context, learn from interactions, and improve over time.' },
    { color: '#7C3AED', title: 'Goal Management', img: '/agentic-ai/Blueprint-Architecture/Goal-Management.webp', desc: 'Hierarchical planning systems that break complex objectives into achievable sub-tasks and dynamically adapt to changing conditions.' },
    { color: '#059669', title: 'Feedback Loops', img: '/agentic-ai/Blueprint-Architecture/Feedback-Loops.webp', desc: 'Continuous evaluation and self-correction mechanisms that improve agent performance through reinforcement and error analysis.' },
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="mb-16">
          <Pill>Core Components</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">Blueprint Architecture</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              whileHover={{ y: -8, boxShadow: `0 20px 56px ${c.color}22` }}
              className="group bg-white rounded-3xl overflow-hidden flex flex-col cursor-default transition-all duration-300"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}>
              {/* Image banner */}
              <div className="relative w-full overflow-hidden" style={{ height: '200px' }}>
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 50%, ${c.color}33 100%)` }} />
              </div>
              {/* Content */}
              <div className="p-7 flex flex-col gap-3 flex-1">
                <div className="h-[2px] w-8 rounded-full group-hover:w-16 transition-all duration-300" style={{ background: c.color }} />
                <h3 className="font-display font-extrabold text-slate-800 text-lg">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ HISTORY — image only ═══ */
function HistorySection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="mb-14 text-center">
          <Pill>History</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">History of Agentic AI</h2>
        </motion.div>

        {/* Image constrained to 70% and centered */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease }}
            whileHover={{ scale: 1.015, boxShadow: '0 24px 72px rgba(15,23,42,0.14)' }}
            className="rounded-3xl overflow-hidden transition-all duration-500 w-full"
            style={{ maxWidth: '70%', boxShadow: '0 8px 40px rgba(15,23,42,0.10)', border: '1px solid rgba(15,23,42,0.08)' }}
          >
            <img
              src="/agentic-ai/History-of-Agentic-AI.webp"
              alt="History of Agentic AI"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ MARKET PERSPECTIVE — white ═══ */
function MarketPerspectiveSection() {
  const [activeQ, setActiveQ] = useState(0);

  const qas = [
    {
      q: 'How does agentic AI differ from traditional AI?',
      a: 'Traditional AI systems are reactive and narrow — they respond to prompts or classify inputs. Agentic AI systems proactively pursue goals, plan multi-step sequences, use tools, and self-correct. They operate over extended time horizons, not just single interactions.',
      img: '/agentic-ai/Market-Perspective/pic1.webp',
    },
    {
      q: 'What is the most transformative application of agentic AI today?',
      a: 'Software engineering automation is arguably the most transformative use case. AI agents can write code, run tests, debug errors, and open pull requests — compressing development cycles from weeks to hours. Customer service and financial research automation follow closely.',
      img: '/agentic-ai/Market-Perspective/pic2.webp',
    },
    {
      q: 'What is the biggest risk enterprises face with agentic AI?',
      a: 'The core risk is the "alignment problem at scale" — ensuring autonomous agents pursue intended goals without unexpected side effects. As agents gain access to more tools and execute longer task chains, each step compounds alignment uncertainty, making oversight and guardrails critical.',
      img: '/agentic-ai/Market-Perspective/pic3.webp',
    },
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="mb-16">
          <Pill>Market Perspective</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">Expert Dialogue on Agentic AI</h2>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex flex-col gap-3 mb-8">
          {qas.map((qa, i) => (
            <motion.button key={i} onClick={() => setActiveQ(i)}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              whileHover={{ scale: 1.01 }}
              className="text-left rounded-2xl px-6 py-4 text-sm font-bold transition-all duration-300"
              style={activeQ === i
                ? { background: '#2F80ED', color: '#fff', boxShadow: '0 6px 24px rgba(47,128,237,0.35)' }
                : { background: '#F8FAFC', color: '#64748B', border: '1px solid #E2E8F0' }}>
              Q: {qa.q}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeQ}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease }}
            className="bg-white rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
            style={{ border: '1.5px solid rgba(47,128,237,0.2)', boxShadow: '0 8px 40px rgba(47,128,237,0.08)' }}>
            {/* Left: answer */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="h-1 w-12 rounded-full mb-6" style={{ background: '#2F80ED' }} />
              <p className="text-slate-500 leading-relaxed text-base">{qas[activeQ].a}</p>
            </div>
            {/* Right: image */}
            <div className="relative overflow-hidden min-h-[260px]">
              <img
                src={qas[activeQ].img}
                alt={qas[activeQ].q}
                className="w-full h-full object-cover"
                style={{ minHeight: '260px' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(47,128,237,0.1) 0%, transparent 60%)' }} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════ OUR PERSPECTIVE — #F8FAFC dot ═══ */
function OurPerspectiveSection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease }}>
            <Pill>Our Perspective</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
              Syntera Solutions' View on Agentic AI
            </h2>
            <p className="text-base leading-relaxed text-slate-500 mb-5">
              At Syntera Solutions, we believe agentic AI represents the most significant enterprise technology shift since cloud computing. The organizations that will lead their industries in 2030 are those investing in agentic AI capabilities today.
            </p>
            <p className="text-base leading-relaxed text-slate-500 mb-8">
              However, we caution against a "deploy first, govern later" approach. Robust agent orchestration, memory isolation, and human-in-the-loop checkpoints are essential for enterprise-grade reliability and trust.
            </p>
            <a href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300"
              style={{ background: '#2F80ED', boxShadow: '0 6px 24px rgba(47,128,237,0.35)', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1E5DB8'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#2F80ED'; }}>
              Talk to Our AI Team <ArrowRight />
            </a>
          </motion.div>

          {/* Right: 3 stat cards */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.85, ease, delay: 0.15 }}
            className="grid grid-cols-1 gap-5">
            {[
              { pct: '3×', label: 'Faster task completion with agentic AI vs. traditional automation', color: '#2F80ED' },
              { pct: '68%', label: 'Of enterprises plan agentic AI pilots within 18 months', color: '#1E5DB8' },
              { pct: '2030', label: 'Most knowledge work to involve agentic AI assistance', color: '#0EA5E9' },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: `0 16px 40px ${s.color}18` }}
                className="bg-white rounded-2xl p-6 flex items-start gap-5 transition-all duration-300"
                style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}>
                <span className="font-display text-3xl font-extrabold flex-shrink-0" style={{ color: s.color }}>{s.pct}</span>
                <span className="text-sm text-slate-500 leading-relaxed">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ CHALLENGES — white grid bg ═══ */
function ChallengesSection() {
  const challenges = [
    { color: '#2F80ED', title: 'Alignment & Control', img: '/agentic-ai/Key-Technical-Challenges/Alignment-Control.webp', desc: 'Ensuring agents pursue intended objectives without unintended side-effects as task complexity grows.' },
    { color: '#DC2626', title: 'Security & Adversarial Risk', img: '/agentic-ai/Key-Technical-Challenges/Security-Adversarial Risk.webp', desc: 'Protecting agent systems from prompt injection, data poisoning, and goal hijacking attacks.' },
    { color: '#D97706', title: 'Reliability at Scale', img: '/agentic-ai/Key-Technical-Challenges/Reliability-at-Scale.webp', desc: 'Maintaining consistent performance when orchestrating dozens of specialized agents across enterprise workflows.' },
    { color: '#7C3AED', title: 'Explainability', img: '/agentic-ai/Key-Technical-Challenges/Explainability.webp', desc: 'Providing auditable reasoning trails for decisions made by autonomous agents in regulated industries.' },
    { color: '#059669', title: 'Cost Management', img: '/agentic-ai/Key-Technical-Challenges/Cost-Management.webp', desc: 'Balancing the inference costs of LLM-powered agents against the productivity gains they deliver.' },
    { color: '#0EA5E9', title: 'Human-AI Handoff', img: '/agentic-ai/Key-Technical-Challenges/Human-AI-Handoff.webp', desc: 'Designing clear escalation protocols for when agents should defer to human judgment.' },
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="mb-16">
          <Pill>Challenges</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">Key Technical Challenges</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              whileHover={{ y: -8, boxShadow: `0 20px 56px ${c.color}22` }}
              className="group bg-white rounded-3xl overflow-hidden transition-all duration-300"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}>
              {/* Image */}
              <div className="relative w-full overflow-hidden" style={{ height: '180px' }}>
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 40%, ${c.color}44 100%)` }} />
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="h-[3px] w-10 rounded-full mb-4 group-hover:w-16 transition-all duration-300" style={{ background: c.color }} />
                <h3 className="font-display font-extrabold text-slate-800 text-base mb-2">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ BENEFITS — #F8FAFC dot ═══ */
function BenefitsSection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="mb-16">
          <Pill>Benefits</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">Business Benefits of Agentic AI</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Aireon SecOps Case Study */}
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.75, ease }}
            whileHover={{ y: -6, boxShadow: '0 24px 72px rgba(47,128,237,0.25)' }}
            className="rounded-3xl p-8 sm:p-10 relative overflow-hidden col-span-1 lg:col-span-2 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg,#0F172A 0%,#1E3A6E 60%,#2F80ED 100%)' }}>
            <div aria-hidden className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: '#93C5FD' }}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
                  Aireon SecOps Case Study
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
                  AI-Powered Security Operations
                </h3>
                <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(191,219,254,0.75)' }}>
                  Aireon deployed an agentic AI system to autonomously triage security alerts, correlate threat intelligence from multiple feeds, draft incident response playbooks, and escalate critical threats to human analysts — reducing mean time to response by 73%.
                </p>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300"
                  style={{ background: '#60A5FA', color: '#0F172A', textDecoration: 'none', boxShadow: '0 6px 24px rgba(96,165,250,0.4)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#93C5FD'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#60A5FA'; }}>
                  Read Case Study <ArrowRight />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '73%', label: 'Reduction in MTTR' },
                  { val: '91%', label: 'Alert Triage Accuracy' },
                  { val: '4×', label: 'Analyst Throughput' },
                  { val: '24/7', label: 'Autonomous Coverage' },
                ].map(s => (
                  <div key={s.val} className="rounded-2xl p-5 flex flex-col gap-1"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="font-display text-2xl font-extrabold text-white">{s.val}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(191,219,254,0.6)' }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Business benefits cards */}
          {[
            { color: '#2F80ED', title: 'Operational Efficiency', desc: 'Automate complex multi-step workflows, reducing manual effort by up to 80% in knowledge-intensive processes.' },
            { color: '#059669', title: 'Continuous Operation', desc: 'Agents work 24/7 without fatigue, providing round-the-clock task execution and monitoring at enterprise scale.' },
            { color: '#7C3AED', title: 'Adaptive Intelligence', desc: 'Agents learn from feedback and adapt to changing business conditions, improving performance over time.' },
            { color: '#D97706', title: 'Rapid ROI', desc: 'Enterprises deploying agentic AI report 3-5× faster ROI compared to traditional RPA or workflow automation.' },
          ].map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: `0 20px 48px ${b.color}18` }}
              className="bg-white rounded-3xl p-7 transition-all duration-300"
              style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}>
              <div className="h-1 w-10 rounded-full mb-5" style={{ background: b.color }} />
              <h3 className="font-display font-extrabold text-slate-800 text-xl mb-3">{b.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ TGS PARTNER PORTFOLIO — white ═══ */
function TGSPartnerPortfolioSection() {
  const partners = [
    {
      name: 'AWS',
      icon: <img width="48" height="48" src="https://img.icons8.com/color/48/amazon-web-services.png" alt="amazon-web-services" />,
    },
    {
      name: 'Google Cloud',
      icon: <img width="48" height="48" src="https://img.icons8.com/color/48/google-cloud.png" alt="google-cloud" />,
    },
    {
      name: 'Microsoft Azure',
      icon: <img width="48" height="48" src="/agentic-ai/Ecosystem/azure-icon-svgrepo-com.svg" alt="Microsoft Azure" />,
    },
    {
      name: 'Salesforce',
      icon: <img width="48" height="48" src="https://img.icons8.com/color/48/salesforce.png" alt="salesforce" />,
    },
    {
      name: 'ServiceNow',
      icon: <img width="48" height="48" src="/agentic-ai/Ecosystem/ServiceNow-Logo.svg" alt="ServiceNow" />,
    },
    {
      name: 'Snowflake',
      icon: <img width="48" height="48" src="/agentic-ai/Ecosystem/snowflake-svgrepo-com.svg" alt="Snowflake" />,
    },
    {
      name: 'OpenAI',
      icon: <img width="50" height="50" src="https://img.icons8.com/ios/50/chatgpt.png" alt="chatgpt" />,
    },
    {
      name: 'Anthropic',
      icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/claude-ai.png" alt="claude-ai" />,
    },
    {
      name: 'LangChain',
      icon: (
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#1C1C1C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#fff', fontWeight: 900, fontSize: '13px', letterSpacing: '-0.02em' }}>LC</span>
        </div>
      ),
    },
    {
      name: 'Palantir',
      icon: <img width="48" height="48" src="/agentic-ai/Ecosystem/Palantir.svg" alt="Palantir" />,
    },
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-white border-b border-slate-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.9, ease }}>
            <Pill>Ecosystem</Pill>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6">
              Our Agentic AI Partner Portfolio
            </h2>
            <p className="text-base leading-relaxed text-slate-500 mb-6">
              Syntera Solutions' agentic AI practice is backed by deep partnerships with the world's leading AI infrastructure and platform providers, enabling us to design, build, and deploy enterprise-grade agent systems at scale.
            </p>
            <p className="text-base leading-relaxed text-slate-500 mb-10">
              From LLM providers to vector databases, orchestration frameworks to cloud infrastructure — our partner ecosystem ensures you access the best-in-class stack for your agentic AI journey.
            </p>
            <a href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-1 transition-all duration-200"
              style={{ color: '#2F80ED', borderBottom: '2px solid #2F80ED', textDecoration: 'none' }}>
              Explore Partnerships <ArrowRight size={12} />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce}
                transition={{ duration: 0.5, ease, delay: i * 0.07 }}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(47,128,237,0.18)', borderColor: 'rgba(47,128,237,0.35)' }}
                className="group bg-white rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 cursor-default"
                style={{ border: '1px solid #E2E8F0', minHeight: '100px', boxShadow: '0 2px 8px rgba(15,23,42,0.04)' }}>
                <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {p.icon}
                </div>
                <span className="font-display font-bold text-slate-600 text-xs tracking-tight leading-tight">{p.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ HOW IT WORKS — #F8FAFC dot ═══ */
function HowItWorksSection() {
  const steps = [
    { n: '01', color: '#2F80ED', title: 'Define the Objective', desc: 'Clearly specify the goal, constraints, and success criteria for the agentic system.' },
    { n: '02', color: '#1E5DB8', title: 'Assemble the Agents', desc: 'Select and configure specialized agents — planner, executor, critic — with appropriate tool access.' },
    { n: '03', color: '#0EA5E9', title: 'Orchestrate Execution', desc: 'The orchestration layer coordinates agents, manages memory, and routes tasks efficiently.' },
    { n: '04', color: '#6366F1', title: 'Monitor & Iterate', desc: 'Human-in-the-loop checkpoints validate outputs; agents self-correct and learn from feedback.' },
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden border-b border-slate-100" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ duration: 0.8, ease }} className="mb-16">
          <Pill>How It Works</Pill>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.06] tracking-tight">The Agentic AI Lifecycle</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce}
              transition={{ duration: 0.65, ease, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-white p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ border: '1px solid rgba(15,23,42,0.08)' }}>
              <div className="font-display text-5xl font-extrabold text-[rgba(47,128,237,0.12)] transition-colors duration-300 group-hover:text-[#2F80ED]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}>{s.n}</div>
              <div className="h-[2px] w-10 rounded-full" style={{ background: s.color }} />
              <h3 className="font-display font-extrabold text-slate-800 text-lg">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ CTA — centered dark card ═══ */
function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease }}
          whileHover={{ y: -5, boxShadow: '0 32px 80px rgba(11,26,46,0.45)' }}
          className="group relative rounded-[28px] overflow-hidden flex flex-col items-center justify-center text-center p-10 sm:p-16 cursor-pointer transition-all duration-300 min-h-[360px]"
          style={{ backgroundColor: '#0B1A2E', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* BG grid */}
          <div aria-hidden className="pointer-events-none absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

          {/* Animated concentric rings — centered background accent */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
            {[300, 440, 580, 720].map((r, i) => (
              <motion.div key={i}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 24 + i * 10, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full border border-white/20"
                style={{ width: r, height: r }} />
            ))}
          </div>

          {/* Centered bot glow */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.32, 0.18] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div className="w-48 h-48 rounded-full" style={{ background: 'radial-gradient(circle, rgba(47,128,237,0.35) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          </motion.div>

          {/* Content — all centered */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Robot icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="h-20 w-20 rounded-full flex items-center justify-center mb-8"
              style={{ background: 'rgba(47,128,237,0.18)', border: '2px solid rgba(96,165,250,0.4)', backdropFilter: 'blur(12px)' }}
            >
              <span className="text-4xl">🤖</span>
            </motion.div>

            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(47,128,237,0.2)', color: '#60A5FA', border: '1px solid rgba(96,165,250,0.3)' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Ready to Get Started
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight max-w-2xl mb-5">
              Build Your Agentic AI Strategy with Syntera Solutions
            </h2>

            <p className="text-base leading-relaxed max-w-xl mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Our AI practice helps enterprises design, pilot, and scale agentic AI systems — from agent architecture and tool integration to governance frameworks and production deployment.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-all duration-300 group-hover:scale-105"
                style={{ backgroundColor: '#2F80ED', color: '#fff', textDecoration: 'none', boxShadow: '0 6px 24px rgba(47,128,237,0.45)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}
              >
                Start the Conversation <ArrowRight />
              </Link>
              <a href="#what-is-agentic"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-all duration-300"
                style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Explore More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
