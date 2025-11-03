import React from "react";
import { useNavigate } from "react-router-dom";
import { Github, ArrowUp, ArrowDown } from "lucide-react";
import { IMAGES } from "@/assets/images";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "HR Management System",
      description:
        "A comprehensive HR Management System built with Next.js and MongoDB. It includes employee attendance tracking, leave management, payroll management, and authentication features. The system helps organizations streamline their HR processes efficiently.",
      image: IMAGES.HrManagementImage,
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Redux"],
      githubUrl: "https://github.com/UsmanSagheer-dev/hrmanagement",
      liveUrl: "https://hrmanagement-bn3h.vercel.app/auth/login",
      featured: true,
    },
    {
      id: 2,
      title: "Expense Tracker",
      description:
        "A modern web-based Expense Tracker that helps users manage their daily, weekly, and monthly spending. Built with React.js, it stores data securely in local storage and allows users to download detailed expense reports in PDF format. The app includes features like category-wise tracking, dynamic charts, and a clean, responsive UI for seamless use across all devices.",
      image: IMAGES.ExpenseImage,
      technologies: ["React.js", "Tailwind CSS", "Local Storage", "jsPDF"],
      githubUrl: "https://github.com/UsmanSagheer-dev/finpal-pdf-reports",
      liveUrl:
        "https://finpal-pdf-reports-l-git-a717e0-learnwithusmansagheers-projects.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Facebook Clone",
      description:
        "A fully functional social media web application built with React.js, Firebase, and Redux Toolkit. It allows users to create and delete their own posts, while viewing posts from other users in real-time. The app includes user authentication, responsive design, and seamless state management for a smooth, interactive experience.",
      image: IMAGES.FacebookCloneImage,
      technologies: ["React.js", "Firebase", "Redux Toolkit", "Tailwind CSS"],
      githubUrl: "https://github.com/UsmanSagheer-dev/Facebool-testing",
      liveUrl: "https://facebool-testing.vercel.app/signup",
      featured: false,
    },
    {
      id: 4,
      title: "Pet Adoption App",
      description:
        "A pet adoption platform that helps shelters list pets and connect them with loving homes. Built with React and Firebase for storage, authentication, and image uploads.",
      image: IMAGES.PetImage,
      technologies: ["React.js", "Firebase", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/UsmanSagheer-dev/petadoptionApp",
      liveUrl: "#",
      featured: false,
    },
     {
      id: 5,
      title: "Life Management App",
      description:
        "A life management application that helps users track their daily tasks, set goals, and manage their time effectively. Built with React and Firebase for real-time data synchronization.",
      image: IMAGES.LifeImage,
      technologies: ["React.js", "Firebase", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/UsmanSagheer-dev/lifemsync",
      liveUrl: "https://lifemsync.vercel.app/vision",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-white/80 text-lg mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card animate-on-scroll animated-border cursor-pointer ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex flex-col md:flex gap-8 items-center`}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                {/* Project Image */}
                <div className="md:w-1/2">
                  <div className="relative group overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a
                          href={project.githubUrl}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                          aria-label="View GitHub Repository"
                        >
                          <Github size={24} className="text-white" />
                        </a>
                        <a
                          href={project.liveUrl}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                          aria-label="View Live Demo"
                        >
                          <ArrowUp size={24} className="text-white" />
                        </a>
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary/80 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="md:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 glass-card text-sm font-medium text-primary hover:bg-primary/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 px-6 py-3 glass-card hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <ArrowUp size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Want to see more?
              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                These are just a few highlights from my portfolio. I have more
                projects and experiments available on my GitHub profile.
              </p>
              <a
                href="https://github.com/UsmanSagheer-dev"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Github size={20} />
                <span>View All Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
