import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src="/profile.jpeg"
            alt="Your Name"
            className={styles.avatar}
          />
          <h1 className={styles.name}>Janmejay Singh</h1>
          <p className={styles.bio}>
            Hi! I’m a passionate developer/engineer. Let’s connect:
          </p>
          <div className={styles.social}>
            <a
              href="https://github.com/janmejay484"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/janmejay-singh484/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/janmejay484?igsh=MWo0N3g2Yjc5cGxlcQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/Janmeja36529253?t=lejlQ1HUBasVy6uKJWEzIg&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
