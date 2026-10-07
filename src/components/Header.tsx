import React, { useState } from 'react';
import { Link } from '../context/RouterContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4 z-30 relative shrink-0">
      {/* Brand Logo */}
      <Link className="shrink-0 z-40" href="/" onClick={() => setIsOpen(false)}>
        <img
          src="/logo.png"
          alt="MINDOVERMEDIA"
          className="h-4 sm:h-5 md:h-6 w-auto object-contain"
        />
      </Link>

      {/* Global Hamburger Menu Button (Desktop & Mobile) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white/90 hover:text-white focus:outline-none z-40 transition-colors cursor-pointer"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          /* Close Icon */
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          /* Hamburger Icon */
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16"
            />
          </svg>
        )}
      </button>

      {/* Slide-over / Dropdown Drawer (3 Links: Home, About us, Why us) */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#151933]/95 backdrop-blur-xl z-30 flex flex-col items-center justify-center gap-8">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-sans text-white hover:text-[#F2C265] transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-sans text-white hover:text-[#F2C265] transition-colors font-medium"
          >
            About us
          </Link>
          <Link
            href="/why"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-sans text-white hover:text-[#F2C265] transition-colors font-medium"
          >
            Why us
          </Link>
        </div>
      )}
    </header>
  );
}

export { Header };
