import React from 'react';
import { Code, Smartphone, Globe, Database, Palette, Zap } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    features: [
      "Responsive Design",
      "React & Next.js",
      "TypeScript",
      "API Integration"
    ]
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Cross-platform mobile apps for iOS and Android",
    features: [
      "React Native",
      "Native Performance",
      "Cross-Platform",
      "App Store Deployment"
    ]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend Development",
    description: "Scalable backend solutions and APIs",
    features: [
      "Node.js & FastAPI",
      "Database Design",
      "RESTful APIs",
      "Cloud Deployment"
    ]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Full Stack Development",
    description: "End-to-end application development",
    features: [
      "Frontend & Backend",
      "Database Integration",
      "Authentication",
      "Deployment & Hosting"
    ]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces",
    features: [
      "Modern Design",
      "User Experience",
      "Prototyping",
      "Responsive Layouts"
    ]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Optimize your applications for speed and efficiency",
    features: [
      "Code Optimization",
      "SEO Enhancement",
      "Load Time Reduction",
      "Best Practices"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 glow-text">
            My Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:scale-105 transition-all duration-500 group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your project?
          </p>
          <a
            href="#FreeConsultation"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
