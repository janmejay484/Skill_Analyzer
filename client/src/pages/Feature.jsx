import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUserFriends,
  FaChartLine,
  FaShieldAlt,
  FaMobileAlt,
  FaRocket,
  FaCloudUploadAlt
} from 'react-icons/fa';
import styles from './Feature.module.css';
import Navbar from '../components/Layout/Navbar';

const currentFeatures = [
  {
    icon: FaUserFriends,
    title: 'Expert Connections',
    desc: 'Connect 1-on-1 with industry mentors to guide your path.'
  },
  {
    icon: FaChartLine,
    title: 'Progress Tracking',
    desc: 'Visualize your skill growth and milestones in real time.'
  },
  {
    icon: FaShieldAlt,
    title: 'Secure & Private',
    desc: 'Your data is encrypted and never shared without permission.'
  }
];

const futureRoadmap = [
  {
    icon: FaMobileAlt,
    title: 'Mobile App',
    desc: 'iOS & Android apps to analyze on the go.'
  },
  {
    icon: FaCloudUploadAlt,
    title: 'Cloud Sync',
    desc: 'Automatically keep your profile & advice in sync across devices.'
  },
  {
    icon: FaRocket,
    title: 'AI Workshops',
    desc: 'Interactive group sessions powered by our AI coach.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: 'spring', stiffness: 100 }
  }),
  hover: { scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.4)' }
};

export default function Feature() {
  return (
    <>
     <Navbar/>
    <section className={styles.featureSection}>
       
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What We Offer
      </motion.h2>

      <div className={styles.cardsGrid}>
        {currentFeatures.map((f, idx) => {
          const Icon = f.icon;
          return (
            <motion.div
              className={styles.card}
              key={f.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Icon className={styles.cardIcon} />
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Coming Soon
      </motion.h2>

      <div className={styles.cardsGrid}>
        {futureRoadmap.map((f, idx) => {
          const Icon = f.icon;
          return (
            <motion.div
              className={`${styles.card} ${styles.future}`}
              key={f.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Icon className={styles.cardIcon} />
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
    </>
  );
}
