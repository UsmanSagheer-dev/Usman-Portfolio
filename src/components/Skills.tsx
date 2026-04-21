import { IMAGES } from '@/assets/images';
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
        skills: [
        { name: 'HTML5', icon: IMAGES.HtmlIcon, level: 95, color: 'from-orange-400 to-red-500' },
        { name: 'CSS3', icon: IMAGES.CssLogo, level: 90, color: 'from-blue-400 to-cyan-500' },
        { name: 'JavaScript', icon: IMAGES.JsLogo, level: 85, color: 'from-yellow-400 to-orange-500' },
        { name: 'TypeScript', icon: IMAGES.TsLogo, level: 80, color: 'from-blue-500 to-indigo-600' },
        { name: 'React.js', icon: IMAGES.ReactLogo, level: 90, color: 'from-cyan-400 to-blue-500' },
        { name: 'Next.js', icon: IMAGES.NextLogo, level: 85, color: 'from-gray-700 to-gray-900' },
        { name: 'Tailwind CSS', icon: IMAGES.TailwindLogo, level: 95, color: 'from-teal-400 to-cyan-500' },
        { name: 'Bootstrap CSS', icon: IMAGES.BootstrapLogo, level: 90, color: 'from-violet-400 to-purple-500' }
      ]
    },
    {
      title: 'Backend & Database',
        skills: [
        { name: 'Firebase', icon: IMAGES.FirebaseLogo, level: 85, color: 'from-yellow-400 to-orange-500' },
        { name: 'MongoDB', icon: IMAGES.MongoDBLogo, level: 75, color: 'from-green-400 to-emerald-500' },
        { name: 'Node.js', icon: IMAGES.NodeLogo, level: 70, color: 'from-green-500 to-green-600' },
        {name:'FastAPI', icon: IMAGES.FastAPILogo, level: 40, color: 'from-blue-400 to-blue-600' }
      ]
    },
    {
      title: 'Mobile Development',
        skills: [
        { name: 'React Native', icon: IMAGES.ReactNativeLogo, level: 85, color: 'from-purple-400 to-purple-600' },
      ]
    },
    {
      title: 'Testing & Tools',
        skills: [
        { name: 'Git', icon: IMAGES.GitLogo, level: 85, color: 'from-red-500 to-red-600' },
        { name: 'Prismic', icon: IMAGES.PrismicLogo, level: 80, color: 'from-indigo-400 to-purple-500' },
        { name: 'GitHub', icon: IMAGES.GitHubLogo, level: 70, color: 'from-gray-400 to-gray-500' }

      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences with cutting-edge technologies and modern development practices
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-20">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="animate-on-scroll" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                {/* Category Header */}
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {category.title}
                  </h3>
                  <div className="w-20 h-0.5 bg-primary/50 mx-auto rounded-full"></div>
                </div>

                {/* Skills Grid */}
                <div className={`grid gap-6 md:gap-8 ${
                  category.skills.length === 1 
                    ? 'grid-cols-1 max-w-md mx-auto' 
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}>
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="skill-card-3d group relative"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      {/* Glass Card */}
                      <div className="relative h-full p-6 rounded-2xl backdrop-blur-lg bg-card/50 border  shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2  border-white/30">
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        
                        {/* Glow Effect */}
                        <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                        
                        <div className="relative z-10">
                          {/* Icon */}
                          <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                             <img src={skill.icon} alt="" className='bg-transparent rounded-lg' />
                            </div>
                          </div>

                          {/* Skill Name */}
                          <h4 className="text-lg font-semibold text-foreground text-center mb-4 group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </h4>

                          {/* Progress Bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-foreground/70">Proficiency</span>
                              <span className="text-sm font-medium text-primary">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-border/30 rounded-full h-2 overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full skill-progress transition-all duration-1000 ease-out`}
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 animate-on-scroll">
            <div className="relative p-8 rounded-2xl backdrop-blur-lg bg-card/50 border border-border/50 max-w-3xl mx-auto hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Continuous Learning
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                  tools, and best practices to stay current with industry standards and deliver 
                  exceptional solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
