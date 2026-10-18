import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
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
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    // reducedMotion="user" disables transform animations for people who ask for less motion.
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-background font-sans">
        <div className="glow-mesh" />

        <motion.div
          className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-alt z-50 origin-left"
          style={{ scaleX }}
        />

        <Navbar />

        <main>
          <section id="hero" className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="container-x"><Hero /></div>
          </section>

          <section id="about" className="section">
            <div className="container-x"><About /></div>
          </section>

          <section id="skills" className="section">
            <div className="container-x"><Skills /></div>
          </section>

          <section id="projects" className="section">
            <div className="container-x"><Projects /></div>
          </section>

          <section id="experience" className="section">
            <div className="container-x"><Experience /></div>
          </section>

          <section id="certifications" className="section">
            <div className="container-x"><Certifications /></div>
          </section>

          <section id="contact" className="section">
            <div className="container-x"><Contact /></div>
          </section>
        </main>

        <footer className="border-t border-white/10 py-8">
          <div className="container-x flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/50">
            <span>&copy; {new Date().getFullYear()} Kanithi Satya Sathvik</span>
            <span>SDE Intern · AI Engineer · Bengaluru, India</span>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;
