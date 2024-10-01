import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <p>Subscribe to our Newsletter</p>
        <input type="email" placeholder="Enter your email" className={styles.input} />
        <button className={styles.subscribeButton}>Subscribe</button>
      </div>

      <div className={styles.socialMedia}>
        <h2>Follow Us</h2>
        <p className={styles.socialIcon}>📘 Facebook</p>
        <p className={styles.socialIcon}>📺 YouTube</p>
        <p className={styles.socialIcon}>📸 Instagram</p>
      </div>

      <div className={styles.acknowledgement}>
        <p>We acknowledge that Knox Waterloo is located on the traditional territory of the Anishinaabe, Haudenosaunee and Attawandaron Peoples.</p>
      </div>

      <div className={styles.contactInfo}>
        <p>50 Erb Street West, Waterloo, Ontario, N2L 1T1 – 519-886-4150 – knox@knoxwaterloo.ca</p>
        <p>Office Hours - Tuesday, Wednesday, Thursday 9am to 1pm</p>
        <p>© Copyright Knox Waterloo</p>
      </div>
    </footer>
  );
};

export default Footer;
