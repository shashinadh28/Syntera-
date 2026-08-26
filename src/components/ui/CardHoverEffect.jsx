import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

/**
 * CardHoverEffect — Aceternity-style animated highlight that smoothly
 * slides between cards as the user hovers over them.
 *
 * Usage:
 *   <CardHoverEffect items={[ { num, title, desc, icon } ]} />
 *
 * Theme colour: #2F80ED (Syntera Consulting blue)
 */
export function CardHoverEffect({ items, className = '', showIcon = true, showNumber = true }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 ${className}`}
    >
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            className="relative group cursor-default"
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Animated highlight blob */}
            <AnimatePresence>
              {hoveredIdx === i && (
                <motion.span
                  className="absolute inset-0 rounded-2xl block"
                  layoutId="card-hover-highlight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease }}
                  style={{
                    background:
                      'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(47,128,237,0.10) 0%, transparent 100%)',
                    border: '1px solid rgba(47,128,237,0.25)',
                    zIndex: 0,
                  }}
                />
              )}
            </AnimatePresence>

            {/* Card itself */}
            <div
              className="relative z-10 rounded-2xl bg-white p-8 h-full transition-all duration-300"
              style={{
                border:
                  hoveredIdx === i
                    ? '1px solid rgba(47,128,237,0.2)'
                    : '1px solid rgba(15,23,42,0.08)',
                boxShadow:
                  hoveredIdx === i
                    ? '0 12px 40px rgba(47,128,237,0.10), 0 2px 8px rgba(15,23,42,0.06)'
                    : '0 2px 12px rgba(15,23,42,0.05)',
              }}
            >
              {item.image && (
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredIdx === i ? 'scale(1.04)' : 'scale(1)',
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(15,23,42,0.02) 0%, rgba(15,23,42,0.18) 100%)',
                    }}
                  />
                </div>
              )}

              {showIcon && (
                <motion.span
                  className="inline-grid h-12 w-12 place-items-center rounded-xl mb-6 transition-all duration-300"
                  style={{
                    background:
                      hoveredIdx === i
                        ? 'rgba(47,128,237,0.14)'
                        : 'rgba(47,128,237,0.08)',
                    border:
                      hoveredIdx === i
                        ? '1px solid rgba(47,128,237,0.35)'
                        : '1px solid rgba(47,128,237,0.15)',
                    color: '#2F80ED',
                    fontSize: '20px',
                    fontWeight: 700,
                  }}
                >
                  {Icon ? <Icon /> : item.icon}
                </motion.span>
              )}

              {/* Number badge */}
              {showNumber && item.num && (
                <div
                  className="text-[10px] font-bold uppercase tracking-[0.22em] mb-2"
                  style={{ color: '#2F80ED' }}
                >
                  {item.num}
                </div>
              )}

              <h3
                className="font-display text-xl font-bold mb-3 transition-colors duration-300"
                style={{
                  color: hoveredIdx === i ? '#1E5DB8' : '#0F172A',
                }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-500">{item.desc}</p>

              {/* Bottom border reveal */}
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] rounded-b-2xl transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent, #2F80ED, transparent)',
                  opacity: hoveredIdx === i ? 1 : 0,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
