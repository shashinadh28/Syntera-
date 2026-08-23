import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SectionWrapper from '../components/SectionWrapper.jsx';
import Reveal, { RevealGroup } from '../components/Reveal.jsx';

const TEAM_MEMBERS = [
  {
    name: 'Nrupen Mandava',
    role: 'President',
    image: '/company-leadership/nrupen.webp',
    linkedin: 'https://www.linkedin.com/in/nrupen-mandava/',
  },
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
  {
    name: 'Namratha',
    role: 'Immigration & Accounts Lead',
    image: '/company-leadership/Namratha.webp',
    linkedin: 'https://www.linkedin.com/in/namratha-mothey-b52607195/',
  },
  {
    name: 'Richie Ronit George',
    role: 'Digital Marketing Specialist',
    image: '/company-leadership/Richie.webp',
    linkedin: 'https://www.linkedin.com/in/richieronitgeorge',
  },
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
    name: 'Sai Kiran Ravva',
    role: 'Operations Manager',
    image: '/company-leadership/Sai-Kiran.webp',
    linkedin: 'https://www.linkedin.com/in/sai-kiran-manager-sales-opt/',
  },
  {
    name: 'Bhavya Sharma',
    role: 'Director of Operations',
    image: '/company-leadership/Bhavya-Sharma.webp',
    linkedin: 'https://www.linkedin.com/in/bhavya-s-705102366/',
  },
  {
    name: 'Jessica Anderson',
    role: 'Immigration Manager',
    image: '/company-leadership/Jessica-Anderson.webp',
    linkedin: 'https://www.linkedin.com/in/jessica-anderson/',
  },
  {
    name: 'Aditi Jain',
    role: 'HR Manager',
    image: '/company-leadership/Aditi-Jain.webp',
    linkedin: 'https://www.linkedin.com/in/aditi-jain-hr',
  },
];

export default function CompanyLeadershipPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[500px] h-[350px] rounded-full blur-[120px]" style={{ background: 'rgba(59,130,246,0.08)' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 text-left">
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
            className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed"
          >
            Meet the visionary team driving innovation, strategic partnerships, and excellence at Syntera Tech
          </motion.p>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <SectionWrapper id="our-team" className="bg-slate-50">
        <RevealGroup staggerChildren={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <Reveal key={member.name} variant="fadeUp" className="w-full">
              <div className="w-full relative group bg-white border border-slate-200/60 rounded-2xl text-black flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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
                      className="text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200"
                      title={`${member.name} on LinkedIn`}
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
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-slate-500 mt-1 font-medium">{member.role}</p>
                </article>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
