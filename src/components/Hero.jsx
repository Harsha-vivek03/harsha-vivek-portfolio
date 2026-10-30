import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import Ship from './Ship.jsx';
import Wave from './Wave.jsx';
import { profile, roles } from '../data.js';
import { useTypewriter } from '../hooks.js';

import onePiece from '../../public/images/onepiece.png';

const clouds = [
  { top: '16%', size: 230, dur: 150, delay: -60 },
  { top: '30%', size: 150, dur: 190, delay: -130 },
];

const stars = Array.from({ length: 80 }).map((_, i) => ({
  left: `${(i * 53 + 11) % 100}%`,
  top: `${(i * 29 + 7) % 64}%`,
  size: 1 + ((i * 7) % 3),
  delay: `${(i % 9) * 0.55}s`,
  dur: `${2.8 + ((i * 3) % 5) * 0.7}s`,
}));

function Cloud({ size }) {
  return (
    <svg width={size} viewBox="0 0 200 80" aria-hidden="true">
      <g fill="currentColor">
        <circle cx="55" cy="46" r="28" />
        <circle cx="95" cy="34" r="34" />
        <circle cx="138" cy="44" r="28" />
        <rect x="30" y="46" width="130" height="28" rx="14" />
      </g>
    </svg>
  );
}

const rise = (i) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.15 * i, ease: 'easeOut' },
});

export default function Hero() {
  const reduce = useReducedMotion();
  const role = useTypewriter(roles);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 16 });
  const sy = useSpring(my, { stiffness: 40, damping: 16 });
  const shipX = useTransform(sx, (v) => v * -26);
  const shipY = useTransform(sy, (v) => v * -10);
  const cloudX = useTransform(sx, (v) => v * 18);
  const moonX = useTransform(sx, (v) => v * 10);

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <header className="hero" id="top" onMouseMove={onMove}>
      <div className="sky" aria-hidden="true" />

      <div className="stars" aria-hidden="true">
        {stars.map((s, i) => (
          <span key={i} style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay, animationDuration: s.dur }} />
        ))}
        <i className="shoot s1" />
        <i className="shoot s2" />
      </div>

      <motion.div className="moon" style={{ x: moonX }} aria-hidden="true">
        <div className="disc">
          <b className="c1" />
          <b className="c2" />
          <b className="c3" />
        </div>
      </motion.div>

      <motion.div className="clouds" style={{ x: cloudX }} aria-hidden="true">
        {clouds.map((c, i) => (
          <span key={i} className="cloud" style={{ top: c.top, animationDuration: `${c.dur}s`, animationDelay: `${c.delay}s` }}>
            <Cloud size={c.size} />
          </span>
        ))}
      </motion.div>

      <div className="sea-base" aria-hidden="true" />
      <Wave fill="#123f6b" speed={34} className="w-back" />

      <motion.div className="ship" style={{ x: shipX, y: shipY }} aria-hidden="true">
        <motion.div
          animate={reduce ? {} : { y: [0, -12, 0], rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50% 90%' }}
        >
          <Ship />
        </motion.div>
      </motion.div>

      <Wave fill="#0a3258" speed={24} reverse foam className="w-mid" />
      <div className="glint" aria-hidden="true" />
      <Wave fill="#06192b" speed={18} foam className="w-front" />

      <div className="hero-inner">
        <motion.p className="fan-pill" {...rise(0)}>
          
          <img src={onePiece} alt="One Piece" style={{ width: '8em', height: '2em', margin: '0 0', padding:0 }} />
        
        </motion.p>
        <motion.p className="eyebrow light" {...rise(0.5)}>
          {profile.role} at {profile.org} · {profile.city}
        </motion.p>
        <motion.h1 {...rise(1)}>
          Hi, I'm <span className="grad">{profile.name}</span>
        </motion.h1>
        <motion.p className="typed" {...rise(2)} aria-live="polite">
          <span>{role}</span>
          <i className="caret" />
        </motion.p>
        <motion.p className="lead" {...rise(3)}>
          I build Java microservices and the interfaces on top of them, then run the servers, brokers and dashboards underneath. One engineer, the whole voyage from code to production.
        </motion.p>
        <motion.div className="cta" {...rise(4)}>
          <a className="btn primary" href="#projects">See my work</a>
          <a className="btn glass" href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>
          <a className="btn ghost" href="#contact">Get in touch</a>
        </motion.div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to About">
        <span />
      </a>
    </header>
  );
}
