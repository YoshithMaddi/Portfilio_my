'use client'
import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero"
import Skills from "@/components/Skills";
import Achievements from "@/components/sub/Achievements";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Achievements></Achievements>
      <Experience></Experience>
      <Skills/>
    </div>

  );
}
