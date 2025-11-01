import React from 'react';
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const WorkProcess = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery & Consultation",
      description: "We start by understanding your vision, goals, and requirements through detailed discussions.",
      step: "01"
    },
    {
      icon: Lightbulb,
      title: "Planning & Design",
      description: "Creating wireframes, mockups, and a comprehensive project roadmap tailored to your needs.",
      step: "02"
    },
    {
      icon: Code,
      title: "Development",
      description: "Building your application with clean code, best practices, and regular progress updates.",
      step: "03"
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "Deploying your project and providing ongoing support to ensure everything runs smoothly.",
      step: "04"
    }
  ];

  return (
    <section id="work-process" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Work Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A streamlined approach to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="glass-card p-6 rounded-2xl h-full hover:scale-105 transition-transform duration-300">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                    <span className="text-primary font-bold text-lg">{step.step}</span>
                  </div>
                  
                  <div className="mb-4 mt-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;