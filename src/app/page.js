'use client'
import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero"
import Achievements from "@/components/sub/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import  Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
    <Navbar/>
    <div>
      <Hero/>
      <About/>
      <Achievements></Achievements>
      <Experience></Experience>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
    </>

  );
}
