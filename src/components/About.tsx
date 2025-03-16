import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          <p className="text-lg leading-relaxed">
            As an aspiring finance professional with a strong foundation in business and analytics,
            I am passionate about leveraging data-driven insights to drive strategic decision-making.
            Currently pursuing my MBA at Army Institute of Management, Kolkata, I combine my analytical
            skills with leadership experience to create meaningful impact in the financial sector.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;