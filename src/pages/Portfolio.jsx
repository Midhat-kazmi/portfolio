import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'shopora',
    title: 'Shopora',
    image:
      'https://res.cloudinary.com/dgve6ewpr/image/upload/v1752440757/Untitled_c8xmgv.jpg',
    shortDesc:
      'Full-stack multi-vendor e-commerce platform built with the MERN stack.'
  },
  {
    id: 'lms',
    title: 'Learning Management System',
    image:
      'https://res.cloudinary.com/dgve6ewpr/image/upload/v1770577615/WhatsApp_Image_2026-02-08_at_11.52.07_PM_yibqpr.jpg',
    shortDesc:
      'Modern LMS built with Next.js and TypeScript, deployed on Vercel.'
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-50 px-6 py-16">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-white rounded-3xl shadow-md overflow-hidden 
                       hover:shadow-2xl hover:-translate-y-2 
                       transition-all duration-300 
                       flex flex-col"
          >
            
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover 
                           transform hover:scale-105 
                           transition duration-500"
              />
            </div>

            {/* Project Content */}
            <div className="p-8 flex flex-col grow">
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6 grow leading-relaxed">
                {project.shortDesc}
              </p>

              <Link
                to={`/project/${project.id}`}
                className="mt-auto inline-block px-6 py-3 rounded-full 
                           bg-purple-600 text-white text-sm font-semibold 
                           hover:bg-purple-700 hover:shadow-lg
                           transition text-center"
              >
                View Details →
              </Link>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Portfolio;
