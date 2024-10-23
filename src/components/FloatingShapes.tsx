"use client";

import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'; // Updated import for React 18

export default function FallingBalls() {
  interface Ball {
    x: number;
    fontSize: string;
    animationDuration: number;
    animationDelay: string;
  }

  const [balls, setBalls] = useState<Ball[]>([]);

  // Function to generate a new ball with random properties
  const generateNewBall = () => {
    const randomX = Math.random() * 100; // Random horizontal position
    const randomFontSize = `${Math.floor(Math.random() * 10) + 10}px`; // Random font size (10px to 20px)
    const animationDuration = Math.random() * 5 + 6; // Random duration for falling effect (6 to 11 seconds)
    const animationDelay = `${Math.random() * 6}s`; // Random delay for different start times

    // Add new ball to the array with random properties
    setBalls((prevBalls) => [
      ...prevBalls,
      { x: randomX, fontSize: randomFontSize, animationDuration, animationDelay },
    ]);
  };

  useEffect(() => {
    // Generate the first ball immediately
    generateNewBall();

    const intervalId = setInterval(() => {
      generateNewBall(); // Generate a new ball at intervals
    }, 300); // Generate a new ball every 300 milliseconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balls.map((ball, index) => {
        return (
          <div
            key={index}
            className="falling-ball"
            style={{
              left: `${ball.x}vw`, // Use random horizontal position
              top: `0vh`, // Start from the top
              animation: `fall ${ball.animationDuration}s cubic-bezier(0.42, 0, 0.58, 1) forwards`, // Smooth animation for falling effect
              animationDelay: ball.animationDelay, // Random delay for different start times
              fontSize: ball.fontSize, // Set the random font size
            }}
          >
            *
          </div>
        );
      })}
      <style jsx>{`
        .falling-ball {
          position: absolute;
          opacity: 0.9; /* Slightly more opaque for visibility */
        }

        @keyframes fall {
          0% {
            transform: translateY(0); /* Start at the top */
            opacity: 0.9; /* Full opacity */
          }
          25% {
            opacity: 0.9; /* Maintain opacity */
          }
          75% {
            opacity: 0.5; /* Start fading out */
          }
          100% {
            transform: translateY(100vh); /* Fall to the bottom */
            opacity: 0; /* Fade out */
          }
        }
      `}</style>
    </div>
  );
}

// Assuming there's a separate entry point file where you render the component
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement); // Create a root for rendering
  root.render(<FallingBalls />); // Render the FallingBalls component
}