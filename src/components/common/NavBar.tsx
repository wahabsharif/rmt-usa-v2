"use client";

import React, { useState } from "react";
import { navBarData } from "@/data/navBarData";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowSortedUp } from "react-icons/ti";

const NavBar: React.FC = () => {
  const [submenuOpenIndex, setSubmenuOpenIndex] = useState<number | null>(null);

  return (
    <nav className="sticky top-0 bg-gray-100 backdrop-blur-md w-full z-50 shadow-lg hidden md:block transition ease-in-out">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left Side: Logo */}
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

        {/* Center: Menu */}
        <div className="relative">
          <ul className="flex space-x-6">
            {navBarData.map((menuItem, index) => (
              <motion.li
                key={menuItem.label}
                className="relative group text-black"
                onMouseEnter={() =>
                  menuItem.submenu && setSubmenuOpenIndex(index)
                }
                onMouseLeave={() => setSubmenuOpenIndex(null)}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={menuItem.href}>
                  <motion.div
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex items-center "
                  >
                    {menuItem.label}
                    {/* Arrow Icon - Appears when submenu exists */}
                    {menuItem.submenu && (
                      <motion.div
                        className="ml-1"
                        initial={{ rotate: 0 }}
                        animate={{
                          rotate: submenuOpenIndex === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <TiArrowSortedUp />
                      </motion.div>
                    )}
                  </motion.div>
                </Link>
                {/* Submenu */}
                <AnimatePresence>
                  {menuItem.submenu && submenuOpenIndex === index && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 w-48 shadow-xl"
                    >
                      {menuItem.submenu.map((submenuItem) => (
                        <motion.li
                          key={submenuItem.label}
                          whileHover={{
                            scale: 1.1,
                          }}
                          transition={{ type: "spring", stiffness: 200 }}
                          className="bg-gray-100"
                        >
                          <Link
                            href={submenuItem.href}
                            className="block px-4 py-2"
                          >
                            {submenuItem.label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
