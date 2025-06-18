
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Index = () => {
  useScrollAnimation();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
