import React from 'react';
import { Mail, Linkedin, ClipboardList, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./Photo.jpg")'
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Suraj Kumar Gupta</h1>
        <p className="text-xl mb-8 animate-fade-in-delay">
          Aspiring Finance Professional | Analytical Thinker | Strategic Leader
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="mailto:Suraj2842a@aim.ac.in"
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-kumar-gupta-a607291a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="./SurajCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <ClipboardList  className="w-6 h-6" />
          </a>
        </div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;