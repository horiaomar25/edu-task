import React from 'react';
import Navigation from '../Components/Navigation';
import HeroSection from '../Components/HeroSection';
import Features from '../Components/Features';
import About from '../Components/About';

import "./globals.css";



export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />

      <About />
      <Features />


    </>
  );
}
