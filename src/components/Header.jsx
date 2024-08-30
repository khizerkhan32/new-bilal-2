import React, { useEffect, useState } from 'react';
import Container from '../hoc/Container';
import Logo from './Logo';
import Button from './Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useTransform, motion } from 'framer-motion';

const Header = ({ scrollYProgress }) => {
  const [isNavBarClosed, setIsNavBarClosed] = useState(true);

  useEffect(
    () => {
      if (isNavBarClosed) {
        document.body.style.overflow = 'unset';
      } else {
        document.body.style.overflow = 'hidden';
      }
    },
    { isNavBarClosed }
  );

  const y = useTransform(scrollYProgress, [0, 0.6], [0, -96]);

  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  return (
    <motion.div
      style={{ y: y }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="h-24 w-full fixed top-0 z-10 bg-accent-800"
    >
      <Container>
        <nav className="h-full w-full flex justify-between items-center">
          <Logo />
          <ul className="hidden md:flex items-center gap-20 text-primary-500">
            {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
              <li
                key={index}
                className={`nav-item ${
                  activeNavItem === index ? 'text-red-500' : ''
                }`}
                onClick={() => handleNavItemClick(index)}
              >
                <a href={`#${item.toLowerCase()}`}>
                  {activeNavItem === index ? <Button>{item}</Button> : item}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsNavBarClosed(!isNavBarClosed)}
            className="flex md:hidden text-primary-500 justify-center items-center z-20"
          >
            {isNavBarClosed ? (
              <GiHamburgerMenu className="text-5xl" />
            ) : (
              <GrClose className="text-5xl" />
            )}
          </button>
        </nav>
      </Container>
      <ul
        style={{
          transform: isNavBarClosed ? 'translateY(-100%)' : 'translateY(0)',
        }}
        className="md:hidden fixed top-0 left-0 flex flex-col justify-center items-center bg-accent-300 w-full h-screen text-4xl gap-16 transition-all duration-500"
      >
        {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
          <li
            key={index}
            className="nav-item text-primary-100 hover:text-primary-500"
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Header;
