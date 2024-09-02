import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import History from './components/History';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import StarsCanvas from './components/StarsCanvas';

const App = () => {
  return (
    <div className="relative overflow-x-hidden w-full backgroud">
      {/* <StarsCanvas /> */}

      <div className="relative z-[1]">
        <Hero />
        <About />
        <History />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
