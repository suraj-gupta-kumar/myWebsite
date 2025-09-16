import React from 'react';

const Leadership = () => {
  const achievements = [
    {
      title: 'College Fest Organizer',
      description: 'Played a key role in organizing the college annual fest, successfully attracting over 5,000 students, Coordinated with various colleges for inter-college competitions, enhancing collaboration and participation.'
    },
    {
      title: 'Blood Donation Camp Leader',
      description: 'Led the organization of a blood donation camp at the college, mobilizing a team that collected over 500 blood units, This initiative not only raised awareness about the importance of blood donation but also contributed significantly to local healthcare needs.'
    },
    {
      title: 'NSS Volunteer',
      description: 'Actively participated in community service initiatives, focusing on educating underprivileged children, Successfully helped numerous students improve their academic performance, with many passing their board exams with commendable results.'
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
