import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background font-sans">
      {/* Background Glow */}
      <div className="glow-mesh" />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-blue z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="py-20 px-6 lg:px-20">
          <About />
        </section>

        <section id="skills" className="py-20 px-6 lg:px-20 bg-white/5">
          <Skills />
        </section>

        <section id="projects" className="py-20 px-6 lg:px-20">
          <Projects />
        </section>

        <section id="experience" className="py-20 px-6 lg:px-20 bg-white/5">
          <Experience />
        </section>

        <section id="certifications" className="py-10 px-6 lg:px-20">
          <Certifications />
        </section>

        <section id="contact" className="py-20 px-6 lg:px-20">
          <Contact />
        </section>
      </main>

      <footer className="py-10 text-center text-white/40 text-sm border-t border-white/5">
        &copy; {new Date().getFullYear()} Kanithi Satya Sathvik. Engineered with Intelligence.
      </footer>
    </div>
  );
}

export default App;
