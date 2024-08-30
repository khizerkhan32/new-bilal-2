import React from 'react';
import Container from '../hoc/Container';
import Title from './Title';
import { PROJECTS } from '../../data';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="relative my-40 overflow-hidden">
      <Container>
        <Title
          text1="My Work"
          text2="Projects"
          description="Discover my portfolio, showcasing a myriad of projects reflecting creativety, experties, and dedication. Explore each endeavor, from conception to execution, and witness the fruit of my labour and pasion."
        />

        <div className="flex flex-col gap-10 mt-20">
          {PROJECTS.map((project, i) => (
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
              className="w-full flex flex-col lg:flex-row"
            >
              <div className="max-w-3xl aspect-[4/2] overflow-hidden border-[15px] rounded-3xl border-accent-300">
                <img
                  src={project.image}
                  alt="projects-image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="lg:max-w-lg flex justify-center flex-col text-white gap-4 py-5 lg:gap-8 lg:px-10">
                <h3 className="text-primary-500 text-xl">{project.title}</h3>
                <p className="text-primary-100 text-sm">
                  {project.description}
                </p>
                <p className="flex flex-wrap gap-3 md:gap-4 text-primary-100">
                  {project.techStack.map((tech, j) => (
                    <span
                      className="p-2 bg-accent-300 rounded-xl shadow-md text-sm"
                      key={j}
                    >
                      {tech}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
