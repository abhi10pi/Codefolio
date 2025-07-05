'use client';

import Hero1 from './components/Hero1';
import ProjectsSection from './components/project';
import ExperienceSection from './components/experience';
import Certifications from './components/certification';
import AchievementsSection from './components/achievement';
import Navbar from './components/navbar';
import SkillsSectionV2 from './components/skills1';
import ContactSection from './components/contact';
import AboutMe from './components/about';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero" className="scroll-mt-24"><Hero1 /></section>
        <section id="about" className="scroll-mt-24"><AboutMe/></section>
        <section id="skills" className="scroll-mt-24"><SkillsSectionV2 /></section>
        <section id="projects" className="scroll-mt-24"><ProjectsSection /></section>
        <section id="experience" className="scroll-mt-24"><ExperienceSection /></section>
        
        <section id="certifications" className="scroll-mt-24"><Certifications /></section>
        <section id="achievements" className="scroll-mt-24"><AchievementsSection /></section>
        <section id="contact" className="scroll-mt-24"><ContactSection /></section>
      </main>
    </>
  );
}
