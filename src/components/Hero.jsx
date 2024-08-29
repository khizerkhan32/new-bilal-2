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
          <div className="flex flex-col justify-between text-primary-500 text-center md:items-start gap-3 md:text-left">
            <h2 className="text-2xl uppercase">Hi There, I'm John Deo</h2>
            <h1 className="text-5xl md:text-7xl lg:whitespace-nowrap">
              Software Engineer
            </h1>
            <p className="text-lg mb-6">based on United states</p>
            <div>
              <Button>Hire me</Button>
            </div>
          </div>
          <div className="w-[50vh] md:w-fit">
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
