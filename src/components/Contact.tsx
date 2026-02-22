import { Mail, MapPin, Phone, Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:roushnisinha111@gmail.com"
              className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-3">
                  <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 mb-1">Email</h3>
                  <p className="text-white group-hover:text-cyan-400 transition-colors">
                    roushnisinha111@gmail.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="tel:+918210903396"
              className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-3">
                  <Phone className="text-cyan-400 group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 mb-1">Phone</h3>
                  <p className="text-white group-hover:text-cyan-400 transition-colors">+91 8210903396</p>
                </div>
              </div>
            </a>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-3">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 mb-1">Location</h3>
                  <p className="text-white">Patna, Bihar, India</p>
                </div>
              </div>
            </div>

            <a
              href="/Roushni_Sinha_Resume_(1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-3">
                  <FileText className="text-cyan-400 group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 mb-1">Resume</h3>
                  <p className="text-white group-hover:text-cyan-400 transition-colors">Download PDF</p>
                </div>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/RoushniSinha"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-lg rounded-full p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:scale-110"
            >
              <Github className="text-cyan-400" size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/roushni-sinha"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-lg rounded-full p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:scale-110"
            >
              <Linkedin className="text-cyan-400" size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center text-slate-400">
        <p className="text-sm">
          Built with React, TypeScript, and Tailwind CSS
        </p>
        <p className="text-sm mt-2">
          © 2025 Roushni Sinha. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
