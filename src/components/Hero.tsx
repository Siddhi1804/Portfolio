// src/components/Hero.tsx

import { useState } from 'react';
import siddhiImage from '../assets/siddhi.jpg'; // Ensure this image path is correct

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 md:pt-32" id="home">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={siddhiImage}
          alt="siddhi patil"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-4 border-pink-400 shadow-lg hover:scale-105 transition"
        />
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Siddhi Patil</h1>
          <p className="text-lg md:text-xl mb-6">
          Frontend Developer | 2nd Year Computer Engineering Student | Passionate about Web Development
          </p>

          <button
            onClick={() => setShowPopup(true)}
            className="bg-pink-500 px-6 py-2 rounded-full text-white hover:bg-pink-600 active:bg-pink-700 transition"
          >
            Hire Me
          </button>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-6 justify-center">
            <a href="https://github.com/Siddhi1804" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-pink-500 transition">
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a href="https://www.linkedin.com/in/siddhi-patil-09b0602a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-pink-500 transition">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center">
            <p className="mb-4 text-lg font-medium">This is my email:</p>
            <p className="mb-4 text-pink-500 font-semibold">siddhipatil1805@gmail.com</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-pink-500 px-4 py-2 rounded-full text-white hover:bg-pink-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
