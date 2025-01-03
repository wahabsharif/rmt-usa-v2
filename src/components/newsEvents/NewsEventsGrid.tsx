"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@/types";
const NewsEventsGrid = ({ cards }: { cards: string | number }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const displayCount = cards === "" ? events.length : Number(cards);
  const eventsToDisplay = events.slice(0, displayCount);

  // Fetch events data from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}api/events`);
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can display a loader here
  }

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
                src={`${process.env.IMAGE_URL}/${newsEvent.image}`}
                alt={newsEvent.title}
                width={1000}
                height={1000}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl capitalize font-semibold mb-2">
                  {newsEvent.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {new Date(newsEvent.date_time).toDateString()}
                </p>
                <p className="mt-2 capitalize text-gray-700">
                  {newsEvent.description.slice(0, 100)}...
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {newsEvent.location}
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
