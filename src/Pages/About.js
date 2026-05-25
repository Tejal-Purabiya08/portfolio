import React from "react";
import { personalDetails, eduDetails } from "../Details";

function About() {
  const isSmall = window.innerWidth < 768;

  // --- PERFECTLY SYNCED COSMIC DESIGN SYSTEM ---
  const styles = {
    main: {
      backgroundColor: "#060a13", // Home aur Contact wala exact base
      backgroundImage: "radial-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px)", // Continuous dot grid
      backgroundSize: "30px 30px",
      color: "#f8fafc",
      minHeight: "100vh",
      padding: isSmall ? "7rem 1.25rem 4rem 1.25rem" : "9rem 4rem 6rem 4rem", 
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      boxSizing: "border-box"
    },
    section: {
      maxWidth: "750px",
      margin: "0 auto 4.5rem auto",
    },
    title: {
      fontSize: isSmall ? "1.85rem" : "2.6rem",
      fontWeight: "800",
      letterSpacing: "-0.03em",
      marginBottom: "2rem",
      textAlign: "center",
      background: "linear-gradient(135deg, #ffffff 30%, #a5b4fc 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "block",
    },
    aboutParagraph: {
      fontSize: isSmall ? "0.95rem" : "1.05rem",
      color: "#94a3b8", 
      lineHeight: "1.8", 
      textAlign: "justify",
      backgroundColor: "rgba(13, 20, 38, 0.4)", // Dynamic glass-panel match
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "20px",
      padding: isSmall ? "1.5rem" : "2.5rem",
      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
    },
    timelineContainer: {
      backgroundColor: "rgba(13, 20, 38, 0.4)", 
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "24px",
      padding: isSmall ? "1.5rem 1.25rem" : "2.5rem",
      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
      display: "flex",
      flexDirection: "column",
      gap: "0" // Clean timeline rows handling
    },
    itemRow: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      paddingLeft: "1.5rem",
      transition: "all 0.3s ease",
    },
    // --- TIMELINE GLOW NODE EFFECTS ---
    bullet: {
      position: "absolute",
      left: "0",
      top: "8px",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#6366f1",
      boxShadow: "0 0 10px #6366f1",
    },
    positionText: {
      fontSize: isSmall ? "1.1rem" : "1.25rem",
      fontWeight: "700",
      color: "#ffffff",
      margin: "0 0 0.3rem 0",
      letterSpacing: "-0.01em"
    },
    metaContainer: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "8px",
      fontSize: "0.9rem",
      color: "#6366f1", // Neon Accent tracking
      fontWeight: "600",
      marginBottom: "0.5rem"
    },
    companyText: {
      background: "linear-gradient(135deg, #6366f1, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "700"
    },
    dotDivider: {
      color: "#334155"
    },
    locationText: {
      color: "#64748b",
      fontWeight: "500"
    }
  };

  return (
    <main style={styles.main}>
      {/* --- ABOUT ME CARD --- */}
      <section style={styles.section}>
        <h1 style={styles.title}>About Me</h1>
        <p 
          style={styles.aboutParagraph}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.3)";
            e.currentTarget.style.boxShadow = "0 30px 60px rgba(99, 102, 241, 0.08)";
            e.currentTarget.style.transform = "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.4)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {personalDetails.about}
        </p>
      </section>

      {/* --- EDUCATION TIMELINE CARD (DIRECT INLINE) --- */}
      <section style={{ ...styles.section, marginBottom: "0" }}>
        <h1 style={styles.title}>Education</h1>
        <div style={styles.timelineContainer}>
          {eduDetails.map(({ Position, Company, Location }, index) => (
            <div 
              key={index}
              style={{
                ...styles.itemRow,
                borderLeft: index !== eduDetails.length - 1 ? "1px solid rgba(99, 102, 241, 0.15)" : "1px solid transparent",
                paddingBottom: index !== eduDetails.length - 1 ? "2rem" : "0",
                marginTop: index !== 0 ? "1.5rem" : "0"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(6px)";
                const bullet = e.currentTarget.querySelector('.timeline-bullet');
                if (bullet) bullet.style.transform = "scale(1.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                const bullet = e.currentTarget.querySelector('.timeline-bullet');
                if (bullet) bullet.style.transform = "scale(1)";
              }}
            >
              {/* Custom Timeline Indicator Node */}
              <div className="timeline-bullet" style={styles.bullet} />

              {/* Degree / Course Title */}
              <h3 style={styles.positionText}>{Position}</h3>

              {/* Institution and Place metadata line */}
              <div style={styles.metaContainer}>
                <span style={styles.companyText}>{Company}</span>
                {Location && (
                  <>
                    <span style={styles.dotDivider}>•</span>
                    <span style={styles.locationText}>{Location}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;