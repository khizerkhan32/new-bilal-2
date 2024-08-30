import React from 'react';
import Container from '../hoc/Container';
import Title from './Title';
import { TESTIMONIALS } from '../../data';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative my-40 overflow-hidden">
      <Container>
        <Title
          text1="What others say"
          text2="testimonials"
          description="Discover an array of testimonials, each reflecting the satisfaction and trust of clients and colleagues who have had the privilege of collaborating with me. Dive into their experience to uncover the profound impact of our work together and the value I bring to every interaction."
        />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
          {TESTIMONIALS.map((tst, i) => (
            <motion.div
              initial={{
                opacity: 0,
                x: '100px',
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
              }}
              key={i}
              className="p-5 flex flex-col justify-between bg-accent-300 rounded-3xl"
            >
              <div className="text-primary-100">
                <p className="text-5xl">"</p>
                <p className="text-sm">{tst.testimonial}</p>
              </div>
              <div className="flex mt-2">
                <div className="flex-grow">
                  <p className="text-primary-500">@{tst.name}</p>
                  <p className="text-primary-100 text-sm font-semibold ">
                    {tst.position}
                  </p>
                </div>
                <img
                  src={tst.image}
                  alt={tst.name}
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
