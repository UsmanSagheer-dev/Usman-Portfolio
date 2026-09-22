import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/UsmanSagheer-dev',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/usmandeveloper12',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:usmansagheerdev@gmail.com',
      icon: Mail,
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-12 mt-20 border-t border-border/30">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* About */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 glow-text">
              Usman Sagheer
            </h3>

            <p className="text-white/80 leading-relaxed max-w-sm">
              Full Stack Software Developer focused on building modern web
              applications, SaaS products, APIs, and practical software
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-on-scroll">
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Quick Links
            </h4>

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

          {/* Connect */}
          <div className="animate-on-scroll">
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Connect With Me
            </h4>

            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-lg hover:scale-110 transition-all duration-300 text-white hover:text-primary"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-5 text-sm text-white/80 hover:text-primary transition-colors"
            >
              Start a conversation
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 text-center animate-on-scroll">
          <p className="text-white/70 text-sm">
            © {currentYear} Usman Sagheer. All rights reserved.
          </p>

          <p className="text-white/50 text-xs mt-2">
            Full Stack Software Developer · React · Next.js · Node.js ·
            PostgreSQL
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;