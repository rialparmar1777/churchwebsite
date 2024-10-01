import React from 'react';
import Navbar from '@/Components/Navbar'; 
import Header from '@/Components/Header';
import About from '@/Components/About';
import Gallery from '@/Components/Gallery';
import Footer from '@/Components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <About />
        <Gallery />
        <Footer />
      </main>
      
    </div>
  );
};

export default HomePage;
