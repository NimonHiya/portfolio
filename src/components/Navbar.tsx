"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the burger menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Portofolio<span className="text-red-500">KU</span>
          </Link>
          <div className="hidden md:flex space-x-8 ml-auto"> 
            <Link href="/" className="hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-red-500 transition-colors">
              Services {/* Added Services link */}
            </Link>
            <Link href="/project" className="hover:text-red-500 transition-colors">
              Projects {/* Added Projects link */}
            </Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* Burger Button */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/80 backdrop-blur-sm">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <Link href="/" className="block hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="block hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="/services" className="block hover:text-red-500 transition-colors">
              SKILLS
            </Link>
            <Link href="/project" className="block hover:text-red-500 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="block hover:text-red-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
