import React from 'react';

const Experience = () => {
  const experiences = [
 {
      title: 'Marketing Intern',
      company: 'Axiom Ayurveda Pvt Ltd',
      period: 'Jun 2025 - Aug 2025',
      description: 'Conducted comprehensive surveys at 70 retail shops to assess the current selling state of Alo Fruit, gathering valuable insights from retailers regarding product placement, pricing, and customer preferences, Engaged with 200 customers to collect feedback on their opinions and experiences with Alo Fruit, analyzing consumer behavior and preferences to inform marketing strategies, Performed observational research as a customer to evaluate the  shopping experience and identify potential areas for improvement in product visibility and customer engagement, Collaborated with the marketing team to synthesize survey data and develop actionable recommendations aimed at enhancing brand presence and sales performance in the market.'
    }
    {
      title: 'Intern',
      company: 'Pravaig Dynamics',
      period: 'Apr 2022 - Aug 2022',
      description: 'Gained hands-on experience using Hootsuite to schedule, monitor, and manage social media campaigns across platforms such as Instagram, LinkedIn, and Twitter, Assisted in content creation and performance tracking for digital marketing initiatives, contributing to the overall strategy and execution of campaigns, Enhanced brand visibility through consistent social media engagement and strategic execution, resulting in increased audience interaction and brand awareness.'
    },
   
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
