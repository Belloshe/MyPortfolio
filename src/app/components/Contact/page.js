'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Contact.module.css';

export default function ContactForm() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLeftVisible(true);
      },
      { threshold: 0.3 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    return () => leftRef.current && observer.unobserve(leftRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRightVisible(true);
      },
      { threshold: 0.3 }
    );
    if (rightRef.current) observer.observe(rightRef.current);
    return () => rightRef.current && observer.unobserve(rightRef.current);
  }, []);

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div
          ref={leftRef}
          className={`${styles.left} ${leftVisible ? styles.zoomIn : ''}`}
        >
          <h2 className={styles.heading}>
            Let's <em>Connect</em>
          </h2>
          <p className={styles.subtext}>
           Got a project in mind – or a job opportunity? Let’s bring your ideas to life together.
          </p>
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" placeholder="john@example.com" />
            </div>
<div className={styles.inputGroup}>
  <label>Subject</label>
  <select>
    <option value="">Choose an option</option>
    <option value="project">Project Inquiry</option>
    <option value="job">Job Opportunity</option>
    <option value="collaboration">Collaboration Request</option>
    <option value="feedback">Feedback</option>
    <option value="other">Other</option>
  </select>
</div>
            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea rows="5" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className={styles.button}>Send Message</button>
          </form>
        </div>

        <div className={styles.dividerLine}></div>

        <div
          ref={rightRef}
          className={`${styles.right} ${rightVisible ? styles.zoomInDelayed : ''}`}
        >
          <h3>Get in Touch</h3>
          <p>I’m always open to new job opportunities and projects.</p>

          <div className={styles.infoBox}>
            <strong>Email</strong>
            <p>bella.ibrahimsson@hotmail.com</p>
            <span>Response within 24 hours</span>
          </div>

          <div className={styles.infoBox}>
            <strong>Phone</strong>
            <p>+46 73 659 58 59</p>
            <span>Mon–Fri</span>
          </div>

          <div className={styles.infoBox}>
            <strong>Location</strong>
            <p>Stockholm, Sweden</p>
            <span>Available for remote work</span>
          </div>

          <div className={styles.availability}>
            <span className={styles.statusDot}></span>
            Available for new projects
          </div>
        </div>
      </div>
    </section>
  );
}
