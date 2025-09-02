import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Eye2 from './components/Eye2';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => {
      scroll.destroy(); // cleanup when component unmounts
    };
  }, []);

  return (
    <div 
      className="w-full min-h-screen text-white bg-zinc-100"
      data-scroll-container
    >
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Eye2 />
      <Footer />
    </div>
  );
}

export default App;
