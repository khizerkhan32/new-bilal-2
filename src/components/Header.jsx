import React, { useState } from 'react';
import Container from '../hoc/Container';
import Logo from './Logo';
import Button from './Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const Header = () => {
  const [isNavBarClosed, setIsNavBarClosed] = useState(true);
  return (
    <div className="h-24 w-full fixed top-0 z-10 bg-accent-800">
      <Container>
        <nav className="h-full w-full flex justify-between items-center">
          <Logo />
          <ul className="hidden md:flex items-center gap-20 text-primary-500">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <Button>Contact</Button>
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
        <li className="text-primary-100 hover:text-primary-500">
          <a href="#home">Home</a>
        </li>
        <li className="text-primary-100 hover:text-primary-500">
          <a href="#projects">Projects</a>
        </li>
        <li className="text-primary-100 hover:text-primary-500">
          <a href="#About">About</a>
        </li>
        <li className="text-primary-100 hover:text-primary-500">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
