import React, { useRef, useEffect, useState } from 'react';
import Header from './Header';
import Container from '../hoc/Container';
import Button from './Button';
// import Lottie from 'lottie-react';
// import AnimationData from '../assets/hero.json';
import { useScroll, motion } from 'framer-motion';
import EarthCanvas from './EarthCanvas';
import { slideIn } from '../utils/motion';

const titles = [
  'Software Engineer',
  'Full Stack Developer',
  'Mobile App Developer',
  'UI/UX Designer',
  'Digital Marketing Expert',
];

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  useEffect(() => {
    setDisplayedText('');
    setIndex(0);
  }, [text]);

  return <span>{displayedText}</span>;
};

const Hero = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, titles[currentTitleIndex].length * 100 + 3000); // Adjust timing according to length of text and pause

    return () => clearInterval(interval);
  }, [currentTitleIndex]);

  return (
    <>
      <Header scrollYProgress={scrollYProgress} />
      <div id="home" ref={ref} className="h-screen w-full">
        <Container className="pt-24 mt-20 sm:mt-0 flex flex-col-reverse md:flex-row justify-around md:justify-between items-center">
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
            <h1 className="text-4xl md:text-5xl lg:whitespace-nowrap">
              <TypingEffect text={titles[currentTitleIndex]} speed={100} />
            </h1>
            <p className="text-lg mb-6">based in United States</p>
            <div>
              <Button>Hire me</Button>
            </div>
          </motion.div>
          {/* <motion.div
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
          </motion.div> */}
          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            // className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            className="w-[50vh] sm:w-[40%] md:w-[50%] xl:h-[550px]auto md:h-[490px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
