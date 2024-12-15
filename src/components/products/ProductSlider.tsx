"use client";
import React from "react";
import { productsData } from "@/data/productsData";
import Image from "next/image";
import Link from "next/link";

const ProductGrid = () => {
  return (
    <div className="w-full mx-auto p-8 bg-gray-100">
      <div className="p-2 flex justify-center items-center">
        <h2 className="text-4xl md:text-5xl tracking-widest text-center my-5 font-bold">
          Looking For Other Product?
        </h2>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center border p-4 rounded-lg shadow-md bg-white"
          >
            <div className="flex-shrink-0 w-full h-48">
              <Image
                src={product.images[0]}
                alt={product.title}
                width={500}
                height={500}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2 text-center">
              {product.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-4">
              {product.description}
            </p>
            <Link
              href={`/products/${product.slug}`}
              className="text-thRed hover:underline"
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
