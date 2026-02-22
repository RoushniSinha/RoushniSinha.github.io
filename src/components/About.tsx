import { Code2, Brain, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Expert in React, Next.js, Node.js, and modern web technologies',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Experience with OpenAI, Google Gemini, and machine learning',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Quick to adapt and master new technologies and frameworks',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Proven ability to lead teams and deliver projects on time',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 shadow-xl">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Aspiring Web Developer and AI enthusiast with hands-on experience in full-stack development.
              Currently pursuing a Master's in Computer Application with a focus on Artificial Intelligence,
              IoT, and Cloud Computing.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Proven ability to independently manage projects, implement user-centric features, and leverage
              AI tools to create innovative solutions. Passionate about building impactful tech projects and
              continuously enhancing technical expertise.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-3 w-fit mb-4">
                <item.icon className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
