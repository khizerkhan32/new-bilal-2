import React from 'react';

const Container = ({ children, classes }) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-10 h-full w-full ${classes}`}>
      {children}
    </div>
  );
};

export default Container;
