// client/src/components/Auth/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';     // ← import hook
import styles from './Auth.module.css';
import Navbar from '../Layout/Navbar';
//  import API from '../../services/api';
export default function Login() {
  const { login } = useAuth();        // ← grab login() from context
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await login(form.email, form.password);  // ← call context.login
      // context.login handles token, user state, and navigation for you
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Welcome Back</h2>

          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <form onSubmit={handleSubmit}>
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
              Log In
            </button>
          </form>

          <p className={styles.footerText}>
            Don’t have an account?
            <Link to="/register" className={styles.footerLink}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}


