/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AboutStrip from './components/AboutStrip';
import StatsStrip from './components/StatsStrip';
import FestivalLogos from './components/FestivalLogos';
import ArtistGrid from './components/ArtistGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileDock from './components/MobileDock';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <AboutStrip />
        <StatsStrip />
        <ArtistGrid />
        <FestivalLogos />
        <Contact />
      </main>
      <Footer />
      <MobileDock />
    </div>
  );
}
