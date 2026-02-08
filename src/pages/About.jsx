import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mb-10 text-purple-600 font-medium hover:underline"
        >
          ← Back
        </Link>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-gray-700 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-20">
          I’m <span className="font-semibold text-purple-600">Syed Midhat Kazmi</span>,
          a <span className="font-semibold">Full-Stack Developer</span> who builds
          scalable, production-ready web applications,from backend architecture
          to polished user interfaces. I enjoy solving real-world problems using
          modern technologies and clean system design.
        </p>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Journey */}
          <div className="relative bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20"></div>

            <h3 className="text-2xl font-semibold text-purple-600 mb-4 ml-15">
              My Journey
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              My journey began with curiosity about how modern web applications
              work behind the scenes. What started as frontend experimentation
              soon evolved into building complete systems including APIs,
              databases, authentication, and real-time features.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Today, I develop full-stack applications like e-commerce platforms
              and LMS systems that are secure, scalable, and user-focused.
            </p>
          </div>

          {/* What I Bring */}
          <div className="relative bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-linear-to-br from-pink-500 to-purple-500 rounded-2xl opacity-20"></div>

            <h3 className="text-2xl font-semibold text-purple-600 mb-6">
              What I Bring
            </h3>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-pink-500 text-xl">▹</span>
                <p className="text-gray-700">
                  End-to-end full-stack development
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-500 text-xl">▹</span>
                <p className="text-gray-700">
                  Backend APIs, authentication & database design
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-500 text-xl">▹</span>
                <p className="text-gray-700">
                  Clean UI with strong UX fundamentals
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-500 text-xl">▹</span>
                <p className="text-gray-700">
                  Production deployments & performance optimization
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Skills & Technologies
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <h4 className="font-semibold text-purple-600 mb-3">
                Frontend
              </h4>
              <p className="text-gray-600 text-sm">
                React, Next.js, TypeScript, Tailwind CSS, Redux
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <h4 className="font-semibold text-purple-600 mb-3">
                Backend
              </h4>
              <p className="text-gray-600 text-sm">
                Node.js, Express.js, MongoDB, REST APIs
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <h4 className="font-semibold text-purple-600 mb-3">
                Real-time & Payments
              </h4>
              <p className="text-gray-600 text-sm">
                Socket.io, Stripe, PayPal
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
              <h4 className="font-semibold text-purple-600 mb-3">
                DevOps & Tools
              </h4>
              <p className="text-gray-600 text-sm">
                Git, GitHub, Vercel, Cloudinary, JWT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
