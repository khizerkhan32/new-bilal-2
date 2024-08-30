import React from 'react';
import Container from '../hoc/Container';
import Title from './Title';
import { SERVICES } from '../../data';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full relative py-40 overflow-hidden">
      <Container>
        <Title
          text1="introdution"
          text2="overveiw"
          description="When it comes to creating demo content or sample data, the name “John Doe” is undoubtedly one of the most prevalent placeholders used worldwide. You might have encountered this name in various contexts, from filling out online forms to browsing through test accounts. But have you ever wondered why “John Doe” has become the go-to name in such scenarios? In this blog, we will explore the origins of this ubiquitous moniker and unravel the reasons behind its widespread usage."
        />

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-20">
          {SERVICES.map((service, i) => (
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
              className="text-primary-500 p-10 bg-accent-300 flex flex-col items-center text-center gap-10"
            >
              <service.icon className="text-5xl" />
              <p className="text-2xl">{service.title}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
