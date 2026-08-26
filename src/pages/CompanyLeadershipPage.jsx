import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SectionWrapper from '../components/SectionWrapper.jsx';
import Reveal, { RevealGroup } from '../components/Reveal.jsx';

/* ── LinkedIn SVG ──────────────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

/* ── Member Card ───────────────────────────────────────── */
function MemberCard({ member }) {
  return (
    <Reveal variant="fadeUp" className="w-full flex justify-center">
      <div className="w-full max-w-[260px] relative group bg-white border border-slate-200/60 rounded-2xl flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-full aspect-[4/5] overflow-hidden bg-slate-100">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover object-top scale-105 grayscale group-hover:grayscale-0 group-hover:scale-100 transition-all duration-500"
          />
        </div>
        <article className="p-5 text-center">
          <div className="flex items-center justify-center gap-2">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200"
              style={{ textDecoration: 'none' }}
            >
              {member.name}
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title={`${member.name} on LinkedIn`}
              className="flex-shrink-0 text-[#0077B5] hover:text-[#005885] transition-colors duration-200"
            >
              <LinkedInIcon />
            </a>
          </div>
          <p className="text-sm text-slate-500 mt-1 font-medium">{member.role}</p>
        </article>
      </div>
    </Reveal>
  );
}

/* ── Section Header ────────────────────────────────────── */
function SectionHeader({ category, title, description, accentColor = '#2F80ED' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-6 flex flex-col items-center text-center"
    >
      <span
        className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-2"
        style={{ color: accentColor }}
      >
        {category}
      </span>
      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">{title}</h2>
      <div className="h-[3px] w-14 rounded-full mb-4" style={{ background: accentColor }} />
      <p className="text-slate-500 text-base max-w-2xl leading-relaxed mx-auto">{description}</p>
    </motion.div>
  );
}

/* ── Team Sections Data ────────────────────────────────── */
const TEAM_SECTIONS = [
  {
    category: 'Board',
    title: 'Board of Directors',
    description: 'Our Board of Directors provides strategic oversight and guidance, supporting the company\'s long-term vision and growth.',
    accentColor: '#2F80ED',
    members: [
      {
        name: 'Nrupen Mandava',
        role: 'President',
        image: '/company-leadership/nrupen.webp',
        linkedin: 'https://www.linkedin.com/in/nrupen-mandava/',
      },
    ],
    cols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  },
  {
    category: 'Executive Leadership',
    title: 'Executive Team',
    description: 'Our executive leadership team drives strategy, innovation, and operational excellence across the organization.',
    accentColor: '#1E5DB8',
    members: [
      {
        name: 'Niranjan Ponna',
        role: 'Chief Executive Officer',
        image: '/company-leadership/Niranjan.webp',
        linkedin: 'https://www.linkedin.com/in/niranrathod/',
      },
      {
        name: 'Phani Kumar',
        role: 'Chief Operating Officer',
        image: '/company-leadership/phani.webp',
        linkedin: 'https://www.linkedin.com/in/mdphanikumar/',
      },
    ],
    cols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  },
  {
    category: 'Operations & Business Management',
    title: 'Operations & Management Team',
    description: 'Our operations and management leaders oversee business operations and support efficient organizational growth.',
    accentColor: '#0EA5E9',
    members: [
      {
        name: 'Bhavya Sharma',
        role: 'Director of Operations',
        image: '/company-leadership/Bhavya-Sharma.webp',
        linkedin: 'https://www.linkedin.com/in/bhavya-s-705102366/',
      },
      {
        name: 'Sai Kiran Ravva',
        role: 'Operations Manager',
        image: '/company-leadership/Sai-Kiran.webp',
        linkedin: 'https://www.linkedin.com/in/sai-kiran-manager-sales-opt/',
      },
    ],
    cols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  },
  {
    category: 'Talent & Business Support',
    title: 'Talent, Immigration & HR',
    description: 'Our team supports talent acquisition, immigration, human resources, and key business functions.',
    accentColor: '#6366F1',
    members: [
      {
        name: 'Selena Averson',
        role: 'Talent Acquisition Manager',
        image: '/company-leadership/Selena.webp',
        linkedin: 'https://www.linkedin.com/in/selenaa/',
      },
      {
        name: 'Ram',
        role: 'Talent Acquisition Manager',
        image: '/company-leadership/Ram.webp',
        linkedin: 'https://www.linkedin.com/in/rambornfire/',
      },
      {
        name: 'Jessica Anderson',
        role: 'Immigration Manager',
        image: '/company-leadership/Jessica-Anderson.webp',
        linkedin: 'https://www.linkedin.com/in/jessica-anderson/',
      },
      {
        name: 'Namratha',
        role: 'Immigration & Accounts Lead',
        image: '/company-leadership/Namratha.webp',
        linkedin: 'https://www.linkedin.com/in/namratha-mothey-b52607195/',
      },
      {
        name: 'Aditi Jain',
        role: 'HR Manager',
        image: '/company-leadership/Aditi-Jain.webp',
        linkedin: 'https://www.linkedin.com/in/aditi-jain-hr',
      },
    ],
    cols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
  },
  {
    category: 'Marketing',
    title: 'Digital Marketing',
    description: 'Our marketing team strengthens the SYNTERA brand and supports business growth through digital strategy and engagement.',
    accentColor: '#A855F7',
    members: [
      {
        name: 'Richie Ronit George',
        role: 'Digital Marketing Specialist',
        image: '/company-leadership/Richie.webp',
        linkedin: 'https://www.linkedin.com/in/richieronitgeorge',
      },
    ],
    cols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  },
];

/* ── Page ──────────────────────────────────────────────── */
export default function CompanyLeadershipPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-28 pb-14 bg-slate-900 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[350px] rounded-full blur-[120px]"
          style={{ background: 'rgba(47,128,237,0.10)' }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Our Visionaries
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Company Leadership
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mx-auto"
          >
            Meet the visionary team driving innovation, strategic partnerships, and excellence at Syntera Consulting
          </motion.p>
        </div>
      </section>

      {/* Team Sections */}
      {TEAM_SECTIONS.map((section, sIdx) => {
        const isAlt = sIdx % 2 !== 0; // bg-white sections get the grid overlay
        return (
          <section
            key={section.title}
            className={`relative overflow-hidden ${isAlt ? 'bg-white' : 'bg-slate-50'}`}
          >
            {isAlt && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(15,23,42,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.6) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
            )}

            <SectionWrapper id={`section-${sIdx}`} className="relative z-10 !py-10 sm:!py-12">
              <div className="flex flex-col items-center">
                <SectionHeader
                  category={section.category}
                  title={section.title}
                  description={section.description}
                  accentColor={section.accentColor}
                />

                {/* Subtle separator */}
                <div className="h-px w-full bg-slate-200/70 mb-8" />

                <RevealGroup
                  staggerChildren={0.08}
                  className={`grid ${section.cols} gap-6 justify-items-center w-full max-w-5xl mx-auto`}
                >
                  {section.members.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </RevealGroup>
              </div>
            </SectionWrapper>
          </section>
        );
      })}

      <Footer />
    </div>
  );
}
