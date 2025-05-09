import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Strengths from "../components/Strengths";
import Projects from "../components/Projects";
import DownloadResume from "../components/DownloadResume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Strengths />
      <Projects />
      <DownloadResume />
      <Contact />
      <Footer />
    </>
  );
}
