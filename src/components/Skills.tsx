const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS', 'C++'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'AngularJS', 'Tailwind CSS', 'Vite', 'Flutter'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'Microservices'],
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'NeonDB', 'Prisma', 'Redis'],
    },
    {
      category: 'AI & ML',
      skills: ['OpenAI GPT-4', 'Google Gemini', 'DALL-E', 'ElevenLabs', 'Machine Learning'],
    },
    {
      category: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'CI/CD', 'Jenkins', 'GitHub Actions'],
    },
    {
      category: 'Tools & Other',
      skills: ['Git', 'GitHub', 'Linux', 'Arduino', 'Stripe', 'Clerk Auth', 'BullMQ'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-slate-700/50 text-slate-300 text-sm rounded-lg border border-slate-600/50 hover:bg-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
