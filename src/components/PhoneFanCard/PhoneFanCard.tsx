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
      // 美团点餐
      img: '/image0.png',
      link: 'https://apps.apple.com/cn/app/%E7%BE%8E%E5%9B%A2%E7%82%B9%E9%A4%90%E5%8A%A9%E6%89%8B%E6%99%BA%E8%83%BD%E7%89%88/id1473911336'
    },
    {
      // Newegg seller
      img: '/image1.png',
      link: 'https://apps.apple.com/us/app/newegg-sellers/id1586090303'
    },
    {
      // Newegg
      img: '/image2.png',
      link: 'https://apps.apple.com/us/app/newegg-tech-shopping-online/id345188269'
    },
    {
      // 牵牛花
      img: '/image3.png',
      link: 'https://apps.apple.com/cn/app/%E7%89%B5%E7%89%9B%E8%8A%B1%E5%95%86%E5%AE%B6%E7%AB%AF/id1498906833'
    },
    {
      // 易球成名
      img: '/image4.png',
      link: 'https://apps.apple.com/cn/app/%E6%98%93%E7%90%83%E6%88%90%E5%90%8Dclub/id1501809032'
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