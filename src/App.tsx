import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    // reducedMotion="user" turns off transform animations for visitors who ask for less motion.
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-line py-8">
        <div className="container-x flex flex-col sm:flex-row justify-between gap-2 text-sm text-muted">
          <span>&copy; {new Date().getFullYear()} Kanithi Satya Sathvik</span>
          <span>SDE Intern · AI Engineer · Bengaluru, India</span>
        </div>
      </footer>
    </MotionConfig>
  );
}

export default App;
