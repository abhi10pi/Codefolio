'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [

  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center justify-between gap-10 px-6 py-3 bg-slate-800/40 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-md transition-all">
        {/* Brand */}
        <Link href="#hero" scroll={true}>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-transparent bg-clip-text tracking-tight cursor-pointer">
            Abhi.dev
          </span>
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium text-gray-300">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              scroll={true}
              className="relative group hover:text-white transition"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Toggle Button - floating top-right */}
      <div className="md:hidden">
        <button
          className="absolute top-5 left-30 z-50 text-gray-300 bg-slate-800/40 backdrop-blur-md p-2 rounded-xl border border-purple-500/30 shadow-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>


      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-5 shadow-xl space-y-4 text-center">
          <p className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-transparent bg-clip-text">
            Abhi.dev
          </p>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              scroll={true}
              onClick={() => setIsOpen(false)}
              className="block text-base text-gray-300 hover:text-purple-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
