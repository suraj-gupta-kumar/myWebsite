import React from 'react';

const Leadership = () => {
  const achievements = [
    {
      title: 'College Fest Organizer',
      description: 'Successfully managed and coordinated college fest with 5000+ attendees, demonstrating exceptional event management and leadership skills.'
    },
    {
      title: 'Blood Donation Camp Leader',
      description: 'Led a successful blood donation campaign resulting in the collection of 500+ units, making a significant impact on the community.'
    },
    {
      title: 'NSS Volunteer',
      description: 'Actively participated in teaching underprivileged children, contributing to social welfare and community development.'
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Leadership & Extracurriculars
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;