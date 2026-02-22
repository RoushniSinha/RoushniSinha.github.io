import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'NullClass',
      location: 'Remote',
      period: 'Dec 2025 - Present',
      achievements: [
        'Developing user-generated content and community features using AngularJS and Next.js with TypeScript',
        'Implementing advanced notification system with real-time updates via email, SMS, and push notifications',
        'Building multi-language support through internationalization (i18n)',
        'Creating interactive route planning tool with mapping APIs integration',
        'Managing end-to-end frontend and backend development independently',
      ],
    },
    {
      title: 'AI Internship',
      company: 'Bolt IoT',
      location: 'Remote',
      period: 'Aug 2025 - Sep 2025',
      achievements: [
        'Implemented ChatGPT-based conversational agents',
        'Developed custom recipe generator using AI',
        'Built DALL-E image generation tool',
        'Created Telegram image bot with OpenAI integration',
      ],
    },
    {
      title: 'DevOps Internship',
      company: 'Solar Secure Solutions',
      location: 'Virtual',
      period: 'Oct 2024 - Dec 2024',
      achievements: [
        'Gained practical experience with CI/CD, Git, Docker, and infrastructure automation',
        'Built and deployed applications using DevOps pipelines with Jenkins and GitHub Actions',
        'Developed strong foundation in DevOps practices and problem-solving skills',
      ],
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Solar Secure Solutions',
      location: 'Virtual',
      period: 'Oct 2024 - Jan 2025',
      achievements: [
        'Built end-to-end applications using HTML, CSS, JavaScript, and Node.js',
        'Contributed to multiple project modules',
        'Received "Excellent" rating for consistent performance',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-2 mt-1">
                      <Briefcase className="text-cyan-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-xl text-cyan-400">{exp.company}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:text-right">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
