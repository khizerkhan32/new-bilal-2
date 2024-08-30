import React from 'react';
import Container from '../hoc/Container';
import Title from './Title';
import { EXPERIENCE } from '../../data';
import { motion } from 'framer-motion';

const History = () => {
  return (
    <section id="workhistory" className="relative my-40 overflow-hidden ">
      <Container className="flex flex-col lg:flex-row lg:justify-between gap-10">
        <Title
          text1="What I have Done so far"
          text2="Work Experience"
          description="When it comes to creating demo content or sample data, the name “John Doe” is undoubtedly one of the most prevalent placeholders used worldwide. You might have encountered this name in various contexts, from filling out online forms to browsing through test accounts. But have you ever wondered why “John Doe” has become the go-to name in such scenarios? In this blog, we will explore the origins of this ubiquitous moniker and unravel the reasons behind its widespread usage."
        />
        <div className="flex flex-col items-start gap-10 mt-20">
          {EXPERIENCE.map((exp, i) => (
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
              className="flex flex-col md:flex-row gap-2 max-w-xl"
            >
              <div className="text-primary-100 min-w-44">{exp.range}</div>
              <div className="flex-grow">
                <h3 className="text-primary-500">
                  {exp.title},{exp.location}
                </h3>

                <h3 className="text-primary-500 text-sm ">{exp.company}</h3>
                <p className="text-primary-100 text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default History;
