'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-extrabold tracking-wide">Poornima</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a
            href="#about"
            className="hover:text-blue-400 transition duration-300 border-b-2 border-transparent hover:border-blue-400"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-blue-400 transition duration-300 border-b-2 border-transparent hover:border-blue-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition duration-300 border-b-2 border-transparent hover:border-blue-400"
          >
            Contact
          </a>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4">
          <a
            href="#about"
            className="block py-2 text-lg font-medium hover:text-blue-400 transition duration-300 border-b border-gray-700"
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 text-lg font-medium hover:text-blue-400 transition duration-300 border-b border-gray-700"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 text-lg font-medium hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
