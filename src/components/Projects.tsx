import React from "react";
import { useNavigate } from "react-router-dom";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { IMAGES } from "@/assets/images";

const projects = [
  {
    id: "medicore",
    title: "Medicore — Hospital & Pharmacy Management System",
    description:
      "A full-stack healthcare management platform designed to manage hospital and pharmacy operations with role-based access, patient workflows, prescriptions, inventory, billing, and pharmacy sales.",
    image: IMAGES.CoverImage,

    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redux",
      "JWT",
    ],

    github:
      "https://github.com/UsmanSagheer-dev/medicore-hms",

    live: "https://medicore-hms.vercel.app/",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-background transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-2 lg:px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-3">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            Featured Project
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A real-world SaaS project focused on solving practical healthcare
            and pharmacy management problems.
          </p>
        </div>

        {/* Project Card */}
        <div className="max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/project/${project.id}`)}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-card
                transition-all
                duration-500
                hover:border-primary/50
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-primary/10
              "
            >

              {/* Image */}
              <div className="relative overflow-hidden h-[280px] md:h-[420px]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                    opacity-80
                  "
                />

                {/* Featured Badge */}
                <div className="absolute top-5 left-5">
                  <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg">
                    Featured Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-10">

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                  <div className="flex-1">

                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-7 max-w-3xl">
                      {project.description}
                    </p>

                  </div>

                  {/* External Links */}
                  <div
                    className="flex items-center gap-3 shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        justify-center
                        w-11
                        h-11
                        rounded-lg
                        border
                        border-border
                        text-muted-foreground
                        hover:text-foreground
                        hover:bg-muted
                        transition
                      "
                      aria-label="View GitHub Repository"
                    >
                      <Github size={20} />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        justify-center
                        w-11
                        h-11
                        rounded-lg
                        border
                        border-border
                        text-muted-foreground
                        hover:text-foreground
                        hover:bg-muted
                        transition
                      "
                      aria-label="View Live Project"
                    >
                      <ExternalLink size={20} />
                    </a>

                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-7">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        px-3
                        py-1.5
                        rounded-md
                        bg-muted
                        border
                        border-border
                        text-sm
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Details Button */}
                <div className="mt-8">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/project/${project.id}`);
                    }}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-6
                      py-3
                      rounded-lg
                      bg-primary
                      hover:bg-primary/90
                      text-primary-foreground
                      font-semibold
                      transition-all
                      duration-300
                      hover:gap-3
                    "
                  >
                    View Project Details
                    <ArrowRight size={18} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;