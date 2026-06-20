
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaDownload,
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";

const Home = () => {
  const projects = [
    {
      title: "Shopora",
      image:
        "https://res.cloudinary.com/dgve6ewpr/image/upload/v1752440757/Untitled_c8xmgv.jpg",
      desc:
        "Multi-vendor e-commerce platform featuring authentication, seller dashboards, cloud image uploads, payment integration, and scalable architecture.",
      demo: "https://lnkd.in/dnhi43q5",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Redux",
        "Cloudinary",
        "JWT",
      ],
    },
    {
      title: "Learning Management System",
      image:
        "https://res.cloudinary.com/dgve6ewpr/image/upload/v1770577615/WhatsApp_Image_2026-02-08_at_11.52.07_PM_yibqpr.jpg",
      desc:
        "Modern LMS built with Next.js and TypeScript featuring authentication, dashboards, course management and scalable architecture.",
      demo: "https://client-lms-olive.vercel.app/",
      tags: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "AWS",
        "Docker",
      ],
    },
  ];

  const skills = [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Redux Toolkit",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "JWT",
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "AWS",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Linux",
        "Nginx",
      ],
    },
    {
      title: "Architecture",
      items: [
        "Microservices",
        "Redis",
        "System Design",
        "Scalable Systems",
        "WebSockets",
        "Event Driven Design",
      ],
    },
  ];

  const achievements = [
    {
      number: "10+",
      label: "Projects Built",
    },
    {
      number: "1000+",
      label: "Coding Hours",
    },
    {
      number: "MERN",
      label: "Specialist",
    },
    {
      number: "AWS",
      label: "Cloud Ready",
    },
  ];

  return (
    <div className="bg-white text-gray-800 scroll-smooth">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Midhat
          </h1>

          <div className="hidden md:flex gap-8 font-medium">
            <a href="#about" className="hover:text-purple-600 transition">
              About
            </a>

            <a href="#skills" className="hover:text-purple-600 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-purple-600 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-purple-600 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="min-h-screen flex items-center bg-linear-to-br from-purple-50 via-white to-pink-50 px-6 pt-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-purple-600 font-semibold mb-3">
              Software Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Hi, I'm
              <span className="block text-transparent bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text">
                Syeda Midhat Kazmi
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8 leading-relaxed">
              I am a Full Stack Software Engineer specializing in React,
              Next.js, Node.js, TypeScript, Microservices, Cloud Computing,
              and DevOps.

              <br />
              <br />

              I build scalable, production-ready applications with modern
              architectures, cloud infrastructure, and high-performance
              user experiences.
            </p>

            <div className="flex gap-4 flex-wrap">

              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition flex items-center gap-2"
              >
                <FaDownload />
                Resume
              </a>
            </div>

            <div className="flex gap-5 mt-8 text-2xl">

              <a
                href="https://github.com/Midhat-kazmi/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-600"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/syeda-midhat-kazmi-a5111a339/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-600"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="flex justify-center">

            <div className="relative">

              <img
                src="https://res.cloudinary.com/dgve6ewpr/image/upload/v1752428200/dc79e6e585459508698bdffc51c7b8cc_mcfsm6.jpg"
                alt="Midhat"
                className="w-80 md:w-112.5 rounded-3xl shadow-2xl"
              />

              <div className="absolute -top-5 -left-5 bg-white shadow-lg rounded-xl px-4 py-2">
                AWS & DevOps
              </div>

              <div className="absolute -bottom-5 -right-5 bg-white shadow-lg rounded-xl px-4 py-2">
                MERN Stack
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="py-24 px-6 bg-linear-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                My Journey
              </h3>

              <p className="text-gray-600 leading-relaxed">
                My journey began with curiosity about how web applications
                work. What started as frontend experimentation evolved into
                building complete systems including APIs, authentication,
                databases, cloud deployments, and scalable architectures.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                What I Bring
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>✓ Full Stack Development</li>
                <li>✓ REST APIs & Authentication</li>
                <li>✓ Cloud Infrastructure</li>
                <li>✓ Microservices Architecture</li>
                <li>✓ Production Deployments</li>
              </ul>

            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">

              <FaCode className="text-4xl text-purple-600 mb-4" />

              <h3 className="text-xl font-bold mb-3">
                Full Stack Development
              </h3>

              <p className="text-gray-600">
                Building complete web applications using React, Next.js,
                Node.js and modern databases.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">

              <FaCloud className="text-4xl text-purple-600 mb-4" />

              <h3 className="text-xl font-bold mb-3">
                Cloud & DevOps
              </h3>

              <p className="text-gray-600">
                AWS deployments, Docker containers, CI/CD pipelines,
                GitHub Actions and cloud infrastructure.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">

              <FaServer className="text-4xl text-purple-600 mb-4" />

              <h3 className="text-xl font-bold mb-3">
                Microservices
              </h3>

              <p className="text-gray-600">
                Designing scalable backend services and distributed systems
                using modern architectural patterns.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="py-24 px-6 bg-linear-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition"
              >
                <h3 className="text-xl font-bold text-purple-600 mb-4">
                  {skill.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            Experience
          </h2>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">

            <h3 className="text-2xl font-bold text-purple-600">
              Full Stack Developer
            </h3>

            <p className="text-gray-500 mt-1">
              Freelance • 2024 - Present
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">

              <li>
                • Built and deployed modern MERN stack and Next.js
                applications.
              </li>

              <li>
                • Designed REST APIs, authentication systems,
                and database architectures.
              </li>

              <li>
                • Integrated cloud services such as Cloudinary,
                AWS and Vercel deployments.
              </li>

              <li>
                • Worked with Docker, CI/CD workflows,
                and scalable backend architectures.
              </li>

              <li>
                • Delivered responsive and production-ready user
                experiences.
              </li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="py-24 px-6 bg-linear-to-br from-purple-50 to-pink-50"
      >

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {projects.map((project) => (

              <div
                key={project.title}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">

                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-5 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= ACHIEVEMENTS ================= */}

      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            Achievements
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {achievements.map((item) => (

              <div
                key={item.label}
                className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
              >

                <h3 className="text-5xl font-bold text-purple-600">
                  {item.number}
                </h3>

                <p className="mt-3 text-gray-600 font-medium">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="py-24 px-6 bg-linear-to-br from-purple-50 to-pink-50"
      >

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-gray-600 mb-10 text-lg">
            Have a project idea, freelance opportunity, or collaboration in mind?
            Feel free to reach out. I'm always open to discussing new ideas and
            building impactful products.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <a
              href="https://wa.me/923211722775"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="mailto:ksyedamidhat@gmail.com"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition"
            >
              <FaEnvelope />
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/syeda-midhat-kazmi-a5111a339/"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full flex items-center gap-2 transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

       

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-gray-200 py-8">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Syeda Midhat Kazmi.
              All Rights Reserved.
            </p>

            <div className="flex gap-5 text-xl">

              <a
                href="https://github.com/Midhat-kazmi/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/syeda-midhat-kazmi-a5111a339/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:ksyedamidhat@gmail.com"
                className="hover:text-purple-600 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default Home;

