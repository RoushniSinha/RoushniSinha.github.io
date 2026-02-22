import { Award, Cloud } from 'lucide-react';

const CloudBadges = () => {
  const googleCloudBadges = [
    {
      name: 'Architecting with Google Kubernetes Engine: Foundations',
      icon: '☸️',
      issuer: 'Google Cloud',
    },
    {
      name: 'Getting Started with Google Kubernetes Engine',
      icon: '☸️',
      issuer: 'Google Cloud',
    },
    {
      name: 'Google Cloud Fundamentals: Core Infrastructure',
      icon: '☁️',
      issuer: 'Google Cloud',
    },
    {
      name: 'Logging and Monitoring in Google Cloud',
      icon: '📊',
      issuer: 'Google Cloud',
    },
    {
      name: 'Reliable Google Cloud Infrastructure: Design and Process',
      icon: '🏗️',
      issuer: 'Google Cloud',
    },
  ];

  const securityBadges = [
    {
      name: 'Blockchain Expert Certificate',
      icon: '⛓️',
      issuer: 'AlgoExpert',
    },
    {
      name: 'Cyber Security and Network Analysis',
      icon: '🔐',
      issuer: 'NIELIT',
    },
  ];

  const trainingCertificates = [
    {
      name: 'Artificial Intelligence Training',
      icon: '🤖',
      issuer: 'Bolt IoT',
    },
    {
      name: 'Data Structures & Algorithms with Java',
      icon: '📚',
      issuer: 'ApnaCollege',
    },
    {
      name: 'Salesforce Developer Virtual Internship',
      icon: '☁️',
      issuer: 'SmartInternz',
    },
  ];

  return (
    <section id="cloud-badges" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications & Credentials
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            Industry-recognized certifications and training credentials demonstrating expertise
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Cloud className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Google Cloud Platform</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {googleCloudBadges.map((badge, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                    {badge.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {badge.name}
                  </h4>
                  <p className="text-xs text-cyan-400 font-medium">{badge.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Security & Blockchain</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityBadges.map((badge, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                    {badge.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {badge.name}
                  </h4>
                  <p className="text-xs text-cyan-400 font-medium">{badge.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Professional Training</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trainingCertificates.map((badge, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                    {badge.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {badge.name}
                  </h4>
                  <p className="text-xs text-cyan-400 font-medium">{badge.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudBadges;
