import { Link } from "react-router-dom";

const timeline = [
  {
    year: "2026",
    title: "Freelance MERN Stack Developer",
    place: "Self-Employed · Remote",
    desc: "Took on client projects end-to-end — scoping, building, and deploying custom MERN stack applications with RESTful APIs and responsive React frontends.",
  },
  {
    year: "2025",
    title: "MERN Stack Developer",
    place: "InfinitySoftSolutionz · Lahore, Pakistan",
    desc: "Built scalable full-stack applications spanning buyer, seller, and admin roles. Implemented JWT-based authentication, role-based authorization, Stripe payments, and Cloudinary media storage.",
  },
  {
    year: "2024",
    title: "Graduated — BS Software Engineering",
    place: "Virtual University of Pakistan",
    desc: "Completed my degree, having spent the prior years building progressively more complete projects alongside coursework.",
  },
  {
    year: "2022",
    title: "Frontend Developer Intern",
    place: "B-Source · Pakistan",
    desc: "Built responsive, reusable UI components with React.js and Tailwind CSS, and integrated backend APIs to render dynamic content.",
  },
  {
    year: "2020",
    title: "Started BS Software Engineering",
    place: "Virtual University of Pakistan",
    desc: "Began formal studies in software engineering, where my interest in building complete, working applications first took shape.",
  },
];

const values = [
  {
    title: "End-to-end ownership",
    desc: "From database schema to JWT auth to UI polish — I'm comfortable taking full responsibility for a feature or product, independently.",
  },
  {
    title: "Built for real users",
    desc: "Shopora handles real payment flows and role-based access for buyers, sellers, and admins — not a demo, a system meant to work under real conditions.",
  },
  {
    title: "Clear, typed code",
    desc: "I write code — APIs, components, state — that's structured to be read and extended later, by me or anyone else on the team.",
  },
  {
    title: "Agile collaboration",
    desc: "Used to working in sprints, scoping client requirements precisely, and delivering complete features rather than partial drafts.",
  },
];

const techStack = [
  { category: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { category: "Frontend", items: ["React.js", "Next.js", "Redux Toolkit", "Context API", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Google OAuth", "WebSockets", "Microservices"] },
  { category: "Databases", items: ["MongoDB", "Mongoose", "Firebase"] },
  { category: "Cloud & DevOps", items: ["Vercel", "Netlify", "Firebase Hosting", "Cloudinary", "Docker", "AWS"] },
  { category: "Tools & Practice", items: ["Git", "GitHub", "Postman", "Stripe Integration", "MVC Architecture", "Agile"] },
];

export default function About() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#fff", color: "#0A0A0A", fontSize: 15, lineHeight: 1.6 }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .nav-link {
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #6B6B6B;
          transition: color 0.2s;
        }
        .nav-link:hover, .nav-link.active { color: #0A0A0A; }
        .nav-cta {
          background: #0A0A0A;
          color: #fff !important;
          padding: 7px 18px;
          border-radius: 2px;
          font-size: 12px !important;
        }

        .btn-primary {
          background: #0A0A0A; color: #fff;
          padding: 12px 28px; border: none; border-radius: 2px;
          font-size: 13px; font-weight: 500; letter-spacing: 0.04em;
          text-decoration: none; cursor: pointer; display: inline-block;
          transition: opacity 0.2s;
        }
        .btn-primary:hover { opacity: 0.8; }

        .btn-outline {
          background: transparent; color: #0A0A0A;
          padding: 12px 28px; border: 1px solid #B0B0B0; border-radius: 2px;
          font-size: 13px; font-weight: 500; letter-spacing: 0.04em;
          text-decoration: none; display: inline-block; cursor: pointer;
          transition: border-color 0.2s;
        }
        .btn-outline:hover { border-color: #0A0A0A; }

        .timeline-item { display: grid; grid-template-columns: 80px 1fr; gap: 2rem; padding: 2rem 0; border-top: 1px solid #EBEBEB; }
        .timeline-item:last-child { border-bottom: 1px solid #EBEBEB; }

        .value-card { padding: 1.5rem; border: 1px solid #EBEBEB; transition: background 0.15s; }
        .value-card:hover { background: #F7F7F7; }

        .footer-link {
          font-size: 12px; color: #B0B0B0; text-decoration: none;
          letter-spacing: 0.08em; text-transform: uppercase; transition: color 0.2s;
        }
        .footer-link:hover { color: #0A0A0A; }

        @media (max-width: 768px) {
          .timeline-item { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .tech-grid { grid-template-columns: 1fr !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .nav-links-desktop { display: none !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)",
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

      {/* ── PAGE HERO ── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "140px 2rem 80px" }}>
        <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B6B", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-block", width: 28, height: 1, background: "#B0B0B0" }} />
          About Me
        </p>

        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.05, color: "#0A0A0A", marginBottom: "1.5rem" }}>
              Building things<br />that actually ship.
            </h1>
            <p style={{ fontSize: 16, color: "#6B6B6B", lineHeight: 1.85, fontWeight: 300, marginBottom: "1rem" }}>
              I'm Syeda Midhat Kazmi — a Full Stack Engineer based in Lahore, Pakistan, with hands-on experience building production-grade MERN stack applications.
            </p>
            <p style={{ fontSize: 16, color: "#6B6B6B", lineHeight: 1.85, fontWeight: 300, marginBottom: "1rem" }}>
              My flagship project, Shopora, is a multi-vendor eCommerce platform with real-time WebSocket notifications, Stripe payment integration, and role-based access control for buyers, sellers, and admins. I work across React/Redux frontends, RESTful API design, and JWT authentication.
            </p>
            <p style={{ fontSize: 16, color: "#6B6B6B", lineHeight: 1.85, fontWeight: 300, marginBottom: "2rem" }}>
              I've delivered complete, end-to-end features independently — for an employer, for freelance clients, and for my own projects — and I'm comfortable doing the same inside an Agile team.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="mailto:ksyedamidhat@gmail.com" className="btn-primary">Get In Touch</a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-outline">Download CV</a>
            </div>
          </div>

          {/* Quick facts panel */}
          <div style={{ border: "1px solid #EBEBEB" }}>
            {[
              { label: "Role", value: "Full Stack Developer (MERN)" },
              { label: "Focus", value: "MERN + Stripe + WebSockets" },
              { label: "Experience", value: "1+ Year" },
              { label: "Education", value: "BS Software Engineering" },
              { label: "Available", value: "Freelance & Full-time" },
              { label: "Location", value: "Lahore, Pakistan" },
              { label: "Email", value: "ksyedamidhat@gmail.com" },
            ].map((row, i, arr) => (
              <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "14px 16px", borderBottom: i < arr.length - 1 ? "1px solid #EBEBEB" : "none", fontSize: 13 }}>
                <span style={{ color: "#B0B0B0", fontWeight: 500, letterSpacing: "0.02em" }}>{row.label}</span>
                <span style={{ color: "#0A0A0A", fontWeight: 500, textAlign: "right" }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ maxWidth: 900, margin: "0 auto", border: "none", borderTop: "1px solid #EBEBEB" }} />

      {/* ── TIMELINE ── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2.5rem" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B0B0B0" }}>01</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px", color: "#0A0A0A" }}>Journey</h2>
        </div>
        <div>
          {timeline.map((item) => (
            <div key={item.year} className="timeline-item">
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: "#B0B0B0", letterSpacing: "0.04em", paddingTop: 2 }}>{item.year}</div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 700, color: "#0A0A0A", marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: "#B0B0B0", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{item.place}</div>
                <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ maxWidth: 900, margin: "0 auto", border: "none", borderTop: "1px solid #EBEBEB" }} />

      {/* ── VALUES ── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2.5rem" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B0B0B0" }}>02</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px", color: "#0A0A0A" }}>How I Work</h2>
        </div>
        <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "#EBEBEB", border: "1px solid #EBEBEB" }}>
          {values.map((v) => (
            <div key={v.title} className="value-card" style={{ background: "#fff" }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 600, color: "#0A0A0A", marginBottom: "0.75rem" }}>{v.title}</div>
              <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.7, fontWeight: 300 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ maxWidth: 900, margin: "0 auto", border: "none", borderTop: "1px solid #EBEBEB" }} />

      {/* ── TECH STACK ── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2.5rem" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B0B0B0" }}>03</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px", color: "#0A0A0A" }}>Full Tech Stack</h2>
        </div>
        <div className="tech-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "#EBEBEB", border: "1px solid #EBEBEB" }}>
          {techStack.map((group) => (
            <div key={group.category} style={{ background: "#fff", padding: "1.25rem 1.5rem" }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#B0B0B0", marginBottom: "0.75rem" }}>{group.category}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {group.items.map((item) => (
                  <span key={item} style={{ fontSize: 13, color: "#0A0A0A", padding: "4px 10px", background: "#F7F7F7", borderRadius: 2 }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ maxWidth: 900, margin: "0 auto", border: "none", borderTop: "1px solid #EBEBEB" }} />

      {/* ── CTA ── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "5rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-1.5px", color: "#0A0A0A", marginBottom: "1rem" }}>
          Let's build something together.
        </h2>
        <p style={{ fontSize: 16, color: "#6B6B6B", marginBottom: "2.5rem", fontWeight: 300, maxWidth: 460, margin: "0 auto 2.5rem" }}>
          Open to freelance projects, full-time roles, and interesting collaborations.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/contact" className="btn-primary">Start a Conversation</Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid #EBEBEB", padding: "2rem" }}>
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
