// Enter all your details in this file

// Profile Image
import profile from "./assets/profile.jpg";

// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import node from "./assets/techstack/node.png";

// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg"

// Enter your Personal Details here
export const personalDetails = {
  name: "Tejal Purabiya",
  tagline: "I build things for web",
  img: profile,
  about: `My name is Tejal. I have completed my BCA from Monark
University. I have also completed a Full-Stack
Development course. I have strong skills in HTML, CSS,
JavaScript, React JS, and Node JS. My goal is to build a
successful career in the IT field and contribute to a good
organization while continuously improving my technical
skills over the next few years.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/tejal-purabiya/",
  github: "https://github.com/Teju080808",
  instagram: "https://www.instagram.com/tejal_purabiya/",
  twitter: "https://twitter.com/tejal_purabiya",
};

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor Of Computer Application",
    Company: "Monark University",
    Location: "Ahmedabad",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  bootstrap: bootstrap,
  node: node, // Added Node.js
  vscode: vscode,
  github: github,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Moliva Travel",
    image: projectImage1,
    description:
      "A travel website built using HTML, CSS, JavaScript. It shows destination info, packages, contact etc.",
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://jade-dragon-5d9fc2.netlify.app/",
    githubLink: "https://github.com/Teju080808/Moliva-Travel",
  },
  {
    title: "Urban Nector",
    image: projectImage2,
    description:
      "This is a simple and clean food website where users can explore different dishes. The design is easy to use and focuses on good food presentation.",
    techstack: "HTML, CSS, JavaScript, React.js",
    previewLink: "https://urban-nector-161268.netlify.app/",
    githubLink: "https://github.com/Teju080808/UrbanNecter",
  },
  {
    title: "LUXE Waatch",
    image: projectImage3,
    description:
      "A modern luxury watch e-commerce website built using the MERN stack. Users can explore premium watches with a clean and responsive UI designed for a smooth shopping experience.",
    techstack: "MongoDB, Express.js, React.js, Node.js",
    previewLink: "https://luxewatchh.netlify.app/",
    githubLink: "https://github.com/Tejal-Purabiya08/luxewatch",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "tejalpurabiya08@gmail.com",
  phone: "+91 97273 86528",
};