'use client';
import { motion } from 'framer-motion';
import styles from '../../styles/Hero.module.css';

export default function Hero() {
  return (
    <motion.div
      id="hero"
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className={styles.bigTitle}>
        <span className={`${styles.letter} ${styles.p}`}>P</span>
        <span className={`${styles.letter} ${styles.o1}`}>O</span>
        <span className={`${styles.letter} ${styles.r}`}>R</span>
        <span className={`${styles.letter} ${styles.t}`}>T</span>
        <span className={`${styles.letter} ${styles.f}`}>F</span>
        <span className={`${styles.letter} ${styles.o2}`}>O</span>
        <span className={`${styles.letter} ${styles.l}`}>L</span>
        <span className={`${styles.letter} ${styles.i}`}>i</span>
        <span className={`${styles.letter} ${styles.o3}`}>O</span>
      </div>

      <motion.span
        className={styles.year}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        ’25
      </motion.span>

      <motion.div
        className={styles.centerImgWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <img src="/images/isabelle.png" className={styles.centerImg} alt="Isabelle" />
      </motion.div>

      <motion.p
        className={styles.authorName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        ISABELLE IBRAHIMSSON
      </motion.p>

      <motion.div className={styles.heroDecor}>
        <motion.div
          className={`${styles.circle} ${styles.beige}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`${styles.oval} ${styles.brown}`}
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`${styles.circle} ${styles.dark} ${styles.stacked1}`}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`${styles.circle} ${styles.brown} ${styles.stacked2}`}
          animate={{ x: [0, -12, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`${styles.oval} ${styles.beige} ${styles.sideOval1}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`${styles.oval} ${styles.dark} ${styles.sideOval2}`}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}
