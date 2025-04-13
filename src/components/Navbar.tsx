// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },         
    { name: 'Contact', href: '#contact' },
  ];


  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-pink-500 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle button */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:inline-flex p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4">
          <ul className="space-y-4 text-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block text-lg hover:text-pink-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  toggleDarkMode();
                  setMenuOpen(false);
                }}
                className="w-full mt-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
