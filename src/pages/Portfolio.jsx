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
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        My Projects
      </h2>

      {/* Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">

          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white w-80 rounded-2xl shadow-md overflow-hidden 
                         hover:shadow-lg hover:-translate-y-1 
                         transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {project.shortDesc}
                </p>

                <Link
                  to={`/project/${project.id}`}
                  className="inline-block text-sm px-4 py-2 rounded-full 
                             bg-purple-600 text-white 
                             hover:bg-purple-700 transition"
                >
                  View Details →
                </Link>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Portfolio;
