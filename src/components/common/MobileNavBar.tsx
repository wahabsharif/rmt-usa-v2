"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { navBarData } from "@/data/navBarData";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const MobileNavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleSubmenu = (index: number) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="sticky top-0 left-0 w-full block md:hidden bg-white shadow-md z-50">
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">
            <Image
              src="/images/logo/rmt-usa-logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              priority
              className="w-32"
            />
          </Link>
        </div>

        {/* Menu Toggle Button */}
        <button
          className="focus:outline-none text-gray-700"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Animated Dropdown Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: menuOpen ? "auto" : 0 }}
        className="overflow-hidden bg-gray-50"
      >
        <nav className="px-4 py-2 max-h-[70vh] overflow-y-auto">
          {" "}
          {/* Scrollable Menu */}
          {navBarData.map((item, index) => (
            <div key={index} className="mb-2">
              {/* Parent Menu Item */}
              <div className="flex items-center justify-between">
                <a
                  href={item.href}
                  className="block py-2 px-2 text-gray-800 font-medium hover:bg-blue-100 rounded"
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <button
                    className="focus:outline-none text-gray-700"
                    onClick={() => toggleSubmenu(index)}
                  >
                    {submenuOpen[index] ? (
                      <FiChevronUp className="w-5 h-5" />
                    ) : (
                      <FiChevronDown className="w-5 h-5" />
                    )}
                  </button>
                )}
              </div>
              {/* Submenu */}
              {item.submenu && submenuOpen[index] && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  className="ml-4 overflow-hidden"
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block py-1 px-2 text-gray-600 hover:bg-gray-200 rounded"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>
      </motion.div>
    </div>
  );
};

export default MobileNavBar;
