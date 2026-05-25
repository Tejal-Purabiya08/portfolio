import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { socialMediaUrl } from "../Details";
import TwitterIcon from "../assets/twitter.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;
  
  const toggleMenu = () => setIsOpen(!isOpen);

  // Responsive Breakpoints Checklist
  const isMobile = window.innerWidth < 768;

  const styles = {
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      boxSizing: "border-box",
      padding: isMobile ? "1rem 1.5rem" : "1.2rem 4rem",
      backgroundColor: "rgba(6, 10, 19, 0.75)", // Ultra dark transparent background
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "between",
      alignItems: isMobile ? "stretch" : "center",
      zIndex: 1000,
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
    },
    topBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: isMobile ? "100%" : "auto"
    },
    logo: {
      fontSize: "1.25rem",
      fontWeight: "800",
      letterSpacing: "-0.02em",
      background: "linear-gradient(135deg, #6366f1, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textDecoration: "none"
    },
    hamburger: {
      display: isMobile ? "flex" : "none",
      flexDirection: "column",
      gap: "5px",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "5px"
    },
    burgerLine: {
      width: "24px",
      height: "2px",
      backgroundColor: "#94a3b8",
      transition: "all 0.3s ease",
    },
    nav: {
      display: isMobile ? (isOpen ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "flex-start" : "center",
      justifyContent: "space-between",
      flexGrow: 1,
      marginLeft: isMobile ? "0" : "3rem",
      marginTop: isMobile ? "1.5rem" : "0",
      gap: isMobile ? "1.5rem" : "0"
    },
    menuList: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      listStyle: "none",
      padding: 0,
      margin: 0,
      gap: isMobile ? "1.2rem" : "2rem"
    },
    socialList: {
      display: "flex",
      listStyle: "none",
      padding: 0,
      margin: isMobile ? "1rem 0 0 0" : "0",
      gap: "1.2rem",
      alignItems: "center"
    },
    socialIcon: {
      width: "20px",
      height: "20px",
      opacity: 0.7,
      transition: "all 0.3s ease",
    }
  };

  // NavLink Active & Hover State Logic helper
  const navLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: "600",
    color: isActive ? "#ffffff" : "#94a3b8",
    borderBottom: isActive ? "2px solid #6366f1" : "2px solid transparent",
    paddingBottom: "4px",
    transition: "all 0.3s ease"
  });

  return (
    <header style={styles.header}>
      {/* Brand logo aur Responsive Menu Toggle button */}
      <div style={styles.topBar}>
        <NavLink to="/" style={styles.logo}>
          Portfolio.
        </NavLink>
        <button style={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
          <div style={{ ...styles.burgerLine, transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <div style={{ ...styles.burgerLine, opacity: isOpen ? 0 : 1 }} />
          <div style={{ ...styles.burgerLine, transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Navigation menu systems */}
      <nav style={styles.nav}>
        <ul style={styles.menuList}>
          <li>
            <NavLink to="/" style={navLinkStyle} onClick={() => isMobile && toggleMenu()}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={navLinkStyle} onClick={() => isMobile && toggleMenu()}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/technologies" style={navLinkStyle} onClick={() => isMobile && toggleMenu()}>
              Technologies
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" style={navLinkStyle} onClick={() => isMobile && toggleMenu()}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={navLinkStyle} onClick={() => isMobile && toggleMenu()}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Social Icons Stack */}
        <ul style={styles.socialList}>
          <li>
            <a href={twitter} target="_blank" rel="noreferrer noopener">
              <img 
                src={TwitterIcon} 
                alt="Twitter" 
                style={styles.socialIcon} 
                onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = "scale(1.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.transform = "scale(1)"; }}
              />
            </a>
          </li>
          <li>
            <a href={linkdein} target="_blank" rel="noreferrer noopener">
              <img 
                src={LinkedinIcon} 
                alt="LinkedIn" 
                style={styles.socialIcon} 
                onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = "scale(1.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.transform = "scale(1)"; }}
              />
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <img 
                src={GithubIcon} 
                alt="Github" 
                style={styles.socialIcon} 
                onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = "scale(1.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.transform = "scale(1)"; }}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;