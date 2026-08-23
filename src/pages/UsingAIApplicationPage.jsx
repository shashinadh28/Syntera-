import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { viewportOnce } from '../utils/motion.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = {
  backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)',
  backgroundSize: '26px 26px'
};

export default function UsingAIApplicationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AuthenticSection />
      <UseAISection />
      <TipsSection />
      <DiscoverMoreSection />
      <Footer />
    </div>
  );
}

/* ────────────────────────────────────────────────────── HERO ─── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ backgroundColor: '#0B1120' }}>
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute inset-0 z-0">
        <img src="/AI-Applications/AI-Applications-homepage.webp" alt="" aria-hidden className="w-full h-full object-cover object-center" style={{ opacity: 0.22 }} />
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
              AI & Applications
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease, delay: 0.1 }} className="font-display font-extrabold leading-[1.06] tracking-tight text-white mb-6" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              How to Use{' '}<span style={{ background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #BFDBFE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>{' '}in Your Application
            </motion.h1>
            <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, ease, delay: 0.55 }} style={{ height: '1.5px', background: 'linear-gradient(90deg, rgba(47,128,237,0.7), transparent)', maxWidth: '340px', marginBottom: '1.6rem' }} />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.28 }} className="text-base sm:text-lg leading-[1.8] mb-10 max-w-lg" style={{ color: 'rgba(255,255,255,0.68)' }}>
              AI can help you prepare, but your voice is what matters most. Use it as a tool to assist — not as a substitute for your personal insights, voice, or experiences.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.42 }} className="flex flex-wrap gap-4">
              <a href="#authentic" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300" style={{ backgroundColor: '#2F80ED', boxShadow: '0 8px 32px rgba(47,128,237,0.42)', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1E5DB8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2F80ED'; }}>
                Stay Authentic
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <a href="#tips" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300" style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                AI Tips
              </a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, ease, delay: 0.3 }} className="relative hidden lg:block">
            <div className="relative rounded-[28px] overflow-hidden" style={{ height: '520px', boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)' }}>
              <img src="/AI-Applications/AI-Applications-homepage.webp" alt="AI Applications" className="w-full h-full object-cover object-center" style={{ opacity: 0.88 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(11,17,32,0.7) 100%)' }} />
              <div className="absolute bottom-5 left-5 px-4 py-2.5 rounded-xl flex items-center gap-2.5 backdrop-blur-md" style={{ background: 'rgba(11,17,32,0.65)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <span className="h-2 w-2 rounded-full bg-[#2F80ED] animate-pulse" />
                <span className="text-white text-[11px] font-bold uppercase tracking-wider">AI Guidance</span>
              </div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-5 right-5 rounded-2xl px-4 py-3" style={{ background: 'rgba(11,17,32,0.7)', border: '1px solid rgba(47,128,237,0.35)', backdropFilter: 'blur(12px)' }}>
                <div className="text-lg font-extrabold text-white leading-none">Smart</div>
                <div className="text-[10px] mt-0.5 font-semibold uppercase tracking-wider" style={{ color: 'rgba(96,165,250,0.85)' }}>AI Assisted</div>
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

/* ─────────────────────────────────────── AUTHENTIC SECTION ─── */
function AuthenticSection() {
  return (
    <section id="authentic" className="py-20 sm:py-28 bg-white border-b border-slate-100">
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
              Authenticity First
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.08] tracking-tight">
              Using AI to Support Your Thinking Authentically
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
              Generative AI tools can support your job application—from helping you structure your resume to practicing for interviews. Used thoughtfully, they can enhance your preparation while keeping your perspective front and center.
            </p>
            <p>
              Use AI to support your thinking, not replace it. Be transparent about how you use these tools, and stay focused on what matters most: your originality, judgment, and potential.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────── USE AI TO / DON'T ─── */
function UseAISection() {
  const doItems = [
    {
      title: 'Generate Ideas',
      desc: 'AI can help you brainstorm, explore different ways to frame your experience, and overcome writer\'s block. Use it as a starting point to spark ideas—not as a replacement for your own thinking, insights, or lived experiences.',
      icon: <GenerateIdeasIcon />,
      color: '#2F80ED',
      image: '/AI-Applications/Use-AI-To/Generate-Ideas.webp',
    },
    {
      title: 'Organise Your Thoughts',
      desc: 'AI can support you in structuring your responses, identifying key themes, and improving clarity. While it can help refine how your ideas are presented, decisions about what to include and how to express it should always be made by you.',
      icon: <OrganiseIcon />,
      color: '#8B5CF6',
      image: '/AI-Applications/Use-AI-To/Organise-Your-Thoughts.webp',
    },
    {
      title: 'Find Sources',
      desc: 'AI can assist in identifying relevant concepts, terminology, or sources to support your thinking. Any information it provides should be reviewed and validated to ensure accuracy and relevance to your application.',
      icon: <FindSourcesIcon />,
      color: '#3B82F6',
      image: '/AI-Applications/Use-AI-To/Find-Sources.webp',
    },
  ];

  const dontItems = [
    {
      title: 'Let AI Misrepresent You',
      desc: 'Avoid using AI to generate responses that don\'t accurately reflect your background, skills, or experience. Your application should present an honest representation of who you are and what you bring.',
      icon: <MisrepresentIcon />,
      image: "/AI-Applications/Don't/Let-AI-Misrepresent-You.webp",
    },
    {
      title: 'Rely Only On AI Output',
      desc: 'AI-generated content may be incomplete, outdated, or incorrect. Always apply your own judgment and take responsibility for reviewing and validating any information before submitting your application.',
      icon: <RelyOnlyIcon />,
      image: "/AI-Applications/Don't/Rely-Only-On-AI-Output.webp",
    },
    {
      title: 'Give Up Your Voice',
      desc: 'AI should support—not replace—your perspective. Your motivations, experiences, and point of view are what make your application distinctive, and they should always come from you.',
      icon: <GiveUpVoiceIcon />,
      image: "/AI-Applications/Don't/Give-Up-Your-Voice.webp",
    },
  ];

  return (
    <section className="py-20 sm:py-28" style={{ backgroundColor: '#FAFAF8', ...DOT_BG }}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">

        {/* USE AI TO: */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease }}
            className="mb-12 flex items-center gap-4"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Use AI To:
            </h2>
            <div className="h-1 flex-1 bg-blue-200/50 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Card image */}
                <div className="relative w-full overflow-hidden" style={{ height: '200px' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.95) 100%)` }} />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div
                    className="h-12 w-12 mb-4 flex items-center justify-center rounded-xl"
                    style={{ color: item.color, background: `${item.color}12` }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-800 leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DON'T: */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease }}
            className="mb-12 flex items-center gap-4"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Don't:
            </h2>
            <div className="h-1 flex-1 bg-slate-200/80 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dontItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl border border-slate-200 hover:border-red-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Card image */}
                <div className="relative w-full overflow-hidden" style={{ height: '200px' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.95) 100%)' }} />
                  {/* Red X badge */}
                  <div className="absolute top-3 right-3 h-8 w-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.9)', backdropFilter: 'blur(4px)' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="h-12 w-12 mb-4 flex items-center justify-center rounded-xl text-slate-700" style={{ background: 'rgba(239,68,68,0.08)' }}>
                    {item.icon}
                  </div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-800 leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ──────────────────────────────────── TIPS TABBED SECTION ─── */
const TABS = [
  {
    key: 'job-search',
    label: 'Job Search Tips',
    heading: 'How to use GenAI to enhance your job search',
    tips: [
      {
        text: <>Generate a <strong>list of job titles</strong> based off of your interests to discover roles you might be missing</>,
        icon: <SearchIcon />,
      },
      {
        text: <>Create a <strong>list of skills</strong> missing from your resume based on job descriptions</>,
        icon: <PuzzleIcon />,
      },
      {
        text: <>Suggest improvements to your <strong>profile</strong> on professional networking sites e.g. LinkedIn</>,
        icon: <ProfileIcon />,
      },
      {
        text: <>Search for relevant <strong>events, webinars, or conferences</strong> to attend to expand your network</>,
        icon: <NetworkIcon />,
      },
    ],
  },
  {
    key: 'resume',
    label: 'Resume Writing Tips',
    heading: 'How to use GenAI to optimize your resume',
    tips: [
      {
        text: <>Brainstorm <strong>bullet points for the experience</strong> sections of your resume</>,
        icon: <BulbTipIcon />,
      },
      {
        text: <>Generate <strong>alternative ways to phrase your achievements</strong> more impactfully</>,
        icon: <PenIcon />,
      },
      {
        text: <>Analyze job descriptions of the roles you're applying to and <strong>suggest ways to better tailor your resume content</strong> to them</>,
        icon: <ClipboardIcon />,
      },
      {
        text: <>Suggest <strong>different resume format options</strong> based off of your industry and experience</>,
        icon: <DocumentIcon />,
      },
    ],
  },
  {
    key: 'cover-letter',
    label: 'Cover Letter Writing Tips',
    heading: 'How to use GenAI to optimize your cover letter',
    tips: [
      {
        text: <>Generate <strong>sample cover letters</strong> based off of your industry to take inspiration from</>,
        icon: <IdeaHeadIcon />,
      },
      {
        text: <>Suggest different options to effectively <strong>structure your cover letter</strong></>,
        icon: <LetterIcon />,
      },
      {
        text: <><strong>Research the company</strong> you are applying to and generate ways to <strong>incorporate relevant details</strong></>,
        icon: <CompanyIcon />,
      },
      {
        text: <>Review what you have written and suggest ways to <strong>refine and polish your language</strong></>,
        icon: <PolishIcon />,
      },
    ],
  },
  {
    key: 'interview',
    label: 'Interview Prep Tips',
    heading: 'How to use GenAI to prepare for your job interview',
    tips: [
      {
        text: <>Collate and <strong>summarize recent company news</strong> and industry trends</>,
        icon: <NewsIcon />,
      },
      {
        text: <>Generate <strong>practice interview questions</strong> based on the job description</>,
        icon: <ThoughtBubbleIcon />,
      },
      {
        text: <>Generate <strong>answers to common interview questions</strong> based on your experience and the job description</>,
        icon: <AnswerIcon />,
      },
      {
        text: <>Produce <strong>questions that you can ask the interviewer</strong> at the end of your interview</>,
        icon: <AskIcon />,
      },
    ],
  },
];

function TipsSection() {
  const [activeTab, setActiveTab] = useState('job-search');
  const currentTab = TABS.find(t => t.key === activeTab);

  return (
    <section id="tips" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-12"
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
            GenAI Tips
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
            AI-Powered Application Tips
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-3xl">
            Practical ways to leverage generative AI tools throughout your application journey—from job search to interview preparation.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border-2 cursor-pointer"
              style={{
                backgroundColor: activeTab === tab.key ? '#0B1A2E' : 'transparent',
                color: activeTab === tab.key ? '#ffffff' : '#1E293B',
                borderColor: activeTab === tab.key ? '#0B1A2E' : '#CBD5E1',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.key) {
                  e.currentTarget.style.borderColor = '#2F80ED';
                  e.currentTarget.style.color = '#2F80ED';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.key) {
                  e.currentTarget.style.borderColor = '#CBD5E1';
                  e.currentTarget.style.color = '#1E293B';
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease }}
            className="rounded-3xl overflow-hidden border border-blue-100"
            style={{ backgroundColor: '#EAF3FF' }}
          >
            {/* Tab Title */}
            <div className="px-8 sm:px-10 pt-8 pb-4">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-800">
                {currentTab.heading}
              </h3>
            </div>

            {/* Tips Grid */}
            <div className="px-8 sm:px-10 pb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {currentTab.tips.map((tip, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease, delay: i * 0.08 }}
                    className="bg-white rounded-2xl p-6 flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="shrink-0 h-12 w-12 flex items-center justify-center text-slate-700">
                      {tip.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-4">
                        {tip.text}
                      </p>
                      <button
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
                        style={{
                          backgroundColor: '#2F80ED',
                          color: '#ffffff',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: '0 2px 8px rgba(47,128,237,0.25)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#1E5DB8';
                          e.currentTarget.style.boxShadow = '0 4px 16px rgba(47,128,237,0.35)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#2F80ED';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(47,128,237,0.25)';
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        View Example Prompt
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ───────────────────────────────── DISCOVER MORE (CTA) ─── */
function DiscoverMoreSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF8] overflow-hidden" style={DOT_BG}>
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease }}
          className="mb-14"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
            Discover More
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Careers in AI (Double width: 6 cols out of 12) */}
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
                Explore our Careers in AI
              </h3>
              <p className="text-sm leading-relaxed mt-4 max-w-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                At Syntera Solutions, AI powers transformation. With ~20% revenue from AI and rising demand, you'll lead innovation that shapes industries and drives real impact.
              </p>
            </div>

            <div className="mt-8 self-start">
              <div
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: '#2F80ED',
                }}
              >
                Explore Careers
              </div>
            </div>
          </motion.div>

          {/* Card 2: Responsible AI in Hiring */}
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
              <h3 className="font-display text-2xl font-extrabold leading-tight" style={{ color: '#1E293B' }}>
                How Syntera Solutions uses Responsible AI in Hiring
              </h3>
              <p className="text-sm leading-relaxed mt-4" style={{ color: '#475569' }}>
                Syntera Solutions follows responsible AI principles in our hiring, focused on transparency, accountability, and human oversight at the heart of all decision-making.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider border-b-2 pb-0.5 transition-all duration-200"
                style={{ color: '#2F80ED', borderColor: '#2F80ED', textDecoration: 'none' }}
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Card 3: GenAI Virtual Experience */}
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
              <h3 className="font-display text-2xl font-extrabold leading-tight" style={{ color: '#1E293B' }}>
                Explore our GenAI Virtual Experience
              </h3>
              <p className="text-sm leading-relaxed mt-4" style={{ color: '#475569' }}>
                Get hands-on exposure to real-world AI problem-solving and see what a career in AI at Syntera Solutions could look like.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider border-b-2 pb-0.5 transition-all duration-200"
                style={{ color: '#2F80ED', borderColor: '#2F80ED', textDecoration: 'none' }}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ════════════════════════════════════════════════════════════════
   SVG ICONS — Use AI To Section
   ════════════════════════════════════════════════════════════════ */

function GenerateIdeasIcon() {
  return (
    <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Graduation cap */}
      <path d="M8 28L32 16L56 28L32 40L8 28Z" />
      <path d="M16 33V47C16 47 22 53 32 53C42 53 48 47 48 47V33" />
      <path d="M32 28V40" />
      <circle cx="32" cy="14" r="2" fill="currentColor" />
      <path d="M52 28V44" />
      <circle cx="52" cy="46" r="2.5" fill="currentColor" />
    </svg>
  );
}

function OrganiseIcon() {
  return (
    <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Circuit/flow diagram */}
      <rect x="8" y="8" width="16" height="12" rx="2" />
      <rect x="40" y="8" width="16" height="12" rx="2" />
      <rect x="24" y="44" width="16" height="12" rx="2" />
      <path d="M24 14H40" />
      <path d="M16 20V32H32V44" />
      <path d="M48 20V32H32" />
      <circle cx="16" cy="32" r="2.5" fill="currentColor" />
      <circle cx="48" cy="32" r="2.5" fill="currentColor" />
      <circle cx="32" cy="38" r="2.5" fill="currentColor" />
    </svg>
  );
}

function FindSourcesIcon() {
  return (
    <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Lightbulb */}
      <path d="M32 6C22 6 16 14 16 22C16 28 20 32 24 36V42H40V36C44 32 48 28 48 22C48 14 42 6 32 6Z" />
      <line x1="24" y1="46" x2="40" y2="46" />
      <line x1="26" y1="50" x2="38" y2="50" />
      <line x1="28" y1="54" x2="36" y2="54" />
      {/* Filament lines */}
      <path d="M28 36V28L32 24L36 28V36" />
      {/* Light rays */}
      <line x1="32" y1="2" x2="32" y2="0" />
      <line x1="52" y1="10" x2="54" y2="8" />
      <line x1="12" y1="10" x2="10" y2="8" />
      <line x1="56" y1="22" x2="58" y2="22" />
      <line x1="8" y1="22" x2="6" y2="22" />
    </svg>
  );
}

function MisrepresentIcon() {
  return (
    <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Speech bubble with X */}
      <path d="M10 12H46C48.2 12 50 13.8 50 16V36C50 38.2 48.2 40 46 40H22L14 48V40H10C7.8 40 6 38.2 6 36V16C6 13.8 7.8 12 10 12Z" />
      <line x1="21" y1="21" x2="35" y2="35" />
      <line x1="35" y1="21" x2="21" y2="35" />
    </svg>
  );
}

function RelyOnlyIcon() {
  return (
    <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Monitor with circular arrows */}
      <rect x="16" y="16" width="32" height="24" rx="2" />
      <line x1="26" y1="44" x2="38" y2="44" />
      <line x1="32" y1="40" x2="32" y2="44" />
      {/* Lightbulb inside screen */}
      <path d="M29 24C27 24 26 26 26 28C26 30 28 31 29 32H35C36 31 38 30 38 28C38 26 37 24 35 24" />
      <line x1="29" y1="34" x2="35" y2="34" />
      {/* Circular arrows around */}
      <path d="M50 10C56 16 58 26 54 36" />
      <path d="M54 36L58 34L56 38" />
      <path d="M14 54C8 48 6 38 10 28" />
      <path d="M10 28L6 30L8 26" />
      <path d="M50 54C44 58 34 60 24 56" />
      <path d="M24 56L26 60L22 58" />
    </svg>
  );
}

function GiveUpVoiceIcon() {
  return (
    <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Globe */}
      <circle cx="32" cy="32" r="24" />
      <ellipse cx="32" cy="32" rx="10" ry="24" />
      <path d="M10 22H54" />
      <path d="M8 32H56" />
      <path d="M10 42H54" />
      {/* Warning triangle */}
      <path d="M46 40L54 54H38L46 40Z" strokeWidth="2.5" />
      <line x1="46" y1="45" x2="46" y2="49" strokeWidth="2.5" />
      <circle cx="46" cy="52" r="0.8" fill="currentColor" />
    </svg>
  );
}


/* ════════════════════════════════════════════════════════════════
   SVG ICONS — Tips Section
   ════════════════════════════════════════════════════════════════ */

/* Job Search Tips */
function SearchIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="17" cy="17" r="10" />
      <line x1="24" y1="24" x2="34" y2="34" />
      <circle cx="17" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PuzzleIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 18H14V12C14 12 16 10 18 12V18C18 18 20 16 22 18H28V24C28 24 30 22 32 24V30H26V36H14V30H8V18Z" />
      <line x1="18" y1="24" x2="22" y2="24" />
      <line x1="14" y1="28" x2="14" y2="30" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="28" height="32" rx="3" />
      <circle cx="20" cy="15" r="5" />
      <path d="M11 32C11 27 15 24 20 24C25 24 29 27 29 32" />
      <path d="M28 8L32 4" />
      <circle cx="33" cy="3" r="2" fill="currentColor" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="8" r="4" />
      <circle cx="8" cy="28" r="4" />
      <circle cx="32" cy="28" r="4" />
      <circle cx="20" cy="32" r="4" />
      <line x1="20" y1="12" x2="8" y2="24" />
      <line x1="20" y1="12" x2="32" y2="24" />
      <line x1="12" y1="28" x2="16" y2="32" />
      <line x1="28" y1="28" x2="24" y2="32" />
    </svg>
  );
}

/* Resume Writing Tips */
function BulbTipIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4C14 4 10 9 10 14C10 18 13 21 15 23V27H25V23C27 21 30 18 30 14C30 9 26 4 20 4Z" />
      <line x1="15" y1="30" x2="25" y2="30" />
      <line x1="17" y1="33" x2="23" y2="33" />
      <path d="M20 14V20" />
      <path d="M17 17H23" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 4L36 12L14 34H6V26L28 4Z" />
      <line x1="24" y1="8" x2="32" y2="16" />
      <line x1="6" y1="34" x2="14" y2="34" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="6" width="24" height="30" rx="2" />
      <rect x="14" y="2" width="12" height="8" rx="1" />
      <line x1="14" y1="18" x2="26" y2="18" />
      <line x1="14" y1="23" x2="26" y2="23" />
      <line x1="14" y1="28" x2="22" y2="28" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 4H26L32 10V36H10C8.9 36 8 35.1 8 34V6C8 4.9 8.9 4 10 4Z" />
      <path d="M26 4V10H32" />
      <line x1="14" y1="16" x2="28" y2="16" />
      <line x1="14" y1="21" x2="28" y2="21" />
      <line x1="14" y1="26" x2="22" y2="26" />
    </svg>
  );
}

/* Cover Letter Writing Tips */
function IdeaHeadIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 36C12 34 8 30 8 22C8 14 14 8 22 8" />
      <circle cx="22" cy="22" r="14" />
      {/* Lightbulb inside head */}
      <path d="M19 18C17.5 18 16 19.5 16 21C16 22.5 17.5 24 19 25V27H25V25C26.5 24 28 22.5 28 21C28 19.5 26.5 18 25 18" />
      <line x1="19" y1="29" x2="25" y2="29" />
    </svg>
  );
}

function LetterIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="8" width="28" height="24" rx="2" />
      <polyline points="6 8 20 20 34 8" />
      <line x1="12" y1="20" x2="16" y2="20" />
      <line x1="12" y1="24" x2="28" y2="24" />
      <line x1="12" y1="28" x2="24" y2="28" />
    </svg>
  );
}

function CompanyIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="6" width="20" height="30" rx="1" />
      <rect x="14" y="10" width="4" height="4" />
      <rect x="22" y="10" width="4" height="4" />
      <rect x="14" y="18" width="4" height="4" />
      <rect x="22" y="18" width="4" height="4" />
      <rect x="16" y="28" width="8" height="8" />
    </svg>
  );
}

function PolishIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6C14 6 10 10 10 16C10 20 14 24 16 26V30H24V26C26 24 30 20 30 16C30 10 26 6 20 6Z" />
      <line x1="16" y1="33" x2="24" y2="33" />
      {/* Sparkle lines */}
      <path d="M34 8L36 6" />
      <path d="M36 14H38" />
      <path d="M6 8L4 6" />
      <path d="M4 14H2" />
      <circle cx="34" cy="4" r="1" fill="currentColor" />
      <circle cx="6" cy="4" r="1" fill="currentColor" />
    </svg>
  );
}

/* Interview Prep Tips */
function NewsIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="26" height="28" rx="2" />
      <path d="M30 12H34C35.1 12 36 12.9 36 14V32C36 33.1 35.1 34 34 34H8" />
      <line x1="10" y1="12" x2="18" y2="12" />
      <line x1="10" y1="17" x2="24" y2="17" />
      <line x1="10" y1="22" x2="24" y2="22" />
      <line x1="10" y1="27" x2="18" y2="27" />
      <rect x="20" y="24" width="4" height="6" />
    </svg>
  );
}

function ThoughtBubbleIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 22C8 14.3 14.3 8 22 8C29.7 8 36 14.3 36 22C36 29.7 29.7 36 22 36C19.5 36 17.2 35.3 15.2 34.1L8 36L9.9 28.8C8.7 26.8 8 24.5 8 22Z" />
      <circle cx="16" cy="22" r="1.5" fill="currentColor" />
      <circle cx="22" cy="22" r="1.5" fill="currentColor" />
      <circle cx="28" cy="22" r="1.5" fill="currentColor" />
    </svg>
  );
}

function AnswerIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="22" height="28" rx="2" />
      <path d="M12 32H32C33.1 32 34 32.9 34 34V36H12" />
      <line x1="12" y1="10" x2="22" y2="10" />
      <line x1="12" y1="15" x2="20" y2="15" />
      <line x1="12" y1="20" x2="24" y2="20" />
      <line x1="12" y1="25" x2="18" y2="25" />
    </svg>
  );
}

function AskIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Two people talking */}
      <circle cx="12" cy="10" r="5" />
      <path d="M4 28C4 23 8 20 12 20" />
      <circle cx="28" cy="10" r="5" />
      <path d="M36 28C36 23 32 20 28 20" />
      {/* Speech bubbles */}
      <path d="M16 18L20 22L16 26" />
      <path d="M24 18L20 22L24 26" />
      <circle cx="20" cy="32" r="2" fill="currentColor" />
      <circle cx="16" cy="34" r="1.2" fill="currentColor" />
      <circle cx="24" cy="34" r="1.2" fill="currentColor" />
    </svg>
  );
}
