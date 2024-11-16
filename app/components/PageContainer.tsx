import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto p-6 md:p-12">
      {children}
    </div>
  );
};

export default Container;
