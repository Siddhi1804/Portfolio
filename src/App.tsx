// src/App.tsx
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition duration-500">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
