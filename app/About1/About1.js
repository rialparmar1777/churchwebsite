"use client";
import React from 'react';
import Link from 'next/link';
import styles from './About1.module.css';

const About1 = () => {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <h1>About Knox</h1>
        <h2 className={styles.tagline}>INCLUSIVE • PROGRESSIVE • SPIRITUAL • COMPASSIONATE • ENGAGED • JOYFUL</h2>
      </header>
      <div className={styles.contentSection}>
        <div className={styles.textContent}>
          <h3>Who We Are</h3>
          <p>
            Knox Waterloo is an inclusive, dynamic, affirming, and forward-thinking congregation. We seek to grow and nurture our love for, and our faith, hope, and trust in, Jesus Christ. At Knox Waterloo, we believe that God’s love includes everyone. Our ministries provide opportunities for all to experience and share the good news of Jesus.
          </p>
        </div>
        <div className={styles.coreValuesSection}>
          <h3>Core Values</h3>
          <ul>
            <li>We believe our church is “reformed and still reforming,” recognizing the importance of prayerful questioning, innovation, and excellence.</li>
            <li>We value diversity, compassion, generosity, and service to others as we respond faithfully to the changing needs of our congregation, our community, and our world.</li>
            <li>We welcome all ages, gender identities, racial and cultural backgrounds, sexual orientations, abilities, economic circumstances, and family configurations.</li>
            <li>Our generosity springs from gratitude, and we believe in equal sacrifice, not equal gifts.</li>
            <li>We are committed to open, transparent, and responsive dialogue, using multiple forms of communication.</li>
            <li>We affirm everyone in their faith and life journey, emphasizing the importance of our children and youth as full participants in our congregation.</li>
          </ul>
        </div>
        <div className={styles.imageSection}>
          <img src="/about.jpg" alt="Knox Church" className={styles.image}/>
        </div>
      </div>
    </div>
  );
};

export default About1;
