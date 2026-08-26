import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SectionWrapper from '../components/SectionWrapper.jsx';
import { fadeUp, viewportOnce } from '../utils/motion';

const lcas = [
  {
    title: 'Financial Analyst',
    location: 'Chicago, IL',
  },
  {
    title: 'Tester',
    location: 'Dearborn, MI & Farmington, MI',
  },
  {
    title: 'Practice Architect',
    location: 'Catonsville, MD & Ellicott City, MD',
  },
];

export default function LaborConditionApplicationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero / Main Content Block ── */}
      <section className="relative pt-24 pb-12 bg-white overflow-hidden">
        {/* Subtle grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left — content */}
            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Compliance
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6"
              >
                LABOR CONDITION
                <br />
                APPLICATIONS
              </motion.h1>

              {/* Orange underline accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="h-1 w-20 bg-blue-500 rounded-full mb-8 origin-left"
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18 }}
                className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10"
              >
                Previous Labor Condition Applications (LCAs) are displayed below in accordance with{' '}
                <span className="text-blue-600 font-medium">U.S. Department of Labor regulations.</span>
              </motion.p>

              {/* LCA List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.28 }}
                className="flex flex-col gap-2"
              >
                {lcas.map((lca, i) => (
                  <motion.div
                    key={lca.title}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                    className="group"
                  >
                    <a
                      href="#"
                      className="text-blue-600 font-semibold text-base hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                      {lca.title}
                    </a>
                    <p className="text-slate-600 text-sm mt-0.5">{lca.location}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right — decorative triangle / building visual */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center flex-shrink-0"
            >
              {/* Triangle shape with building image inside — mimics the reference */}
              <div className="relative w-[300px] h-[300px]">
                {/* Outer triangle shape */}
                <svg
                  viewBox="0 0 300 300"
                  className="absolute inset-0 w-full h-full drop-shadow-2xl"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="triangleClip">
                      <polygon points="150,10 295,280 5,280" />
                    </clipPath>
                    <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2F80ED" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#1E5DB8" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  {/* Filled blue triangle */}
                  <polygon
                    points="150,10 295,280 5,280"
                    fill="url(#triGrad)"
                    opacity="0.15"
                    stroke="#2F80ED"
                    strokeWidth="2"
                  />

                  {/* Image clipped to triangle */}
                  <image
                    href="/company-leadership/nrupen.webp"
                    x="0" y="0"
                    width="300" height="300"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#triangleClip)"
                    style={{ filter: 'brightness(0.6) saturate(0.3) hue-rotate(200deg)' }}
                  />

                  {/* Blue overlay */}
                  <polygon
                    points="150,10 295,280 5,280"
                    fill="url(#triGrad)"
                    opacity="0.55"
                  />
                </svg>

                {/* Building icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: '40px' }}>
                  <svg
                    className="w-20 h-20 text-white opacity-80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Detailed LCA Cards ── */}
      <SectionWrapper id="lca-list" className="bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">Current LCA Postings</h2>
          <p className="text-slate-500 text-sm">
            Posted in compliance with U.S. Department of Labor regulations under 20 CFR Part 655.
          </p>
        </motion.div>

        <div className="max-w-4xl flex flex-col gap-5">
          {lcas.map((lca, i) => (
            <motion.div
              key={lca.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 group hover:border-blue-200"
            >
              <div className="flex items-center gap-4">
                {/* Number badge */}
                <span className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div>
                  <h3 className="font-display text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                    {lca.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-0.5">
                    Posted in compliance with U.S. Department of Labor guidelines.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pl-14 sm:pl-0 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-slate-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-semibold text-slate-600">{lca.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DOL Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl max-w-4xl"
        >
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-blue-700 text-sm leading-relaxed">
              These Labor Condition Applications are posted in accordance with 20 CFR 655.734. Any person may view the public access file for each LCA.
              For questions or to inspect public access files, please contact{' '}
              <a href="/contact" className="font-semibold underline hover:text-blue-900 transition-colors">Syntera Consulting HR</a>.
            </p>
          </div>
        </motion.div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
