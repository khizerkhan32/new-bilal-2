import React, { useRef } from 'react';
import Header from './Header';
import Container from '../hoc/Container';
import Button from './Button';
import Lottie from 'lottie-react';
import AnimationData from '../assets/hero.json';
import { useScroll, motion } from 'framer-motion';

const Hero = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  return (
    <>
      <Header scrollYProgress={scrollYProgress} />
      <div id="home" ref={ref} className="h-screen w-full">
        <Container className="pt-24 flex flex-col-reverse md:flex-row justify-around md:justify-between items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: '100px',
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="flex flex-col justify-between text-primary-500 text-center md:items-start gap-3 md:text-left"
          >
            <h2 className="text-2xl uppercase">Hi There, I'm John Deo</h2>
            <h1 className="text-4xl md:text-7xl lg:whitespace-nowrap">
              Software Engineer
            </h1>
            <p className="text-lg mb-6">based on United states</p>
            <div>
              <Button>Hire me</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: '100px',
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="w-[50vh] md:w-fit"
          >
            <Lottie
              style={{ width: '100%', height: '100%' }}
              animationData={AnimationData}
            />
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
