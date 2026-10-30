import Navbar from './components/Navbar.jsx';
import ScrollShip from './components/ScrollShip.jsx';
import Bubbles from './components/Bubbles.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Journey from './components/Journey.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Creed from './components/Creed.jsx';
import Logbook from './components/Logbook.jsx';
import Contact from './components/Contact.jsx';
import { profile } from './data.js';

export default function App() {
  return (
    <>
      <ScrollShip />
      <Navbar />
      <Bubbles />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Creed />
        <Skills />
        <Logbook />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Made by a Harsha(One Piece Edition) · Built with React and Framer Motion</span>
        </div>
      </footer>
    </>
  );
}
