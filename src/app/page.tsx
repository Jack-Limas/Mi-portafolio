import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Offer from "./components/sections/Offer";
import Experience from "./components/sections/Experience";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
      <About />
      <Offer />
      <Experience />
      <Testimonials />
    </>
  );
}
