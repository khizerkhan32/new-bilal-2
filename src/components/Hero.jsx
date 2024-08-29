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
      <div className="h-screen w-full">
        <Container className="pt-24 flex flex-col-reverse md:flex-row justify-around md:justify-between items-center">
          <div className="">
            <h2>Hi There, I'm John Deo</h2>
            <h1>Software Engineer</h1>
            <p>based on United states</p>
            <Button>Hire me</Button>
          </div>
          <div className="">
            <Lottie
              style={{ width: '100%', height: '100%' }}
              animationData={AnimationData}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
