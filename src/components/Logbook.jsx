import { Reveal, SectionHead } from './ui.jsx';
import { education, certs, leadership } from '../data.js';

export default function Logbook() {
  return (
    <section className="section" id="logbook">
      <div className="wrap">
        <SectionHead eyebrow="Background" title="Training, crew and trophies" />
        <div className="log-grid">
          <Reveal className="log-col">
            <h3>Education</h3>
            <ul>
              {education.map((e) => (
                <li key={e.title}>
                  <span className="when">{e.when}</span>
                  <strong>{e.title}</strong>
                  <em>{e.org}</em>
                  <small>{e.note}</small>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="log-col" delay={0.1}>
            <h3>Certifications</h3>
            <ul>
              {certs.map(([name, by]) => (
                <li key={name}>
                  <strong>{name}</strong>
                  <em>{by}</em>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="log-col" delay={0.2}>
            <h3>Leadership and wins</h3>
            <ul>
              {leadership.map((l) => (
                <li key={l.title}>
                  <span className="when">{l.when}</span>
                  <strong>{l.title}</strong>
                  <em>{l.org}</em>
                  <small>{l.text}</small>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
