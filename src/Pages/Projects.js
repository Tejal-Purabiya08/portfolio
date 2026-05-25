import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  // --- COSMIC NEON COHESIVE DESIGN SYSTEM ---
  const styles = {
    main: {
      backgroundColor: "#0a0f1d", // Symmetrical background with Technologies page
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
      // --- MATCHES THE COSMIC TECH STACK GRADIENT ---
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
    // Flex grid system to ensure beautiful wrapping
    gridContainer: {
      maxWidth: "1140px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch", // Ensures cards have identical structural height
      gap: "30px",
      flexWrap: "wrap",      // Smooth wrapping for responsiveness
    },
  };

  return (
    <main style={styles.main}>
      {/* --- FEATURED PROJECTS HEADER --- */}
      <section style={styles.headerSection}>
        <h1 style={styles.title}>Projects</h1>
        <p style={styles.subtitle}>Things I've built from logic to layout</p>
      </section>

      {/* --- RESPONSIVE CARD DISPLAY DECK --- */}
      <section style={styles.gridContainer}>
        {projectDetails.map(
          ({ id, title, image, description, techstack, previewLink, githubLink }) => (
            <Project
              key={id}
              title={title}
              image={image}
              description={description}
              techstack={techstack}
              previewLink={previewLink}
              githubLink={githubLink}
            />
          )
        )}
      </section>
    </main>
  );
}

export default Projects;