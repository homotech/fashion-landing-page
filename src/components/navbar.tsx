"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Poppins } from "next/font/google";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [openMenu]);

  return (
    <header className="relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          CHIC
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-2 items-center z-50 relative"
        >
          <div
            className={`w-8 h-[2px] bg-black transition-transform ${
              openMenu ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-[2px]  bg-black transition-opacity ${
              openMenu ? "hidden" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-[2px] bg-black transition-transform ${
              openMenu ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Women
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Men
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Accessories
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Shop Now Button */}
        <button className="hidden md:block px-4 py-2 bg-gray-800 text-white rounded-md">
          Shop Now
        </button>

        {/* Mobile Menu */}
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 z-40 ${
            openMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-6 pt-32 flex flex-col space-y-4">
            <Link
              href="#"
              onClick={toggleMenu}
              className={` ${PoppinsFont.className} block text-2xl font-medium text-gray-800 hover:text-gray-400`}
            >
              Women
            </Link>
            <Link
              href="#"
              onClick={toggleMenu}
              className={` ${PoppinsFont.className} block text-2xl font-medium text-gray-800 hover:text-gray-400`}
            >
              Men
            </Link>
            <Link
              href="#"
              onClick={toggleMenu}
              className={` ${PoppinsFont.className} block text-2xl font-medium text-gray-800 hover:text-gray-400`}
            >
              Accessories
            </Link>
            <Link
              href="#"
              onClick={toggleMenu}
              className={` ${PoppinsFont.className} block text-2xl font-medium text-gray-800 hover:text-gray-400`}
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
