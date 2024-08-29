import React from 'react';

const Container = ({ children, className }) => {
  // Changed 'classes' to 'className'
  return (
    <div className={`max-w-screen-xl mx-auto px-10 h-full w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
