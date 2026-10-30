import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollShip() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const left = useTransform(p, (v) => `calc(${v * 100}% - ${v * 22}px)`);
  return (
    <div className="scroll-ship" aria-hidden="true">
      <motion.div className="bar" style={{ scaleX: p }} />
      <motion.div className="icon" style={{ left }}>
        <svg viewBox="0 0 64 64" width="22" height="22">
          <path d="M32 6v34" stroke="#f6c453" strokeWidth="4" strokeLinecap="round" />
          <path d="M35 9c13 4 15 18 0 28z" fill="#fff" />
          <path d="M8 42h48c-3 10-12 15-24 15S11 52 8 42z" fill="#f6c453" />
        </svg>
      </motion.div>
    </div>
  );
}
