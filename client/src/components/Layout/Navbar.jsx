// client/src/components/Layout/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo on the left */}
      <Link to="/" className={styles.logo}>
        <FaGithub className={styles.logoIcon} />
        <span className={styles.logoText}>SkillSync</span>
      </Link>

      {/* Desktop Navigation Links */}
      <ul className={styles.navList}>
        <li><Link to="/" className={styles.navLink}>Home</Link></li>
        <li><Link to="/features" className={styles.navLink}>Features</Link></li>
        <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
      </ul>

      {/* Desktop CTA */}
      <div className={styles.actions}>
        <Link to="/register" className={styles.ctaButton}>
          Get Started
        </Link>
      </div>

      {/* Hamburger menu icon on the right */}
      <FaBars className={styles.menuIcon} onClick={() => setSidebarOpen(true)} />

      {/* Sidebar for mobile */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <FaTimes
          style={{ position: 'absolute', top: 20, right: 20, cursor: 'pointer', color: '#fff', fontSize: '2rem' }}
          onClick={() => setSidebarOpen(false)}
        />
        <ul className={styles.sidebarNavList}>
          <li><Link to="/" className={styles.sidebarNavLink} onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/features" className={styles.sidebarNavLink} onClick={() => setSidebarOpen(false)}>Features</Link></li>
          <li><Link to="/contact" className={styles.sidebarNavLink} onClick={() => setSidebarOpen(false)}>Contact</Link></li>
        </ul>
        <div className={styles.sidebarActions}>
          <Link to="/register" className={styles.ctaButton} onClick={() => setSidebarOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
      {/* Overlay */}
      {sidebarOpen && <div className={`${styles.sidebarOverlay} ${styles.sidebarOverlayOpen}`} onClick={() => setSidebarOpen(false)} />}
    </nav>
  );
};

export default Navbar;

