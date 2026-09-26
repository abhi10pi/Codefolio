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
import ParallaxSection from './components/layout/ParallaxSection';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Hero has its own Vortex bg — no parallax wrapper needed */}
        <section id="hero"><Hero1 /></section>

        <div className="section-divider" />

        <ParallaxSection id="about" accent="purple" speed={0.3} className="scroll-mt-20">
          <AboutMe />
        </ParallaxSection>

        <div className="section-divider" />

        <ParallaxSection id="skills" accent="blue" speed={0.4} className="scroll-mt-20">
          <SkillsSectionV2 />
        </ParallaxSection>

        <div className="section-divider" />

        <ParallaxSection id="projects" accent="pink" speed={0.25} className="scroll-mt-20">
          <ProjectsSection />
        </ParallaxSection>

        <div className="section-divider" />

        <ParallaxSection id="experience" accent="teal" speed={0.35} className="scroll-mt-20">
          <ExperienceSection />
        </ParallaxSection>

        <div className="section-divider" />

        <ParallaxSection id="certifications" accent="blue" speed={0.3} className="scroll-mt-20">
          <Certifications />
        </ParallaxSection>

        <div className="section-divider" />

        <ParallaxSection id="achievements" accent="purple" speed={0.4} className="scroll-mt-20">
          <AchievementsSection />
        </ParallaxSection>

        <div className="section-divider" />

        <ParallaxSection id="contact" accent="pink" speed={0.3} className="scroll-mt-20">
          <ContactSection />
        </ParallaxSection>
      </main>
    </>
  );
}
