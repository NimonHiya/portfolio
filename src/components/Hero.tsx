"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  const roles = useMemo(() => ['developer', 'penetration tester'], []);
  const [roleIndex, setRoleIndex] = useState(0); // Track the current role index
  const [typedRole, setTypedRole] = useState(''); // Current typed role
  const [isDeleting, setIsDeleting] = useState(false); // Flag to check if we are deleting characters

  useEffect(() => {
    const currentRole = roles[roleIndex]; // Get the current role
    const typingSpeed = isDeleting ? 100 : 200; // Speed of typing/deleting
    const updateTypedRole = setInterval(() => {
      if (isDeleting) {
        // If deleting, remove one character
        setTypedRole((prev) => prev.slice(0, -1));
        if (typedRole.length === 1) {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to the next role
        }
      } else {
        // If typing, add one character
        setTypedRole((prev) => currentRole.slice(0, prev.length + 1));
        if (typedRole.length === currentRole.length) {
          setIsDeleting(true); // Start deleting after the full role is typed
        }
      }
    }, typingSpeed);

    return () => clearInterval(updateTypedRole); // Cleanup on unmount
  }, [typedRole, isDeleting, roleIndex, roles]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Image 
          src="/profile.jpg" 
          alt="Profile Picture"
          width={128}
          height={128}
          className="rounded-full mx-auto mb-8 object-cover" 
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Juan<span className="text-red-500">Farrel</span>
        </h1>
        <p className="text-xl mb-8">I&apos;m a {typedRole}</p> 
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/NimonHiya" className="text-2xl hover:text-red-500 transition-colors" target="_blank" rel="noopener noreferrer">
        <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/juan-farrel-88b66a236/" className="text-2xl hover:text-red-500 transition-colors" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
          </a>
          <a href="mailto:nimonhiya@gmail.com" className="text-2xl hover:text-red-500 transition-colors">
        <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}
