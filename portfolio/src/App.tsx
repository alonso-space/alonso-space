import { usePointerEffects } from "./hooks/usePointerEffects";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Learning from "./components/Learning";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Starfield from "./components/Starfield";

export default function App() {
  usePointerEffects();
  return (
    <>
      <Starfield />
      <Header />
      <main className="main-panel">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <About />
        <Certifications />
        <Learning />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
