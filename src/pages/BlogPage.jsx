import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { viewportOnce } from '../utils/motion';

const ease = [0.22, 1, 0.36, 1];

const POSTS = [
  {
    title: 'The Enterprise AI Implementation Playbook: Pilot to Production',
    excerpt:
      'How leading organizations move AI from experiment to governed, production-grade deployment — and the engineering talent gaps they hit along the way. Key sections: build vs buy decisions, LLMOps maturity, AI access governance checklist.',
    category: 'Whitepaper',
    readTime: '10 min read',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: 'Zero Trust Is Not a Product. It Is an Architecture.',
    excerpt:
      'Why most enterprise IAM projects stall at Level 2 — and the three design decisions that determine whether your identity program will scale. Includes a Zero Trust readiness checklist.',
    category: 'Blog Post',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: 'SailPoint to Entra ID: A Healthcare IAM Migration',
    excerpt:
      'How Syntera Consulting staffed and co-led a 14-month IAM platform migration for a 6,000-employee regional health system — on time, zero compliance gaps, and 40% reduction in provisioning time.',
    category: 'Case Study',
    readTime: '8 min read',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=80',
  },
];

export default function BlogPage() {
  useEffect(() => {
    document.title = 'Insights | AI Implementation + IAM — Syntera Consulting';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24 pb-12 px-6 sm:px-8 lg:px-12 max-w-[1280px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-4"
            style={{ border: '1px solid rgba(21,101,216,0.15)', background: 'rgba(21,101,216,0.06)', color: '#1565D8' }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#1565D8' }} />
            Insights & Research
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Latest perspective on AI & identity security.
          </h1>
          <p className="mt-4 text-base text-slate-600 max-w-xl">
            Sharp, opinionated reads on enterprise MLOps, Zero Trust architecture, identity lifecycles, and governed delivery model scaling.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Image */}
                <div className="h-48 sm:h-52 w-full overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border bg-white border-slate-200 text-slate-700 px-3.5 py-1 text-xs font-bold shadow-sm">
                    {p.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    {p.readTime}
                  </div>
                  <h3 className="text-lg font-black text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed font-semibold line-clamp-3">
                    {p.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase text-blue-600 group-hover:text-blue-800 transition-colors">
                  Read Article
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
