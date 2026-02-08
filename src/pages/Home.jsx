import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-white/90 backdrop-blur shadow-md fixed top-0 z-50">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-600">
          <Link to="/">midhat</Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-purple-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-purple-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-purple-500 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-purple-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Midhat-kazmi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/syeda-midhat-kazmi-a5111a339/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 pt-28">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
            Hi, I’m Midhat 
          </h1>
          <p className="text-md md:text-lg text-gray-600 mb-8 max-w-md">
            SWE building scalable web applications,and
            occasionally debugging at 2am.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to="/portfolio"
              className="px-6 py-2.5 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition text-sm font-medium"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition text-sm font-medium"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src="https://res.cloudinary.com/dgve6ewpr/image/upload/v1752428200/dc79e6e585459508698bdffc51c7b8cc_mcfsm6.jpg"
            alt="Midhat"
            className="w-72 md:w-96 rounded-full shadow-xl object-cover"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Midhat. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
