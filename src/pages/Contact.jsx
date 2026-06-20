import { Link } from "react-router-dom";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "ksyedamidhat@gmail.com",
    href: "mailto:ksyedamidhat@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "Phone",
    value: "+92 321 172 2775",
    href: "tel:+923211722775",
    icon: <FaPhoneAlt />,
  },
  {
    label: "WhatsApp",
    value: "+92 321 172 2775",
    href: "https://wa.me/923211722775",
    icon: <FaWhatsapp />,
  },
  {
    label: "LinkedIn",
    value: "syeda-midhat-kazmi",
    href: "https://www.linkedin.com/in/syeda-midhat-kazmi-a5111a339/",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    value: "Midhat-kazmi",
    href: "https://github.com/Midhat-kazmi/",
    icon: <FaGithub />,
  },
];

const quickFacts = [
  { label: "Location", value: "Lahore, Pakistan" },
  { label: "Availability", value: "Freelance & Full-time" },
  { label: "Preferred Contact", value: "Email or WhatsApp" },
];

const Contact = () => {
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

        .contact-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px; text-decoration: none; color: #0A0A0A;
          border-bottom: 1px solid #EBEBEB; font-size: 13px; font-weight: 500;
          transition: background 0.15s;
        }
        .contact-row:last-child { border-bottom: none; }
        .contact-row:hover { background: #F7F7F7; }
        .contact-row-left { display: flex; align-items: center; gap: 12px; }
        .contact-row-icon {
          width: 30px; height: 30px; border: 1px solid #EBEBEB; border-radius: 2px;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; color: #6B6B6B; flex-shrink: 0;
        }
        .contact-row-label { font-size: 11px; color: #B0B0B0; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 2px; }
        .contact-row-value { font-size: 13px; color: #0A0A0A; font-weight: 500; }

        .status-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #2E9E5B; flex-shrink: 0;
          box-shadow: 0 0 0 3px rgba(46,158,91,0.15);
        }

        .footer-link {
          font-size: 12px; color: #B0B0B0; text-decoration: none;
          letter-spacing: 0.08em; text-transform: uppercase; transition: color 0.2s;
        }
        .footer-link:hover { color: #0A0A0A; }

        @media (max-width: 768px) {
          .contact-wrap   { grid-template-columns: 1fr !important; }
          .facts-grid     { grid-template-columns: 1fr !important; }
          .nav-desktop    { display: none !important; }
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

      {/* ══ PAGE HERO / CONTACT ══ */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "140px 2rem 5rem" }}>
        <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6B6B", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-block", width: 28, height: 1, background: "#B0B0B0" }} />
          Get In Touch
        </p>

        <div className="contact-wrap" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3rem", alignItems: "start" }}>
          <div>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1, color: "#0A0A0A", marginBottom: "1.5rem" }}>
              Have a project<br />in mind?
            </h1>
            <p style={{ fontSize: 16, color: "#6B6B6B", lineHeight: 1.85, fontWeight: 300, marginBottom: "1.5rem" }}>
              I'm a Full Stack Engineer building production-grade MERN stack applications — from RESTful APIs and JWT authentication to React/Redux frontends. I'm open to freelance work, full-time roles, and interesting collaborations.
            </p>
            <p style={{ fontSize: 16, color: "#6B6B6B", lineHeight: 1.85, fontWeight: 300, marginBottom: "2rem" }}>
              Whether it's a greenfield product or an existing codebase that needs help — let's talk.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "2rem" }}>
              <span className="status-dot" />
              <span style={{ fontSize: 13, color: "#3A3A3A", fontWeight: 500 }}>Currently available for new projects</span>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="mailto:ksyedamidhat@gmail.com" className="btn-primary">Send an Email</a>
              <a href="https://wa.me/923211722775" target="_blank" rel="noreferrer" className="btn-outline">WhatsApp Me</a>
            </div>
          </div>

          <div>
            <div style={{ border: "1px solid #EBEBEB", marginBottom: "1.5rem" }}>
              {contactLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto") || c.href.startsWith("tel") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="contact-row"
                >
                  <span className="contact-row-left">
                    <span className="contact-row-icon">{c.icon}</span>
                    <span>
                      <div className="contact-row-label">{c.label}</div>
                      <div className="contact-row-value">{c.value}</div>
                    </span>
                  </span>
                  <span style={{ color: "#B0B0B0", fontSize: 16 }}>↗</span>
                </a>
              ))}
            </div>

            <div className="facts-grid" style={{ border: "1px solid #EBEBEB" }}>
              {quickFacts.map((f, i, arr) => (
                <div key={f.label} style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", borderBottom: i < arr.length - 1 ? "1px solid #EBEBEB" : "none", fontSize: 13 }}>
                  <span style={{ color: "#B0B0B0", fontWeight: 500, letterSpacing: "0.02em" }}>{f.label}</span>
                  <span style={{ color: "#0A0A0A", fontWeight: 500, textAlign: "right" }}>{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
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

export default Contact;
