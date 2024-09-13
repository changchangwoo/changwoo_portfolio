"use client";

import AboutMe from "@/components/aboutme/AboutMe";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import OverView from "@/components/overview/OverView";
import Projects from "@/components/projects/Projects";
import Skill from "@/components/skill/Skill";
import { useHandleWheel } from "@/hooks/useHandleWheel";
import { useEffect } from "react";
export default function Home() {
  const { handleWheel, handleTouchMove, currentSection } = useHandleWheel();
  
  useEffect(() => {
    document.body.addEventListener("wheel", handleWheel, { passive: false });
    document.body.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      document.body.removeEventListener("wheel", handleWheel);
      document.body.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentSection]);

  return (
    <main>
      <OverView />
      <AboutMe />
      <Projects />
      <Skill />
      <Experience />
      <Contact />
    </main>
  );
}
