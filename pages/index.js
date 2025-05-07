import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "@/components/Skills";
import Strengths from "@/components/Strengths";
import DownloadResume from "@/components/DownloadResume";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Strengths />
      <Projects />
      <Contact />
      <DownloadResume />
      <Footer />
    </>
  );
}
