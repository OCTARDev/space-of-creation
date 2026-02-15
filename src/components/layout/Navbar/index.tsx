'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FiChevronDown,
  FiGlobe,
} from 'react-icons/fi';
import {
  PiCubeFocus,
  PiFlask,
  PiHandPointing,
  PiSparkle,
  PiHeart,
  PiTent,
  PiVirtualReality,
} from 'react-icons/pi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const solutions = [
    { name: 'OCTAR Ecosystem', icon: <PiCubeFocus />, href: '/octar' },
    { name: 'VCLAB Virtual Labs', icon: <PiFlask />, href: '/vclab' },
    { name: 'Life Digital Environment', icon: <PiHandPointing />, href: '/life' },
    { name: 'AR Stories & Campaigns', icon: <PiSparkle />, href: '/ar-stories' },
    { name: 'Learning Support', icon: <PiHeart />, href: '/learning-support' },
    { name: 'Educational Planetarium', icon: <PiTent />, href: '/planetarium' },
    { name: 'VR Experiences', icon: <PiVirtualReality />, href: '/vr' },
  ];

  return (
    <nav className="top-0 left-0 right-0 py-6 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={500}
              height={500}
              className="hidden sm:block h-auto w-44"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ms-auto relative">

            <Link
              href="/"
              className="text-gray-900 font-bold border-b-2 border-purple-500 pb-1"
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <button className="text-gray-600 font-bold hover:text-gray-900 flex items-center gap-1">
                Solutions
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    openDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Panel */}
              <div
                className={`absolute top-10 left-0 w-80 bg-white rounded-2xl shadow-xl p-5 transition-all duration-300 ${
                  openDropdown
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="space-y-4">
                  {solutions.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      <span className="text-xl text-purple-600">
                        {item.icon}
                      </span>
                      <span className="font-medium text-gray-700">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/impact"
              className="text-gray-600 font-bold hover:text-gray-900"
            >
              Impact
            </Link>

            <Link
              href="/about"
              className="text-gray-600 font-bold hover:text-gray-900"
            >
              About us
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#A88EEF] to-[#79B9CE] text-white px-4 py-2.5 rounded-lg font-medium hover:opacity-90 transition ml-3"
            >
              Contact us
            </Link>

            <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <FiGlobe className="w-5 h-5" />
              <span className="font-medium">En</span>
              <FiChevronDown />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white  border-t px-4 py-4 space-y-3">
          <Link href="/" className="block font-bold">
            Home
          </Link>
          <Link href="/solutions" className="block">
            Solutions
          </Link>
          <Link href="/impact" className="block">
            Impact
          </Link>
          <Link href="/about" className="block">
            About us
          </Link>
          <Link
            href="/contact"
            className="block bg-purple-500 text-white px-2 py-2 rounded-lg"
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
