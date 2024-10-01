import React from 'react';
import Link from 'next/link';
import styles from './Gallery.module.css';

const galleryItems = [
  { src: '/gallery-1.jpg', label: 'Sports Activities' },
  { src: '/gallery-2.jpg', label: 'Games' },
  { src: '/gallery-3.jpg', label: 'Painting Competition' },
  { src: '/gallery-4.jpg', label: 'Church Band' },
  { src: '/gallery-5.jpg', label: 'Church Choir' },
    { src: '/gallery-6.jpg', label: 'Cycling' }
  ];

const Gallery = () => {
  return (
    <div className={styles.gallerySection}>
      <h2>Explore Our Community Photos from Waterloo</h2>
      <div className={styles.gallery}>
        {galleryItems.map((item, index) => (
          <div key={index} className={`${styles.galleryItem} ${styles[`item${index + 1}`]}`}>
            <img src={item.src} alt={item.label} className={styles.galleryImage} />
            <div className={styles.galleryLabel}>{item.label}</div>
          </div>
        ))}
      </div>
      <Link href="/gallery-page" legacyBehavior>
        <a className={styles.seeMoreButton}>
          See more here
          <span className={styles.arrow}>→</span>
        </a>
      </Link>
    </div>
  );
};

export default Gallery;
