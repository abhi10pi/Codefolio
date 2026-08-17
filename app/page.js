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
import CustomCursor from './components/CustomCursor';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <section id="hero"><Hero1 /></section>
        <div className="section-divider" />
        <section id="about" className="scroll-mt-20"><AboutMe /></section>
        <div className="section-divider" />
        <section id="skills" className="scroll-mt-20"><SkillsSectionV2 /></section>
        <div className="section-divider" />
        <section id="projects" className="scroll-mt-20"><ProjectsSection /></section>
        <div className="section-divider" />
        <section id="experience" className="scroll-mt-20"><ExperienceSection /></section>
        <div className="section-divider" />
        <section id="certifications" className="scroll-mt-20"><Certifications /></section>
        <div className="section-divider" />
        <section id="achievements" className="scroll-mt-20"><AchievementsSection /></section>
        <div className="section-divider" />
        <section id="contact" className="scroll-mt-20"><ContactSection /></section>
      </main>
    </>
  );
}
