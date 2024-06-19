"use client"
import { useEffect } from 'react';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const Particles = () => {
  useEffect(() => {
    const generateParticles = () => {
      const particlesContainer = document.createElement('div');
      particlesContainer.classList.add('particles-container');

      // Generate particles from the bottom of the document to 5 pixels above the bottom
      const numParticles = 500;

      for (let i = 0; i < numParticles; i++) {
        const size = getRandomInt(1, 3); // Adjusted size between 1px and 3px
        const left = Math.random() * window.innerWidth; // Random position within viewport width
        const top = Math.random() * (document.documentElement.scrollHeight - 20); // 5 pixels above document height
        const delay = -getRandomInt(0, 30); // Adjusted delay between -100s and 0s for immediate start

        const particle = document.createElement('div');
        particle.classList.add('dot');
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}px`; // Set random left position
        particle.style.top = `${top}px`; // Set random top position
        particle.style.animationDelay = `${delay}s`;

        particlesContainer.appendChild(particle);
      }

      document.body.appendChild(particlesContainer); // Append particles to body
    };

    // Generate particles for initial random spawning
    generateParticles();

    // Generate particles for continuous spawning from the bottom every 10s
    const intervalId = setInterval(() => {
      const particlesContainer = document.createElement('div');
      particlesContainer.classList.add('particles-container');

      const numParticles = 10;

      for (let i = 0; i < numParticles; i++) {
        const size = getRandomInt(1, 3); // Adjusted size between 1px and 3px
        const left = Math.random() * window.innerWidth; // Random position within viewport width
        const delay = -getRandomInt(0, 30); // Adjusted delay between -100s and 0s for immediate start

        const particle = document.createElement('div');
        particle.classList.add('dot');
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}px`; // Set random left position
        particle.style.top = `${document.documentElement.scrollHeight}px`; // Set particles at the bottom of the document
        particle.style.animationDelay = `${delay}s`;

        particlesContainer.appendChild(particle);
      }

      document.body.appendChild(particlesContainer); // Append particles to body
    }, 10000); // Spawn new particles from bottom every 10s

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return null; // No need to render anything
};

export default Particles;
