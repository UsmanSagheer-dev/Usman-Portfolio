import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'FreeConsultation'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'FreeConsultation', label: 'Free Consultation' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-lg bg-background/80 border-b border-border/50 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="text-2xl font-bold cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('hero')}
            >
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                US
              </span>
              <span className="text-foreground">.</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-primary group ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-foreground/80'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-300 ${
                    activeSection === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}></span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300"></span>
                </button>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl backdrop-blur-lg bg-card/50 border border-border/50 hover:scale-110 hover:bg-card/80 transition-all duration-300 group"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={18} className="text-yellow-500 group-hover:rotate-180 transition-transform duration-300" />
                ) : (
                  <Moon size={18} className="text-blue-500 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg backdrop-blur-lg bg-card/50 border border-border/50"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg backdrop-blur-lg bg-card/50 border border-border/50 hover:bg-card/80 transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[80vw] bg-card/95 backdrop-blur-xl border-l border-border/50 shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-6 border-b border-border/50">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Navigation
                </span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 p-6">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-4 rounded-xl transition-all duration-300 hover:bg-primary/10 hover:scale-105 ${
                      activeSection === item.id 
                        ? 'text-primary bg-primary/10 border border-primary/20' 
                        : 'text-foreground/80 hover:text-primary'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border/50">
              <p className="text-sm text-foreground/60 text-center">
                © 2024 Usman Sagheer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
