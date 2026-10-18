import { MotionConfig } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CatMark from './components/CatMark';
import { links } from './lib/links';

function App() {
  return (
    // reducedMotion="user" turns off transform animations for visitors who ask for less motion.
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <footer className="border-t border-line py-8">
        <div className="container-x flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-muted">
          <p className="flex items-center gap-3">
            <CatMark size={22} className="text-primary" />
            <span>
              &copy; {new Date().getFullYear()} Kanithi Satya Sathvik · Built with caffeine and a cat’s supervision.
            </span>
          </p>
          <div className="flex items-center gap-4">
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink transition-colors">
              <Github size={18} />
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-ink transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}

export default App;
