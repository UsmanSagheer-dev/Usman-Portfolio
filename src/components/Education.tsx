import React from 'react';

const Education = () => {
  const education = [
    {
      id: 1,
      year: '2023 – Present',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Education Lahore – Faisalabad Campus',
      description:
        'Currently pursuing a BS in Computer Science with a focus on software development, databases, algorithms, software engineering, and modern application development.',
      courses: [
        'Data Structures',
        'Object-Oriented Programming',
        'Operating Systems',
        'Database Systems',
        'Software Engineering',
      ],
      type: 'degree',
    },
    {
      id: 2,
      year: '2021 – 2023',
      degree: 'Intermediate in Computer Science',
      institution: 'Al Farooq College, Multan',
      description:
        'Completed intermediate education with a focus on computer science, mathematics, physics, and fundamental programming concepts.',
      courses: [
        'Computer Science',
        'Programming Fundamentals',
        'Mathematics',
        'Physics',
      ],
      type: 'intermediate',
    },
  ];

  const currentLearning = [
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Prisma',
    'React Native',
    'SaaS Architecture',
    'REST APIs',
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Education & Learning
            </h2>

            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>

            <p className="text-white/80 text-lg mt-6 max-w-2xl mx-auto">
              Academic foundation combined with continuous learning through
              practical software development.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="relative timeline-item animate-on-scroll"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >

                  {/* Timeline Dot */}
                  <div className="timeline-dot"></div>

                  {/* Education Card */}
                  <div className="ml-20 glass-card p-8 rounded-xl hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">

                    {/* Year + Type */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="text-sm font-medium text-primary bg-primary/20 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>

                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          edu.type === 'degree'
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {edu.type === 'degree'
                          ? '🎓 University'
                          : '📖 College'}
                      </span>
                    </div>

                    {/* Degree */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-primary font-semibold mb-4">
                      {edu.institution}
                    </p>

                    {/* Description */}
                    <p className="text-white/90 leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    {/* Subjects */}
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Learning */}
          <div className="text-center mt-16 animate-on-scroll">
            <div className="glass-card p-8 rounded-xl">

              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Currently Learning
              </h3>

              <p className="text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto">
                Alongside my academic studies, I continue to improve my
                development skills by building real-world applications and
                exploring modern software engineering practices.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {currentLearning.map((skill) => (
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

export default Education;