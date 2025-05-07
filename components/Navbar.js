'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-blue-400 hover:text-white transition duration-300">Poornima</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="#about" className="hover:text-blue-400 transition duration-300">About</Link>
          <Link href="#projects" className="hover:text-blue-400 transition duration-300">Projects</Link>
          <Link href="#contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4 text-lg font-medium">
          <Link href="#about" onClick={toggleMenu} className="block hover:text-blue-400">About</Link>
          <Link href="#projects" onClick={toggleMenu} className="block hover:text-blue-400">Projects</Link>
          <Link href="#contact" onClick={toggleMenu} className="block hover:text-blue-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;