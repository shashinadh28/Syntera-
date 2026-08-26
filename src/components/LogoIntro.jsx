import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const SESSION_KEY = 'syntera_intro_shown';
// Ultra-smooth cubic bezier for luxury UI transitions
const EASE = [0.16, 1, 0.3, 1];

// Tuned animation timeline (4.0 seconds total for a smooth, high-end feel)
// 0ms -> 850ms: Pop in big at screen center with gentle ripple rings
// 850ms -> 1850ms: Silky 1.0s slide-left & scale-down while wordmark reveals
// 1850ms -> 3350ms: Hold side-by-side equal size with tight gap
// 3350ms -> 4000ms: Smooth 650ms exit fade-out -> trigger onComplete
const TIMING = {
  spreadAt: 850,
  holdAt: 1850,
  exitAt: 3350,
  exitDuration: 650, // 3350ms + 650ms = 4000ms (4.0s total)
};

/**
 * Syntera Consulting logo intro animation.
 * Smoother timing, tighter gap, premium spring & easing.
 */
const LogoIntro = ({ onComplete }) => {
  const prefersReducedMotion = useReducedMotion();

  const [skip] = useState(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) === '1';
    } catch {
      return false;
    }
  });

  const [phase, setPhase] = useState('pop'); // 'pop' | 'spread' | 'hold'
  const [exiting, setExiting] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    if (skip) {
      onComplete?.();
      return;
    }

    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      /* non-fatal */
    }

    if (prefersReducedMotion) {
      setPhase('hold');
      const t = setTimeout(() => {
        setExiting(true);
        setTimeout(() => onComplete?.(), 250);
      }, 700);
      timers.current.push(t);
      return () => timers.current.forEach(clearTimeout);
    }

    timers.current.push(
      setTimeout(() => setPhase('spread'), TIMING.spreadAt),
      setTimeout(() => setPhase('hold'), TIMING.holdAt),
      setTimeout(() => {
        setExiting(true);
        const exitTimer = setTimeout(() => onComplete?.(), TIMING.exitDuration);
        timers.current.push(exitTimer);
      }, TIMING.exitAt)
    );

    return () => timers.current.forEach(clearTimeout);
  }, [skip, onComplete, prefersReducedMotion]);

  if (skip) return null;

  /* ── Icon animation states ── */
  const iconVariants = {
    pop: {
      x: 'clamp(110px, 16vw, 195px)',
      scale: 2.2,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 160, damping: 22, mass: 0.9 },
    },
    spread: {
      x: '0px',
      scale: 1.0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.0, ease: EASE },
    },
    hold: {
      x: '0px',
      scale: 1.0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.4, ease: EASE },
    },
  };

  /* ── Wordmark animation states ── */
  const logoVariants = {
    pop: {
      x: '30px',
      opacity: 0,
      filter: 'blur(6px)',
      clipPath: 'inset(0 100% 0 0)',
      transition: { duration: 0.01 },
    },
    spread: {
      x: '0px',
      opacity: 1,
      filter: 'blur(0px)',
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 1.0, ease: EASE, delay: 0.1 },
    },
    hold: {
      x: '0px',
      opacity: 1,
      filter: 'blur(0px)',
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 0.4, ease: EASE },
    },
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="syntera-intro"
          role="status"
          aria-label="Loading Syntera Consulting"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#ffffff' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: 'easeInOut' } }}
        >
          {/* Subtle dot grid background */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(37,99,235,0.07) 1.5px, transparent 1.5px)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Ambient glow orb */}
          {!prefersReducedMotion && (
            <motion.div
              aria-hidden
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 480,
                height: 480,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
                filter: 'blur(45px)',
              }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          {/* Main logo pair container with a tighter, elegant gap */}
          <div className="relative flex items-center justify-center gap-2.5 sm:gap-3.5">
            {/* ICON CONTAINER */}
            <motion.div
              className="relative z-20 flex-shrink-0 flex items-center justify-center"
              initial={
                prefersReducedMotion
                  ? { x: '0px', scale: 1.0, opacity: 1, filter: 'blur(0px)' }
                  : { x: 'clamp(110px, 16vw, 195px)', scale: 0.4, opacity: 0, filter: 'blur(16px)' }
              }
              animate={phase}
              variants={iconVariants}
              style={{ width: 'clamp(72px, 10vw, 110px)', height: 'clamp(72px, 10vw, 110px)' }}
            >
              {/* Ripple rings — centered directly on the icon */}
              {phase === 'pop' && !prefersReducedMotion && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    className="absolute rounded-full border-2"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderColor: '#2563EB',
                    }}
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.9, opacity: 0 }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                  />
                  <motion.div
                    className="absolute rounded-full border"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderColor: '#2563EB',
                    }}
                    initial={{ scale: 1, opacity: 0.35 }}
                    animate={{ scale: 1.55, opacity: 0 }}
                    transition={{ duration: 0.85, ease: 'easeOut', delay: 0.12 }}
                  />
                </div>
              )}

              {/* Icon Image */}
              <motion.img
                src="/LOGO/new/Syntera-ICON.webp"
                alt="Syntera Consulting Icon"
                className="w-full h-full object-contain object-center"
                animate={phase === 'hold' && !prefersReducedMotion ? { y: [0, -4, 0] } : {}}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'block' }}
              />
            </motion.div>

            {/* WORDMARK CONTAINER */}
            <motion.div
              className="relative z-10 flex-shrink-0 overflow-hidden flex items-center"
              initial={
                prefersReducedMotion
                  ? { x: '0px', opacity: 1, filter: 'blur(0px)', clipPath: 'inset(0 0% 0 0)' }
                  : { x: '30px', opacity: 0, filter: 'blur(6px)', clipPath: 'inset(0 100% 0 0)' }
              }
              animate={phase}
              variants={logoVariants}
              style={{
                width: 'clamp(220px, 32vw, 390px)',
                height: 'clamp(72px, 10vw, 110px)',
              }}
            >
              <img
                src="/LOGO/new/Syntera-LOGOO.jpg"
                alt="Syntera Consulting"
                className="w-full h-full object-contain object-left"
                style={{ display: 'block' }}
              />
            </motion.div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            aria-hidden
            className="absolute rounded-full"
            style={{
              bottom: '36%',
              height: 2,
              background: 'linear-gradient(90deg, transparent, #2563EB, transparent)',
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={
              phase === 'hold'
                ? { width: 'clamp(260px, 36vw, 480px)', opacity: 0.45 }
                : { width: 0, opacity: 0 }
            }
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoIntro;
