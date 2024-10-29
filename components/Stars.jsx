"use client"
import React, { useEffect, useState } from 'react';
 
// Helper functions
const getRandomSize = () => Math.random() * 4 + 1;
const getRandomDuration = () => Math.random() * 4 + 16; // Duration between 2s and 6s
const getRandomShape = () => (Math.random() > 0.5 ? 'rounded-full' : ''); // Circle or square
const getRandomColor = () => {
  const colors = ['bg-white', 'bg-yellow-300', 'bg-blue-400', 'bg-red-500'];
  return colors[Math.floor(Math.random() * colors.length)];
};
const getRandomOpacity = () => Math.random() * 0.7 + 0.3; // Opacity between 0.3 and 1
const getRandomAnimation = () => {
  const animations = ['star-move', 'star-twinkle', 'star-slide', 'star-fall'];
  return animations[Math.floor(Math.random() * animations.length)];
};
const getRandomDirection = () => {
  const directions = ['normal', 'reverse'];
  return directions[Math.floor(Math.random() * directions.length)];
};

const Star = ({ style }) => {
  const size = getRandomSize();
  const duration = getRandomDuration();
  const shape = getRandomShape();
  const color = getRandomColor();
  const opacity = getRandomOpacity();
  const animationClass = getRandomAnimation();
  const direction = getRandomDirection();

  return (
    <div
      className={`${color} ${shape} fixed ${animationClass}`}
      style={{
        ...style,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
        animationDirection: direction,
        opacity: opacity,
      }}
    />
  );
};

const RenderStars = ({ count }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < count; i++) {
      newStars.push(
        <Star key={i} style={{ top: `${Math.random() * 100}vh`, left: `${Math.random() * 100}vw` }} />
      );
    }
    setStars(newStars);
  }, [count]);

  return <>{stars}</>;
};

export default RenderStars;
