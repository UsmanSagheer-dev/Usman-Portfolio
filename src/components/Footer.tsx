import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/usmansagheer',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/usmansagheer',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:usman.sagheer@example.com',
      icon: Mail,
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-12 mt-20 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 glow-text">Usman Sagheer</h3>
            <p className="text-white/80 leading-relaxed">
              Full-Stack Developer passionate about creating beautiful and functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-on-scroll">
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="animate-on-scroll">
            <h4 className="text-lg font-semibold mb-4 text-primary">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-lg hover:scale-110 transition-all duration-300 text-white hover:text-primary"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 text-center animate-on-scroll">
          <p className="text-white/70 flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Usman Sagheer. Built with 
            <Heart size={16} className="text-red-500 animate-pulse" />
            using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
