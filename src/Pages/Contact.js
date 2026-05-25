import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  const isSmall = window.innerWidth < 768;

  // --- 100% ZERO-EXTERNAL-CSS INTEGRATED DESIGN ---
  const styles = {
    main: {
      backgroundColor: "#060a13", // Baki pages ke sath exact seamless blend background
      backgroundImage: "radial-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px)", // Home page wala matrix design pattern
      backgroundSize: "30px 30px",
      minHeight: "100vh", // Symmetrical layout height 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: isSmall ? "6rem 1.5rem" : "4rem 2rem",
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      boxSizing: "border-box",
    },
    card: {
      backgroundColor: "rgba(13, 20, 38, 0.4)", // Pure dashboard tech-frame bg
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "24px",
      padding: isSmall ? "3rem 1.5rem" : "4.5rem 3rem",
      maxWidth: "600px",
      width: "100%",
      textAlign: "center",
      boxShadow: "0 40px 80px rgba(0, 0, 0, 0.6)",
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    heading: {
      fontSize: isSmall ? "1.8rem" : "2.6rem",
      fontWeight: "800",
      letterSpacing: "-0.02em",
      lineHeight: "1.25",
      margin: "0 0 2rem 0",
      // --- INSIDE GRADIENT LOGIC (NO CSS REQUIRED) ---
      background: "linear-gradient(135deg, #ffffff 30%, #a5b4fc 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block"
    },
    emailLink: {
      display: "inline-block",
      fontSize: isSmall ? "1.3rem" : "1.85rem",
      fontWeight: "800",
      textDecoration: "none",
      letterSpacing: "-0.02em",
      padding: "10px 20px",
      borderRadius: "12px",
      transition: "all 0.3s ease",
      // --- MATCHES HOME & PROJECTS PREMIUM NEON GRADIENT ---
      background: "linear-gradient(135deg, #6366f1, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    separatorRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
      margin: "2rem 0",
      color: "#475569",
      fontSize: "0.85rem",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "0.15em",
    },
    line: {
      height: "1px",
      width: "50px",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
    phoneLink: {
      display: "inline-block",
      fontSize: isSmall ? "1.2rem" : "1.5rem",
      fontWeight: "600",
      textDecoration: "none",
      letterSpacing: "0.01em",
      color: "#94a3b8",
      transition: "all 0.3s ease",
    }
  };

  return (
    <main style={styles.main}>
      <div 
        style={styles.card}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.35)";
          e.currentTarget.style.boxShadow = "0 40px 80px rgba(99, 102, 241, 0.12)";
          e.currentTarget.style.transform = "translateY(-6px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
          e.currentTarget.style.boxShadow = "0 40px 80px rgba(0, 0, 0, 0.6)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Inside Styled Dynamic Heading */}
        <h1 style={styles.heading}>
          Let's build something awesome together!
        </h1>

        {/* Pure Inline Neon Email Glow Link */}
        <div>
          <a 
            href={`mailto:${email}`} 
            style={styles.emailLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.filter = "drop-shadow(0px 0px 12px rgba(99, 102, 241, 0.5))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "none";
            }}
          >
            {email}
          </a>
        </div>

        {/* Structural Separator */}
        <div style={styles.separatorRow}>
          <div style={styles.line} />
          <span>OR</span>
          <div style={styles.line} />
        </div>

        {/* Phone Action Link */}
        <div>
          <a 
            href={`tel:${phone}`} 
            style={styles.phoneLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {phone}
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;