import React from "react";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const WorkProcess = () => {
  const steps = [
    {
      icon: Search,
      title: "Understand & Analyze",
      description:
        "I start by understanding the problem, requirements, users, and technical needs before writing code.",
      step: "01",
    },
    {
      icon: Lightbulb,
      title: "Plan & Design",
      description:
        "I define the project structure, database flow, API requirements, and user experience to create a clear development plan.",
      step: "02",
    },
    {
      icon: Code2,
      title: "Build & Integrate",
      description:
        "I develop the frontend, backend, APIs, database, authentication, and core features using modern development practices.",
      step: "03",
    },
    {
      icon: Rocket,
      title: "Test & Deploy",
      description:
        "I test the application, fix issues, optimize the implementation, and prepare the project for deployment and future improvements.",
      step: "04",
    },
  ];

  return (
    <section id="work-process" className="py-16 sm:py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 glow-text">
            How I Work
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            A practical development process focused on building reliable,
            scalable, and user-focused software.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="glass-card p-4 sm:p-6 rounded-2xl h-full hover:scale-105 transition-transform duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                    <span className="text-primary font-bold text-sm sm:text-lg">
                      {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 mt-3 sm:mt-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector */}
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
