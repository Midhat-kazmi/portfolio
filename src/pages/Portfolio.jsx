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
    image: 'https://res.cloudinary.com/dgve6ewpr/image/upload/v1770577615/WhatsApp_Image_2026-02-08_at_11.52.07_PM_yibqpr.jpg',
    shortDesc:
      'Modern LMS built with Next.js and TypeScript, deployed on Vercel.'
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-50 px-6 py-16 ">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto ml-100">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-5">
                {project.shortDesc}
              </p>

              <Link
                to={`/project/${project.id}`}
                className="inline-block px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition"
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
