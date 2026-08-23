import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const ease = [0.22, 1, 0.36, 1];

const QUESTIONS = [
  {
    num: 1,
    category: 'Strategy',
    question: 'How is your enterprise aligning AI with core business goals?',
    options: [
      { text: 'No active AI strategy; we are currently running basic individual experiments.', score: 2.5 },
      { text: 'We have defined pilot use cases and are testing simple LLM wrapper prototypes.', score: 6 },
      { text: 'Core workflows are integrated; AI is aligned to business unit KPIs and goals.', score: 9.5 },
      { text: 'Multi-agent architectures are live in production, driving automated business value.', score: 12.5 },
    ],
  },
  {
    num: 2,
    category: 'Data & Cloud',
    question: 'What does your data architecture look like for feeding AI workloads?',
    options: [
      { text: 'Structured databases only; manual cleaning is required before ingestion.', score: 2.5 },
      { text: 'Basic vector databases (Pinecone/Milvus) with simple chunking & embeddings.', score: 6 },
      { text: 'Dynamic metadata filtering, hybrid search (keyword + semantic), and multi-source pipelines.', score: 9.5 },
      { text: 'Real-time embedding generation, automated feedback loops, and a unified data lakehouse.', score: 12.5 },
    ],
  },
  {
    num: 3,
    category: 'MLOps',
    question: 'How are you managing prompt engineering, model releases, and evaluation?',
    options: [
      { text: 'Developers deploy prompts manually; no standardized tracking or metrics.', score: 2.5 },
      { text: 'Basic logging of inputs/outputs; prompts are tested via manual comparison.', score: 6 },
      { text: 'Structured eval frameworks (Ragas/TruLens) in CI/CD to prevent prompt regression.', score: 9.5 },
      { text: 'Continuous MLOps deployment pipelines, automated drift detection, and dynamic model routing.', score: 12.5 },
    ],
  },
  {
    num: 4,
    category: 'Identity Security',
    question: 'How are model endpoints, administrative roles, and LLM boundaries secured?',
    options: [
      { text: 'Hardcoded API keys in application repositories; standard network firewalls.', score: 2.5 },
      { text: 'Single Sign-On (SSO) for AI applications; basic static vault for credentials.', score: 6 },
      { text: 'Dynamic IAM controls for model access; guardrails to filter prompt injection.', score: 9.5 },
      { text: 'End-to-end Zero Trust IAM, granular model-level auditing, and live anomalous threat isolation.', score: 12.5 },
    ],
  },
  {
    num: 5,
    category: 'Talent & Skills',
    question: 'What is the level of dedicated engineering talent focused on your AI initiatives?',
    options: [
      { text: 'No dedicated AI engineers; developers work on AI side-projects when time allows.', score: 2.5 },
      { text: 'A small tiger team of generalist developers building wrappers without deep ML expertise.', score: 6 },
      { text: 'An established AI Center of Excellence with dedicated ML, platform, and data engineers.', score: 9.5 },
      { text: 'Embedded AI platform capabilities across all product squads, guided by certified ML architects.', score: 12.5 },
    ],
  },
  {
    num: 6,
    category: 'Compliance',
    question: 'How prepared is your AI deployment for regulatory rules (like the EU AI Act)?',
    options: [
      { text: 'We have not yet mapped AI applications to regulatory compliance guidelines.', score: 2.5 },
      { text: 'We have drafted basic usage guidelines but rely on manual audits for safety checks.', score: 6 },
      { text: 'Active risk registry mapping; preparing workflows for EU AI Act audits.', score: 9.5 },
      { text: 'Automated compliance logging, transparency checkpoints, and strict boundary enforcement.', score: 12.5 },
    ],
  },
  {
    num: 7,
    category: 'Cost & Compute',
    question: 'How are model query costs and infrastructure tokens monitored?',
    options: [
      { text: 'Ad-hoc developer accounts; token costs are not actively tracked or forecasted.', score: 2.5 },
      { text: 'Central API billing accounts with manual monthly budget checks.', score: 6 },
      { text: 'Continuous cost tracking per department, utilizing token caching & optimized routing.', score: 9.5 },
      { text: 'Dynamic semantic routing (matching models to task difficulty) and strict GPU allocation limits.', score: 12.5 },
    ],
  },
  {
    num: 8,
    category: 'User Feedback',
    question: 'How is user feedback used to update and improve your models?',
    options: [
      { text: 'No production users yet, or basic passive surveys that are reviewed rarely.', score: 2.5 },
      { text: 'Passive rating thumbs up/down, with monthly developer reviews of bad logs.', score: 6 },
      { text: 'Live performance dashboard tracking user sentiment, accuracy, and system drop-offs.', score: 9.5 },
      { text: 'Automated reinforcement learning loops and dynamic prompt adjustments based on user rating signals.', score: 12.5 },
    ],
  },
];

export default function AIReadinessPage() {
  const [step, setStep] = useState(0); // 0 is landing, 1-8 is quiz, 9 is results
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    document.title = 'AI Readiness Assessment | Free Enterprise AI Score — Syntera Solutions';
    window.scrollTo(0, 0);
    // Force the page to appear scrolled so Navbar shows white bg
    window.dispatchEvent(new CustomEvent('forceNavWhite'));
    return () => window.dispatchEvent(new CustomEvent('releaseNavWhite'));
  }, []);

  const handleStart = () => {
    setStep(1);
    setAnswers([]);
    setScore(0);
  };

  const handleSelectOption = (optScore) => {
    const nextAnswers = [...answers, optScore];
    setAnswers(nextAnswers);

    if (step < 8) {
      setStep(step + 1);
    } else {
      // Calculate final score
      const finalScore = Math.min(100, Math.ceil(nextAnswers.reduce((sum, s) => sum + s, 0)));
      setScore(finalScore);
      setStep(9);
    }
  };

  // Get score category info
  const getCategoryDetails = (val) => {
    if (val <= 25) {
      return {
        tag: 'Beginner',
        color: '#ef4444',
        bg: 'rgba(239, 68, 68, 0.1)',
        desc: 'You are in the exploratory phase of AI. You have identified basic use cases, but your data pipeline, MLOps, and security systems are highly manual and fragmented.',
        actions: [
          'Initiate an AI Discovery workshop to define clear high-impact pilot cases.',
          'Consolidate API keys into secure storage; eliminate hardcoded config credentials.',
          'Adopt basic vector search patterns to upgrade static databases.',
        ],
      };
    } else if (val <= 50) {
      return {
        tag: 'Exploring',
        color: '#f59e0b',
        bg: 'rgba(245, 158, 11, 0.1)',
        desc: 'You have started testing pilot integrations and simple LLM wrappers. While the potential is clear, you face key roadblocks in scaling MLOps infrastructure and dynamic access governance.',
        actions: [
          'Design standardized evaluation checklists for model prompt releases.',
          'Transition basic wrappers to production MLOps orchestrations.',
          'Implement role-based IAM configurations for model access.',
        ],
      };
    } else if (val <= 75) {
      return {
        tag: 'Building',
        color: '#1565D8',
        bg: 'rgba(21, 101, 216, 0.1)',
        desc: 'You have successful production integrations and organized engineering teams. Your core focus now is optimizing GPU costs, securing model pipelines, and structuring risk governance.',
        actions: [
          'Enforce strict real-time semantic routing to lower token billing.',
          'Audit non-human service identities accessing critical model endpoints.',
          'Formulate an automated risk registry for EU AI Act compliance.',
        ],
      };
    } else {
      return {
        tag: 'Scaling',
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.1)',
        desc: 'Congratulations! You are running an AI-first architecture at scale with robust MLOps, strict compliance controls, and real-time security tracking.',
        actions: [
          'Integrate autonomous self-healing governance systems.',
          'Set up continuous telemetry loops to isolate model access anomalies.',
          'Implement advanced multi-agent reinforcement training models.',
        ],
      };
    }
  };

  const details = getCategoryDetails(score);

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ paddingTop: '80px' }}>
      <Navbar />

      <main className="flex-grow py-12 px-6 sm:px-8 lg:px-12 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#F8FAFC', minHeight: 'calc(100vh - 80px)' }}>
        {/* Animated dot grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(13,148,136,0.18) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px', opacity: 0.6 }} />

        {/* Pulsing ring effects */}
        <div aria-hidden className="pointer-events-none absolute" style={{ top: '15%', left: '8%' }}>
          <div className="animate-ping rounded-full" style={{ width: '80px', height: '80px', border: '2px solid rgba(13,148,136,0.25)', animationDuration: '3s' }} />
        </div>
        <div aria-hidden className="pointer-events-none absolute" style={{ top: '60%', left: '5%' }}>
          <div className="animate-ping rounded-full" style={{ width: '50px', height: '50px', border: '2px solid rgba(21,101,216,0.2)', animationDuration: '4s', animationDelay: '1s' }} />
        </div>
        <div aria-hidden className="pointer-events-none absolute" style={{ top: '20%', right: '6%' }}>
          <div className="animate-ping rounded-full" style={{ width: '65px', height: '65px', border: '2px solid rgba(13,148,136,0.2)', animationDuration: '3.5s', animationDelay: '0.5s' }} />
        </div>
        <div aria-hidden className="pointer-events-none absolute" style={{ bottom: '15%', right: '8%' }}>
          <div className="animate-ping rounded-full" style={{ width: '45px', height: '45px', border: '2px solid rgba(21,101,216,0.25)', animationDuration: '5s', animationDelay: '2s' }} />
        </div>

        {/* Soft glow blobs */}
        <div aria-hidden className="pointer-events-none absolute top-10 right-10 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.15]" style={{ background: '#1565D8' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.15]" style={{ background: '#0D9488' }} />
        <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[160px] opacity-[0.08]" style={{ background: 'linear-gradient(90deg, #0D9488, #1565D8)' }} />

        <div className="w-full max-w-2xl relative z-10">
          <AnimatePresence mode="wait">
            {/* Step 0: Landing */}
            {step === 0 && (
              <motion.div
                key="landing"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease }}
                className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-xl text-center"
              >
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                  style={{ border: '1px solid rgba(13,148,136,0.15)', background: 'rgba(13,148,136,0.06)', color: '#0D9488' }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#0D9488' }} />
                  Enterprise Audit
                </span>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Free Enterprise AI Readiness Score
                </h1>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  Assess your organization across 8 critical pillars: strategy, data, MLOps, security, talent, regulatory preparation, token budgets, and feedback cycles.
                </p>
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={handleStart}
                    className="inline-flex items-center gap-2 text-white font-bold text-sm py-4.5 px-8 rounded-full shadow-lg transition-transform hover:scale-102 focus:outline-none"
                    style={{ backgroundColor: '#0D9488', boxShadow: '0 8px 24px rgba(13,148,136,0.35)' }}
                  >
                    Start the Assessment (3 Mins)
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Steps 1-8: Quiz questions */}
            {step >= 1 && step <= 8 && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.45, ease }}
                className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xl"
              >
                {/* Progress bar info */}
                <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
                  <span>Pillar {step} of 8: {QUESTIONS[step - 1].category}</span>
                  <span className="text-blue-600">{Math.ceil((step / 8) * 100)}% Complete</span>
                </div>

                {/* Progress bar line */}
                <div className="h-1.5 w-full bg-slate-100 rounded-full mb-8 overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-600 rounded-full"
                    initial={{ width: `${((step - 1) / 8) * 100}%` }}
                    animate={{ width: `${(step / 8) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Question Text */}
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 leading-snug mb-6">
                  {QUESTIONS[step - 1].question}
                </h2>

                {/* Options List */}
                <div className="space-y-3">
                  {QUESTIONS[step - 1].options.map((opt, idx) => {
                    const alphabet = ['A', 'B', 'C', 'D'][idx];
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(opt.score)}
                        className="w-full text-left p-4 rounded-2xl border border-slate-100 hover:border-blue-500 hover:bg-blue-50/20 flex items-start gap-4 transition-all duration-200 group focus:outline-none"
                      >
                        <span className="h-7 w-7 rounded-xl bg-slate-100 text-slate-500 font-bold text-xs flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          {alphabet}
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-slate-700 leading-snug pt-0.5">
                          {opt.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 9: Results screen */}
            {step === 9 && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease }}
                className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xl"
              >
                <div className="text-center mb-8">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] mb-4"
                    style={{ border: '1px solid rgba(21,101,216,0.15)', background: 'rgba(21,101,216,0.06)', color: '#1565D8' }}
                  >
                    Your AI Score
                  </span>
                  
                  {/* Big Scored Score */}
                  <div className="flex items-center justify-center gap-2 my-2">
                    <span className="text-6xl sm:text-7xl font-black text-slate-900 tracking-tighter">
                      {score}
                    </span>
                    <span className="text-slate-300 text-xl font-bold">/ 100</span>
                  </div>

                  {/* Level Category Chip */}
                  <div className="inline-block mt-2">
                    <span
                      className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{ color: details.color, backgroundColor: details.bg }}
                    >
                      AI Readiness: {details.tag}
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-base font-bold text-slate-800 mb-2">Audit Assessment:</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
                    {details.desc}
                  </p>

                  <h3 className="text-base font-bold text-slate-800 mb-3">Recommended Next Steps:</h3>
                  <ul className="space-y-3">
                    {details.actions.map((act, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 grid h-5 w-5 place-items-center rounded-full bg-emerald-50 text-emerald-500 font-bold text-xs mt-0.5">
                          ✓
                        </span>
                        <span className="text-sm text-slate-600 leading-relaxed font-medium">
                          {act}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Final Form CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                  <h3 className="text-base font-bold text-slate-800 mb-2">Want to map out your full roadmap?</h3>
                  <p className="text-xs text-slate-500 font-medium mb-4">
                    Book a free, 30-minute workshop with an Syntera Solutions AI Delivery Architect to detail these results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 px-6 rounded-xl hover:opacity-95 transition-opacity"
                      style={{ backgroundColor: '#0D9488' }}
                    >
                      Book Free AI Strategy Session
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>

                    <button
                      onClick={handleStart}
                      className="inline-flex items-center justify-center gap-2 text-slate-600 hover:text-slate-800 font-bold text-sm py-3.5 px-6 rounded-xl border border-slate-200 transition-colors bg-white"
                    >
                      Retake Audit
                    </button>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
