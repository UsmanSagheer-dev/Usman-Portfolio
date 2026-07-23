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
                    className=" object-center"
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
                <p className="text-white/90 leading-relaxed">
                I'm Usman Sagheer — a CS student and self-taught builder.
While most developers learn by following tutorials, I learn by building. I've independently built complete systems like an HR Management System and a Learning Management System — from database design to deployment, everything done by me, alone.
I believe the best way to grow is to find a real problem and build a real solution. That's my process. That's my passion.
Currently pursuing my CS degree while working on projects that matter — and working towards building my own product someday.
                </p>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 text-center rounded-xl hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-primary">2+</div>
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
