import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Knowledge } from "@/components/Knowledge";
import { Learning } from "@/components/Learning";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Learning />
      <Services />
      <Knowledge />
      <Contact />
    </main>
  );
}
