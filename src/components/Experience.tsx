import React from "react";

const experiences = [
  {
    id: 1,
    year: "April 2025 – October 2025",
    title: "Full Stack Developer",
    company: "Techloset Solutions",
    description:
      "Worked on production web and mobile applications, integrating Stripe into the Tradala product, improving UI and connecting backend APIs for Techloset My Profile, developing Admin Panel features, resolving bugs, and building UI components for the Tracker System. Also contributed to backend API development using FastAPI for internal services.",
    technologies: [
      "React.js",
      "Node.js",
      "FastAPI",
      "MongoDB",
      "SQL",
      "Redux",
      "Git",
    ],
    type: "work",
  },

  {
    id: 2,
    year: "January 2025 – April 2025",
    title: "MERN Stack Intern",
    company: "Techloset Solutions",
    description:
      "Developed full-stack applications using MongoDB, Express.js, React.js, and Node.js. Built REST APIs, implemented CRUD operations, worked with Redux and Context API for state management, implemented JWT authentication, and deployed applications using Netlify and Vercel.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux",
      "JWT",
      "Git",
    ],
    type: "work",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 relative"
    >
      <div className="container mx-auto px-6">

        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">

            <p className="text-primary font-semibold uppercase tracking-wider mb-3">
              My Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Experience & Journey
            </h2>

            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />

            <p className="text-white/80 text-lg mt-6 max-w-2xl mx-auto">
              My professional journey through full-stack development,
              production applications, and real-world software development.
            </p>

          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

            <div className="space-y-12">

              {experiences.map(
                (experience, index) => (
                  <div
                    key={experience.id}
                    className="
                      relative
                      timeline-item
                      animate-on-scroll
                    "
                    style={{
                      animationDelay: `${
                        index * 0.2
                      }s`,
                    }}
                  >

                    {/* Timeline Dot */}
                    <div className="timeline-dot" />

                    {/* Experience Card */}
                    <div
                      className="
                        ml-20
                        glass-card
                        p-8
                        rounded-xl
                        hover:-translate-y-1
                        transition-all
                        duration-300
                        hover:shadow-2xl
                        hover:shadow-primary/20
                      "
                    >

                      {/* Date */}
                      <div className="flex flex-wrap items-center gap-3 mb-5">

                        <span
                          className="
                            text-sm
                            font-medium
                            text-primary
                            bg-primary/20
                            px-3
                            py-1.5
                            rounded-full
                          "
                        >
                          {experience.year}
                        </span>

                        <span
                          className="
                            text-xs
                            font-medium
                            px-3
                            py-1.5
                            rounded-full
                            bg-green-500/20
                            text-green-400
                          "
                        >
                          💼 Professional Experience
                        </span>

                      </div>

                      {/* Position */}
                      <h3
                        className="
                          text-xl
                          md:text-2xl
                          font-bold
                          text-white
                          mb-2
                        "
                      >
                        {experience.title}
                      </h3>

                      {/* Company */}
                      <p
                        className="
                          text-primary
                          font-semibold
                          mb-5
                        "
                      >
                        {experience.company}
                      </p>

                      {/* Description */}
                      <p
                        className="
                          text-white/80
                          leading-relaxed
                          mb-6
                        "
                      >
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">

                        {experience.technologies.map(
                          (tech) => (
                            <span
                              key={tech}
                              className="
                                px-3
                                py-1.5
                                bg-white/10
                                text-white/80
                                text-sm
                                rounded-full
                                hover:bg-primary/20
                                hover:text-primary
                                transition-all
                                duration-300
                              "
                            >
                              {tech}
                            </span>
                          )
                        )}

                      </div>

                    </div>
                  </div>
                )
              )}

            </div>
          </div>

          {/* Current Direction */}
          <div className="text-center mt-16 animate-on-scroll">

            <div
              className="
                glass-card
                p-8
                rounded-xl
                relative
                overflow-hidden
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-primary/5
                  via-purple-500/5
                  to-cyan-500/5
                  pointer-events-none
                "
              />

              <div className="relative z-10">

                <h3
                  className="
                    text-2xl
                    font-semibold
                    mb-4
                    text-primary
                  "
                >
                  Currently Building
                </h3>

                <p
                  className="
                    text-white/80
                    leading-relaxed
                    mb-6
                    max-w-2xl
                    mx-auto
                  "
                >
                  Currently focused on building Medicore, a
                  full-stack healthcare and pharmacy management
                  SaaS product while continuing to improve my
                  skills in scalable backend architecture,
                  databases, React, Next.js, and modern
                  software development practices.
                </p>

                <div className="flex flex-wrap justify-center gap-3">

                  {[
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "PostgreSQL",
                    "Prisma",
                    "React Native",
                    "SaaS Architecture",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-4
                        py-2
                        glass-card
                        text-sm
                        font-medium
                        text-primary
                        hover:bg-primary/20
                        transition-all
                        duration-300
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;