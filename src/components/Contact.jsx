import { useState } from 'react';
import { Reveal } from './ui.jsx';
import { profile } from '../data.js';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt('Copy my email:', profile.email);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal className="contact-card">
          <p className="eyebrow">Contact</p>
          <h2>Ready to set sail together?</h2>
          <p>
            I'm open to backend, full-stack and DevOps-leaning roles, and to projects that need both the code and the servers under it. Send a message and I'll reply soon.
          </p>
          <div className="mail-row">
            <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <button type="button" className="btn glass" onClick={copy}>
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>
          <div className="social-row">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume (PDF) <span aria-hidden="true">↗</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
