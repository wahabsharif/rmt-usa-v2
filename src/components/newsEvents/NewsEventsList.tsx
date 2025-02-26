"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Event } from "@/types";

const NewsEventsList = ({ cards }: { cards: string | number }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch events data from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/events`
        );
        setEvents(response.data);
      } catch (err) {
        console.error("Error fetching events data:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const displayCount = cards === "" ? events.length : Number(cards);
  const eventsToDisplay = events.slice(0, displayCount);

  if (loading) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-thDarkBlue tracking-wider">
        News & Events
      </h2>
      <div>
        {eventsToDisplay.map((newsEvent) => (
          <Link href={`/news-and-events/${newsEvent.slug}`} key={newsEvent.id}>
            <motion.div
              className="bg-white my-2 shadow-lg rounded-lg overflow-hidden cursor-pointer flex items-center p-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Event Image */}
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${newsEvent.image}`}
                alt={newsEvent.title}
                width={100}
                height={100}
                className="w-24 h-24 object-cover rounded-lg"
              />
              {/* Event Details */}
              <div className="ml-4 flex-1">
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

export default NewsEventsList;
