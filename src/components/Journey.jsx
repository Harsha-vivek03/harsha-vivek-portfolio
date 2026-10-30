import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Reveal, SectionHead } from './ui.jsx';
import { journey } from '../data.js';

export default function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] });

  return (
    <section className="section alt" id="journey">
      <div className="wrap">
        <SectionHead
          eyebrow="Experience"
          title="The voyage so far"
          text="Four stops in about two and a half years, each one adding a new layer to the stack."
        />
        <div className="timeline" ref={ref}>
          <div className="line" aria-hidden="true">
            <motion.span style={{ scaleY: scrollYProgress }} />
          </div>
          {journey.map((j, i) => (
            <Reveal key={j.title} className={`stop ${j.current ? 'now' : ''}`} delay={0.05 * i}>
              <span className="dot" aria-hidden="true" />
              <div className="card">
                <div className="stop-head">
                  <span className="when">{j.when}</span>
                  {j.current && <span className="badge"><i /> Currently sailing</span>}
                </div>
                <h3>{j.title}</h3>
                <p className="org">{j.org}</p>
                <ul>
                  {j.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
