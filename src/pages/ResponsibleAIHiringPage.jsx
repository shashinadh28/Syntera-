import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];

const COMPANY = 'Syntera Solutions';

/* ═══════════════════════════════════════════════════════════════════
   ROOT PAGE
   ═══════════════════════════════════════════════════════════════════ */
export default function ResponsibleAIHiringPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TalentFrameworkSection />
      <TalentPromiseSection />
      <FAQSection />
      <DiscoverMoreSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: '#0B1120' }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute inset-0 z-0">
        <img src="/responsible-ai-in-hiring/Responsible-AI.webp" alt="" aria-hidden className="w-full h-full object-cover object-center" style={{ opacity: 0.22 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.55) 40%, rgba(11,17,32,0.65) 70%, rgba(11,17,32,0.97) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(11,17,32,0.85) 0%, rgba(11,17,32,0.4) 50%, transparent 100%)' }} />
      </div>
      <motion.div aria-hidden animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="pointer-events-none absolute top-[-80px] right-[-60px] w-[700px] h-[600px] rounded-full blur-[130px]" style={{ background: 'rgba(47,128,237,0.15)', zIndex: 1 }} />
      <motion.div aria-hidden animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.13, 0.06] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }} className="pointer-events-none absolute bottom-0 left-[-80px] w-[500px] h-[400px] rounded-full blur-[110px]" style={{ background: 'rgba(99,102,241,0.12)', zIndex: 1 }} />

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-6 sm:px-8 lg:px-12 pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-7" style={{ border: '1px solid rgba(47,128,237,0.35)', background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              Responsible AI · Hiring
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease, delay: 0.1 }} className="font-display font-extrabold leading-[1.06] tracking-tight text-white mb-6" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
              How {COMPANY} Uses{' '}
              <span style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #BFDBFE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Responsible AI</span>{' '}
              in Hiring
            </motion.h1>
            <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, ease, delay: 0.55 }} style={{ height: '1.5px', background: 'linear-gradient(90deg, rgba(47,128,237,0.7), transparent)', maxWidth: '340px', marginBottom: '1.6rem' }} />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease, delay: 0.25 }} className="text-base sm:text-lg leading-[1.8] mb-10 max-w-lg" style={{ color: 'rgba(255,255,255,0.68)' }}>
              We use technology to enhance, not replace, the human experience. Hiring decisions are always made by our teams, guided by clear principles and human oversight.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.42 }} className="flex flex-wrap gap-4">
              <a href="#talent-promise" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300" style={{ backgroundColor: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.42)', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}>
                Our AI Talent Promise
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <a href="#faq" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300" style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Read FAQ
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, ease, delay: 0.3 }} className="relative hidden lg:block">
            <div className="relative rounded-[28px] overflow-hidden" style={{ height: '520px', boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)' }}>
              <img src="/responsible-ai-in-hiring/Responsible-AI.webp" alt="Responsible AI" className="w-full h-full object-cover object-center" style={{ opacity: 0.88 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(11,17,32,0.7) 100%)' }} />
              <div className="absolute bottom-5 left-5 px-4 py-2.5 rounded-xl flex items-center gap-2.5 backdrop-blur-md" style={{ background: 'rgba(11,17,32,0.65)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <span className="h-2 w-2 rounded-full bg-[#2F80ED] animate-pulse" />
                <span className="text-white text-[11px] font-bold uppercase tracking-wider">Ethical AI</span>
              </div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-5 right-5 rounded-2xl px-4 py-3" style={{ background: 'rgba(11,17,32,0.7)', border: '1px solid rgba(47,128,237,0.35)', backdropFilter: 'blur(12px)' }}>
                <div className="text-lg font-extrabold text-white leading-none">100%</div>
                <div className="text-[10px] mt-0.5 font-semibold uppercase tracking-wider" style={{ color: 'rgba(96,165,250,0.85)' }}>Human Decision</div>
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

/* ═══════════════════════════════════════════════════════════════════
   2. TALENT FRAMEWORK (TALENT columns)
   ═══════════════════════════════════════════════════════════════════ */
const TALENT_PILLARS = [
  {
    letter: 'T',
    title: 'Transparent',
    color: '#2F80ED',
    desc: 'Explaining how and where AI is used and the role of human beings as the decision makers.',
  },
  {
    letter: 'A',
    title: 'Accountable',
    color: '#8B5CF6',
    desc: 'Taking responsibility for our AI tools and conducting regular audits to ensure they both empower users and operate as intended.',
  },
  {
    letter: 'L',
    title: 'Learning Centered',
    color: '#1E5DB8',
    desc: 'Fostering a culture that prioritizes continuous improvement, experimentation, and an understanding of the implications of our AI use.',
  },
  {
    letter: 'E',
    title: 'Ethical',
    color: '#3B82F6',
    desc: 'Following responsible AI principles and codes of conduct.',
  },
  {
    letter: 'N',
    title: 'Notified',
    color: '#0EA5E9',
    desc: 'Ensuring that users are made aware of AI usage.',
  },
  {
    letter: 'T',
    title: 'Trustworthy',
    color: '#60A5FA',
    desc: 'Protecting user data and implementing robust data security to prevent unauthorized access and data breaches, and by ensuring that human judgment is always involved.',
  },
];

function TalentFrameworkSection() {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-slate-100" id="framework">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        {/* Intro text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.85, ease }}
            className="lg:col-span-6"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
              style={{
                background: 'rgba(47,128,237,0.08)',
                border: '1px solid rgba(47,128,237,0.22)',
                color: '#2F80ED',
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Our Framework
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.04] tracking-tighter">
              A Responsible and Transparent Approach to AI in Recruitment
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.85, ease, delay: 0.12 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              At {COMPANY}, we use AI to support our teams in making more informed and efficient decisions, always with a human in the loop.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              We'll create efficiencies for our recruiters and provide you with a more personalized experience, such as by drafting interview questions and suggesting relevant jobs.
            </p>
            <p className="mt-6 text-base font-semibold text-slate-800">
              That's why we follow the{' '}
              <span className="font-extrabold" style={{ color: '#2F80ED' }}>TALENT</span>{' '}
              framework:
            </p>
          </motion.div>
        </div>

        {/* TALENT Pillars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 border border-slate-200 rounded-2xl overflow-hidden">
          {TALENT_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group relative p-6 sm:p-8 flex flex-col border-r border-b border-slate-200 last:border-r-0 cursor-default transition-all duration-300 hover:bg-slate-50"
            >
              {/* Colored top border accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                style={{ backgroundColor: pillar.color }}
              />
              {/* Letter */}
              <span
                className="font-display text-5xl font-black leading-none mb-4 transition-transform duration-300 group-hover:scale-110 origin-left"
                style={{ color: pillar.color }}
              >
                {pillar.letter}
              </span>
              {/* Title */}
              <h3 className="font-display text-lg font-extrabold text-slate-900 leading-tight mb-3">
                {pillar.title}
              </h3>
              {/* Desc */}
              <p className="text-xs leading-relaxed text-slate-500">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   3. AI TALENT PROMISE (split section — no image, geometric visual)
   ═══════════════════════════════════════════════════════════════════ */
function TalentPromiseSection() {
  return (
    <section id="talent-promise" className="py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Abstract animated visual with Promise Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease }}
            className="relative flex items-center justify-center"
            style={{ minHeight: '580px' }}
          >
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute"
              style={{
                width: 580,
                height: 580,
                border: '1.5px dashed rgba(47,128,237,0.25)',
                borderRadius: '50%',
              }}
            />
            {/* Mid ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              className="absolute"
              style={{
                width: 480,
                height: 480,
                border: '1.5px dashed rgba(96,165,250,0.25)',
                borderRadius: '50%',
              }}
            />
            {/* Inner glow */}
            <div
              className="absolute rounded-full blur-3xl"
              style={{
                width: 320,
                height: 320,
                background: 'radial-gradient(circle, rgba(47,128,237,0.2) 0%, transparent 70%)',
              }}
            />
            {/* Orbit dots */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <motion.div
                key={i}
                className="absolute h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor: '#2F80ED',
                  top: '50%',
                  left: '50%',
                  marginTop: -5,
                  marginLeft: -5,
                  transformOrigin: '5px 5px',
                  zIndex: 5,
                }}
                animate={{
                  rotate: [deg, deg + 360],
                  x: [Math.cos((deg * Math.PI) / 180) * 265, Math.cos(((deg + 360) * Math.PI) / 180) * 265],
                  y: [Math.sin((deg * Math.PI) / 180) * 265, Math.sin(((deg + 360) * Math.PI) / 180) * 265],
                }}
                transition={{ duration: 14 + i * 2, repeat: Infinity, ease: 'linear' }}
              />
            ))}
            {/* Center Image */}
            <motion.div
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
              style={{
                width: 'min(95%, 480px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/responsible-ai-in-hiring/Our-Promise.webp"
                alt="Our Promise"
                className="w-full h-auto object-cover rounded-3xl"
              />
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-6"
              style={{
                background: 'rgba(47,128,237,0.08)',
                border: '1px solid rgba(47,128,237,0.18)',
                color: '#1E5DB8',
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Our Promise
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tighter">
              Our AI Talent Promise
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              To use AI responsibly and always to support you through the process, not to replace the people behind it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Every AI tool we deploy is carefully vetted, audited for fairness, and operated with human oversight. Our recruiters remain the decision-makers — always.
            </p>

            {/* Pillars summary */}
            <div className="mt-8 space-y-4">
              {[
                { icon: <ShieldCheckIcon />, label: 'Hiring decisions are always human-led' },
                { icon: <EyeIcon />, label: 'Full transparency about how AI is used' },
                { icon: <LockIcon />, label: 'Your data is protected and treated as confidential' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(47,128,237,0.08)', color: '#2F80ED' }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#faq"
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300"
              style={{
                backgroundColor: '#2F80ED',
                color: '#FFFFFF',
                textDecoration: 'none',
                boxShadow: '0 8px 28px rgba(47,128,237,0.3)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 36px rgba(47,128,237,0.45)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(47,128,237,0.3)'; }}
            >
              Read Article
              <ArrowRightIcon />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   4. FAQ ACCORDION
   ═══════════════════════════════════════════════════════════════════ */
const FAQ_ITEMS = [
  {
    question: `How does ${COMPANY} use AI, and what tools are involved during the hiring process?`,
    answer: (
      <>
        <p>
          At {COMPANY}, we use AI to enhance, not replace, the human aspects of hiring. AI helps us deliver a more efficient, personalized experience, while ensuring all decisions are made by people. Our approach is guided by our AI Talent Promise, which emphasizes transparency, accountability, and ethical use in every step of the process.
        </p>
        <p className="mt-4 font-semibold text-slate-700">Here are some of the ways we use AI tools in our recruitment process:</p>
        <ul className="mt-3 space-y-2">
          {[
            { label: 'Talent sourcing & pipeline building', desc: 'AI helps us identify and engage potential candidates more effectively, surfacing relevant job opportunities based on your skills and aspirations.' },
            { label: 'Application review support', desc: 'AI-assisted screening tools can highlight experience and potential but never make decisions or eliminate candidates. All applications are reviewed and evaluated by experienced recruiters.' },
            { label: 'Interview preparation', desc: 'GenAI tools may be used to help draft interview questions allowing our teams to focus more time on understanding you as an individual.' },
            { label: 'Candidate experience', desc: 'We use AI to personalize job recommendations, helping you discover roles that align with your profile.' },
          ].map((item) => (
            <li key={item.label} className="flex gap-3">
              <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span><strong>{item.label}:</strong> {item.desc}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Any AI tools we use are carefully vetted and used responsibly, to ensure they meet our high standards for security, and transparency. Decisions will always be made by people, with empathy and judgment at the center of every conversation.
        </p>
      </>
    ),
  },
  {
    question: `Does AI make hiring decisions at ${COMPANY}?`,
    answer: (
      <p>
        No. AI is never used to make hiring decisions at {COMPANY}. All decisions are made by experienced {COMPANY} recruiters and hiring managers. Our Talent Promise ensures that AI is only used to support people, never to replace them. Tools assist with insights and efficiency, but decisions are always human-led.
      </p>
    ),
  },
  {
    question: `How does ${COMPANY} protect my data?`,
    answer: (
      <p>
        {COMPANY} uses approved tools designed to protect your data from unauthorized use, access, or disclosure. We treat candidate data as confidential. For more information on how we use your personal data, please review our{' '}
        <a href="#" style={{ color: '#2F80ED', textDecoration: 'underline' }}>Privacy Policy</a>.
      </p>
    ),
  },
  {
    question: `Can I learn more about how ${COMPANY} used AI in my application?`,
    answer: (
      <p>
        Yes. Transparency is central to our Talent Promise. You can ask your recruiter for details about how AI may have supported the review of your application. We commit to being open about when and how AI tools were used, whether in matching your resume to a potential role, preparing interview content, or identifying relevant opportunities.
      </p>
    ),
  },
  {
    question: 'Can I use AI during my application?',
    answer: (
      <>
        <p>
          Yes. When used thoughtfully, AI can be a helpful tool to support your preparation. It's fine to use AI to brainstorm ideas, check for clarity, or practice interview questions. But remember, your application should reflect your authentic voice, experiences, and perspective. We want to get to know you, not the output of a tool.
        </p>
        <p className="mt-4">
          Avoid relying on AI to write your entire application or to generate content that doesn't reflect your real experiences, skills, or voice. Overuse of AI can make your application feel impersonal or generic, and may even lead to inconsistencies during interviews. Remember, we're looking for your unique perspective and potential. Use AI to support your thinking, not to replace it.
        </p>
        <p className="mt-4">
          This reflects our belief that AI should elevate, not replace, your personal voice — just as our tools are designed to support, not replace, human decisions.
        </p>
      </>
    ),
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
          className="mb-16"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] mb-5"
            style={{
              background: 'rgba(47,128,237,0.08)',
              border: '1px solid rgba(47,128,237,0.22)',
              color: '#2F80ED',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.04] tracking-tighter">
            How we use AI responsibly in our hiring process
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-500 max-w-2xl">
            Your questions, answered. We know AI raises questions, and we want to answer them clearly.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-slate-200">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base sm:text-lg font-semibold leading-snug pr-8 transition-colors duration-200"
                    style={{ color: isOpen ? '#2F80ED' : '#0F172A' }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center border transition-all duration-300"
                    style={{
                      border: isOpen ? '1.5px solid #2F80ED' : '1.5px solid #CBD5E1',
                      backgroundColor: isOpen ? 'rgba(47,128,237,0.08)' : 'transparent',
                      color: isOpen ? '#2F80ED' : '#94A3B8',
                    }}
                  >
                    <motion.svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease }}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </motion.svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        className="pb-8 text-sm sm:text-base leading-relaxed text-slate-600 space-y-2"
                        style={{ borderLeft: '3px solid #2F80ED', paddingLeft: '20px' }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   5. DISCOVER MORE
   ═══════════════════════════════════════════════════════════════════ */
const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.08) 1.5px, transparent 1.5px)',
  backgroundSize: '26px 26px',
};

function DiscoverMoreSection() {
  return (
    <section className="py-16 sm:py-20 overflow-hidden" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-12"
        >
          <h2
            className="font-display text-5xl sm:text-6xl font-extrabold text-slate-900 leading-[1.04] tracking-tighter"
            style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}
          >
            Discover More
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* Card 1 — Large dark: How to use AI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(11,26,46,0.4)' }}
            className="lg:col-span-6 group relative rounded-2xl overflow-hidden flex flex-col justify-between px-8 py-6 cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: '#0B1A2E',
              minHeight: '200px',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 10px 28px rgba(11,26,46,0.3)',
            }}
          >
            {/* Geometric bg pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-15">
              <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
                <path d="M320 0L400 80V300H320L240 220V0H320Z" fill="#2F80ED" />
                <path d="M360 0L400 40V200H360L300 140V0H360Z" fill="#60A5FA" />
              </svg>
            </div>

            <div className="relative z-10">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3"
                style={{ backgroundColor: 'rgba(47,128,237,0.15)', color: '#60A5FA', border: '1px solid rgba(47,128,237,0.3)' }}
              >
                <span className="h-1 w-1 rounded-full bg-current" />
                AI & Applications
              </span>
              <h3
                className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight"
                style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}
              >
                How to use AI in your{' '}
                <span style={{ color: '#60A5FA' }}>Application</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.62)' }}>
                At Syntera Solutions, we recognize AI can support your job application, but it's your voice, insights, and authenticity that matter most.
              </p>
            </div>

            <div className="relative z-10 mt-5">
              <a
                href="/using-ai-application-process"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: '#2F80ED',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(47,128,237,0.35)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}
              >
                Learn More
                <ArrowRightIcon />
              </a>
            </div>
          </motion.div>

          {/* Card 2 — Explore Careers in AI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease, delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 14px 30px rgba(47,128,237,0.15)' }}
            className="lg:col-span-3 group rounded-2xl px-8 py-6 flex flex-col justify-between cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: '#EAF3FF',
              border: '1px solid rgba(47,128,237,0.1)',
              minHeight: '200px',
            }}
          >
            {/* Icon */}
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>

            <div>
              <h3
                className="font-display text-xl sm:text-2xl font-extrabold leading-tight tracking-tight"
                style={{ color: '#1E293B', fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}
              >
                Explore Our Careers in AI
              </h3>
              <p className="text-xs leading-relaxed mt-2" style={{ color: '#475569' }}>
                At Syntera Solutions, AI powers transformation. With rising demand for AI talent, you'll lead innovation that shapes industries and drives real impact.
              </p>
            </div>

            <div className="mt-5">
              <a
                href="/engineering-technology"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest border-b-2 pb-0.5 transition-all duration-200 group-hover:gap-3"
                style={{ color: '#2F80ED', borderColor: '#2F80ED', textDecoration: 'none' }}
              >
                Explore More
                <ArrowRightIcon />
              </a>
            </div>
          </motion.div>

          {/* Card 3 — GenAI Virtual Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: '0 14px 30px rgba(47,128,237,0.15)' }}
            className="lg:col-span-3 group rounded-2xl px-8 py-6 flex flex-col justify-between cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: '#EAF3FF',
              border: '1px solid rgba(47,128,237,0.1)',
              minHeight: '200px',
            }}
          >
            {/* Icon */}
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>

            <div>
              <h3
                className="font-display text-xl sm:text-2xl font-extrabold leading-tight tracking-tight"
                style={{ color: '#1E293B', fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}
              >
                Explore our GenAI Virtual Experience
              </h3>
              <p className="text-xs leading-relaxed mt-2" style={{ color: '#475569' }}>
                Get hands-on exposure to real-world AI problem-solving and see what a career in AI at Syntera Solutions could look like.
              </p>
            </div>

            <div className="mt-5">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest border-b-2 pb-0.5 transition-all duration-200 group-hover:gap-3"
                style={{ color: '#2F80ED', borderColor: '#2F80ED', textDecoration: 'none' }}
              >
                Sign Up
                <ArrowRightIcon />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   INLINE SVG ICONS
   ═══════════════════════════════════════════════════════════════════ */
function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function AIShieldIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto' }}>
      <path d="M24 4L8 11v14c0 9.94 6.84 19.24 16 22 9.16-2.76 16-12.06 16-22V11L24 4z" />
      <path d="M17 24l5 5 9-9" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6L12 2z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}
