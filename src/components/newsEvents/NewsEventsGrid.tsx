"use client";
import React from "react";
import { motion } from "framer-motion";
import { newsEventsData } from "@/data/insightsData";
import Image from "next/image";
import Link from "next/link";

const NewsEventsGrid = ({ cards }: { cards: string | number }) => {
  const displayCount = cards === "" ? newsEventsData.length : Number(cards);
  const eventsToDisplay = newsEventsData.slice(0, displayCount);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-thDarkBlue tracking-widest">
        News & Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsToDisplay.map((newsEvent) => (
          <Link href={`/news-and-events/${newsEvent.slug}`} key={newsEvent.id}>
            <motion.div
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={newsEvent.imageUrl}
                alt={newsEvent.title}
                width={1000}
                height={1000}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {newsEvent.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {newsEvent.publishedDate.toDateString()}
                </p>
                <p className="mt-2 text-gray-700">
                  {newsEvent.content.slice(0, 100)}...
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {newsEvent.category}
                  </span>
                  <span className="text-thLightBlue text-sm font-medium hover:underline">
                    Read More
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsEventsGrid;
