import React from 'react';
import { motion } from 'framer-motion';

const Title = ({ text1, text2, description }) => {
  return (
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
    >
      <div className="flex flex-col gap-5">
        <span className="text-primary-100 uppercase tracking-wider">
          {text1}
        </span>
        <span className="text-primary-500 text-6xl capitalize">{text2}</span>
      </div>
      <p className="text-sm text-primary-100 mt-5 max-w-2xl">{description}</p>
    </motion.div>
  );
};

export default Title;
