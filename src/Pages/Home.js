import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const contentRef = useRef();
  const frameRef = useRef();
  const badgeRef = useRef();

  // Responsive state logic header ki tarah
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    // GSAP animations
    const tl = gsap.timeline();
    tl.from(contentRef.current.childNodes, { y: 30, opacity: 0, duration: 1.2, stagger: 0.2, ease: "power4.out" })
      .from(frameRef.current, { scale: 0.9, rotate: "3deg", opacity: 0, duration: 1.5, ease: "power3.out" }, "-=0.8")
      .from(badgeRef.current, { y: 15, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5");
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const styles = {
    main: {
      backgroundColor: "#060a13",
      backgroundImage: "radial-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px)",
      backgroundSize: "30px 30px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      // Header ki padding (1.2rem 4rem) ke sath sync kiya
      padding: isMobile ? "6rem 1.5rem 4rem 1.5rem" : "2rem 4rem",
      gap: isMobile ? "40px" : "80px",
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      overflow: "hidden"
    },
    contentArea: {
      flex: "1.2",
      maxWidth: "680px",
      display: "flex",
      flexDirection: "column",
      alignItems: isMobile ? "center" : "flex-start",
      textAlign: isMobile ? "center" : "left",
    },
    // Header ke accent colors ke sath sync status badge
    statusBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      backgroundColor: "rgba(99, 102, 241, 0.1)",
      border: "1px solid rgba(99, 102, 241, 0.3)",
      padding: "6px 14px",
      borderRadius: "100px",
      fontSize: "0.8rem",
      fontWeight: "600",
      color: "#818cf8",
      marginBottom: "1.5rem"
    },
    nameTitle: {
      fontSize: isMobile ? "2.5rem" : "4.5rem",
      fontWeight: "800",
      lineHeight: "1.1",
      margin: "0 0 1.5rem 0",
      // Header logo ka gradient match
      background: "linear-gradient(135deg, #6366f1, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },
    taglineText: {
      fontSize: "1.2rem",
      color: "#94a3b8",
      lineHeight: "1.7",
      margin: "0 0 2.5rem 0",
      maxWidth: "540px"
    },
    // Buttons ab Header ke active states ke sath consistent hain
    primaryBtn: {
      padding: "12px 28px",
      borderRadius: "12px",
      backgroundColor: "#6366f1",
      color: "#ffffff",
      textDecoration: "none",
      fontWeight: "600"
    },
    imageArea: {
      flex: "0.8",
      display: "flex",
      justifyContent: "center"
    },
    techCardFrame: {
      width: isMobile ? "280px" : "340px",
      height: isMobile ? "320px" : "400px",
      borderRadius: "24px",
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      backdropFilter: "blur(12px)",
      padding: "16px"
    },
    img: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }
  };

  return (
    <main style={styles.main}>
      <div style={styles.contentArea} ref={contentRef}>
        <div style={styles.statusBadge} ref={badgeRef}>
          <div style={{width:"6px", height:"6px", background:"#34d399", borderRadius:"50%"}} />
          <span>Available for New Projects</span>
        </div>
        <h1 style={styles.nameTitle}>{name}</h1>
        <p style={styles.taglineText}>{tagline}</p>

      </div>
      <div style={styles.imageArea}>
        <div ref={frameRef} style={styles.techCardFrame}>
          <img src={img} alt={name} style={styles.img} />
        </div>
      </div>
    </main>
  );
}

export default Home;