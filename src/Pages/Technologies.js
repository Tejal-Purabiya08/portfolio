import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const { html, css, js, react, bootstrap, node, vscode, github } = techStackDetails;

  // --- INSIDE UI LAYOUT DESIGN ---
  const styles = {
    main: {
      backgroundColor: "#0a0f1d", // Consistent Cosmic Dark Theme
      color: "#f8fafc",
      minHeight: "100vh",
      padding: window.innerWidth < 768 ? "4rem 1.5rem" : "6rem 4rem",
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
    },
    headerSection: {
      maxWidth: "768px",
      margin: "0 auto 3.5rem auto",
      textAlign: "center",
    },
    title: {
      fontSize: window.innerWidth < 768 ? "2.2rem" : "3rem",
      fontWeight: "800",
      letterSpacing: "-0.03em",
      marginBottom: "0.75rem",
      background: "linear-gradient(135deg, #6366f1, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
    },
    subtitle: {
      fontSize: window.innerWidth < 768 ? "1rem" : "1.15rem",
      color: "#94a3b8",
      fontWeight: "400",
      margin: 0,
    },
    // Flex/Grid Container alternative that wraps perfectly on all screens
    gridContainer: {
      maxWidth: "1000px",
      margin: "0 auto 5rem auto",
      display: "grid",
      // Mobile pe 2, tablet pe 3, desktop pe 4 columns seamlessly manage honge
      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
      gap: window.innerWidth < 768 ? "1.25rem" : "2rem",
      padding: 0,
    },
    // Modern Box Grid Card
    techCard: {
      backgroundColor: "rgba(255, 255, 255, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      borderRadius: "16px",
      padding: "2rem 1.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      cursor: "pointer",
    },
    img: {
      width: window.innerWidth < 768 ? "55px" : "65px",
      height: window.innerWidth < 768 ? "55px" : "65px",
      objectFit: "contain",
      transition: "transform 0.3s ease",
    },
  };

  // Static list for dynamic naming if needed, otherwise clean fallback
  const techList = [
    { src: html, name: "HTML5" },
    { src: css, name: "CSS3" },
    { src: js, name: "JavaScript" },
    { src: react, name: "React" },
    { src: bootstrap, name: "Bootstrap" },
    { src: node, name: "Node.js" }
  ];

  const toolsList = [
    { src: vscode, name: "VS Code" },
    { src: github, name: "GitHub" }
  ];

  return (
    <main style={styles.main}>
      {/* --- TECH STACK SECTION --- */}
      <section style={styles.headerSection}>
        <h1 style={styles.title}>My Tech Stack</h1>
        <p style={styles.subtitle}>Technologies I've been working with recently</p>
      </section>

      <section style={styles.gridContainer}>
        {techList.map((tech, idx) => (
          <div
            key={idx}
            style={styles.techCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(99, 102, 241, 0.06)";
              e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.3)";
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(99, 102, 241, 0.15)";
              e.currentTarget.querySelector("img").style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.querySelector("img").style.transform = "scale(1)";
            }}
          >
            <img src={tech.src} alt={tech.name} style={styles.img} />
            <span style={{ fontSize: "0.85rem", marginTop: "1rem", color: "#94a3b8", fontWeight: "500" }}>
              {tech.name}
            </span>
          </div>
        ))}
      </section>

      {/* --- TOOLS SECTION --- */}
      <section style={{ ...styles.headerSection, marginBottom: "3rem" }}>
        <h1 style={styles.title}>Tools</h1>
        <p style={styles.subtitle}>Software and platforms I use daily</p>
      </section>

      <section style={{ ...styles.gridContainer, maxWidth: "500px" }}>
        {toolsList.map((tool, idx) => (
          <div
            key={idx}
            style={styles.techCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(236, 72, 153, 0.06)";
              e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.3)";
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(236, 72, 153, 0.15)";
              e.currentTarget.querySelector("img").style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.querySelector("img").style.transform = "scale(1)";
            }}
          >
            <img src={tool.src} alt={tool.name} style={styles.img} />
            <span style={{ fontSize: "0.85rem", marginTop: "1rem", color: "#94a3b8", fontWeight: "500" }}>
              {tool.name}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Technologies;