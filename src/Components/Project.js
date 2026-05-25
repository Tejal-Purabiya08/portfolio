import React from "react";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  // --- ADVANCED NEON-GLASS DESIGN SYSTEM ---
  const styles = {
    card: {
      backgroundColor: "rgba(13, 20, 38, 0.4)", // Deeper space-dark translucency
      backdropFilter: "blur(12px)",             // Pure glassmorphic blur
      WebkitBackdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      borderRadius: "20px",                     // Slightly smoother premium corners
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      // --- STRICT UNIFORM BOUNDS ---
      width: window.innerWidth < 480 ? "100%" : "350px",
      height: "490px", 
      boxSizing: "border-box",
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    imgContainer: {
      overflow: "hidden", 
      width: "100%", 
      height: "190px", 
      flexShrink: 0,
      position: "relative",
    },
    imgOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(to bottom, transparent 60%, rgba(10, 15, 29, 0.6))",
      zIndex: 1,
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    contentArea: {
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      zIndex: 2,
    },
    titleText: {
      fontSize: "1.3rem",
      fontWeight: "800",
      color: "#ffffff",
      margin: "0 0 0.6rem 0",
      letterSpacing: "-0.02em",
      whiteSpace: "nowrap",    
      overflow: "hidden",
      textOverflow: "ellipsis"  
    },
    descText: {
      fontSize: "0.9rem",
      color: "#94a3b8", 
      lineHeight: "1.6",
      margin: "0 0 1.25rem 0",
      flexGrow: 1,
      // --- LINE CLAMP FIX: Text automatic 3 lines par cut hoga bina layout bigade ---
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    techRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      margin: "0 0 1.25rem 0",
      flexShrink: 0,
    },
    techLabel: {
      fontSize: "0.75rem",
      color: "#64748b",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    techBadge: {
      fontSize: "0.8rem",
      fontWeight: "600",
      color: "#a5b4fc", // Soft luminous indigo text
      backgroundColor: "rgba(99, 102, 241, 0.08)", // pill frame look
      padding: "4px 10px",
      borderRadius: "8px",
      border: "1px solid rgba(99, 102, 241, 0.15)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "200px"
    },
    btnFlex: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "auto", 
      paddingTop: "1rem",
      borderTop: "1px solid rgba(255, 255, 255, 0.04)",
      flexShrink: 0,
      gap: "12px",
    },
    actionLink: {
      flex: 1,
      textAlign: "center",
      fontSize: "0.85rem",
      fontWeight: "600",
      textDecoration: "none",
      padding: "10px 0",
      borderRadius: "10px",
      transition: "all 0.3s ease",
    }
  };

  return (
    <article 
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(16, 24, 48, 0.6)";
        e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.35)"; // Interactive Indigo frame glowing
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(99, 102, 241, 0.15), 0 0 1px rgba(99, 102, 241, 0.4)";
        e.currentTarget.querySelector(".project-img").style.transform = "scale(1.06) rotate(0.5deg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(13, 20, 38, 0.4)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.querySelector(".project-img").style.transform = "scale(1) rotate(0deg)";
      }}
    >
      {/* Cinematic Image Container */}
      <div style={styles.imgContainer}>
        <div style={styles.imgOverlay} />
        <img 
          src={image} 
          alt={title} 
          className="project-img" 
          style={styles.img} 
        />
      </div>

      {/* Details Box */}
      <div style={styles.contentArea}>
        <h2 style={styles.titleText} title={title}>{title}</h2>
        <p style={styles.descText}>{description}</p>
        
        {/* Tech Stack Pill Badge Line */}
        <div style={styles.techRow}>
          <span style={styles.techLabel}>Stack:</span>
          <span style={styles.techBadge} title={techstack}>{techstack}</span>
        </div>

        {/* Action Buttons Frame */}
        <div style={styles.btnFlex}>
          <a 
            href={previewLink} 
            target="_blank" 
            rel="noreferrer noopener" 
            style={{ 
              ...styles.actionLink, 
              color: "#ffffff", 
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.05)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(99, 102, 241, 0.15)";
              e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.3)";
              e.currentTarget.style.color = "#818cf8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            Live Preview ↗
          </a>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noreferrer noopener" 
            style={{ 
              ...styles.actionLink, 
              color: "#94a3b8", 
              backgroundColor: "transparent",
              border: "1px solid transparent"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(236, 72, 153, 0.08)";
              e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.2)";
              e.currentTarget.style.color = "#f472b6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.color = "#94a3b8";
            }}
          >
            View Code 🛠
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;