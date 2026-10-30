import { useEffect, useState } from 'react';
import { nav, profile } from '../data.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${solid ? 'solid' : ''}`} aria-label="Main">
      <a className="brand" href="#top" onClick={() => setOpen(false)}>
        {/* <svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true">
          <path d="M32 8v32" stroke="#f6c453" strokeWidth="4" strokeLinecap="round" />
          <path d="M35 11c13 4 15 17 0 25z" fill="#e8f6ff" />
          <path d="M10 42h44c-3 10-11 14-22 14S13 52 10 42z" fill="#f6c453" />
        </svg> */}

        💻
        <span>{profile.name}</span>
      </a>
      <button className="burger" type="button" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
        <span className="sr">Menu</span>
        <i /><i /><i />
      </button>
      <div id="menu" className={`menu ${open ? 'open' : ''}`}>
        {nav.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="btn small primary" href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </nav>
  );
}
