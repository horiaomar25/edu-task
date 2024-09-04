import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import About from '../components/About';
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
