"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { productsData } from "@/data/productsData";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion"; // Import motion from framer-motion
import GetAQuote from "../common/GetAQuote";

const ProductDetails = () => {
  const params = useParams();
  const slug = params.slug;

  // Find the product by slug
  const product = productsData.find((item) => item.slug === slug);

  const [selectedImage, setSelectedImage] = useState<string>(
    product && product.images ? product.images[0] : ""
  );

  if (!product) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800">Product not found</h1>
        <Link
          href={"/products"}
          className="mt-4 bg-thLightBlue text-white font-semibold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out hover:bg-[#0098a1]"
        >
          Back to Products
        </Link>
      </section>
    );
  }

  const { title, description, shortDescription, images, keyFeature } = product;

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <div className="p-2 flex justify-center items-center">
        <h2 className="text-4xl md:text-5xl tracking-widest text-center my-5 font-bold">
          {title}
        </h2>
      </div>
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Large Image Display with motion */}
            <div className="w-full h-auto">
              <motion.div
                key={selectedImage} // Adding key ensures the animation triggers on image change
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }} // Set duration for the fade-in/out effect
                className="w-full h-auto"
              >
                <Image
                  src={selectedImage}
                  alt={title}
                  width={1000}
                  height={1000}
                  className="rounded-lg shadow-md w-full object-cover max-h-96"
                />
              </motion.div>
            </div>
            {/* Thumbnail Images */}
            <div className="flex justify-center space-x-4 mt-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`cursor-pointer border-2 rounded-lg overflow-hidden w-20 h-20 shadow-sm transition-transform duration-300 hover:scale-110 ${
                    selectedImage === image ? "border-thRed" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={title}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <p className="text-gray-600">{description}</p>
            <p className="text-lg text-gray-600">{shortDescription}</p>

            {/* Conditionally render Key Features section */}
            {keyFeature && keyFeature.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-gray-800">
                  Key Features:
                </h3>
                <ul className="list-inside space-y-2 text-gray-600">
                  {keyFeature.map((feature, index) => (
                    <li className="flex justify-start" key={index}>
                      <MdOutlineKeyboardDoubleArrowRight className="text-thDarkBlue text-2xl font-bold mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <GetAQuote />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
