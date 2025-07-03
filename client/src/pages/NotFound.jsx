// client/src/pages/NotFound.jsx
import React, { useEffect } from 'react';
import { useNavigate }       from 'react-router-dom';
import { FaHome }            from 'react-icons/fa';
import styles                from './NotFound.module.css';

export default function NotFound() {
  const nav = useNavigate();
  useEffect(() => { document.title = '404 – Page Not Found'; }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.illustration}>
        <span className={styles.errorCode}>404</span>
      </div>
      <h1 className={styles.title}>Oops! That page can’t be found.</h1>
      <p className={styles.subtitle}>
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <button
        className={styles.button}
        onClick={() => nav('/')}
      >
        <FaHome className={styles.icon}/>
        Go Home
      </button>
    </div>
  );
}
