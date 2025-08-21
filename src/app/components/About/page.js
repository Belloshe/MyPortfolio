'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../../styles/About.module.css';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div id="About" className={styles.wrapper} ref={ref}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
    <div className={styles.photoBadge}>
  <img src="/images/isabelle-badge.png" alt="Isabelle" className={styles.photo} />
</div>


        <div className={styles.content}>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi, I’m <span className={styles.highlight}>Isabelle</span>
          </motion.h2>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            About Me<br />
            I'm a frontend developer who enjoys building clean and user-friendly websites.
            I’ve worked with HTML, CSS, JavaScript, and TypeScript, and like using modern tools like React, Next.js, and Svelte.
            I'm curious, quick to learn, and always looking for ways to improve both design and code to create great digital experiences.
          </motion.p>

          <motion.div
            className={styles.columns}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div>
              <h3 className={styles.subheading}>Educational History</h3>
              <ul className={styles.list}>
                <li>
                  <strong>Frontend Developer</strong>
                  Changemakers Education
                  <span>2022 – 2024</span>
                </li>
                <li>
                  <strong>Assistant Nurse</strong>
                  Praktiska Gymnasiet, Nykvarn
                  <span>2015 – 2018</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={styles.subheading}>Programs & Tools</h3>
              <ul className={styles.list}>
                <li>
                  <strong>Languages & Frameworks:</strong> HTML, CSS, JavaScript, TypeScript, React, Svelte, Next.js, Tailwind CSS
                </li>
                <li>
                  <strong>Backend & Databases:</strong> Node.js, Express, Supabase, Firebase, Prisma, PostgreSQL
                </li>
                <li>
                  <strong>Development Tools:</strong> VS Code, Git, GitHub, Postman, Vercel
                </li>
                <li>
                  <strong>Design Tools:</strong> Figma, Adobe XD, Photoshop
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className={styles.bottomShape}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 1 }}
      />
    </div>
  );
}
