import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const ease = [0.22, 1, 0.36, 1];

const SCENARIOS = [
  {
    num: 1,
    title: 'The Retired Employee',
    scenario: 'An IT administrator at a healthcare system retires. His Active Directory account is disabled within 4 hours, but his access to the Salesforce customer management CRM portal remains active because it was set up outside the automated sync. Two weeks later, his legacy credentials log in and download patient records.',
    options: [
      { text: 'CRM portal was bypassed by AD synchronization; lack of automated lifecycle provisioning.', correct: true },
      { text: 'Insecure network firewall configurations on the primary CRM hosting servers.', correct: false },
      { text: 'Weak password policies on user CRM accounts.', correct: false },
      { text: 'Lack of endpoint security on admin devices.', correct: false },
    ],
    explanation: 'Centralized directory disablement did not cover downstream apps. Automated Joiner-Mover-Leaver (JML) lifecycle workflows are required to ensure immediate, full offboarding across all databases.',
  },
  {
    num: 2,
    title: 'The Promoted Developer',
    scenario: 'A senior developer moves to a non-technical product manager role. He retains his administrative access to the primary GitHub repositories and AWS production sandbox environments. Four months later, his credentials are compromised via a phishing attack, allowing hackers to spin up rogue AWS nodes.',
    options: [
      { text: 'Standing administrative privileges and lack of continuous access reviews.', correct: true },
      { text: 'Developers working on unsafe local network connections.', correct: false },
      { text: 'Missing prompt injection protection filters.', correct: false },
      { text: 'Lack of continuous code scanning pipelines.', correct: false },
    ],
    explanation: 'Access was not certified or updated after his role transfer (Privilege Creep). Dynamic governance reviews and automated access certifications are necessary when roles change.',
  },
  {
    num: 3,
    title: 'The Hardcoded Master Key',
    scenario: 'To speed up testing, a database engineer saves a master administrative AWS root API access key in an unencrypted local config file. Malware infects their personal machine, scans local workstation folders, and uploads the credentials to the dark web.',
    options: [
      { text: 'Hardcoded standing non-human credentials; lack of automated secret rotation.', correct: true },
      { text: 'SSO session token expiration limits are set too long.', correct: false },
      { text: 'Developer using a non-approved operating system.', correct: false },
      { text: 'Lack of adaptive MFA forced on local terminals.', correct: false },
    ],
    explanation: 'Standing, non-human identities (API keys, service accounts) must be securely Vaulted and continuously rotated, using PAM (Privileged Access Management) and secrets engines rather than static local configuration files.',
  },
  {
    num: 4,
    title: 'The Outsourced QA Agency',
    scenario: 'An outsourced QA consulting firm is hired for load testing. The QA team is given three generic, shared login accounts to access the staging servers. One QA contractor leaves the agency, but the credentials remain unchanged, allowing them to access staging weeks later.',
    options: [
      { text: 'Shared credentials and lack of automated external identity lifecycles.', correct: true },
      { text: 'Missing Web Application Firewall (WAF) rule sets.', correct: false },
      { text: 'Bypassed database SQL injection scanning checks.', correct: false },
      { text: 'SSO token length limits were too short.', correct: false },
    ],
    explanation: 'Shared accounts destroy accountability and visibility. External vendor identities must be registered individually with automatic time-based expiry and automated lifecycle governance workflows.',
  },
  {
    num: 5,
    title: 'The 10-Minute Audit',
    scenario: 'Before an audit, a compliance officer receives a spreadsheet of 4,000 employee permissions to certify. Pressed for time, they review the list in under 10 minutes and click "Approve All". One of the certified accounts belongs to an active hacker using a hijacked credential.',
    options: [
      { text: 'Manual rubber-stamping certification risk; lack of automated context metrics.', correct: true },
      { text: 'AD password dictionary validation check failures.', correct: false },
      { text: 'SSO session cookies vulnerable to proxy hijack.', correct: false },
      { text: 'Lack of network segmentation boundaries.', correct: false },
    ],
    explanation: 'Manual, spreadsheet-driven access certifications cause "rubber-stamping". Modern IGA platforms use machine learning to flag permission anomalies, streamlining reviews and highlighting outliers.',
  },
  {
    num: 6,
    title: 'The Database Admin',
    scenario: 'A database administrator has permanent, 24/7 read/write access to the core financial databases. Their login session is active continuously. A hacker targets the DB admin device, intercepts their active session cookie, and runs unauthorized queries without needing MFA prompts.',
    options: [
      { text: 'Continuous standing privileges; lack of Just-In-Time (JIT) access governance.', correct: true },
      { text: 'Weak database schema structures.', correct: false },
      { text: 'Missing SSL encryption certificates on servers.', correct: false },
      { text: 'AD schema database integration failures.', correct: false },
    ],
    explanation: 'Standing permissions represent immense risk. High-level access must be Just-In-Time (JIT) and ephemeral — requested when needed, approved automatically based on rules, and expired when done.',
  },
];

export default function IAMMaturityCheckPage() {
  const [step, setStep] = useState(0); // 0: intro, 1-6: questions, 7: results
  const [currentAnswers, setCurrentAnswers] = useState([]); // Array of boolean correct/incorrect
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    document.title = 'IAM Security Challenge | Test Your Identity Security — Syntera Consulting';
    window.scrollTo(0, 0);
    // Force white navbar on this page
    window.dispatchEvent(new CustomEvent('forceNavWhite'));
    return () => window.dispatchEvent(new CustomEvent('releaseNavWhite'));
  }, []);

  const handleStart = () => {
    setStep(1);
    setCurrentAnswers([]);
    setSelectedIdx(null);
    setShowAnswerFeedback(false);
    setScore(0);
  };

  const handleOptionClick = (idx) => {
    if (showAnswerFeedback) return;
    setSelectedIdx(idx);
    setShowAnswerFeedback(true);

    const isCorrect = SCENARIOS[step - 1].options[idx].correct;
    setCurrentAnswers([...currentAnswers, isCorrect]);
    if (isCorrect) {
      setScore((p) => p + 10);
    }
  };

  const handleNext = () => {
    setSelectedIdx(null);
    setShowAnswerFeedback(false);
    if (step < 6) {
      setStep(step + 1);
    } else {
      setStep(7);
    }
  };

  // Map score to IAM Maturity level
  const getMaturityLevel = (val) => {
    if (val <= 20) {
      return {
        lvl: 'Level 1: Legacy / Reactive',
        color: '#ef4444',
        bg: 'rgba(239, 68, 68, 0.1)',
        gaps: [
          'Spreadsheet-driven manual certifications (Rubber-Stamping Risk)',
          'Standing, shared credentials across administrators and vendors',
          'Fragmented downstream offboarding lifecycle provisioning gaps',
        ],
      };
    } else if (val <= 40) {
      return {
        lvl: 'Level 2-3: Standardized / Transitioning',
        color: '#f59e0b',
        bg: 'rgba(245, 158, 11, 0.1)',
        gaps: [
          'Standing admin rights without Just-In-Time (JIT) approval flows',
          'Poor visibility of non-human service identities & API access loops',
          'Slow role certification cycles during internal promotions and transfers',
        ],
      };
    } else {
      return {
        lvl: 'Level 4-5: Governed / Risk-Based',
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.1)',
        gaps: [
          'Dynamic machine learning anomaly tracking is not fully unified',
          'Model-level access auditing requires manual oversight checks',
          'Third-party external directory lifecycles could benefit from absolute automation',
        ],
      };
    }
  };

  const levelInfo = getMaturityLevel(score);

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ paddingTop: '80px' }}>
      <Navbar />

      <main className="flex-grow py-12 px-6 sm:px-8 lg:px-12 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#F8FAFC', minHeight: 'calc(100vh - 80px)' }}>
        {/* Animated dot grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(60,52,137,0.2) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px', opacity: 0.55 }} />

        {/* Pulsing rings */}
        <div aria-hidden className="pointer-events-none absolute" style={{ top: '10%', left: '6%' }}>
          <div className="animate-ping rounded-full" style={{ width: '90px', height: '90px', border: '2px solid rgba(60,52,137,0.22)', animationDuration: '3.5s' }} />
        </div>
        <div aria-hidden className="pointer-events-none absolute" style={{ top: '55%', left: '4%' }}>
          <div className="animate-ping rounded-full" style={{ width: '55px', height: '55px', border: '2px solid rgba(21,101,216,0.2)', animationDuration: '4.5s', animationDelay: '1.5s' }} />
        </div>
        <div aria-hidden className="pointer-events-none absolute" style={{ top: '18%', right: '5%' }}>
          <div className="animate-ping rounded-full" style={{ width: '70px', height: '70px', border: '2px solid rgba(60,52,137,0.2)', animationDuration: '4s', animationDelay: '0.8s' }} />
        </div>
        <div aria-hidden className="pointer-events-none absolute" style={{ bottom: '12%', right: '7%' }}>
          <div className="animate-ping rounded-full" style={{ width: '50px', height: '50px', border: '2px solid rgba(21,101,216,0.25)', animationDuration: '5s', animationDelay: '2.5s' }} />
        </div>
        <div aria-hidden className="pointer-events-none absolute" style={{ bottom: '25%', left: '15%' }}>
          <div className="animate-ping rounded-full" style={{ width: '40px', height: '40px', border: '2px solid rgba(60,52,137,0.15)', animationDuration: '6s', animationDelay: '1s' }} />
        </div>

        {/* Soft glow blobs */}
        <div aria-hidden className="pointer-events-none absolute top-10 left-10 w-[450px] h-[450px] rounded-full blur-[120px] opacity-[0.15]" style={{ background: '#3C3489' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full blur-[120px] opacity-[0.15]" style={{ background: '#1565D8' }} />
        <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[160px] opacity-[0.07]" style={{ background: 'linear-gradient(90deg, #3C3489, #1565D8)' }} />

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
                  style={{ border: '1px solid rgba(60,52,137,0.15)', background: 'rgba(60,52,137,0.06)', color: '#3C3489' }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#3C3489' }} />
                  Security Challenge
                </span>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Spot the Identity Security Vulnerability
                </h1>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                  Test your engineering intelligence against 6 real-world enterprise cyber threat scenarios. Can you find the critical IAM design failures?
                </p>
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={handleStart}
                    className="inline-flex items-center gap-2 text-white font-bold text-sm py-4.5 px-8 rounded-full shadow-lg transition-transform hover:scale-102 focus:outline-none"
                    style={{ backgroundColor: '#3C3489', boxShadow: '0 8px 24px rgba(60,52,137,0.35)' }}
                  >
                    Start the Challenge
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Steps 1-6: Scenarios */}
            {step >= 1 && step <= 6 && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease }}
                className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xl"
              >
                {/* Progress bar info */}
                <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
                  <span>Scenario {step} of 6: {SCENARIOS[step - 1].title}</span>
                  <span className="text-indigo-600">Active Audit Score: {score} Pts</span>
                </div>

                {/* Progress bar line */}
                <div className="h-1.5 w-full bg-slate-100 rounded-full mb-8 overflow-hidden">
                  <motion.div
                    className="h-full bg-indigo-600 rounded-full"
                    initial={{ width: `${((step - 1) / 6) * 100}%` }}
                    animate={{ width: `${(step / 6) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Scenario Description */}
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl mb-6">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">Vulnerability Scenario:</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-semibold italic">
                    "{SCENARIOS[step - 1].scenario}"
                  </p>
                </div>

                {/* Question */}
                <h2 className="text-base font-extrabold text-slate-800 leading-snug mb-5">
                  Identify the primary identity governance design flaw that enabled this compromise:
                </h2>

                {/* Options List */}
                <div className="space-y-2.5">
                  {SCENARIOS[step - 1].options.map((opt, idx) => {
                    const isSelected = selectedIdx === idx;
                    let btnStyle = { border: '1.5px solid rgba(226,232,240,0.8)', background: '#fff' };
                    let numberBg = 'bg-slate-100 text-slate-500';

                    if (showAnswerFeedback) {
                      if (opt.correct) {
                        btnStyle = { border: '1.5px solid #10b981', background: 'rgba(16,185,129,0.06)' };
                        numberBg = 'bg-emerald-600 text-white';
                      } else if (isSelected) {
                        btnStyle = { border: '1.5px solid #ef4444', background: 'rgba(239,68,68,0.06)' };
                        numberBg = 'bg-red-600 text-white';
                      } else {
                        btnStyle = { border: '1.5px solid rgba(226,232,240,0.8)', opacity: 0.5 };
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={showAnswerFeedback}
                        onClick={() => handleOptionClick(idx)}
                        className="w-full text-left p-4 rounded-xl flex items-start gap-4 transition-all duration-200 group focus:outline-none disabled:cursor-default"
                        style={btnStyle}
                      >
                        <span className={`h-7 w-7 rounded-xl font-bold text-xs flex items-center justify-center flex-shrink-0 transition-colors ${numberBg} ${!showAnswerFeedback ? 'group-hover:bg-indigo-600 group-hover:text-white' : ''}`}>
                          {idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug pt-0.5">
                          {opt.text}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Feedback details */}
                <AnimatePresence>
                  {showAnswerFeedback && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                    >
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                        {SCENARIOS[step - 1].options[selectedIdx].correct ? '🎉 Correct Security Audit!' : '❌ Incorrect Assessment'}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">
                        {SCENARIOS[step - 1].explanation}
                      </p>
                      
                      <button
                        onClick={handleNext}
                        className="inline-flex items-center gap-2 text-white font-bold text-xs py-3 px-6 rounded-lg shadow-md hover:opacity-95 transition-opacity"
                        style={{ backgroundColor: '#3C3489' }}
                      >
                        {step === 6 ? 'See Final Score' : 'Next Scenario'}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )}

            {/* Step 7: Results */}
            {step === 7 && (
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
                    style={{ border: '1px solid rgba(60,52,137,0.15)', background: 'rgba(60,52,137,0.06)', color: '#3C3489' }}
                  >
                    Auditor Score
                  </span>
                  
                  {/* Score */}
                  <div className="flex items-center justify-center gap-2 my-2">
                    <span className="text-6xl sm:text-7xl font-black text-slate-900 tracking-tighter">
                      {score}
                    </span>
                    <span className="text-slate-300 text-xl font-bold">/ 60</span>
                  </div>

                  {/* Level Category Chip */}
                  <div className="inline-block mt-2">
                    <span
                      className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{ color: levelInfo.color, backgroundColor: levelInfo.bg }}
                    >
                      {levelInfo.lvl}
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-sm font-extrabold text-slate-800 mb-3 uppercase tracking-wider">Top 3 IAM Security Gaps Detected:</h3>
                  <ul className="space-y-3">
                    {levelInfo.gaps.map((gap, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 grid h-5 w-5 place-items-center rounded-full bg-red-50 text-red-500 font-bold text-xs mt-0.5">
                          !
                        </span>
                        <span className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                          {gap}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Final Form CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                  <h3 className="text-base font-bold text-slate-800 mb-2">Ready to lock down your identity plane?</h3>
                  <p className="text-xs text-slate-500 font-medium mb-4">
                    Book a free 30-minute credentials audit and architect session with an Syntera Consulting IAM Architect to review these gaps.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 px-6 rounded-xl hover:opacity-95 transition-opacity"
                      style={{ backgroundColor: '#3C3489' }}
                    >
                      Book Free IAM Architect Call
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>

                    <button
                      onClick={handleStart}
                      className="inline-flex items-center justify-center gap-2 text-slate-600 hover:text-slate-800 font-bold text-sm py-3.5 px-6 rounded-xl border border-slate-200 transition-colors bg-white"
                    >
                      Restart Game
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
