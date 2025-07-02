import React, { useState, useEffect } from 'react';
import { useNavigate }                from 'react-router-dom';
import { FaLinkedin, FaGithub, FaBullseye, FaLightbulb, FaCertificate } from 'react-icons/fa';
import Navbar                         from '../components/Layout/Navbar';
import Footer                         from '../components/Layout/Footer';
import API                            from '../services/api';
import { runAnalysis }                from '../services/api';
import styles                         from './Profile.module.css';

export default function ProfileFormPage() {
  const nav = useNavigate();
  const [form,    setForm]    = useState({
    linkedIn:'', github:'', experienceYears:'', careerField:''
  });
  const [resume,  setResume]  = useState(null);
  const [loading, setLoading] = useState(false);

  // Prefill if profile exists
  useEffect(() => {
    API.get('/profile/me')
       .then(r => {
         const p = r.data;
         setForm({
           linkedIn:        p.linkedIn    || '',
           github:          p.github      || '',
           experienceYears: p.experienceYears?.toString() || '',
           careerField:     p.careerField || ''
         });
       })
       .catch(() => {});
  }, []);

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const saveProfile = async (fd) => {
    await API.post('/profile', fd, {
      headers:{ 'Content-Type':'multipart/form-data' }
    });
  };

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      // Build form data
      const fd = new FormData();
      Object.entries(form).forEach(([k,v]) => fd.append(k, v));
      if (resume) fd.append('resume', resume);

      // Save + analyze
      await saveProfile(fd);
      const { data } = await runAnalysis(fd);

      // goto results
      nav('/dashboard/result', { state: { advice: data.advice } });
    } catch (err) {
      console.error(err);
      alert('Analysis failed. Check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* HERO BANNER */}
      <div className={styles.container }>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Unlock Your Next Career Move</h1>
          <p>
            Upload your LinkedIn, GitHub & résumé and let our AI coach
            pinpoint your top roles, skill gaps, and project road-map.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <FaBullseye className={styles.featureIcon} />
          <h3>Role Discovery</h3>
          <p>Top 3 positions perfectly matched to you.</p>
        </div>
        <div className={styles.featureCard}>
          <FaLightbulb className={styles.featureIcon} />
          <h3>Skill Insights</h3>
          <p>Pinpoint gaps & personalized study plans.</p>
        </div>
        <div className={styles.featureCard}>
          <FaCertificate className={styles.featureIcon} />
          <h3>Resource Paths</h3>
          <p>Certifications & mini-projects to boost you.</p>
        </div>
      </section>

      {/* FORM */}
      {loading && (
        <div className={styles.overlay}>
          <div className={styles.spinner} />
        </div>
      )}
      <form className={styles.form} onSubmit={e => e.preventDefault()}>
        <h2>Career Analysis</h2>

        <label>LinkedIn URL</label>
        <div className={styles.inputGroup}>
          <FaLinkedin className={styles.inputIcon} />
          <input
            type="url"
            name="linkedIn"
            value={form.linkedIn}
            onChange={handleChange}
            placeholder="https://www.linkedin.com/in/…"
            required
          />
        </div>

        <label>GitHub URL</label>
        <div className={styles.inputGroup}>
          <FaGithub className={styles.inputIcon} />
          <input
            type="url"
            name="github"
            value={form.github}
            onChange={handleChange}
            placeholder="https://github.com/…"
            required
          />
        </div>

        <label>Experience (years)</label>
        <select
          name="experienceYears"
          value={form.experienceYears}
          onChange={handleChange}
          required
        >
          <option value="">—</option>
          {[...Array(11).keys()].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
          <option value="10+">10+</option>
        </select>

        <label>Career Field</label>
        <select
          name="careerField"
          value={form.careerField}
          onChange={handleChange}
          required
        >
          <option value="">—</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="Design">Design</option>
          <option value="Finance">Finance</option>
        </select>

        <label>Resume (PDF / DOCX)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={e => setResume(e.target.files[0])}
        />

        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.saveBtn}
            onClick={handleAnalyze}
            disabled={loading}
          >
            Analyze
          </button>
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={() => nav('/dashboard')}
          >
            Cancel
          </button>
        </div>
      </form>
</div>
      <Footer />
    </>
  );
}

