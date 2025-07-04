// client/src/pages/AnalysisResultPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { jsPDF } from 'jspdf';
import styles from './ProfileResult.module.css';

export default function AnalysisResultPage() {
  const { state } = useLocation();
  const advice   = state?.advice;
  const nav      = useNavigate();

  const downloadPdf = () => {
    if (!advice) return;

    // 1) Create PDF
    const doc = new jsPDF({ unit: 'pt', format: 'letter' });
    const leftMargin   = 40;
    const topMargin    = 60;
    const bottomMargin = 40;
    const pageWidth    = doc.internal.pageSize.getWidth();
    const pageHeight   = doc.internal.pageSize.getHeight();
    const maxLineWidth = pageWidth - leftMargin * 2;

    // 2) Split into lines that fit the width
    const lines = doc.splitTextToSize(advice, maxLineWidth);

    // 3) Add title on first page
    doc.setFontSize(18);
    doc.text('Career Advice', leftMargin, topMargin);

    // 4) Render lines, paginating when needed
    doc.setFontSize(12);
    const lineHeight = 14;             // 14pt per line
    let cursorY = topMargin + 30;      // start just under title

    lines.forEach((line) => {
      // if going past bottom, add page and reset cursor
      if (cursorY > pageHeight - bottomMargin) {
        doc.addPage();
        cursorY = topMargin;
      }
      doc.text(line, leftMargin, cursorY);
      cursorY += lineHeight;
    });

    // 5) Save
    doc.save('career_advice.pdf');
  };

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <button onClick={() => nav('/dashboard')} className={styles.logout}>
          ← Back to Dashboard
        </button>

        <h2>Career Guidance</h2>

        {advice
          ? <pre className={styles.advice}>{advice}</pre>
          : <p>No analysis found.</p>
        }

        {advice && (
          <button onClick={downloadPdf} className={styles.cta}>
            Download as PDF
          </button>
        )}
      </div>

      <Footer />
    </>
  );
}
