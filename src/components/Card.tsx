import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  noStyle?:boolean;
}

const Card: React.FC<CardProps> = ({ title, children, className,noStyle=false }) => {
  
  return (
    <div className={`${noStyle ? 'pixel-card-noShadow' : 'pixel-card'}  ${className ?? ''}`}>
      {title && (
        <h2 className="text-2xl font-bold mb-8 section-title pixel-text pixel-text1">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default Card;