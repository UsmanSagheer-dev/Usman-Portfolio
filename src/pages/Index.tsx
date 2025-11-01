
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import WorkProcess from '../components/WorkProcess';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

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
          <Services />
          <Projects />
          <Experience />
          <Education />
          <Testimonials />
          <Pricing />
          <WorkProcess />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
};

export default Index;
