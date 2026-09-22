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
                    src={IMAGES.NewPic}
                    alt="Usman Sagheer"
                    className=" object-center"
                  />
                </div>
                {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full animate-float"></div> */}
              </div>
            </div>

            {/* About Content */}
            <div className="animate-on-scroll space-y-6">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  My Journey
                </h3>
                <p className="text-white/90 leading-relaxed">
                  I'm Usman Sagheer, a Full Stack Software Developer and
                  Computer Science student focused on building practical
                  software products. I enjoy working across the entire
                  development process — from designing databases and APIs to
                  building responsive interfaces and shipping complete
                  applications. My main focus is building real-world products.
                  I'm currently developing Medicore, a pharmacy management SaaS
                  designed to simplify everyday pharmacy operations. Alongside
                  web development, I'm also exploring mobile application
                  development and continuously improving my understanding of
                  software engineering fundamentals.
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
