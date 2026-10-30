import { Reveal, SectionHead, CountUp } from './ui.jsx';
import { about, pillars, stats, profile } from '../data.js';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead eyebrow="About" title="Code on deck, servers below deck" />
        <div className="about-grid">
          <div className="about-copy">
            {about.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
            <Reveal className="pillars" delay={0.1}>
              {pillars.map((p) => (
                <div key={p.title} className="pillar">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal className="poster-wrap" x={24}>
            <div className="poster" role="group" aria-label="Profile card">
              <p className="poster-top">WANTED</p>
              <p className="poster-sub">for building and running great software</p>
              <div className="poster-photo">
                <img src={`${import.meta.env.BASE_URL}images/harsha.png`} alt="Portrait of Harsha Vivek" width="640" height="800" loading="lazy" />
              </div>
              <p className="poster-name">{profile.name.toUpperCase()}</p>
              <dl>
                <dt>Rank</dt><dd>{profile.role}, {profile.org}</dd>
                <dt>Port</dt><dd>{profile.city}</dd>
                <dt>Armed with</dt><dd>Java, Spring Boot, Angular, Docker, Kafka</dd>
              </dl>
              <p className="poster-bounty">Bounty: one good problem to solve</p>
            </div>
          </Reveal>
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat">
              <strong><CountUp to={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
