import { Zap, Target, TrendingUp, Code } from 'lucide-react';

const CodingAchievements = () => {
  const achievements = [
    {
      platform: 'LeetCode',
      icon: <Code className="text-yellow-400" size={32} />,
      stats: [
        { label: 'Problems Solved', value: '200+', color: 'from-yellow-500/20 to-orange-500/20' },
        { label: 'Streak Days', value: '50+', color: 'from-orange-500/20 to-red-500/20' },
        { label: 'Profile', url: 'https://leetcode.com/RoushniSinha/', button: 'View Profile' },
      ],
    },
    {
      platform: 'GeeksforGeeks',
      icon: <TrendingUp className="text-green-400" size={32} />,
      stats: [
        { label: 'DSA Problems', value: '150+', color: 'from-green-500/20 to-emerald-500/20' },
        { label: 'Consistency', value: 'Active', color: 'from-emerald-500/20 to-teal-500/20' },
        { label: 'Profile', url: 'https://auth.geeksforgeeks.org/user/roushni/profile', button: 'View Profile' },
      ],
    },
    {
      platform: 'HackerRank',
      icon: <Target className="text-blue-400" size={32} />,
      stats: [
        { label: 'Certifications', value: '5+', color: 'from-blue-500/20 to-cyan-500/20' },
        { label: 'Challenges', value: 'Completed', color: 'from-cyan-500/20 to-sky-500/20' },
        { label: 'Profile', url: 'https://www.hackerrank.com/RoushniSinha', button: 'View Profile' },
      ],
    },
    {
      platform: 'GitHub',
      icon: <Zap className="text-slate-300" size={32} />,
      stats: [
        { label: 'Contributions', value: '500+', color: 'from-slate-500/20 to-slate-400/20' },
        { label: 'Repositories', value: '20+', color: 'from-slate-400/20 to-slate-300/20' },
        { label: 'Profile', url: 'https://github.com/RoushniSinha', button: 'View Profile' },
      ],
    },
  ];

  return (
    <section id="coding-achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Coding Achievements
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            Continuous learning and problem-solving across multiple competitive programming platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="transform group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {achievement.platform}
                </h3>
              </div>

              <div className="space-y-4">
                {achievement.stats.map((stat, idx) => {
                  if (stat.url) {
                    return (
                      <a
                        key={idx}
                        href={stat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block p-4 rounded-lg bg-gradient-to-br ${stat.color} border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-md`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-300 group-hover/link:text-cyan-400">
                            {stat.label}
                          </span>
                          <span className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-slate-600/50 hover:bg-slate-600/50 transition-colors">
                            {stat.button}
                          </span>
                        </div>
                      </a>
                    );
                  }
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg bg-gradient-to-br ${stat.color} border border-slate-600/30`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-300">{stat.label}</span>
                        <span className="text-xl font-bold text-cyan-400">{stat.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Daily DSA Practice</h3>
              <p className="text-slate-300">Consistent problem-solving to master data structures and algorithms</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://leetcode.com/RoushniSinha/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                LeetCode
              </a>
              <a
                href="https://github.com/RoushniSinha"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
              >
                View Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingAchievements;
