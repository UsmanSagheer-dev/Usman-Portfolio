
import React from 'react';
import { Github, ArrowUp, ArrowDown } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce React App',
      description: 'A full-featured e-commerce platform built with React.js and Firebase. Includes user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'Redux'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management Mobile App',
      description: 'A cross-platform mobile application for task management built with React Native. Features include task creation, categorization, reminders, and offline sync.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website with CMS',
      description: 'A dynamic portfolio website with content management system integration using Next.js and Prismic CMS. Features server-side rendering and optimized performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Prismic CMS', 'TypeScript', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with multiple rooms, file sharing, and emoji support. Built with React and Firebase for instant messaging capabilities.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Firebase', 'CSS3', 'JavaScript'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    }
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
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`project-card animate-on-scroll ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex gap-8 items-center`}
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
              <h3 className="text-xl font-semibold mb-4 text-primary">Want to see more?</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                These are just a few highlights from my portfolio. I have more projects and 
                experiments available on my GitHub profile.
              </p>
              <a 
                href="#"
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
