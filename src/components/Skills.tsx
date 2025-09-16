import React from 'react';

const Skills = () => {
  const skills = {
    technical: [
      'Hootsuite',
      'MS Excel',
      'Power BI',
      'MySQL',
      'Google Looker Studio'
      'Python'
    ],
    soft: [
      'Adaptability',
      'Time Management',
      'Critical Thinking',
      'Interpersonal Skills'
    ],
    languages: ['Hindi', 'English']
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Skills
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Technical Skills
            </h3>
            <div className="space-y-2">
              {skills.technical.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Soft Skills
            </h3>
            <div className="space-y-2">
              {skills.soft.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Languages
            </h3>
            <div className="space-y-2">
              {skills.languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
