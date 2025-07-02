import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* site links */}
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>Home</Link>
          {/* <Link to="/features" className={styles.link}>Features</Link>
          <Link to="/testimonials" className={styles.link}>Testimonials</Link>
          <Link to="/contact" className={styles.link}>Contact</Link> */}
        </nav>

        {/* social icons */}
        <div className={styles.social}>
          <a href="https://github.com/janmejay484" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/janmejay-singh484/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/Janmeja36529253?t=lejlQ1HUBasVy6uKJWEzIg&s=09" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} SkillSync. All rights reserved.
      </div>
    </footer>
  );
}
