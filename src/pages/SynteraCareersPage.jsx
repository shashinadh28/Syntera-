import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

/* ─── Animation Variants ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

/* ─── Icons (inline SVG) ─────────────────────────────── */
const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
const MapPinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);
const ChevronRightIcon = ({ className = 'w-3 h-3' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);
const ChevronLeftIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const ArrowUpRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
  </svg>
);
const QuoteIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const StarIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

/* ─── Brand Colors ─────────────────────────────────────── */
const BRAND = '#2F80ED';
const BRAND_DARK = '#0F172A';
const BRAND_GRAD = 'linear-gradient(135deg, #2F80ED, #1E5DB8)';

/* ─── Data ─────────────────────────────────────────────── */
const stats = [
  { value: '500+', label: 'Consultants Placed' },
  { value: '200+', label: 'Enterprise Clients' },
  { value: '15+', label: 'Years in the Industry' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

const workforceServices = [
  {
    num: '01',
    title: 'Staff Augmentation',
    short: 'Scale and flex your team to meet business priorities with our flexible staffing solutions.',
    description:
      'Our staff augmentation services provide qualified professionals aligned with technical, non-IT, functional, and project needs to quickly strengthen teams and maintain delivery momentum.',
    image: '/syntera-careers/OurServices/Staff-Augmentation.webp',
  },
  {
    num: '02',
    title: 'Direct Hire',
    short: "We've got you covered for top talent — onsite, hybrid, or remote placements.",
    description:
      'Our direct hire solutions identify and place high-caliber permanent talent across technical, functional, and leadership roles — ensuring the right cultural and skills fit every time.',
    image: '/syntera-careers/OurServices/Direct-Hire.webp',
  },
  {
    num: '03',
    title: 'SOW & Project Based Delivery',
    short: 'Complete project-based solutions with clear scope of work and deliverables.',
    description:
      'We take ownership of defined project outcomes with a dedicated team, clear milestones, and accountability — so you can focus on strategy while we handle execution.',
    image: '/syntera-careers/OurServices/SOW-Project-Based-Delivery.webp',
  },
  {
    num: '04',
    title: 'Global Payroll Services',
    short: 'Comprehensive payroll solutions for your global workforce management needs.',
    description:
      'From multi-country compliance to real-time payroll processing, our global payroll service handles all complexities so your workforce gets paid accurately, on time, every time.',
    image: '/syntera-careers/OurServices/Global-Payroll-Services.webp',
  },
  {
    num: '05',
    title: 'Global Capability Centers (GCC)',
    short: 'Build and scale world-class capability centers with the right talent and operational support.',
    description:
      'We help you design, staff, and operate world-class GCCs — from location strategy and talent acquisition to governance frameworks and operational ramp-up.',
    image: '/syntera-careers/OurServices/Global-Capability-Centers.webp',
  },
  {
    num: '06',
    title: 'Talent Development & Transformation',
    short: 'Practical training and capability-building programs.',
    description:
      'We deliver targeted upskilling, leadership development, and transformation programs that build lasting capability across your organization — not just short-term fixes.',
    image: '/syntera-careers/OurServices/Talent-Development-Transformation.webp',
  },
];

const aboutPillars = [
  'Expertise and Experience',
  'Client-Centric Approach',
  'Commitment to Excellence & Growth',
  '15+ Years of Leadership',
];

const aboutStats = [
  { value: '15+', suffix: 'Years of Excellence' },
  { value: '200+', suffix: 'Global Clients' },
  { value: '500+', suffix: 'Professionals Deployed' },
  { value: '5+', suffix: 'Offices Across 2 Countries' },
];

const testimonials = [
  {
    quote: 'Great experience working with Syntera Consulting. They understand our needs and what we do as a company. Armed with this understanding, the profiles we receive hit the spot each time.',
    company: 'Financial Firm',
    role: 'HR Manager',
  },
  {
    quote: 'We would like to express our satisfaction on the Data Integration and Marketing Analytics project. Highly competent team at Syntera Consulting did a great job.',
    company: 'Retail Firm',
    role: 'Head of Data and Analytics',
  },
  {
    quote: 'I would like to take this moment to acknowledge your polite tenaciousness. Syntera Consulting has become my go-to team whenever we face a difficult-to-fill role.',
    company: 'Healthcare Firm',
    role: 'Sr. IT Manager',
  },
  {
    quote: 'We have found Syntera Consulting extremely proficient and supportive in all aspects of their work. Their approach in matching the right candidate to the relevant role has been impressive.',
    company: 'Large MSP Firm',
    role: 'Program Director',
  },
];

const opportunities = [
  {
    title: 'Recruiting & Sales',
    description: 'Build genuine client relationships and partner with our recruiters to find the right person for every job opening.',
    image: '/syntera-careers/careers_recruiting_sales.png',
    bgColor: '#DBEAFE',
  },
  {
    title: 'Corporate',
    description: 'From IT to Finance, Legal or HR, our team is the bustling hub of the company — nimble thinkers, makers and problem solvers.',
    image: '/syntera-careers/careers_corporate.png',
    bgColor: '#FEF3C7',
  },
  {
    title: 'Technology',
    description: 'Find your next role in our technology division. Make a difference as a full-time team member across sales, delivery, or operations.',
    image: '/syntera-careers/careers_technology.png',
    bgColor: '#F1F5F9',
  },
  {
    title: 'Veteran / SkillBridge',
    description: 'We are proud to hire Veterans to our growing family. Whether an internal role or SkillBridge internship, opportunities await.',
    image: '/syntera-careers/careers_veteran.png',
    bgColor: '#DBEAFE',
  },
];

const values = [
  {
    title: 'High Character',
    description: 'We operate with integrity and transparency in everything we do.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Hard Work',
    description: 'We bring relentless effort to every task, from candidate placement to client delivery.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Team Growth',
    description: 'We invest in our people — personally, professionally, and financially.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
  },
  {
    title: 'Global Impact',
    description: 'Our work connects talented people with life-changing opportunities worldwide.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const benefits = [
  'Competitive salary & performance bonuses',
  'Health, dental & vision insurance',
  'Flexible work arrangements',
  'Career development programs',
  'Mentorship from industry leaders',
  '401(k) with company match',
  'Paid time off & holidays',
  'Team retreats & culture events',
];

/* ─── Workforce Accordion ─────────────────────────────── */
function WorkforceSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-14" style={{ background: '#F0F4F8' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-10"
        >
          <motion.span variants={fadeUp} className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: BRAND }}>
            Our Services
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            All Your Workforce Needs{' '}
            <span style={{ color: BRAND }}>in One Place</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Connecting people, processes, and possibilities to empower organizations and professionals. Syntera Consulting helps build strong teams, advance careers, and scale enterprise programs with precision and purpose.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-col gap-3"
        >
          {workforceServices.map((svc, idx) => {
            const isOpen = active === idx;
            return (
              <motion.div
                key={svc.num}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  background: '#ffffff',
                  border: isOpen ? `1.5px solid rgba(47,128,237,0.35)` : '1.5px solid rgba(0,0,0,0.07)',
                  boxShadow: isOpen
                    ? '0 12px 40px rgba(47,128,237,0.12), 0 2px 8px rgba(0,0,0,0.06)'
                    : '0 2px 8px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={() => setActive(idx)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isOpen ? null : idx)}
              >
                {/* Collapsed row */}
                <div className="flex items-center gap-5 px-7 py-5">
                  <span className="text-sm font-bold shrink-0 w-8" style={{ color: isOpen ? BRAND : '#6B9DB8' }}>
                    {svc.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug">{svc.title}</h3>
                    {!isOpen && <p className="text-slate-400 text-sm mt-0.5 truncate">{svc.short}</p>}
                  </div>
                  <div
                    className="w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      borderColor: isOpen ? BRAND : 'rgba(0,0,0,0.12)',
                      color: isOpen ? BRAND : '#9CA3AF',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ArrowUpRightIcon />
                  </div>
                </div>

                {/* Expanded */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="flex flex-col sm:flex-row gap-6 px-7 pb-7 pt-1">
                        <div className="sm:w-56 lg:w-64 shrink-0">
                          <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden">
                            <img src={svc.image} alt={svc.title} className="w-full h-full object-cover object-center" />
                          </div>
                        </div>
                        <div className="flex flex-col justify-between gap-5 flex-1">
                          <div>
                            <p className="text-slate-400 text-sm leading-relaxed mb-2">{svc.short}</p>
                            <p className="text-slate-800 text-sm leading-relaxed font-medium">{svc.description}</p>
                          </div>
                          <Link
                            to="/contact"
                            className="self-start inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-white transition-all duration-200 hover:brightness-110"
                            style={{ background: BRAND_GRAD }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Explore <ArrowRightIcon />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main Page ───────────────────────────────────────── */
export default function SynteraCareersPage() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [currentStat, setCurrentStat] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevStat = () => setCurrentStat((p) => (p - 1 + stats.length) % stats.length);
  const nextStat = () => setCurrentStat((p) => (p + 1) % stats.length);
  const prevTestimonial = () => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () => setActiveTestimonial((p) => (p + 1) % testimonials.length);

  useEffect(() => {
    const t = setInterval(nextTestimonial, 5000);
    return () => clearInterval(t);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // future: filter logic
  };

  return (
    <div className="overflow-hidden bg-white">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[580px] flex flex-col items-center justify-center overflow-hidden pt-28 pb-16">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/syntera-careers/careers_hero_bg.png"
            alt="Syntera Careers"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(10,22,40,0.65) 0%, rgba(10,22,40,0.45) 60%, rgba(10,22,40,0.80) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Breadcrumb */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-6">
              <Link to="/" className="text-white/60 text-sm hover:text-blue-300 transition-colors">Home</Link>
              <ChevronRightIcon className="w-3 h-3 text-white/40" />
              <span className="text-blue-300 text-sm font-medium">Internal Careers</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
            >
              SYNTERA{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #60A5FA, #93C5FD)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Internal Careers
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              We are a staffing and technology company that connects people with opportunities. Our purpose is to grow our people personally, professionally, and financially — so they can be the light for the world around them.
            </motion.p>

            {/* Search bar */}
            <motion.form
              variants={fadeUp}
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
            >
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><SearchIcon /></span>
                <input
                  id="careers-keyword-search"
                  type="text"
                  placeholder="Search keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white text-slate-800 text-sm font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 shadow-lg"
                />
              </div>
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><MapPinIcon /></span>
                <input
                  id="careers-location-search"
                  type="text"
                  placeholder="Search location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white text-slate-800 text-sm font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 shadow-lg"
                />
              </div>
              <button
                id="careers-search-btn"
                type="submit"
                className="px-8 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:brightness-110 active:scale-95 shadow-lg whitespace-nowrap"
                style={{ background: BRAND_GRAD }}
              >
                Search
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">Why Syntera Consulting?</h2>
          </motion.div>

          {/* Desktop all stats */}
          <div className="hidden md:flex items-center justify-center gap-4">
            <button
              id="stats-prev-btn"
              onClick={prevStat}
              className="p-2 rounded-full border border-slate-200 text-slate-500 hover:border-blue-500 hover:text-blue-500 transition-colors flex-shrink-0"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <div className="flex gap-12 lg:gap-20">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="font-display text-3xl lg:text-4xl font-extrabold mb-1" style={{ color: BRAND }}>{stat.value}</div>
                  <div className="text-xs text-slate-500 max-w-[130px] mx-auto leading-snug">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <button
              id="stats-next-btn"
              onClick={nextStat}
              className="p-2 rounded-full border border-slate-200 text-slate-500 hover:border-blue-500 hover:text-blue-500 transition-colors flex-shrink-0"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile single stat */}
          <div className="md:hidden flex items-center justify-center gap-4">
            <button onClick={prevStat} className="p-2 rounded-full border border-slate-200 text-slate-500">
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStat}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="text-center min-w-[160px]"
              >
                <div className="font-display text-4xl font-extrabold mb-1" style={{ color: BRAND }}>{stats[currentStat].value}</div>
                <div className="text-xs text-slate-500 max-w-[160px] mx-auto leading-snug">{stats[currentStat].label}</div>
              </motion.div>
            </AnimatePresence>
            <button onClick={nextStat} className="p-2 rounded-full border border-slate-200 text-slate-500">
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══ WORKFORCE ACCORDION ═══ */}
      <WorkforceSection />

      {/* ═══ OPPORTUNITIES ═══ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Opportunities at <span style={{ color: BRAND }}>Syntera Consulting</span>
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Explore the different paths you can take to build a rewarding career with us.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {opportunities.map((opp, idx) => (
              <motion.div key={opp.title} variants={fadeUp} className="flex flex-col items-center text-center group">
                <div
                  className="relative w-44 h-44 rounded-full overflow-hidden mb-5 shadow-lg transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: opp.bgColor }}
                >
                  <img src={opp.image} alt={opp.title} className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3">{opp.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-[220px]">{opp.description}</p>
                <Link
                  id={`opportunity-explore-${idx}`}
                  to="/contact"
                  className="px-6 py-2.5 rounded-full border-2 text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:text-white"
                  style={{ borderColor: BRAND_DARK, color: BRAND_DARK }}
                  onMouseEnter={e => { e.currentTarget.style.background = BRAND_DARK; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = BRAND_DARK; }}
                >
                  Explore
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ FUELED BY GRIT ═══ */}
      <section className="relative overflow-hidden min-h-[380px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/syntera-careers/careers_fueled_grit.png" alt="Fueled by Grit" className="w-full h-full object-cover object-center" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.78) 45%, rgba(10,22,40,0.25) 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-lg"
          >
            <motion.h2 variants={fadeUp} className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Fueled by Grit
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/75 text-sm sm:text-base leading-relaxed">
              One of our Shared Values is{' '}
              <span className="text-white font-semibold">"High Character and Hard Work Above All Else."</span>{' '}
              Whether it's finding the right candidate for a job or seamlessly managing a project end to end for a client, we are trusted and we deliver. At Syntera Consulting we value Grit in our people, and it's part of our mission to teach you how to use it to build a life-long career you can be proud of.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══ ABOUT SYNTERA ═══ */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left copy */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={fadeUp} className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: BRAND }}>
                About Syntera Consulting
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Trusted by Enterprises{' '}
                <span style={{ color: BRAND }}>and Global Innovators.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-500 text-base leading-relaxed mb-8">
                Workforce solutions and consulting firm combining people-first values with innovation to deliver talent and measurable impact. For 15+ years, we've helped Fortune 500s, mid-sized businesses, and startups build teams and technology to succeed.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3 mb-8">
                {aboutPillars.map((p) => (
                  <motion.li key={p} variants={fadeUp} className="flex items-center gap-3">
                    <span style={{ color: BRAND }}><CheckCircleIcon /></span>
                    <span className="text-slate-800 font-semibold text-sm">{p}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link
                  id="about-learn-more-btn"
                  to="/values-and-culture"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all duration-200 hover:brightness-110 shadow-md"
                  style={{ background: BRAND_GRAD }}
                >
                  Learn More <ArrowRightIcon />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — stat counters */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 gap-5"
            >
              {aboutStats.map((s, i) => (
                <motion.div
                  key={s.suffix}
                  variants={fadeUp}
                  className="relative rounded-2xl p-8 overflow-hidden flex flex-col justify-between"
                  style={{
                    background: i % 2 === 0 ? BRAND_DARK : 'rgba(47,128,237,0.06)',
                    border: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(47,128,237,0.18)',
                  }}
                >
                  {i % 2 === 0 && (
                    <div
                      className="pointer-events-none absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20"
                      style={{ background: BRAND }}
                    />
                  )}
                  <div
                    className="font-display text-4xl font-extrabold mb-1 relative z-10"
                    style={{ color: i % 2 === 0 ? '#60A5FA' : BRAND }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-sm font-medium relative z-10"
                    style={{ color: i % 2 === 0 ? 'rgba(255,255,255,0.55)' : '#6B7280' }}
                  >
                    {s.suffix}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ OUR VALUES ═══ */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-8"
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: BRAND }}>
              Our Culture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">What We Stand For</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((val) => (
              <motion.div
                key={val.title}
                variants={fadeUp}
                className="relative p-7 rounded-2xl border border-slate-100 hover:border-blue-300/50 transition-all duration-300 hover:shadow-lg group bg-white"
              >
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, rgba(47,128,237,0.08), transparent)` }}
                />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(47,128,237,0.10)' }}>
                  <span style={{ color: BRAND }}>{val.icon}</span>
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-14 relative overflow-hidden" style={{ backgroundColor: BRAND_DARK }}>
        {/* Dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(47,128,237,0.12) 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Ambient orbs */}
        <div aria-hidden className="pointer-events-none absolute -left-40 top-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10" style={{ background: BRAND }} />
        <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10" style={{ background: '#93C5FD' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-10"
          >
            <motion.span variants={fadeUp} className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#60A5FA' }}>
              Words of Appreciation
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-white">
              Our Client Testimonials
            </motion.h2>
          </motion.div>

          {/* Featured testimonial */}
          <div className="max-w-3xl mx-auto mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="relative rounded-3xl p-10 sm:p-14 text-center"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[2px] rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, transparent, ${BRAND}, transparent)` }}
                />
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(47,128,237,0.15)' }}>
                    <span style={{ color: '#60A5FA' }}><QuoteIcon /></span>
                  </div>
                </div>
                <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-8 italic font-light">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: BRAND_GRAD }}
                  >
                    {testimonials[activeTestimonial].company[0]}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-sm">{testimonials[activeTestimonial].company}</div>
                    <div className="text-white/50 text-xs">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                id="testimonial-prev-btn"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-white/20 text-white/60 flex items-center justify-center transition-all duration-200"
                style={{}}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BRAND; e.currentTarget.style.color = '#60A5FA'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)'; e.currentTarget.style.color = 'rgba(255,255,255,0.60)'; }}
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  id={`testimonial-dot-${i}`}
                  onClick={() => setActiveTestimonial(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === activeTestimonial ? '28px' : '8px',
                    height: '8px',
                    background: i === activeTestimonial ? BRAND : 'rgba(255,255,255,0.25)',
                  }}
                />
              ))}
              <button
                id="testimonial-next-btn"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-white/20 text-white/60 flex items-center justify-center transition-all duration-200"
                onMouseEnter={e => { e.currentTarget.style.borderColor = BRAND; e.currentTarget.style.color = '#60A5FA'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)'; e.currentTarget.style.color = 'rgba(255,255,255,0.60)'; }}
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Thumbnail mini-cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {testimonials.map((t, i) => (
              <motion.button
                key={i}
                id={`testimonial-card-${i}`}
                variants={fadeUp}
                onClick={() => setActiveTestimonial(i)}
                className="rounded-xl p-4 text-left transition-all duration-300 cursor-pointer"
                style={{
                  background: i === activeTestimonial ? 'rgba(47,128,237,0.18)' : 'rgba(255,255,255,0.04)',
                  border: i === activeTestimonial ? `1px solid rgba(47,128,237,0.45)` : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="text-xs text-white/80 font-bold mb-0.5 truncate">{t.company}</div>
                <div className="text-[10px] text-white/40 truncate">{t.role}</div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ BENEFITS & PERKS ═══ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={fadeUp} className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: BRAND }}>
                Why Join Us
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
                Benefits & Perks
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-500 text-base leading-relaxed">
                We invest in the well-being and growth of every team member. Here's what you can expect when you join the Syntera Consulting family.
              </motion.p>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(47,128,237,0.10)' }}>
                    <span style={{ color: BRAND }}><StarIcon /></span>
                  </div>
                  <span className="text-slate-800 text-sm font-medium">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ═══ APPLY CTA ═══ */}
      <section className="py-14 relative overflow-hidden" style={{ backgroundColor: BRAND_DARK }}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(47,128,237,0.10) 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-15"
          style={{ background: BRAND }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-4">
              <span
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full"
                style={{ background: 'rgba(47,128,237,0.12)', color: '#60A5FA', border: '1px solid rgba(47,128,237,0.25)' }}
              >
                <BriefcaseIcon /> Join Our Team
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
              Ready to Build a Career <br className="hidden sm:block" />
              You're Proud Of?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Take the first step toward a fulfilling career. Get in touch with our team and let's find the right opportunity for you.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                id="careers-apply-cta"
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all duration-200 hover:brightness-110 shadow-lg"
                style={{ background: BRAND_GRAD }}
              >
                Apply Now <ArrowRightIcon />
              </Link>
              <Link
                id="careers-learn-more"
                to="/values-and-culture"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm border transition-all duration-200 hover:bg-white hover:text-slate-900"
                style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)' }}
              >
                Learn About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
