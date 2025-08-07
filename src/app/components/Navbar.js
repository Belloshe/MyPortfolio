'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';

const sections = ['hero', 'About', 'projects', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.navContainer}>
      <div className={styles.line}>
        <ul className={styles.nav}>
          {sections.map((id, i) => (
            <li key={id} className={active === id ? styles.active : ''}>
              <a href={`#${id}`} className={styles.bullet}>
                <span className={styles.number}>0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
