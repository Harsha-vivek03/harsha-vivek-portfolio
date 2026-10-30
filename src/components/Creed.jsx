import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from './ui.jsx';
import { dream, quotes } from '../data.js';

export default function Creed() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % quotes.length), 5200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section creed" id="dream">
      <div className="wrap">
        <Reveal className="creed-card">
          <p className="eyebrow">My dream</p>
          <h2>{dream.title}</h2>
          <p className="creed-text">{dream.text}</p>

          <div className="quote-stage" aria-live="polite">
            <svg className="quote-mark" viewBox="0 0 48 36" width="44" aria-hidden="true">
              <path d="M0 36V20C0 8 6 1 18 0v7C12 8 10 12 10 17h8v19zM27 36V20C27 8 33 1 45 0v7c-6 1-8 5-8 10h8v19z" fill="currentColor" />
            </svg>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5 }}
              >
                {quotes[i]}
              </motion.blockquote>
            </AnimatePresence>
            <div className="quote-dots" role="tablist" aria-label="Choose a quote">
              {quotes.map((_, n) => (
                <button key={n} type="button" role="tab" aria-selected={n === i} aria-label={`Quote ${n + 1}`} className={n === i ? 'on' : ''} onClick={() => setI(n)} />
              ))}
            </div>
            <p className="quote-by">In my own words</p>
          </div>

          <div className="heading-row">
            <span>Next destinations</span>
            <ul>
              {dream.headings.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
