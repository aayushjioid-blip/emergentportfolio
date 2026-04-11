import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} />
      <Hero data={portfolioData} />
      <About data={portfolioData.about} />
      <Projects projects={portfolioData.projects} />
      <Skills skills={portfolioData.skills} />
      <Timeline timeline={portfolioData.timeline} />
      <Contact data={portfolioData.personal} />
      <Footer data={portfolioData.personal} />
    </div>
  );
};

export default Home;
