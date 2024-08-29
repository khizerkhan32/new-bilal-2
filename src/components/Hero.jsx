import React from 'react';
import Header from './Header';
import Container from '../hoc/Container';
import Button from './Button';
import Lottie from 'lottie-react';
import AnimationData from '../assets/hero.json';

const Hero = () => {
  return (
    <>
      <Header />
      <div className="">
        <Container>
          <div className="">
            <h2>Hi There, I'm John Deo</h2>
            <h1>Software Engineer</h1>
            <p>based on United states</p>
            <Button>Hire me</Button>
          </div>
          <div className="">
            <Lottie animationData={AnimationData} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
