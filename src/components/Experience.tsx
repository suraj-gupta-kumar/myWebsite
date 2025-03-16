import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Intern',
      company: 'Pravaig Dynamics',
      period: 'Apr 2022 - Aug 2022',
      description: 'Learned Hootsuite Analytics and worked on social media applications, contributing to the company\'s digital presence and marketing strategies.'
    },
    {
      title: 'Freelancer',
      company: 'Smile Times',
      period: 'Jan 2022 - Sep 2022',
      description: 'Worked with Adobe Premiere Pro and multiple clients, delivering high-quality content and maintaining strong client relationships.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {exp.title} at {exp.company}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{exp.period}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;