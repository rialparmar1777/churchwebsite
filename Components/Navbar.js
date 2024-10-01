import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={`${process.env.assetPrefix}/knoxlogo.png`} alt="Church Logo" /> 
      </div>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <div className={styles.dropdown}>
          <span>About Knox</span>
          <div className={styles.dropdownContent}>
            <Link href="/about-knox">About Knox</Link>
            <Link href="/ministry-staff">Our Ministry Staff</Link>
            <Link href="/leaders-teams">Leaders & Teams</Link>
            <Link href="/history">Our History</Link>
            <Link href="/partners">Our Partners</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <span>Ministries</span>
          <div className={styles.dropdownContent}>
            <Link href="/ministries">Overview</Link>
            <Link href="/children">Children</Link>
            <Link href="/youth">Youth</Link>
            <Link href="/young-adult">Young Adult</Link>
            <Link href="/music-ministry">Music Ministry</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <span>Worship</span>
          <div className={styles.dropdownContent}>
            <Link href="/worship">Worship Overview</Link>
            <Link href="/watch-listen">Watch/Listen</Link>
            <Link href="/sunday-bulletin">Sunday Bulletin</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <span>Connect</span>
          <div className={styles.dropdownContent}>
            <Link href="/contact-info">Contact Info</Link>
            <Link href="/watch/listen">Watch/Listen</Link>
            <Link href="/calendar-events">Calendar of Events</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <span>Facility Rentals</span>
          <div className={styles.dropdownContent}>
            <Link href="/facility-rentals">Facility Rentals Overview</Link>
            <Link href="/parking">Parking</Link>
            <Link href="/photo-gallery">Photo Gallery</Link>
          </div>
        </div>
        <Link href="/stewardship">Stewardship</Link>
      </div>
    </nav>
  );
};

export default Navbar;
