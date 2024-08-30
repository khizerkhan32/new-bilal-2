import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import History from './components/History';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="overflow-x-hidden w-full bg-accent-800">
      <Hero />
      <About />
      <History />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
