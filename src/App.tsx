import React, { useState } from 'react';
import { Moon, Sun, Mail, Linkedin, Globe, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Leadership />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;