import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { stagger, viewportOnce, easePremium } from '../utils/motion';

const POSTS = [
  {
    title: 'The Enterprise AI Implementation Playbook: Pilot to Production',
    excerpt:
      'How leading organizations move AI from experiment to governed, production-grade deployment — and the engineering talent gaps they hit along the way. Key sections: build vs buy decisions, LLMOps maturity, AI access governance checklist.',
    category: 'Whitepaper',
    readTime: '10 min read',
    slug: '/blog/ai-implementation-playbook',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: 'Zero Trust Is Not a Product. It Is an Architecture.',
    excerpt:
      'Why most enterprise IAM projects stall at Level 2 — and the three design decisions that determine whether your identity program will scale. Includes a Zero Trust readiness checklist.',
    category: 'Blog Post',
    readTime: '6 min read',
    slug: '/blog/zero-trust-architecture',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: 'SailPoint to Entra ID: A Healthcare IAM Migration',
    excerpt:
      'How Syntera Tech staffed and co-led a 14-month IAM platform migration for a 6,000-employee regional health system — on time, zero compliance gaps, and 40% reduction in provisioning time.',
    category: 'Case Study',
    readTime: '8 min read',
    slug: '/blog/healthcare-iam-migration',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=80',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: easePremium } },
};

export default function Insights() {
  return (
    <section id="insights" className="relative py-16 sm:py-20 overflow-hidden" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="mx-auto max-w-page container-px">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.18)}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
            }}
            className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Insights
          </motion.span>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
            }}
            className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tightest text-ink-900"
          >
            Insights and perspectives from the Syntera Tech team.
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
            }}
            className="mt-5 text-base sm:text-lg leading-relaxed text-ink-600 max-w-2xl"
          >
            Sharp, opinionated reads on AI implementation, identity security, and the talent strategies that accelerate enterprise technology delivery.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.22)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {POSTS.map((p, i) => (
            <motion.div key={i} variants={cardVariant}>
              <InsightCard p={p} index={i} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <motion.a
            href="/blog"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4, duration: 0.7, ease: easePremium }}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-600 hover:text-accent-600"
          >
            View all insights
            <span className="grid h-8 w-8 place-items-center rounded-full border border-ink-300 transition-all group-hover:border-accent-300 group-hover:bg-accent-50">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}

function InsightCard({ p, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imgYRaw = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const imgY = useSpring(imgYRaw, { stiffness: 80, damping: 22, mass: 0.5 });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  const categoryColors = {
    Blog: 'bg-accent-50 text-accent-700 border-accent-200',
    Whitepaper: 'bg-blue-50 text-blue-700 border-blue-200',
    'Case Study': 'bg-green-50 text-green-700 border-green-200',
  };

  return (
    <motion.article
      ref={ref}
      className="group relative overflow-hidden rounded-2xl bg-white border border-ink-200 shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img
          src={p.img}
          alt={p.title}
          loading="lazy"
          style={{ y: imgY, scale: imgScale }}
          className="absolute inset-0 h-[130%] w-full object-cover transition-transform duration-[1100ms] ease-out will-change-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />

        {/* Category chip */}
        <span className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold ${categoryColors[p.category] || 'bg-white text-ink-700 border-ink-200'}`}>
          {p.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xs uppercase tracking-[0.15em] text-ink-400 mb-3">
          {p.readTime}
        </div>
        <h3 className="font-display text-lg font-bold leading-tight text-ink-900 group-hover:text-accent-700 transition-colors">
          {p.title}
        </h3>
        <p className="mt-2 text-sm text-ink-600 leading-relaxed line-clamp-2">{p.excerpt}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-600">
          Read article
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>

      {/* Hover glow line */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}
