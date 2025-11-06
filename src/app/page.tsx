import AppShell from './components/layout/AppShell';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

export default function Page() {
  return (
    <AppShell>
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Experience />
      <Contact />
    </AppShell>
  );
}
