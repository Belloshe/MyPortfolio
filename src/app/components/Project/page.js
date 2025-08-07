'use client';

import { useEffect, useRef } from 'react';
import styles from '../../styles/project.module.css';

const projects = [
  {
    title: 'Interactive Data Visualization in Next.js',
    description:
      'A modern, interactive dashboard built with Next.js. It visualizes business data such as trends, risks, and new hires in a fully responsive interface. The project focuses on component-based development, clear structure, and user-friendly design.',
    image: '/images/dashboard.png',
    siteUrl: 'https://jolin-dashboard.vercel.app/',
    codeUrl: 'https://github.com/Belloshe/jolinDashboard',
  },
  {
    title: 'AI powered chatbot',
    description:
      'GlowSkin is a modern skincare website built with React and CSS Modules. It features a clean design, an AI-powered chatbot for personalized product advice, and a smooth user experience tailored to a beauty-focused brand.',
    image: ['/images/glow.png'],
    siteUrl: 'https://glow-skin-bice.vercel.app/',
    codeUrl: 'https://github.com/Belloshe/GlowSkin',
  },
  {
    title: 'Figma to Frontend UI/UX Project',
    description:
      'Modern Blog is a clean and minimal blog homepage built with React and CSS Modules, based on a Figma design I created myself. It focuses on bold typography, a camera-style layout, and a sidebar with visual storytelling elements.',
    image: '/images/blog.png',
    siteUrl: 'https://modern-blog-six.vercel.app/',
    codeUrl: 'https://github.com/Belloshe/ModernBlog',
  },
];

export default function ProjectSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const projects = sectionRef.current.querySelectorAll(`.${styles.project}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              entry.target.classList.contains(styles.left)
                ? styles['visible-left']
                : styles['visible-right']
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    projects.forEach((project) => observer.observe(project));
    return () => projects.forEach((project) => observer.unobserve(project));
  }, []);

  return (
    <section id="projects" className={styles.section} ref={sectionRef}>
      <h2 className={styles.title}>My Works</h2>
      <div className={styles.timeline}>
        {projects.map((project, i) => (
          <div
            key={i}
            className={`${styles.project} ${
              i % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.projectImage}>
              {Array.isArray(project.image) ? (
                project.image.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`${project.title} ${index + 1}`}
                  />
                ))
              ) : (
                <img src={project.image} alt={project.title} />
              )}
            </div>
            <div className={styles.projectContent}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles.buttons}>
                <a
                  className={styles.button}
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
                <a
                  className={styles.buttonOutline}
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
