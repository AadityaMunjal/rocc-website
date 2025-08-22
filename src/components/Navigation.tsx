"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface NavigationProps {
  isHomePage?: boolean;
}

export default function Navigation({ isHomePage = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-12 py-4">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={75}
          className="w-32 md:w-[150px]"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end">
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              href="/"
              className="text-white text-sm hover:text-red-500 transition-colors duration-300 relative group"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white text-sm hover:text-red-500 transition-colors duration-300 relative group"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white text-sm hover:text-red-500 transition-colors duration-300 relative group"
            >
              CONTACT/INFO
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/links"
              className="text-white text-sm hover:text-red-500 transition-colors duration-300 relative group"
            >
              LINKS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/join"
              className="text-white text-sm hover:text-red-500 transition-colors duration-300 relative group"
            >
              JOIN
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white text-xl z-50 relative"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-48 bg-red-500 z-40 transition-transform duration-500 ${
          isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white text-xl"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="pt-16 px-8">
          <li className="mb-4">
            <Link
              href="/"
              className="text-white text-sm block py-2"
              onClick={toggleMenu}
            >
              HOME
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/about"
              className="text-white text-sm block py-2"
              onClick={toggleMenu}
            >
              ABOUT
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/contact"
              className="text-white text-sm block py-2"
              onClick={toggleMenu}
            >
              CONTACT/INFO
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/links"
              className="text-white text-sm block py-2"
              onClick={toggleMenu}
            >
              LINKS
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/join"
              className="text-white text-sm block py-2"
              onClick={toggleMenu}
            >
              JOIN
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}
