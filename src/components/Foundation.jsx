import { useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  animate,
} from 'framer-motion';
import Button from './Button.jsx';
import { RevealText, RevealGroup } from './Reveal.jsx';
import {
  fadeUpSmall,
  slideInLeft,
  viewportOnce,
  easePremium,
} from '../utils/motion';

const STATS = [
  { value: 12000, suffix: 'k+', display: 'lives', label: 'Lives impacted' },
  { value: 40, suffix: '+', label: 'Active programs' },
  { value: 8, suffix: '', label: 'Countries reached' },
];

export default function Foundation() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Image parallax: gentle upward drift, with internal zoom-out scale.
  const yImageRaw = useTransform(scrollYProgress, [0, 1], [60, -80]);
  const yImage = useSpring(yImageRaw, { stiffness: 80, damping: 22, mass: 0.4 });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.04]);

  // Decorative shape parallax.
  const yShape = useSpring(useTransform(scrollYProgress, [0, 1], [60, -60]), {
    stiffness: 70, damping: 20, mass: 0.5,
  });

  return (
    <section
      id="foundation"
      ref={sectionRef}
      className="relative py-14 sm:py-28 lg:py-36 overflow-hidden"
    >
      {/* Warm accent background — subtle and unique */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/30 to-navy-950" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-brand-400/4 to-transparent" />
      </div>

      {/* Decorative shape */}
      <motion.div
        aria-hidden
        style={{ y: yShape }}
        className="pointer-events-none absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-brand-500/10 blur-3xl"
      />
      {/* Extra subtle floating shape */}
      <motion.div
        aria-hidden
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
        className="pointer-events-none absolute left-[-100px] bottom-40 h-[280px] w-[280px] rounded-full bg-brand-400/6 blur-[100px]"
      />

      <div className="mx-auto max-w-page container-px grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT — Image with parallax */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={slideInLeft}
          className="lg:col-span-6 relative"
        >
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-glow-lg">
              <motion.img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
                alt="The Syntera Consulting Foundation in action"
                loading="lazy"
                style={{ y: yImage, scale: imgScale }}
                className="h-[480px] w-full object-cover will-change-transform"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportOnce}
              transition={{ delay: 0.45, duration: 0.8, ease: easePremium }}
              className="absolute -bottom-6 -left-6 rounded-2xl glass-premium p-5 shadow-card max-w-[260px]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-glow">
                  <HeartIcon />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/55">Mission</div>
                  <div className="text-sm font-semibold text-white">Changing lives, every day.</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative ring */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full border border-white/10 animate-pulse-glow"
            />
          </div>
        </motion.div>

        {/* RIGHT — Text */}
        <RevealGroup staggerChildren={0.16} className="lg:col-span-6 foundation-text-right flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.span
            variants={fadeUpSmall}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Foundation
          </motion.span>

          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tightest text-white text-center lg:text-left">
            <RevealText text="The" staggerChildren={0.08} className="inline-block" />{' '}
            <RevealText
              text="Syntera Consulting Foundation"
              staggerChildren={0.08}
              delay={0.2}
              className="inline-block text-white"
            />
          </h2>

          <motion.p
            variants={fadeUpSmall}
            className="mt-6 text-base sm:text-lg leading-relaxed text-white/70 max-w-xl text-center lg:text-left mx-auto lg:mx-0"
          >
            At Syntera Consulting, our mission is clear: we are dedicated to changing lives every single day.
            With unwavering commitment and compassion, we strive to make a tangible difference in
            the world, one person at a time.
          </motion.p>

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
            }}
            className="mt-9 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
          >
            {STATS.map((s) => (
              <StatTile key={s.label} {...s} />
            ))}
          </motion.div>

          <motion.div variants={fadeUpSmall} className="mt-9">
            <Button href="#foundation-more" variant="primary" size="lg">
              Learn More
            </Button>
          </motion.div>
        </RevealGroup>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}

function StatTile({ value, suffix, display, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const motionValue = useMotionValue(0);

  // Always call hooks unconditionally.
  const rounded = useTransform(motionValue, (v) => Math.round(v).toLocaleString());
  const inThousands = useTransform(motionValue, (v) => Math.round(v / 1000));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: easePremium,
    });
    return controls.stop;
  }, [inView, motionValue, value]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easePremium } },
      }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-sm"
    >
      <div className="font-display text-2xl font-bold text-white tabular-nums">
        {display ? (
          <>
            <motion.span>{inThousands}</motion.span>
            <span>k+</span>
          </>
        ) : (
          <>
            <motion.span>{rounded}</motion.span>
            <span>{suffix}</span>
          </>
        )}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-white/55">{label}</div>
    </motion.div>
  );
}

function HeartIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white">
      <path d="M12 21s-7-4.35-7-10a4.5 4.5 0 018-2.83A4.5 4.5 0 0119 11c0 5.65-7 10-7 10z" />
    </svg>
  );
}
