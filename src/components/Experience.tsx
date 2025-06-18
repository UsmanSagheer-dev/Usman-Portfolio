
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      year: '2023 - Present',
      title: 'Full-Stack Developer',
      company: 'Software House',
      description: 'Working on various client projects, developing web and mobile applications using React.js, React Native, and modern development practices. Collaborating with design and backend teams to deliver high-quality solutions.',
      technologies: ['React.js', 'React Native', 'TypeScript', 'Firebase', 'MongoDB'],
      type: 'work'
    },
    {
      id: 2,
      year: '2023',
      title: 'Advanced React & Mobile Development',
      company: 'Self-Learning',
      description: 'Deepened knowledge in React ecosystem, learned React Native for mobile development, and explored state management patterns with Redux. Built several personal projects to solidify understanding.',
      technologies: ['React Native', 'Redux', 'TypeScript', 'Mobile Development'],
      type: 'learning'
    },
    {
      id: 3,
      year: '2022',
      title: 'Frontend Specialization',
      company: 'Self-Learning',
      description: 'Focused on mastering modern CSS frameworks, JavaScript ES6+, and React.js fundamentals. Started building responsive web applications and learning about user experience principles.',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript ES6+', 'Responsive Design'],
      type: 'learning'
    },
    {
      id: 4,
      year: '2021',
      title: 'Web Development Foundations',
      company: 'Self-Learning',
      description: 'Started my journey into web development, learning HTML5, CSS3, and JavaScript basics. Built first static websites and discovered passion for creating digital experiences.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
      type: 'learning'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Experience & Journey
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-white/80 text-lg mt-6 max-w-2xl mx-auto">
              My development journey from learning fundamentals to professional experience
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div 
                  key={experience.id}
                  className="relative timeline-item animate-on-scroll"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="timeline-dot"></div>

                  {/* Experience Card */}
                  <div className="ml-20 glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-primary bg-primary/20 px-3 py-1 rounded-full">
                          {experience.year}
                        </span>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          experience.type === 'work' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {experience.type === 'work' ? '💼 Work' : '📚 Learning'}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {experience.title}
                    </h3>
                    
                    <p className="text-primary font-semibold mb-4">
                      {experience.company}
                    </p>

                    <p className="text-white/90 leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Goals */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary">What's Next?</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                I'm always looking to grow and take on new challenges. Currently exploring:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Next.js 14', 'TypeScript Advanced Patterns', 'Backend Development', 'Cloud Deployment', 'Testing Frameworks'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 glass-card text-sm font-medium text-primary hover:bg-primary/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
