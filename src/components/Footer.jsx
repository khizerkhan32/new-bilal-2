import React from 'react';
import Container from '../hoc/Container';
import Logo from './Logo';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-20 bg-accent-300">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Container className="flex flex-col gap-10 items-center md:flex-row md:justify-between">
          <Logo />
          <ul className="flex gap-10 text-primary-100">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </Container>
        <p className="mt-10 text-center text-primary-100">
          &copy: All RIghts Reserved
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
