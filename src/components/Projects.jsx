import { useState } from 'react';
import { Reveal, SectionHead, Tags } from './ui.jsx';
import { featured, projects } from '../data.js';

function Tilt({ children, className = '' }) {
  const [t, setT] = useState({ x: 0, y: 0 });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setT({ x: ((e.clientX - r.left) / r.width - 0.5) * 8, y: ((e.clientY - r.top) / r.height - 0.5) * -8 });
  };
  return (
    <div
      className={`tilt ${className}`}
      onMouseMove={move}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${t.y}deg) rotateY(${t.x}deg)` }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHead eyebrow="Projects" title="Treasure I've brought back" />

        <Reveal>
          <article className="featured">
            <div className="featured-top">
              <span className="badge gold"><i /> {featured.status}</span>
            </div>
            <div className="featured-grid">
              <div>
                <h3>{featured.name}</h3>
                <p className="featured-sum">{featured.summary}</p>
                <ul className="checks">
                  {featured.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <Tags items={featured.stack} />
              </div>
              <div className="pipeline" role="img" aria-label="Data flow: collect, stream, process, store, show">
                {featured.pipeline.map((p, i) => (
                  <div className="pipe-item" key={p.step}>
                    <div className="pipe-node">
                      <b>{p.step}</b>
                      <span>{p.tech}</span>
                    </div>
                    {i < featured.pipeline.length - 1 && <div className="pipe-link"><i /></div>}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <Tilt className="project">
                <div className="project-meta">
                  <span>{p.tag}</span>
                  <span>{p.when}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <ul className="checks">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <Tags items={p.stack} />
                {p.link && (
                  <a className="link" href={p.link} target="_blank" rel="noopener noreferrer">
                    {p.linkLabel} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
