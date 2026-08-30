import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { viewportOnce } from '../utils/motion';
import ScrollText from './ui/ScrollText.jsx';

const ease = [0.22, 1, 0.36, 1];

const STORIES = [
  {
    num: '01',
    storyTitle: 'Exceptional Placement Experience',
    name: 'Ruchika Pattjoshi',
    role: 'Senior Data Analyst',
    company: 'State of Massachusetts',
    quote:
      'Syntera made my placement experience smooth and straightforward. The team understood my technical background, identified an opportunity that aligned with my experience, and supported me throughout the interview and onboarding process.',
  },
  {
    num: '02',
    storyTitle: 'The Right Career Match',
    name: 'Rajendra Prasad Thummati',
    role: 'Power BI & Analytics Lead',
    company: 'Volvo Group',
    quote:
      'What stood out about Syntera was their focus on finding the right fit. They took the time to understand my experience and career goals before presenting an opportunity that genuinely matched what I was looking for.',
  },
  {
    num: '03',
    storyTitle: 'Professional Support Throughout',
    name: 'Priyanka Ramireddy',
    role: 'Business Intelligence Specialist',
    company: 'Brillio',
    quote:
      'The Syntera team was professional and responsive throughout the entire process. From our initial conversation to my first day on the project, communication was clear, timely, and well coordinated.',
  },
  {
    num: '04',
    storyTitle: 'More Than Recruiting',
    name: 'Sriharsha Barisetty',
    role: 'QA Automation & BSA Lead',
    company: 'Woori Bank',
    quote:
      'My experience with Syntera felt more like a professional partnership than a typical recruiting process. The team listened to what I wanted in my next role and worked with me to find an opportunity aligned with my goals.',
  },
  {
    num: '05',
    storyTitle: 'Smooth Interview & Onboarding',
    name: 'Sreekanth Upputuri',
    role: 'Cloud BI Solutions Architect',
    company: 'Adobe Systems',
    quote:
      'Syntera provided excellent support throughout the interview and onboarding process. I always knew what to expect next, and the team was available whenever I needed clarification or assistance.',
  },
  {
    num: '06',
    storyTitle: 'Technology-Focused Recruiting',
    name: 'RamaKrishna Chereddy',
    role: 'Enterprise Storage & Cloud Engineer',
    company: 'HCL Technologies',
    quote:
      'I appreciated that Syntera understood my technical experience and presented opportunities relevant to my skill set. Their focused approach made the job search much more efficient and helped me find the right opportunity.',
  },
  {
    num: '07',
    storyTitle: 'Career Growth',
    name: 'David Chen',
    role: 'Senior Full Stack Engineer',
    company: 'FinTech Enterprise Client',
    quote:
      'Syntera helped me take an important next step in my career. They understood the direction I wanted to pursue and connected me with an opportunity where I could apply my experience while continuing to grow professionally.',
  },
  {
    num: '08',
    storyTitle: 'Clear Communication',
    name: 'Ananya Sharma',
    role: 'Lead DevOps & Platform Engineer',
    company: 'Healthcare Cloud Solutions',
    quote:
      'Communication was one of the strongest parts of my experience with Syntera. The recruiting team kept me informed throughout the process and provided timely updates from submission through onboarding.',
  },
  {
    num: '09',
    storyTitle: 'Consultant-Focused Approach',
    name: 'Marcus Vance',
    role: 'Senior Data Engineer',
    company: 'Global Logistics Leader',
    quote:
      'Syntera took the time to understand what I was looking for instead of simply sending me every available position. Their consultant-focused approach helped connect me with an opportunity that was a strong match for my background.',
  },
  {
    num: '10',
    storyTitle: 'Seamless Transition',
    name: 'Elena Rostova',
    role: 'IAM & Identity Security Architect',
    company: 'Regional Health System',
    quote:
      'Moving into a new project can involve a lot of coordination, but Syntera made the transition seamless. The team handled the process professionally and provided support at every stage leading up to my start date.',
  },
  {
    num: '11',
    storyTitle: 'Responsive Recruiting Team',
    name: 'Karthik Nambiar',
    role: 'Principal AI/ML Engineer',
    company: 'Financial Services Group',
    quote:
      'Whenever I had a question, the Syntera team was accessible and quick to respond. Their transparency and consistent communication gave me confidence throughout the hiring and placement process.',
  },
  {
    num: '12',
    storyTitle: 'Right Opportunity, Right Skills',
    name: 'Sarah Jenkins',
    role: 'Cybersecurity Systems Engineer',
    company: 'Defense & Aerospace Client',
    quote:
      'Syntera understood where my technical strengths could provide the most value. The opportunity they presented aligned closely with my experience and gave me the chance to contribute to a challenging technology environment.',
  },
  {
    num: '13',
    storyTitle: 'A Trusted Career Partner',
    name: 'Vikram Malhotra',
    role: 'Solutions Architect — Databricks & GCP',
    company: 'Supply Chain & Retail Enterprise',
    quote:
      'Working with Syntera was a positive experience from beginning to end. Their team was knowledgeable, professional, and genuinely interested in helping me find an opportunity that supported my career objectives.',
  },
  {
    num: '14',
    storyTitle: 'Efficient Hiring Experience',
    name: 'Jessica Martinez',
    role: 'Senior QA & Automation Lead',
    company: 'Digital Banking Platform',
    quote:
      'The entire process with Syntera was organized and efficient. Interviews were coordinated quickly, expectations were communicated clearly, and I received the support I needed to successfully transition into my new role.',
  },
  {
    num: '15',
    storyTitle: 'Overall Syntera Experience',
    name: 'Siddharth Rao',
    role: 'Enterprise Cloud Architect',
    company: 'Fortune 100 Technology Firm',
    quote:
      'I had an excellent experience working with Syntera. From identifying the opportunity through placement and onboarding, the team remained professional, transparent, and supportive. I would gladly recommend Syntera to technology professionals exploring their next opportunity.',
  },
];

export default function SuccessStories() {
  const [showAll, setShowAll] = useState(false);
  const displayedStories = showAll ? STORIES : STORIES.slice(0, 6);

  return (
    <section
      id="stories"
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{
        backgroundColor: '#FAFAF8',
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.13) 1.5px, transparent 1.5px)',
        backgroundSize: '26px 26px',
      }}
    >
      {/* Subtle top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] blur-[100px]"
        style={{ background: 'rgba(47,128,237,0.05)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Consultant Success Stories
          </motion.span>

          <ScrollText
            text="Consultant Success Stories"
            as="h2"
            delay={0.05}
            stagger={0.055}
            className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight text-ink-900"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-4 text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: '#475569' }}
          >
            Real people. Meaningful opportunities. Successful careers.
          </motion.p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          <AnimatePresence>
            {displayedStories.map((s, i) => (
              <StoryCard key={s.num} story={s} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* ── Show More / Less Toggle Button ── */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#2F80ED] bg-white px-8 py-3.5 text-sm font-bold text-[#2F80ED] shadow-sm transition-all duration-300 hover:bg-[#2F80ED] hover:text-white hover:shadow-md active:scale-[0.98]"
          >
            <span>{showAll ? 'Show Fewer Stories' : `View All ${STORIES.length} Success Stories`}</span>
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7, ease, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl"
      style={{ border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }}
    >
      {/* Top brand blue accent */}
      <span
        className="absolute inset-x-0 top-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: 'linear-gradient(90deg, transparent, #2F80ED, transparent)' }}
      />

      {/* Profile area */}
      <div
        className="flex items-center gap-4 px-6 pt-6 pb-5"
        style={{ borderBottom: '1px solid rgba(15,23,42,0.07)' }}
      >
        <div
          className="shrink-0 h-16 w-16 rounded-2xl overflow-hidden flex items-center justify-center"
          style={{
            border: '2px solid rgba(47,128,237,0.2)',
            background: 'linear-gradient(135deg, rgba(47,128,237,0.12) 0%, rgba(47,128,237,0.22) 100%)',
          }}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            aria-label={story.name}
          >
            {/* Background circle */}
            <rect width="64" height="64" fill="rgba(47,128,237,0.08)" />
            {/* Head */}
            <circle cx="32" cy="24" r="11" fill="rgba(47,128,237,0.55)" />
            {/* Body / shoulders */}
            <ellipse cx="32" cy="52" rx="18" ry="12" fill="rgba(47,128,237,0.4)" />
          </svg>
        </div>

        <div>
          <h3 className="font-display font-bold text-ink-900 text-base leading-tight uppercase">
            {story.name}
          </h3>
          <p className="text-xs text-ink-500 mt-0.5 leading-relaxed">{story.role}</p>
          <span
            className="inline-block mt-1.5 text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-full"
            style={{ background: 'rgba(47,128,237,0.1)', color: '#1E5DB8' }}
          >
            PLACED AT • {story.company}
          </span>
        </div>
      </div>

      {/* Quote */}
      <div className="px-6 py-5 flex-1 flex flex-col">
        {/* Quote mark */}
        <svg
          className="mb-3 shrink-0"
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          aria-hidden
        >
          <path
            d="M0 18V10.8C0 7.2 1.2 4.2 3.6 1.8L6 0l1.8 1.8C6.6 3 5.7 4.5 5.1 6H9V18H0zm15 0V10.8c0-3.6 1.2-6.6 3.6-9L21 0l1.8 1.8C21.6 3 20.7 4.5 20.1 6H24V18H15z"
            fill="#2F80ED"
            fillOpacity="0.25"
          />
        </svg>
        <p className="text-sm leading-relaxed flex-1" style={{ color: '#475569' }}>
          {story.quote}
        </p>

        {/* Stars */}
        <div className="flex items-center gap-0.5 mt-5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#2F80ED" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
          <span className="text-[11px] font-semibold ml-1.5" style={{ color: '#2F80ED' }}>5.0</span>
        </div>
      </div>

      {/* Bottom hover line */}
      <span
        className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: '#2F80ED' }}
      />
    </motion.div>
  );
}
