import React from "react";

function Work({ position, company, location }) {
  const isSmall = window.innerWidth < 768;

  // --- 100% TAILWIND-FREE INTUITIVE DESIGN SYSTEM ---
  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      gap: "0.4rem",
      backgroundColor: "transparent", // About panel ke card background ke saath merge hoga
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
    },
    roleTitle: {
      fontSize: isSmall ? "1.15rem" : "1.35rem",
      fontWeight: "700",
      color: "#ffffff", // Crisp high contrast text
      margin: 0,
      letterSpacing: "-0.01em",
    },
    metaRow: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "8px",
      fontSize: isSmall ? "0.9rem" : "0.95rem",
      margin: 0,
    },
    companyBrand: {
      // --- NEON INTEGRATED GRADIENT MATCHING HOME/PROJECTS ---
      background: "linear-gradient(135deg, #6366f1, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "700",
    },
    dividerDot: {
      color: "rgba(255, 255, 255, 0.15)",
      fontWeight: "900",
    },
    locationBadge: {
      color: "#94a3b8", // Sleek slate subtext
      fontWeight: "500",
    }
  };

  return (
    <div style={styles.card}>
      {/* Degree or Designation Title */}
      <h2 style={styles.roleTitle}>{position}</h2>
      
      {/* Meta alignment line */}
      <div style={styles.metaRow}>
        <span style={styles.companyBrand}>{company}</span>
        {location && (
          <>
            <span style={styles.dividerDot}>•</span>
            <span style={styles.locationBadge}>{location}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default Work;