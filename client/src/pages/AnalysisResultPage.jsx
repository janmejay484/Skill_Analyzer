// client/src/pages/AnalysisResultPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar                         from '../components/Layout/Navbar';
import styles                         from './ProfileResult.module.css';
import Footer from '../components/Layout/Footer';

export default function AnalysisResultPage() {
  const { state } = useLocation();
  const advice   = state?.advice;
  const nav      = useNavigate();

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <button onClick={()=>nav('/dashboard')} className={styles.logout}>
          ← Back to Dashboard
        </button>
        <h2>Career Guidance</h2>
        {advice 
          ? <pre className={styles.advice}>{advice}</pre>
          : <p>No analysis found.</p>
        }
        {advice && (
          <button
            onClick={() => {
              const blob = new Blob([advice], {type:'text/plain'});
              const url  = URL.createObjectURL(blob);
              const a    = document.createElement('a');
              a.href     = url;
              a.download = 'career_advice.txt';
              a.click();
            }}
            className={styles.cta}
          >
            Download Advice
          </button>
        )}
      </div>
             <Footer/>
           
    </>
  );
}
