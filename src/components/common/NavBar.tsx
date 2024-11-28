"use client";

import React, { useState } from "react";
import { navBarData } from "@/data/navBarData"; // Make sure this data exists in your project
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowSortedUp } from "react-icons/ti";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation"; // Import usePathname hook

const NavBar: React.FC = () => {
    const [submenuOpenIndex, setSubmenuOpenIndex] = useState<number | null>(null);
    const [nestedSubmenuOpenIndex, setNestedSubmenuOpenIndex] = useState<number | null>(null);
    const pathname = usePathname(); // Get the current path using the usePathname hook

    return (
        <nav className="bg-gray-100  ml-[3px] mr-[3px] backdrop-blur-md w-full shadow-lg hidden md:block transition ease-in-out">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Left Side: Logo */}
                <div className="flex items-center space-x-6">
                    <Link href="/">
                        <Image
                            src="/images/logo/logo.png"
                            alt="Logo"
                            width={1000}
                            height={1000}
                            priority
                            className="w-32"
                        />
                    </Link>
                </div>

                {/* Right Side: Navigation Menu */}
                <div className="flex items-center space-x-6 justify-center flex-grow">
                    <ul className="flex space-x-6 w-full justify-evenly">
                        {navBarData.map((menuItem, index) => {
                            if (menuItem.isButton) return null;

                            // Check if the current route matches the menu item href
                            const isActive = pathname === menuItem.href;

                            return (
                                <motion.li
                                    key={menuItem.label}
                                    className="relative group text-black dark:text-white"
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
                                            className={`flex items-center text-[#2E2E2E] font-bold ${isActive ? 'text-[#00B4C5] border-b-2 border-[#00B4C5]' : ''}`} // Added conditional active classes
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
                                                className="absolute left-0 mt-2 w-48 space-y-1"
                                            >
                                                {menuItem.submenu.map((submenuItem, subIndex) => (
                                                    <motion.li
                                                        key={submenuItem.label}
                                                        onMouseEnter={() => setNestedSubmenuOpenIndex(subIndex)}
                                                        onMouseLeave={() => setNestedSubmenuOpenIndex(null)}
                                                        whileHover={{
                                                            scale: 1.1,
                                                        }}
                                                        transition={{ type: "spring", stiffness: 200 }}
                                                        className="bg-gray-100 backdrop-blur-md rounded-xl shadow-lg"
                                                    >
                                                        <Link
                                                            href={submenuItem.href}
                                                            className="block px-4 py-2 font-bold text-[#2E2E2E]" // Added font-bold here
                                                        >
                                                            {submenuItem.label}
                                                        </Link>

                                                        {/* Nested Submenu */}
                                                        {submenuItem.submenu && nestedSubmenuOpenIndex === subIndex && (
                                                            <motion.ul
                                                                initial={{ opacity: 0, x: 10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                exit={{ opacity: 0, x: 10 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="absolute left-full top-0 mt-2 w-48 space-y-1"
                                                            >
                                                                {submenuItem.submenu.map((nestedItem) => (
                                                                    <motion.li
                                                                        key={nestedItem.label}
                                                                        whileHover={{
                                                                            scale: 1.1,
                                                                        }}
                                                                        transition={{ type: "spring", stiffness: 200 }}
                                                                        className="bg-gray-100 backdrop-blur-md rounded-xl shadow-lg"
                                                                    >
                                                                        <Link
                                                                            href={nestedItem.href}
                                                                            className="block px-4 py-2 font-bold text-[#2E2E2E]" // Added font-bold here
                                                                        >
                                                                            {nestedItem.label}
                                                                        </Link>
                                                                    </motion.li>
                                                                ))}
                                                            </motion.ul>
                                                        )}
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
