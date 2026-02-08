import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projects = [
  {
    id: 'shopora',
    title: 'Shopora',
    video: 'https://www.youtube.com/embed/HaiTALxGr_I',
    description:
      'Shopora is a full stack multi-vendor e-commerce platform built with the MERN stack. It features real-time chat, live sale events, secure payments, and powerful seller dashboards.',
    features: [
      'Multi-vendor marketplace',
      'Real-time chat using Socket.io',
      'Live sales with countdown timers',
      'Stripe & PayPal payments',
      'Seller dashboards & analytics',
      'Fully responsive UI'
    ],
    techStack: [
      'React.js, Tailwind CSS, Redux Toolkit',
      'Node.js, Express.js, MongoDB',
      'Socket.io, Stripe, JWT'
    ],
    links: {
      demo: 'https://lnkd.in/dnhi43q5',
      source: ['https://lnkd.in/duwC2tFu'],
      caseStudy: 'https://lnkd.in/dKGUH7HA'
    }
  },
  {
    id: 'lms',
    title: 'Learning Management System',
    video: 'https://www.youtube.com/embed/VbCKtrVaQPo',
    description:
      'A modern Learning Management System built with Next.js and TypeScript. It supports course management, authentication, and is deployed on Vercel.',
    features: [
      'Course & lesson management',
      'Authentication & authorization',
      'Next.js App Router',
      'TypeScript for scalability',
      'Clean & modern UI'
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Vercel'
    ],
    links: {
      demo: 'https://client-lms-olive.vercel.app/',
      source: [
        'https://github.com/Midhat-kazmi/LMS',
       
      ]
    }
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-50 px-6 py-16">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mb-8 text-purple-600 font-medium hover:underline"
        >
          ← Back
        </Link>

        <h2 className="text-4xl font-extrabold text-center mb-12 bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          {project.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Video & Links */}
          <div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
              <iframe
                src={project.video}
                title={project.title}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
                >
                  Live Demo
                </a>
              )}

              {project.links.source?.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
                >
                  GitHub {project.links.source.length > 1 ? index + 1 : ''}
                </a>
              ))}

              {project.links.caseStudy && (
                <a
                  href={project.links.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border border-purple-500 text-purple-600 hover:bg-purple-50 transition"
                >
                  Case Study
                </a>
              )}
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {project.description}
            </p>

            <h4 className="text-xl font-semibold text-purple-600 mb-3">
              Features
            </h4>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <h4 className="text-xl font-semibold text-purple-600 mb-3">
              Tech Stack
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {project.techStack.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
