import React from 'react';
import Container from '../hoc/Container';
import Button from './Button';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id="Contact" className="py-40">
      <Container className="flex justify-center flex-col items-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: '100px',
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="text-5xl text-primary-500 text-center mb-20"
        >
          Let's Create Something <br /> Meaningful Together
        </motion.h1>
        <motion.div
          initial={{
            opacity: 0,
            y: '100px',
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className=""
        >
          <a href="mailto:k.khizer124@gmail.com">
            <Button>Contact Me</Button>
          </a>
        </motion.div>
      </Container>
    </div>
  );
};

export default Contact;
