import React, { useEffect } from 'react';
import "../styles/Bubbles.css"

const Background = () => {
  useEffect(() => {
    // Generate bubbles dynamically
    const numBubbles = 60;
    const container = document.getElementById('bubble-container');
    const colors = ['#c5c2c2', '#24292d', '#616961', '#f7f7f6', '#99d1e4']; // Example colors

    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');

      // Randomize size and position
      const size = Math.floor(Math.random() * 20 + 5); // Random size between 5px and 25px
      const positionX = Math.random() * 100; // Random horizontal position
      const positionY = Math.random() * 100; // Random vertical position
      const color = colors[Math.floor(Math.random() * colors.length)]; // Random color

      // Apply styles
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.background = color;
      bubble.style.left = `${positionX}%`;
      bubble.style.top = `${positionY}%`;

      container.appendChild(bubble);
    }
  }, []);

  return (
    <div className="background">
      <div id="bubble-container"></div>
    </div>
  );
};

export default Background;
