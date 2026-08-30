import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Button from './Button.jsx';
import { RevealText, RevealGroup } from './Reveal.jsx';
import { fadeUpSmall, viewportOnce, easePremium } from '../utils/motion';

const FEATURES = ['200+ universities', 'Visa support', 'Scholarship guidance'];

export default function StudyAbroadCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Layered scroll-driven motion for depth.
  const yBg = useSpring(useTransform(scrollYProgress, [0, 1], [-60, 60]), {
    stiffness: 70, damping: 22, mass: 0.5,
  });
  const yImg = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), {
    stiffness: 80, damping: 22, mass: 0.4,
  });
  const yImgB = useSpring(useTransform(scrollYProgress, [0, 1], [40, -120]), {
    stiffness: 80, damping: 22, mass: 0.4,
  });
  const yShape1 = useSpring(useTransform(scrollYProgress, [0, 1], [120, -120]), {
    stiffness: 70, damping: 20, mass: 0.5,
  });
  const yShape2 = useSpring(useTransform(scrollYProgress, [0, 1], [-90, 90]), {
    stiffness: 70, damping: 20, mass: 0.5,
  });
  const yShape3 = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), {
    stiffness: 70, damping: 20, mass: 0.5,
  });

  // Subtle scene-level scale for that "zooming card" feel.
  const sceneScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);

  return (
    <section id="academy" ref={ref} className="relative py-16 sm:py-12 lg:py-28">
      <div className="mx-auto max-w-page container-px">
        <motion.div
          style={{ scale: sceneScale }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 shadow-glow-lg"
        >
          {/* Noise texture overlay */}
          <div className="noise-overlay absolute inset-0 pointer-events-none" />

          {/* Parallax background gradient layer */}
          <motion.div
            style={{ y: yBg, willChange: 'transform' }}
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0 opacity-70"
          >
            <div className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-brand-300/30 blur-3xl" />
            <div className="absolute -bottom-40 -right-20 h-[600px] w-[600px] rounded-full bg-navy-900/40 blur-3xl" />
            {/* Extra warm accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-brand-200/10 blur-[100px]" />
          </motion.div>

          {/* Grid overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:42px_42px] opacity-30 mask-fade-b"
          />

          {/* Floating decorative shapes */}
          <motion.div
            style={{ y: yShape1, willChange: 'transform' }}
            aria-hidden
            className="pointer-events-none absolute right-10 top-10 h-20 w-20 rounded-2xl border border-white/20 bg-white/5 backdrop-blur animate-float"
          />
          <motion.div
            style={{ y: yShape2, willChange: 'transform' }}
            aria-hidden
            className="pointer-events-none absolute left-12 bottom-16 h-14 w-14 rounded-full border border-white/20 bg-white/10 backdrop-blur animate-float-slow"
          />
          <motion.div
            style={{ y: yShape3, willChange: 'transform' }}
            aria-hidden
            className="pointer-events-none absolute right-1/3 bottom-10 h-10 w-10 rotate-45 border border-white/20 bg-white/5 backdrop-blur"
          />
          {/* Orbiting dot inside the card */}
          <div className="pointer-events-none absolute right-20 top-1/2 -translate-y-1/2">
            <div className="h-1.5 w-1.5 rounded-full bg-white/40 animate-orbit [--orbit-radius:60px]" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center p-8 sm:p-12 lg:p-16">
            {/* LEFT — Text */}
            <RevealGroup staggerChildren={0.16} className="study-abroad-text lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
              <motion.span
                variants={fadeUpSmall}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white"
              >
                <GlobeIcon /> Syntera Consulting Academy
              </motion.span>

              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tightest text-white text-center lg:text-left">
                <RevealText
                  text="Study Abroad"
                  staggerChildren={0.08}
                  className="block"
                />
                <RevealText
                  text="with Syntera Consulting Academy"
                  staggerChildren={0.08}
                  delay={0.25}
                  className="block text-white"
                />
              </h2>

              <motion.p
                variants={fadeUpSmall}
                className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/85 text-center lg:text-left mx-auto lg:mx-0"
              >
                Explore a realm of educational opportunities alongside Syntera Consulting, your committed
                ally in Study Abroad services. Our proficient team leads you through each phase,
                from choosing the perfect destination to navigating the application procedure.
              </motion.p>

              <motion.div variants={fadeUpSmall} className="mt-9 flex flex-wrap gap-4">
                <Button href="#academy-site" variant="light" size="lg">
                  Visit Website
                </Button>
                <Button href="#contact" variant="ghost" size="lg" icon={false} className="border border-white/30">
                  Book a Free Consult
                </Button>
              </motion.div>

              <motion.div
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                }}
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/80"
              >
                {FEATURES.map((t) => (
                  <motion.span
                    key={t}
                    variants={fadeUpSmall}
                    className="inline-flex items-center gap-2"
                  >
                    <CheckBadge /> {t}
                  </motion.span>
                ))}
              </motion.div>
            </RevealGroup>

            <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] flex items-center justify-center">
              <motion.div
                style={{ y: yImg, willChange: 'transform' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 1, ease: easePremium }}
                className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 shadow-glow-lg"
              >
                <img
                  src="/Academy.webp"
                  alt="Study Abroad at Syntera Consulting Academy"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GlobeIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  );
}

function CheckBadge() {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20">
      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
        <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
