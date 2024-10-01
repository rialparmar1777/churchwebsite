"use client";
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const bibleVerses = [
  { verse: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", reference: "John 3:16" },
  { verse: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
  { verse: "I can do all things through Christ which strengtheneth me.", reference: "Philippians 4:13" },
  { verse: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.", reference: "Isaiah 40:31" },
  { verse: "Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", reference: "Proverbs 3:5-6" }
];

const Header = () => {
  const currentVerse = bibleVerses[0]; // Assuming you want to keep the first verse initially

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.verseContainer}>
          <div className={styles.reference}>{currentVerse.reference}</div>
          <div className={styles.verse}>{currentVerse.verse}</div>
          <Link href="/contact-info">
            <button className={styles.connectButton}>
              Connect with Us
              <img src="/dark-arrow.png" alt="Arrow" className={styles.arrow} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
