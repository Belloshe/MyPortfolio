'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Hero from '../Hero/page';
import About from '../About/page';

export default function HeroAbout() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const aboutOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <div ref={containerRef} style={{ height: '200vh', position: 'relative' }}>
      <motion.div style={{ opacity: heroOpacity, position: 'sticky', top: 0 }}>
        <Hero />
      </motion.div>

      <motion.div style={{ opacity: aboutOpacity, position: 'sticky', top: 0 }}>
        <About />
      </motion.div>
    </div>
  );
}
