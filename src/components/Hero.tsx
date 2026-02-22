import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                Roushni Sinha
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-4">
              Full Stack Developer & AI Enthusiast
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
              Building innovative solutions with modern web technologies and artificial intelligence
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/RoushniSinha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/roushni-sinha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </button>
            <a
              href="/Roushni_Sinha_Resume_(1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <FileText size={20} />
              <span>Resume</span>
            </a>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="animate-bounce text-cyan-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
