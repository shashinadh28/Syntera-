import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { viewportOnce } from '../utils/motion';
import { Link } from 'react-router-dom';

const ease = [0.22, 1, 0.36, 1];

const LEVELS = [
  {
    lvl: 1,
    name: 'Level 1: Legacy / Initial',
    title: 'Reactive Identity Management',
    signs: [
      'Access reviews are manual, done once a year via giant Excel sheets.',
      'SSO is only used for a fraction of core tools; users have dozens of passwords.',
      'Offboarding takes days or weeks, leaving residual access window vulnerability.',
      'Admin passwords or API keys are shared among developers and operations.',
    ],
    whatWeDo: 'Syntera Consulting conducts a complete IAM discovery scan, implements centralized directory integration, and deploys unified SSO/MFA for rapid security stabilization.',
  },
  {
    lvl: 2,
    name: 'Level 2: Standardized',
    title: 'Basic Automation & MFA Rollout',
    signs: [
      'SSO covers most SaaS and office tools, with MFA forced for main portals.',
      'Active Directory or Okta acts as the central source of truth for employees.',
      'Offboarding is triggered partially automated, but contractors are still manual.',
      'Basic role concepts exist, but permission creep is rampant across departments.',
    ],
    whatWeDo: 'We design custom directory automations, enforce adaptive authentication, set up secure lifecycle mappings, and lay the foundation for Identity Governance.',
  },
  {
    lvl: 3,
    name: 'Level 3: Governed',
    title: 'Identity Governance (IGA) & Role Control',
    signs: [
      'Automated birthright provisioning for employees is standard based on roles.',
      'Periodic access certifications are automated via platforms like SailPoint or Okta IGA.',
      'Privileged users (admins) are monitored and credentials rotated via PAM controls.',
      'Third-party access is securely sandboxed and has auto-expiry triggers built-in.',
    ],
    whatWeDo: 'We implement best-of-breed IGA platforms, design strict PAM policies via CyberArk, automate continuous joiner-mover-leaver workflows, and ensure audit readiness.',
  },
  {
    lvl: 4,
    name: 'Level 4: Contextual',
    title: 'Risk-Based Adaptive Zero Trust',
    signs: [
      'Authentication is adaptive: prompts MFA based on location, device posture, and time.',
      'Permissions are Just-In-Time (JIT) rather than standing, keeping privileges minimal.',
      'Identity telemetry is connected to security centers for live anomalous behavior detection.',
      'Non-human identities (API keys, service accounts) are fully cataloged and rotated.',
    ],
    whatWeDo: 'We construct Zero Trust network boundaries, establish risk-based authentication engine hooks, and secure cloud credentials using advanced CIEM/PAM architectures.',
  },
  {
    lvl: 5,
    name: 'Level 5: AI-Driven & Unified',
    title: 'Autonomous Governance & AI Protection',
    signs: [
      'AI agents continuously audit and flag outlier permissions before manual review.',
      'AI model access is restricted dynamically based on user identity profiles and training data rules.',
      'Access anomalies are instantly isolated through automated containment scripts.',
      'Access changes are self-healing, utilizing historical telemetry and dynamic modeling.',
    ],
    whatWeDo: 'We integrate advanced machine learning models into your identity layer, build model access guardrails for responsible AI governance, and deliver autonomous Zero Trust protection.',
  },
];

export default function IAMMaturityModel() {
  const [activeLvl, setActiveLvl] = useState(3);

  return (
    <section
      id="maturity"
      className="relative py-12 sm:py-16 overflow-hidden bg-white"
    >
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-4"
            style={{ border: '1px solid rgba(60,52,137,0.15)', background: 'rgba(60,52,137,0.06)', color: '#3C3489' }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#3C3489' }} />
            Maturity Model
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Assess Your Identity Security & IAM Maturity
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-xl">
            Where does your organization sit on the path to Zero Trust? Click through the levels below to audit your signs and discover how we escalate your posture.
          </p>
        </div>

        {/* Step Ladder Visualization */}
        <div className="mb-12">
          {/* Desktop horizontal row */}
          <div className="hidden md:grid grid-cols-5 gap-3 border-b border-slate-100 pb-6">
            {LEVELS.map((level) => {
              const isSelected = activeLvl === level.lvl;
              return (
                <button
                  key={level.lvl}
                  onClick={() => setActiveLvl(level.lvl)}
                  className="group flex flex-col items-start text-left p-5 rounded-2xl transition-all duration-300 relative focus:outline-none"
                  style={{
                    backgroundColor: isSelected ? '#3C3489' : 'rgba(241, 245, 249, 0.5)',
                    border: isSelected ? '1px solid #3C3489' : '1px solid rgba(226, 232, 240, 0.8)',
                  }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-wider mb-2 transition-colors"
                    style={{ color: isSelected ? '#a5b4fc' : '#64748b' }}
                  >
                    Level 0{level.lvl}
                  </span>
                  <span
                    className="text-sm font-extrabold transition-colors leading-tight"
                    style={{ color: isSelected ? '#ffffff' : '#0f172a' }}
                  >
                    {level.name.split(': ')[1]}
                  </span>
                  {isSelected && (
                    <motion.div
                      layoutId="maturity-active-indicator"
                      className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#3C3489]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile vertical stack (collapsible buttons) */}
          <div className="flex md:hidden flex-col gap-2 mb-6">
            {LEVELS.map((level) => {
              const isSelected = activeLvl === level.lvl;
              return (
                <button
                  key={level.lvl}
                  onClick={() => setActiveLvl(isSelected ? 0 : level.lvl)}
                  className="flex items-center justify-between p-4 rounded-xl text-left border focus:outline-none"
                  style={{
                    backgroundColor: isSelected ? '#3C3489' : '#f8fafc',
                    borderColor: isSelected ? '#3C3489' : '#e2e8f0',
                    color: isSelected ? '#ffffff' : '#0f172a',
                  }}
                >
                  <span className="text-sm font-bold">{level.name}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Panel content (Animated transition) */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeLvl > 0 && (
                <motion.div
                  key={activeLvl}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 rounded-3xl"
                  style={{
                    backgroundColor: 'rgba(248, 250, 252, 0.7)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                  }}
                >
                  {/* Left Column: Signs */}
                  <div className="lg:col-span-7">
                    <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                      Signs you are here:
                    </h3>
                    <ul className="space-y-4">
                      {LEVELS[activeLvl - 1].signs.map((sign, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 grid h-5 w-5 place-items-center rounded-full bg-red-50 text-red-500 text-xs mt-0.5">
                            ✕
                          </span>
                          <span className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                            {sign}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Solution */}
                  <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        What Syntera Consulting does:
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium mb-6">
                        {LEVELS[activeLvl - 1].whatWeDo}
                      </p>
                    </div>

                    <Link
                      to="/iam-maturity-check"
                      className="inline-flex items-center justify-center gap-2 rounded-xl text-white font-bold text-sm py-4 px-6 w-full text-center hover:opacity-95 transition-opacity"
                      style={{ backgroundColor: '#3C3489' }}
                    >
                      Audit Your Systems Now
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Outer CTA */}
        <div className="flex flex-col items-center">
          <Link
            to="/iam-maturity-check"
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-indigo-700 transition-colors hover:text-indigo-900"
          >
            Take the free IAM maturity assessment
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
