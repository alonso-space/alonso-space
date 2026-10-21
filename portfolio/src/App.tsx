import Starfield from "./components/Starfield";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Starfield />
      <Header />
      <main className="main-panel">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
