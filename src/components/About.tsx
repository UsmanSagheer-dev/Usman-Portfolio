import { IMAGES } from "@/assets/images";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="w-80 h-80 mx-auto glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
                  <img
                    src={IMAGES.PortfolioImage}
                    alt="Usman Sagheer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full animate-float"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="animate-on-scroll space-y-6">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  My Journey
                </h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Dynamic Full-Stack Developer with over 1 year of client-facing
                  experience, specializing in the MERN stack, React Native, and
                  Next.js (SSR). Skilled in building and delivering
                  high-performance web and mobile applications, integrating
                  RESTful APIs, and collaborating effectively within Agile
                  teams. Passionate about solving complex problems and crafting
                  seamless user experiences.
                </p>

                <p className="text-white/90 leading-relaxed mb-4">
                  Over the past year, I’ve worked in a software house where I’ve
                  gained hands-on experience developing real-world applications.
                  This journey has strengthened not only my technical expertise
                  but also my understanding of clean code principles,
                  user-centered design, and teamwork in collaborative
                  environments.
                </p>

                <p className="text-white/90 leading-relaxed">
                  I’m deeply passionate about staying up to date with emerging
                  technologies and industry best practices. Whether it’s React,
                  React Native, or exploring new frameworks, I enjoy the
                  continuous learning and innovation that come with being a
                  developer.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 text-center rounded-xl hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary">1+</div>
                  <div className="text-white/80">Year Experience</div>
                </div>
                <div className="glass-card p-6 text-center rounded-xl hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-white/80">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
