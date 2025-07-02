// client/src/components/Auth/Register.jsx
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';  // ← useAuth
import { Link } from 'react-router-dom';
import styles from './Auth.module.css';
import Navbar from '../Layout/Navbar';
// import API from '../../services/api';
export default function Register() {
  const { register } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await register(form.name, form.email, form.password);
      // context.register handles token, user state, and navigation
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Create an Account</h2>

          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Register
            </button>
          </form>

          <p className={styles.footerText}>
            Already have an account?
            <Link to="/login" className={styles.footerLink}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
