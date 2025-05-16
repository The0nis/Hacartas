
import React from "react";

const FlyingCards = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {Array.from({ length: 8 }).map((_, index) => {
        // Generate random positions and animations for each card
        const randomLeft = Math.floor(Math.random() * 100);
        const randomDelay = Math.floor(Math.random() * 20);
        const randomDuration = 15 + Math.floor(Math.random() * 20);
        const randomRotate = Math.floor(Math.random() * 360);
        
        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${randomLeft}%`,
              top: '-50px',
              animation: `
                flyingCard ${randomDuration}s linear ${randomDelay}s infinite
              `,
              transform: `rotate(${randomRotate}deg)`,
            }}
          >
            <div 
              className="h-12 w-8 bg-white shadow-md rounded border-2 border-[#003049] opacity-20"
            />
          </div>
        );
      })}

      <style>
        {`
          @keyframes flyingCard {
            0% {
              transform: translateY(-50px) rotate(0deg);
            }
            100% {
              transform: translateY(calc(100vh + 100px)) rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default FlyingCards;
