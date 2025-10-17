// @ts-nocheck
'use client';

import React, { useState } from 'react';
import './style.css';

const ImageFanCard = ({ cards = [], onCardClick = () => {} }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardClick = (card, index) => {
    onCardClick(card, index);
    if (card.link) {
      window.open(card.link, '_blank');
    }
  };

  return (
    <div className="image-fan-container">
      <div className="cards-stack">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`image-card ${hoveredIndex === index ? 'hovered' : ''}`}
            style={{ 
              '--index': index,
              '--total': cards.length 
            }}
            onClick={() => handleCardClick(card, index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={card.img} alt={`Card ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

// 客户端组件直接使用
const PhoneFanCardClient = () => {
 const projectCards = [
    {
      img: '/image0.png',
      link: 'https://project1.com'
    },
    {
      img: '/image1.png',
      link: 'https://project2.com'
    },
    {
      img: '/image2.png',
      link: 'https://project3.com'
    },
    {
      img: '/image3.png',
      link: 'https://project4.com'
    },
    {
      img: '/image4.png',
      link: 'https://project5.com'
    }
  ] as any[];

  const handleCardClick = (card, index) => {
    console.log(`Clicked project ${index + 1}:`, card.link);
  };

  return  (
    <ImageFanCard 
        cards={projectCards}
        onCardClick={(card, index) => console.log('Clicked:', card)}
      />
  )
}

export  {
  PhoneFanCard,
  PhoneFanCardClient
};