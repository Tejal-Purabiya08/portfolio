import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      width: "100%",
      padding: "1.5rem 1rem",
      backgroundColor: "#060a13",
      borderTop: "1px solid rgba(255, 255, 255, 0.04)",
      boxSizing: "border-box",
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
    },
    text: {
      fontSize: "0.85rem",
      color: "#64748b",
      fontWeight: "500",
      margin: 0,
      letterSpacing: "0.01em",
    },
    linkGradient: {
      background: "linear-gradient(135deg, #6366f1, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "700",
      textDecoration: "none",
      display: "inline-block",
      transition: "opacity 0.3s ease",
    },
    rights: {
      fontSize: "0.75rem",
      color: "#475569",
      fontWeight: "400",
      margin: 0,
    }
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        Designed and Coded by{" "}
        <a
          style={styles.linkGradient}
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
          Tejal Purabiya
        </a>
      </p>
      <p style={styles.rights}>
        &copy; {currentYear} &bull; All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;