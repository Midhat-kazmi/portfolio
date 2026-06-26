import { Link } from "react-router-dom";

const projects = [
  {
    id: "shopora",
    title: "Shopora",
    image: "https://res.cloudinary.com/dgve6ewpr/image/upload/v1752440757/Untitled_c8xmgv.jpg",
    desc: "Multi-vendor eCommerce platform with role-based access for buyers, sellers, and admins. Stripe payments and real-time order notifications via WebSockets, plus interactive seller dashboards for product, order, and revenue management.",
    demo: "https://lnkd.in/dnhi43q5",
    tags: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Stripe", "WebSockets"],
  },
  {
    id: "lms",
    title: "Learning Management System",
    image: "https://res.cloudinary.com/dgve6ewpr/image/upload/v1770577615/WhatsApp_Image_2026-02-08_at_11.52.07_PM_yibqpr.jpg",
    desc: "Modern LMS built with Next.js and TypeScript featuring authentication, dashboards, and course management.",
    demo: "https://client-lms-olive.vercel.app/",
    tags: ["Next.js", "TypeScript", "MongoDB", "AWS", "Docker"],
  },
  {
    id: "aurrus",
    title: "Aurr.us",
    desc: "Quick-commerce grocery platform with dynamic product listings, category filtering, and cart functionality. Global state managed with Redux Toolkit, REST APIs for live product/order data, and Dockerized for consistent deployment.",
    tags: ["React", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "Firebase", "Docker"],
  },
];

const Portfolio = () => {
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
        .nav-link:hover, .nav-link.active { color: #0A0A0A; }
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
        .btn-primary:hover { opacity: 0.8; }
        .btn-outline {
          background: transparent; color: #0A0A0A; padding: 12px 28px;
          border: 1px solid #B0B0B0; border-radius: 2px; font-size: 13px;
          font-weight: 500; letter-spacing: 0.04em; text-decoration: none;
          display: inline-block; cursor: pointer; transition: border-color 0.2s;
        }
        .btn-outline:hover { border-color: #0A0A0A; }

        .project-img {
          width: 100%; height: 230px; object-fit: cover;
          filter: grayscale(100%); display: block;
          border-bottom: 1px solid #EBEBEB; transition: filter 0.4s;
        }
        .project-img-placeholder {
          width: 100%; height: 230px; display: flex; align-items: center; justify-content: center;
          border-bottom: 1px solid #EBEBEB; background: #0A0A0A;
          font-family: 'Space Grotesk', sans-serif; font-size: 60px; font-weight: 700;
          color: rgba(255,255,255,0.92); letter-spacing: -2px;
        }
        .project-card:hover .project-img { filter: grayscale(0%); }
        .project-link {
          font-size: 12px; font-weight: 600; letter-spacing: 0.08em;
          text-transform: uppercase; color: #0A0A0A; text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px; transition: gap 0.2s;
        }
        .project-link:hover { gap: 10px; }

        .footer-link {
          font-size: 12px; color: #B0B0B0; text-decoration: none;
          letter-spacing: 0.08em; text-transform: uppercase; transition: color 0.2s;
        }
        .footer-link:hover { color: #0A0A0A; }

        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
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
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/skills" className="nav-link">Skills</a></li>
          <li><Link to="/portfolio" className="nav-link active">Projects</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav-link nav-cta">Resume ↗</a></li>
        </ul>
      </nav>

      {/* ══ HERO ══ */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "140px 2rem 4rem" }}>
        <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B6B", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-block", width: 28, height: 1, background: "#B0B0B0" }} />
          Portfolio
        </p>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.05, color: "#0A0A0A", marginBottom: "1.25rem", maxWidth: 640 }}>
          Things I've built end-to-end.
        </h1>
        <p style={{ fontSize: 16, color: "#6B6B6B", lineHeight: 1.85, fontWeight: 300, maxWidth: 600 }}>
          Full-stack MERN applications — REST APIs, JWT authentication, payments, and real-time
          features, shipped from database schema through to the UI.
        </p>
      </section>

      {/* ══ PROJECTS GRID ══ */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem 5rem" }}>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "#EBEBEB", border: "1px solid #EBEBEB" }}>
          {projects.map((p) => (
            <div key={p.id} className="project-card" style={{ background: "#fff", display: "flex", flexDirection: "column", overflow: "hidden" }}>
              {p.image ? (
                <img src={p.image} alt={p.title} className="project-img" />
              ) : (
                <div className="project-img-placeholder">{p.title.charAt(0)}</div>
              )}
              <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 19, fontWeight: 700, color: "#0A0A0A", marginBottom: "0.6rem" }}>{p.title}</div>
                <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.7, marginBottom: "1.1rem", flex: 1 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1.4rem" }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 11, fontWeight: 500, padding: "3px 8px", border: "1px solid #EBEBEB", color: "#6B6B6B", letterSpacing: "0.04em" }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="project-link">Live Demo →</a>}
                  <Link to={`/project/${p.id}`} className="project-link" style={{ color: "#6B6B6B" }}>Case Study →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ maxWidth: 900, margin: "0 auto", border: "none", borderTop: "1px solid #EBEBEB" }} />

      {/* ══ CTA ══ */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "5rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-1.5px", color: "#0A0A0A", marginBottom: "1rem" }}>
          Got something to build?
        </h2>
        <p style={{ fontSize: 16, color: "#6B6B6B", marginBottom: "2.5rem", fontWeight: 300, maxWidth: 460, margin: "0 auto 2.5rem" }}>
          Open to freelance projects, full-time roles, and interesting collaborations.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/contact" className="btn-primary">Start a Conversation</Link>
    <a
    href="https://drive.google.com/uc?export=download&id=1G6J_B8_pxfIvpR916TALCsK5VaN3gKUH"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-outline"
  >
    Download CV
  </a>        </div>
      </section>

      {/* ══ FOOTER ══ */}
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
};

export default Portfolio;
