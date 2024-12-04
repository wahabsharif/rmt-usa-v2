import React from "react";
import { imageGridData } from "@/data/imageGridData";
import Image from "next/image";

const ImageGrid: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imageGridData.map((card) => (
          <div key={card.id} className="relative group overflow-hidden">
            {/* Image */}
            <Image
              src={card.image}
              alt={card.heading}
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-300"
              width={1000}
              height={1000}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="text-white p-4 w-full bg-black bg-opacity-70 tracking-widest">
                <h3 className="text-lg font-bold uppercase">{card.heading}</h3>
                <p className="text-sm capitalize">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
