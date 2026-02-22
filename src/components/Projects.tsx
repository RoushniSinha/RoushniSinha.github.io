import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CNCF-Architect Pro',
      description: 'Autonomous AI agent leveraging Next.js and Gemini 1.5 Flash for real-time repository analysis. Streamlines CNCF ecosystem onboarding with intelligent GitHub telemetry and maturity scoring.',
      image: 'https://universal-repo-explorer-ai.vercel.app/og-image.png',
      liveUrl: 'https://universal-repo-explorer-ai.vercel.app/',
      githubUrl: 'https://github.com/RoushniSinha/universal-repo-explorer-ai',
      tech: ['Next.js', 'Gemini AI', 'Vercel AI SDK', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'GitHub API'],
      highlights: [
        'ReAct framework for real-time repository telemetry analysis',
        'Custom Maturity Scoring algorithm based on commit velocity and community engagement',
        'Automated "Good First Issues" discovery for new contributors',
        'Backend persistence with Supabase PostgreSQL',
      ],
    },
    {
      title: 'AI Shorts Generator',
      description: 'Full-stack SaaS platform that automatically creates 30-second professional videos from user prompts using AI services (OpenAI GPT-4, ElevenLabs, Replicate, AssemblyAI).',
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'AWS', 'Stripe', 'BullMQ'],
      highlights: [
        'Architected scalable queue-based processing system',
        'Integrated payment system with Stripe',
        'Built production-ready cloud infrastructure with AWS S3',
        'Implemented Remotion Lambda for video rendering',
      ],
    },
    {
      title: 'QuickAI SaaS Platform',
      description: 'Full-stack AI platform integrating Google Gemini, Clipdrop, and Cloudinary for content tools including article writing, blog generation, image creation, and resume review.',
      image: 'https://quick-ai-main-taupe.vercel.app/og-image.png',
      liveUrl: 'https://quick-ai-main-taupe.vercel.app/',
      tech: ['React 18', 'Node.js', 'MongoDB', 'Google Gemini', 'Clerk Auth', 'Cloudinary'],
      highlights: [
        'Team leader managing 4 developers',
        'Optimized backend performance by 35% with Redis caching',
        'Delivered 20% ahead of schedule',
        'Implemented secure authentication and subscription tiers',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              {project.image && (
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-slate-600/50"
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
    </section>
  );
};

export default Projects;
