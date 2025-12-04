import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
