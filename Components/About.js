"use client";
import React from 'react';
import Link from 'next/link';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.messageBox}>
        <h2>JOIN OUR WORSHIP SERVICES - EVERY SUNDAY</h2>
        <p>SUNDAY at 10 AM</p>
      </div>
      <div className={styles.programs}>
        <div className={styles.program}>
          <img src={`${process.env.assetPrefix}/program-1.jpg`} alt="Sunday School" />
          <div className={styles.programLabel}>Sunday School</div>
        </div>
        <div className={styles.program}>
          <img src={`${process.env.assetPrefix}/program-2.jpg`} alt="Vacation Bible School" />
          <div className={styles.programLabel}>Vacation Bible School</div>
        </div>
        <div className={styles.program}>
          <img src={`${process.env.assetPrefix}/program-3.jpg`} alt="Young Adult Meeting" />
          <div className={styles.programLabel}>Young Adult Meeting</div>
        </div>
      </div>
      <div className={styles.aboutSection}>
        <div className={styles.aboutImage}>
          <img src={`${process.env.assetPrefix}/about.jpg`} alt="About Knox" />
          <div className={styles.playIcon}>▶</div>
        </div>
        <div className={styles.aboutContent}>
          <h2>About Knox</h2>
          <p>INCLUSIVE PROGRESSIVE SPIRITUAL COMPASSIONATE ENGAGED JOYFUL</p>
          <p>We acknowledge that Knox Waterloo is located on the traditional territory of the Anishinaabe, Haudenosaunee and Attawandaron Peoples. We seek a renewed relationship with our neighbours, one that is based on honour and deep respect. We give thanks for the ability to gather, work and worship here.</p>
          <p>Knox Waterloo is an inclusive, dynamic, affirming and forward-thinking congregation. We seek to grow and nurture our love for, and our faith, hope and trust in, Jesus Christ.</p>
          <p>At Knox Waterloo, we believe that God’s love includes everyone. Our ministries provide opportunities for all to experience and share the good news of Jesus.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
