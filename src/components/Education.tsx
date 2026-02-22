import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master's in Computer Application (MCA)",
      institution: "Patna Women's College / Patna University",
      location: "Patna, Bihar, India",
      period: "Jul 2026",
      gpa: "7.86/10.0",
      focus: "Artificial Intelligence, IoT, and Cloud Computing",
      coursework: [
        'Software Engineering',
        'Advanced DBMS',
        'Computer Networks and Security',
        'Design and Analysis',
        'Distributed Computing',
        'Compiler Design',
        'Data and Web Mining',
      ],
    },
    {
      degree: 'Bachelors in Computer Application (BCA)',
      institution: "J.D. Women's College / Patliputra University",
      location: "Patna, Bihar, India",
      period: "Dec 2021",
      gpa: "7.1/10.0",
      coursework: [
        'C, C++, Java',
        'Operating System',
        'Computer Network',
        'Data Structures and Algorithm',
        'Computer Architecture',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-3 mt-1">
                  <GraduationCap className="text-cyan-400" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-lg text-cyan-400">{edu.institution}</p>
                      <p className="text-sm text-slate-400">{edu.location}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-slate-300 font-semibold">{edu.period}</p>
                      <p className="text-cyan-400 font-semibold">GPA: {edu.gpa}</p>
                    </div>
                  </div>

                  {edu.focus && (
                    <div className="mb-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                      <p className="text-slate-300">
                        <span className="font-semibold text-cyan-400">Focus: </span>
                        {edu.focus}
                      </p>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="text-cyan-400" size={18} />
                      <h4 className="text-sm font-semibold text-cyan-400">Relevant Coursework:</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg border border-slate-600/50"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
