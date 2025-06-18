
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: '🌐', level: 95 },
        { name: 'CSS3', icon: '🎨', level: 90 },
        { name: 'JavaScript', icon: '⚡', level: 85 },
        { name: 'TypeScript', icon: '📘', level: 80 },
        { name: 'React.js', icon: '⚛️', level: 90 },
        { name: 'Next.js', icon: '🔺', level: 85 },
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', icon: '📱', level: 85 },
      ]
    },
    {
      title: 'Styling & UI',
      skills: [
        { name: 'Tailwind CSS', icon: '💨', level: 95 },
        { name: 'CSS-in-JS', icon: '💅', level: 80 },
      ]
    },
    {
      title: 'State Management & Backend',
      skills: [
        { name: 'Redux', icon: '🔄', level: 80 },
        { name: 'Firebase', icon: '🔥', level: 85 },
        { name: 'MongoDB', icon: '🍃', level: 75 },
        { name: 'Node.js', icon: '🟢', level: 70 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: '📚', level: 85 },
        { name: 'Prismic', icon: '📝', level: 80 },
        { name: 'Cypress', icon: '🧪', level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-white/80 text-lg mt-6 max-w-2xl mx-auto">
              Here are the technologies I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="animate-on-scroll">
                <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="tech-icon group"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-white">{skill.name}</span>
                        </div>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      
                      {/* Skill Progress Bar */}
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            transform: 'translateX(-100%)',
                            animation: 'slideIn 1s ease-out forwards'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Note */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-primary">Always Learning</h3>
              <p className="text-white/90 leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and best practices to stay current with industry standards and deliver 
                the best possible solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
