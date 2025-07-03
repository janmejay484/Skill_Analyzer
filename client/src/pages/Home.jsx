// client/src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import { FaUserFriends, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import styles from './home.module.css';
import Footer from '../components/Layout/Footer';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Sync Your Skills, Shape Your Future
          </h1>
          <p className={styles.heroSubtitle}>
     SkillSync analyzes your LinkedIn, GitHub & resume to craft a personalized career roadmap—so you know exactly which roles to target, the skills to build, and the projects to showcase.
          </p>
          <button
            className={styles.cta}
            onClick={() => navigate('/register')}
          >
            Get Started
          </button>
        </div>
      </div>

      <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Empowering Your Growth</h2>
        <p className={styles.featuresSubtitle}>
          SkillSync offers a suite of tools designed to help you achieve your
          professional goals. From personalized learning paths to expert
          mentorship, we’ve got you covered.
        </p>

        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <FaUserFriends className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Connect with Experts</h3>
            <p className={styles.cardText}>
              Find and connect with industry leaders and mentors who can guide you
              on your journey.
            </p>
          </div>

          <div className={styles.card}>
            <FaChartLine className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Track Your Progress</h3>
            <p className={styles.cardText}>
              Monitor your skill development and see your progress in real-time
              with our intuitive dashboard.
            </p>
          </div>

          <div className={styles.card}>
            <FaShieldAlt className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Secure and Reliable</h3>
            <p className={styles.cardText}>
              Your data is safe with us. We use the latest security measures to
              protect your information.
            </p>
          </div>
        </div>
      </section>
            <Footer/>
         
    </>
  );
}
