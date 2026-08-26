import { motion } from 'framer-motion';
import { RevealText, RevealGroup } from './Reveal.jsx';
import { fadeUpSmall, viewportOnce } from '../utils/motion';

export default function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
  innerClassName = '',
  align = 'left',
  stagger: staggerAmount = 0.18,
}) {
  const alignClasses =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <section id={id} className={`relative py-12 sm:py-16 lg:py-12 ${className}`}>
      <div className={`mx-auto max-w-page container-px ${innerClassName}`}>
        {(eyebrow || title || description) && (
          <RevealGroup
            staggerChildren={staggerAmount}
            className={`flex flex-col ${alignClasses} max-w-3xl mb-8 sm:mb-10 ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {eyebrow && (
              <motion.span
                variants={fadeUpSmall}
                className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                {eyebrow}
              </motion.span>
            )}
            {title && (
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tightest text-ink-900">
                <RevealText
                  text={title}
                  staggerChildren={0.06}
                  viewport={viewportOnce}
                />
              </h2>
            )}
            {description && (
              <motion.p
                variants={fadeUpSmall}
                className="mt-5 text-base sm:text-lg leading-relaxed text-ink-600 max-w-2xl"
              >
                {description}
              </motion.p>
            )}
          </RevealGroup>
        )}
        {children}
      </div>
    </section>
  );
}
