import React, { useState, useEffect } from 'react';
import { useNavigate }                from 'react-router-dom';
import { FaFileAlt, FaChartLine, FaGraduationCap } from 'react-icons/fa';
import Navbar                         from '../components/Layout/Navbar';
import Footer                         from '../components/Layout/Footer';
import { useAuth }                    from '../contexts/AuthContext';
import { getProfile }                 from '../services/api';
import styles                         from './Dashboard.module.css';

export default function Dashboard() {
  const nav     = useNavigate();
  const { logout, user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [busy, setBusy]       = useState(true);

  useEffect(() => {
    getProfile()
      .then(r => setProfile(r.data))
      .catch(() => setProfile(null))
      .finally(() => setBusy(false));
  }, []);

  if (busy) {
    return (
      <>
        <Navbar />
        <p className={styles.loading}>Loading…</p>
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome back, {user.name}!
          </h1>
          <p className={styles.heroSubtitle}>
            SkillSync analyzes your LinkedIn, GitHub & resume to craft a personalized career roadmap—so you know exactly which roles to target, the skills to build, and the projects to showcase.
          </p>
        </div>
      </section>

      {/* What We Analyze */}
      <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>What We Analyze</h2>
        <p className={styles.featuresSubtitle}>
          By combining your public profiles and resume, we surface:
        </p>

        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <FaFileAlt className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Resume Insights</h3>
            <p className={styles.cardText}>
              We parse your PDF to extract your achievements and spot gaps.
            </p>
          </div>

          <div className={styles.card}>
            <FaChartLine className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Skill Gap Analysis</h3>
            <p className={styles.cardText}>
              Discover missing skills and concrete steps to fill them.
            </p>
          </div>

          <div className={styles.card}>
            <FaGraduationCap className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>Career Roadmap</h3>
            <p className={styles.cardText}>
              Get tailored role suggestions, resources & mini-project ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <main className={styles.dashboard}>
        <div className={styles.innerCard}>
          <h2 className={styles.title}>Ready to dive in?</h2>

          {!profile ? (
            <button
              onClick={() => nav('/dashboard/analysis')}
              className={styles.cta}
            >
              Create Profile
            </button>
          ) : (
            <button
              onClick={() => nav('/dashboard/analysis')}
              className={styles.cta}
            >
              Start Analysis
            </button>
          )}

          <button onClick={logout} className={styles.logout}>
            Log Out
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
