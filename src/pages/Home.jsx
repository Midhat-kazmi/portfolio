import { Link } from "react-router-dom";

const projects = [
  {
    id: "shopora",
    title: "Shopora",
    image:
      "https://res.cloudinary.com/dgve6ewpr/image/upload/v1752440757/Untitled_c8xmgv.jpg",
    desc:
      "A production-ready multi-vendor eCommerce platform built with the MERN stack. Features role-based dashboards for buyers, sellers, and administrators, Stripe payment integration, real-time order updates via WebSockets, product management, analytics, order tracking, and secure authentication. Designed to deliver a complete marketplace experience with scalability and performance in mind.",
    demo: "https://multivendor-five.vercel.app/",
    github: "https://github.com/Midhat-kazmi/multivendor",
    youtube: "https://youtu.be/HaiTALxGr_I?si=1B2p860txwENLMW0",
    tags: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "WebSockets",
      "JWT",
      "Cloudinary",
    ],
  },

  {
    id: "lms",
    title: "Learning Management System",
    image:
      "https://res.cloudinary.com/dgve6ewpr/image/upload/v1770577615/WhatsApp_Image_2026-02-08_at_11.52.07_PM_yibqpr.jpg",
    desc:
      "A modern Learning Management System built with Next.js and TypeScript. Includes secure authentication, student and instructor dashboards, course creation and enrollment workflows, video-based learning, progress tracking, and scalable backend architecture for managing educational content and users.",
    demo: "https://client-lms-olive.vercel.app/",
    github: "https://github.com/Midhat-kazmi/Client-LMS",
    youtube: "https://youtu.be/VbCKtrVaQPo?si=nQwNUyHtBpO7m7V_",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "AWS",
      "Docker",
      "Tailwind CSS",
      "Authentication",
    ],
  },
];

const skills = [
  { title: "Frontend",       items: ["React.js", "Next.js", "Redux Toolkit", "Context API", "Tailwind CSS", "Responsive Design"] },
  { title: "Backend",        items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Google OAuth", "WebSockets", "Microservices"] },
  { title: "Databases",      items: ["MongoDB", "Mongoose", "Firebase"] },
  { title: "Cloud & DevOps", items: ["Vercel", "Netlify", "Firebase Hosting", "Cloudinary", "Docker", "AWS"] },
];

const highlights = [
  "Full Stack MERN Development",
  "RESTful API Design & JWT Auth",
  "Stripe Payment Integration",
  "Real-Time WebSocket Notifications",
  "Role-Based Access Control",
  "Agile, End-to-End Delivery",
];

const services = [
  {
    icon: "◻",
    title: "Full Stack Development",
    desc: "End-to-end web applications built with React, Next.js, Node.js, and Express. From schema design to a polished, responsive UI.",
  },
  {
    icon: "◺",
    title: "Payments & Real-Time Features",
    desc: "Stripe integration for end-to-end payment flows, plus WebSocket-driven notifications for live order and activity updates.",
  },
  {
    icon: "◳",
    title: "Auth & API Architecture",
    desc: "JWT and Google OAuth authentication, role-based access control, and clean RESTful APIs designed around real client workflows.",
  },
];

const contactLinks = [
  { label: "Email",    href: "mailto:ksyedamidhat@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/923211722775" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/syeda-midhat-kazmi-a5111a339/" },
  { label: "GitHub",   href: "https://github.com/Midhat-kazmi/" },
];

const experience = [
  {
    role: "Freelance MERN Stack Developer",
    place: "Self-Employed · Remote",
    period: "Feb '26 — Apr '26",
    bullets: [
      "Developed and delivered custom full-stack web applications for clients using the MERN stack, managing projects end-to-end.",
      "Built RESTful APIs and responsive React frontends tailored to client requirements, ensuring cross-browser compatibility.",
    ],
  },
  {
    role: "MERN Stack Developer",
    place: "InfinitySoftSolutionz · Lahore, Pakistan",
    period: "Aug '25 — Dec '25",
    bullets: [
      "Built scalable full-stack applications using the MERN stack, delivering features across buyer, seller, and admin roles.",
      "Designed RESTful APIs with Node.js/Express.js and implemented JWT-based authentication with role-based authorization.",
      "Integrated the Stripe payment gateway and Cloudinary media storage for complete transaction and media management.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    place: "B-Source · Pakistan",
    period: "Mar '22 — May '22",
    bullets: [
      "Built responsive, reusable UI components using React.js and Tailwind CSS, improving cross-device compatibility.",
      "Integrated backend APIs to render dynamic content and optimized layouts for performance and cross-browser consistency.",
    ],
  },
];

export default function Home() {
 

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#fff", color: "#0A0A0A", fontSize: 15, lineHeight: 1.6 }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .nav-link {
          text-decoration: none; font-size: 13px; font-weight: 500;
          letter-spacing: 0.04em; text-transform: uppercase;
          color: #6B6B6B; transition: color 0.2s;
        }
        .nav-link:hover { color: #0A0A0A; }
        .nav-cta {
          background: #0A0A0A; color: #fff !important;
          padding: 7px 18px; border-radius: 2px; font-size: 12px !important;
        }
        .btn-primary {
          background: #0A0A0A; color: #fff; padding: 12px 28px;
          border: none; border-radius: 2px; font-size: 13px; font-weight: 500;
          letter-spacing: 0.04em; text-decoration: none; cursor: pointer;
          display: inline-block; transition: opacity 0.2s;
        }
        .btn-primary:hover { opacity: 0.75; }
        .btn-outline {
          background: transparent; color: #0A0A0A; padding: 12px 28px;
          border: 1px solid #B0B0B0; border-radius: 2px; font-size: 13px;
          font-weight: 500; letter-spacing: 0.04em; text-decoration: none;
          display: inline-block; cursor: pointer; transition: border-color 0.2s;
        }
        .btn-outline:hover { border-color: #0A0A0A; }

        .project-img {
          width: 100%; height: 210px; object-fit: cover;
          filter: grayscale(100%); display: block;
          border-bottom: 1px solid #EBEBEB; transition: filter 0.4s;
        }
        .project-img-placeholder {
          width: 100%; height: 210px; display: flex; align-items: center; justify-content: center;
          border-bottom: 1px solid #EBEBEB; background: #0A0A0A;
          font-family: 'Space Grotesk', sans-serif; font-size: 56px; font-weight: 700;
          color: rgba(255,255,255,0.92); letter-spacing: -2px;
        }
        .project-card:hover .project-img { filter: grayscale(0%); }
        .project-link {
          font-size: 12px; font-weight: 600; letter-spacing: 0.08em;
          text-transform: uppercase; color: #0A0A0A; text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px; transition: gap 0.2s;
        }
        .project-link:hover { gap: 10px; }

        .contact-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 16px; text-decoration: none; color: #0A0A0A;
          border-bottom: 1px solid #EBEBEB; font-size: 13px; font-weight: 500;
          transition: background 0.15s;
        }
        .contact-row:last-child { border-bottom: none; }
        .contact-row:hover { background: #F7F7F7; }

        .service-card { transition: background 0.15s; }
        .service-card:hover { background: #F7F7F7 !important; }

        .exp-card { transition: background 0.15s; }
        .exp-card:hover { background: #F7F7F7; }

        .footer-link {
          font-size: 12px; color: #B0B0B0; text-decoration: none;
          letter-spacing: 0.08em; text-transform: uppercase; transition: color 0.2s;
        }
        .footer-link:hover { color: #0A0A0A; }

        /* ── MARQUEE ── */
        .marquee-track {
          display: flex; gap: 3rem; white-space: nowrap;
          animation: marquee 24s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .about-grid    { grid-template-columns: 1fr !important; }
          .skills-grid   { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .contact-wrap  { grid-template-columns: 1fr !important; }
          .stats-bar     { grid-template-columns: repeat(2, 1fr) !important; }
          .nav-desktop   { display: none !important; }
        }
      `}</style>

      {/* ══ NAV ══ */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0,
        background: "rgba(255,255,255,0.96)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid #EBEBEB", zIndex: 100,
        padding: "0 2rem", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link to="/" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: "-0.5px", color: "#0A0A0A", textDecoration: "none" }}>
          MIDHAT
        </Link>
        <ul className="nav-desktop" style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link active">Contact</Link></li>
          <li><a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav-link nav-cta">Resume ↗</a></li>
        </ul>
      </nav>

      {/* ══ HERO ══ */}
      <section id="hero" style={{ maxWidth: 900, margin: "0 auto", padding: "130px 2rem 80px" }}>

        {/* eyebrow */}
        <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B6B", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 10 }}>
          
          Software Engineer
        </p>

        {/* name */}
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(44px, 8vw, 76px)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-2px", color: "#0A0A0A", marginBottom: "1.75rem" }}>
          Syeda Midhat<br />Kazmi
        </h1>

        {/* bio */}
        <p style={{ fontSize: 17, color: "#4A4A4A", maxWidth: 620, lineHeight: 1.85, marginBottom: "1.25rem", fontWeight: 300 }}>
          I'm a Full Stack Engineer with hands-on experience building production-grade MERN stack
          applications. My flagship build, Shopora, is a multi-vendor eCommerce platform with
          real-time WebSocket notifications, Stripe payment integration, and role-based access
          control across buyer, seller, and admin roles.
        </p>
        <p style={{ fontSize: 17, color: "#4A4A4A", maxWidth: 620, lineHeight: 1.85, marginBottom: "2.5rem", fontWeight: 300 }}>
          I work across React/Redux frontends, RESTful API design, and JWT authentication, and I'm
          comfortable owning a feature end-to-end inside an Agile team. Currently open to freelance
          projects and full-time engineering roles.
        </p>

        {/* tech pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem" }}>
          {["React", "Next.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS", "JWT", "Stripe", "WebSockets", "Docker"].map((t) => (
            <span key={t} style={{ fontSize: 12, fontWeight: 500, padding: "5px 12px", border: "1px solid #EBEBEB", borderRadius: 2, color: "#3A3A3A", letterSpacing: "0.02em" }}>
              {t}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: "2rem" }}>
          <a href="#projects" className="btn-primary">View Projects</a>
          <Link to="/contact" className="btn-outline">Get In Touch</Link>
        <a
    href="https://drive.google.com/uc?export=download&id=1G6J_B8_pxfIvpR916TALCsK5VaN3gKUH"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-outline"
  >
    Download CV
  </a>
        </div>

        {/* social links */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="https://github.com/Midhat-kazmi/" target="_blank" rel="noreferrer" style={{ color: "#6B6B6B", textDecoration: "none", fontSize: 13 }}>GitHub ↗</a>
          <a href="https://www.linkedin.com/in/syeda-midhat-kazmi-a5111a339/" target="_blank" rel="noreferrer" style={{ color: "#6B6B6B", textDecoration: "none", fontSize: 13 }}>LinkedIn ↗</a>
          <a href="mailto:ksyedamidhat@gmail.com" style={{ color: "#6B6B6B", textDecoration: "none", fontSize: 13 }}>Email ↗</a>
        </div>
      </section>

      <hr style={{ maxWidth: 900, margin: "0 auto", border: "none", borderTop: "1px solid #EBEBEB" }} />

      {/* ══ MARQUEE ══ */}
      <div style={{ overflow: "hidden", borderBottom: "1px solid #EBEBEB", padding: "1rem 0", background: "#F7F7F7" }}>
        <div className="marquee-track">
          {["React", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "JWT Auth", "Stripe", "WebSockets", "Docker", "AWS", "Firebase", "Cloudinary", "REST APIs",
            "React", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "JWT Auth", "Stripe", "WebSockets", "Docker", "AWS", "Firebase", "Cloudinary", "REST APIs"].map((t, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B0B0B0" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ══ STATS ══ */}
      <div className="stats-bar" style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 2rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
        {[
          { number: "1+",     label: "Year of Experience" },
          { number: "3",      label: "Production Projects" },
          { number: "MERN",   label: "Stack Specialist" },
          { number: "Stripe", label: "Payments Integrated" },
        ].map((s) => (
          <div key={s.label}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 700, letterSpacing: "-1px", color: "#0A0A0A", lineHeight: 1, marginBottom: 4 }}>{s.number}</div>
            <div style={{ fontSize: 12, color: "#6B6B6B", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <hr style={{ maxWidth: 900, margin: "0 auto", border: "none", borderTop: "1px solid #EBEBEB" }} />

      {/* ══ ABOUT ══ */}
      <section id="about" style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2.5rem" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B0B0B0" }}>01</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px" }}>About Me</h2>
        </div>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3rem", alignItems: "start" }}>
          <div style={{ fontSize: 15, color: "#4A4A4A", lineHeight: 1.85, fontWeight: 300 }}>
            <p>I build production-grade MERN stack applications — from REST APIs and JWT authentication to React/Redux frontends. My recent work spans buyer, seller, and admin-facing features, payment flows, and real-time functionality delivered independently, end-to-end.</p>
            <p style={{ marginTop: "1rem" }}>I'm comfortable picking up a feature, scoping it, and shipping it inside an Agile workflow — whether that's a freelance client engagement or part of a product team.</p>
            <p style={{ marginTop: "1rem" }}>Currently available for freelance work and full-time engineering roles.</p>
            <div style={{ marginTop: "1.75rem" }}>
              <Link to="/about" style={{ fontSize: 13, fontWeight: 600, color: "#0A0A0A", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Full Story →
              </Link>
            </div>
          </div>
          <div style={{ border: "1px solid #EBEBEB" }}>
            {highlights.map((h, i) => (
              <div key={h} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", borderBottom: i < highlights.length - 1 ? "1px solid #EBEBEB" : "none", fontSize: 13, fontWeight: 500, color: "#3A3A3A" }}>
                <div style={{ width: 18, height: 18, border: "1px solid #B0B0B0", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 10 }}>✓</div>
                {h}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ maxWidth: 900, margin: "0 auto", border: "none", borderTop: "1px solid #EBEBEB" }} />

      {/* ══ SERVICES ══ */}
      <section id="services" style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2.5rem" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B0B0B0" }}>02</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px" }}>Services</h2>
        </div>
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#EBEBEB", border: "1px solid #EBEBEB" }}>
          {services.map((s) => (
            <div key={s.title} className="service-card" style={{ background: "#fff", padding: "1.75rem 1.5rem" }}>
              <div style={{ fontSize: 22, marginBottom: "1rem" }}>{s.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 600, color: "#0A0A0A", marginBottom: "0.5rem" }}>{s.title}</div>
              <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ maxWidth: 900, margin: "0 auto", border: "none", borderTop: "1px solid #EBEBEB" }} />

      {/* ══ SKILLS ══ */}
      <section id="skills" style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2.5rem" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B0B0B0" }}>03</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px" }}>Skills & Technologies</h2>
        </div>
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "#EBEBEB", border: "1px solid #EBEBEB" }}>
          {skills.map((s) => (
            <div key={s.title} style={{ background: "#fff", padding: "1.5rem" }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#B0B0B0", marginBottom: "1rem" }}>{s.title}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.items.map((item) => (
                  <span key={item} style={{ fontSize: 13, color: "#0A0A0A", padding: "4px 10px", background: "#F7F7F7", borderRadius: 2 }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ maxWidth: 900, margin: "0 auto", border: "none", borderTop: "1px solid #EBEBEB" }} />

      {/* ══ EXPERIENCE ══ */}
      <section id="experience" style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2.5rem" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B0B0B0" }}>04</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px" }}>Experience</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#EBEBEB", border: "1px solid #EBEBEB" }}>
          {experience.map((job) => (
            <div key={job.role} className="exp-card" style={{ background: "#fff", padding: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.4rem", flexWrap: "wrap", gap: 8 }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 19, fontWeight: 700 }}>{job.role}</div>
                <div style={{ fontSize: 12, color: "#B0B0B0", letterSpacing: "0.04em" }}>{job.period}</div>
              </div>
              <div style={{ fontSize: 13, color: "#6B6B6B", marginBottom: "1.25rem" }}>{job.place}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {job.bullets.map((item) => (
                  <li key={item} style={{ fontSize: 14, color: "#6B6B6B", display: "flex", gap: 10, lineHeight: 1.7 }}>
                    <span style={{ color: "#B0B0B0", flexShrink: 0, marginTop: 2 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ maxWidth: 900, margin: "0 auto", border: "none", borderTop: "1px solid #EBEBEB" }} />

      {/* ══ PROJECTS ══ */}
      <section id="projects" style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B0B0B0" }}>05</span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px" }}>Featured Projects</h2>
          </div>
          <Link to="/portfolio" style={{ fontSize: 12, fontWeight: 600, color: "#6B6B6B", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            View All →
          </Link>
        </div>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "#EBEBEB", border: "1px solid #EBEBEB" }}>
          {projects.map((p) => (
            <div key={p.id} className="project-card" style={{ background: "#fff", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              {p.image ? (
                <img src={p.image} alt={p.title} className="project-img" />
              ) : (
                <div className="project-img-placeholder">{p.title.charAt(0)}</div>
              )}
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 700, color: "#0A0A0A", marginBottom: "0.5rem" }}>{p.title}</div>
                <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.65, marginBottom: "1rem", flex: 1 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1.25rem" }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 11, fontWeight: 500, padding: "3px 8px", border: "1px solid #EBEBEB", color: "#6B6B6B", letterSpacing: "0.04em" }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="project-link">Live Demo →</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ maxWidth: 900, margin: "0 auto", border: "none", borderTop: "1px solid #EBEBEB" }} />

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2.5rem" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B0B0B0" }}>06</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px" }}>Let's Work Together</h2>
        </div>
        <div className="contact-wrap" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3rem", alignItems: "start" }}>
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 34, fontWeight: 700, letterSpacing: "-1px", lineHeight: 1.15, color: "#0A0A0A", marginBottom: "1rem" }}>
              Have a project<br />in mind?
            </h3>
            <p style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.8, fontWeight: 300, marginBottom: "2rem" }}>
              I'm open to freelance work, full-time roles, and interesting collaborations. Whether it's a greenfield product or an existing codebase that needs help — let's talk.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="mailto:ksyedamidhat@gmail.com" className="btn-primary">Send an Email</a>
              <a href="https://wa.me/923211722775" target="_blank" rel="noreferrer" className="btn-outline">WhatsApp</a>
            </div>
          </div>
          <div style={{ border: "1px solid #EBEBEB" }}>
            {contactLinks.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="contact-row">
                {c.label}
                <span style={{ color: "#B0B0B0", fontSize: 16 }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ borderTop: "1px solid #EBEBEB", padding: "2rem", marginTop: "2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: 12, color: "#B0B0B0", letterSpacing: "0.02em" }}>
            © {new Date().getFullYear()} Syeda Midhat Kazmi. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="https://github.com/Midhat-kazmi/" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
            <a href="https://www.linkedin.com/in/syeda-midhat-kazmi-a5111a339/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
            <a href="mailto:ksyedamidhat@gmail.com" className="footer-link">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
