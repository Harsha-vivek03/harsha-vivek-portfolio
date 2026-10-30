import { Reveal, SectionHead, Tags } from './ui.jsx';
import { skillGroups, flow, workStyle } from '../data.js';

export default function Skills() {
  return (
    <section className="section alt" id="skills">
      <div className="wrap">
        <SectionHead
          eyebrow="Skills"
          title="Everything on board"
          text="Comfortable on both sides of a deployment: the code that gets written and the machines that run it."
        />
        <div className="skill-grid">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1} className="skill-card">
              <h3>{g.title}</h3>
              <p>{g.note}</p>
              <Tags items={g.items} />
            </Reveal>
          ))}
        </div>

        <Reveal className="flow-box">
          <h3>Where a request travels</h3>
          <p>The path of a typical service I deploy and look after.</p>
          <ol className="flow">
            {flow.map(([name, role]) => (
              <li key={name}>
                <b>{name}</b>
                <span>{role}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="style-row">
          {workStyle.map((w) => (
            <span key={w}>{w}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
