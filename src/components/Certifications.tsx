import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Architecting with Google Kubernetes Engine: Foundations',
      issuer: 'Coursera',
      date: 'Jun 2024',
    },
    {
      title: 'Getting Started with Google Kubernetes Engine',
      issuer: 'Coursera',
      date: 'Jun 2024',
    },
    {
      title: 'Google Cloud Fundamentals: Core Infrastructure',
      issuer: 'Coursera / Google Cloud',
      date: 'Jun 2024',
    },
    {
      title: 'Logging and Monitoring in Google Cloud',
      issuer: 'Coursera / Google Cloud',
      date: 'Jun 2024',
    },
    {
      title: 'Reliable Google Cloud Infrastructure: Design and Process',
      issuer: 'Coursera / Google Cloud',
      date: 'Jun 2024',
    },
    {
      title: 'Blockchain Expert Certificate',
      issuer: 'AlgoExpert',
      date: 'Jun 2024',
    },
    {
      title: 'DSA with JAVA',
      issuer: 'ApnaCollege',
      date: 'Mar 2024',
    },
    {
      title: 'Bolt IoT - Artificial Intelligence Training',
      issuer: 'Bolt IoT',
      date: 'Sep 2025',
    },
    {
      title: 'Cyber Security and Network Analysis Bootcamp',
      issuer: 'NIELIT',
      date: 'Jan 2023 - Jan 2024',
    },
    {
      title: 'Salesforce Developer Virtual Internship',
      issuer: 'SmartInternz',
      date: 'Oct 2023',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-2 mt-1">
                  <Award className="text-cyan-400" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-cyan-400 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-slate-400">{cert.date}</p>
                </div>
                <button className="text-slate-400 hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
