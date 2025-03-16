import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'MBA',
      institution: 'Army Institute of Management, Kolkata',
      year: '2024 - Pursuing',
      details: 'Specializing in Finance'
    },
    {
      degree: 'BSc',
      institution: 'Delhi University',
      year: '2019 - 2022',
      details: 'Graduated with 67.13%'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Army Public School, Delhi Cantt',
      year: '2019',
      details: 'CBSE Board'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3">
            {education.map((edu, index) => (
              <div
                key={index}
                className="mb-8 ml-6"
              >
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.year}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;