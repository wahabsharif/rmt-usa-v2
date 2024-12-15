"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productsData } from "@/data/productsData";
import Image from "next/image";
import Link from "next/link";

const ProductOverview = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  // Image slider logic
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex + 1) % productsData[currentProductIndex].images.length
      );
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [currentProductIndex]);

  // Layout alternation logic
  useEffect(() => {
    const productInterval = setInterval(() => {
      setCurrentProductIndex(
        (prevIndex) => (prevIndex + 1) % productsData.length
      );
    }, 6000);

    return () => clearInterval(productInterval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <div className="p-2 flex justify-center items-center">
        <h2 className="text-3xl md:text-5xl tracking-widest text-center my-5 font-bold">
          Our Top Notch Products
        </h2>
      </div>

      {/* Loop over productsData and display in alternating rows */}
      <div className="w-full max-w-6xl">
        {productsData.map((product, index) => {
          const { title, description, images, slug } = product;
          const isReverse = index % 2 === 1; // Reverse layout for odd indices

          return (
            <div
              key={product.id}
              className={`flex flex-col md:flex-row items-center justify-between gap-8 p-6 bg-white shadow-lg rounded-lg mb-8 ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <motion.div
                className="flex-1 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex items-center justify-center w-full"
                  >
                    {/* Only render Image if the URL is not empty */}
                    {images[currentImageIndex] &&
                      images[currentImageIndex] !== "" && (
                        <Image
                          src={images[currentImageIndex]}
                          alt={title}
                          width={1000}
                          height={1000}
                          className="rounded-lg shadow-md w-full max-h-96 object-cover"
                        />
                      )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Content Section */}
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {title}
                </h2>
                <p className="text-gray-600 mb-6">{description}</p>
                <Link
                  href={`/products/${slug}`}
                  className="inline-block bg-thLightBlue text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-[#0098a1] mt-6"
                >
                  Learn More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductOverview;
