import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Skills from "../components/UI/Skills";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Experience from "../components/UI/Experience";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </Fragment>
  );
}
