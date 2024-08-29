import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="py-3 px-8 rounded-xl bg-accent-500 hover:bg-accent-100 transition-all duration-300 text-primary-500 w-fit cursor-pointer font-semibold">
      {children}
    </button>
  );
};

export default Button;
