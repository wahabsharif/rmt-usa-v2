"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Event } from "@/types";
import NewsEventsList from "./NewsEventsList";

const NewsEventsDetail = () => {
  const params = useParams();
  const router = useRouter();

  const { slug } = params; // Get slug from params
  const [newsEvent, setNewsEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch the event by slug when the component mounts
  useEffect(() => {
    const fetchNewsEvent = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}api/events/slug/${slug}`
        );
        const data = await response.json();
        setNewsEvent(data); // Set the event data to state
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchNewsEvent();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>; // You can display a loader here
  }

  if (!newsEvent) {
    return (
      <p className="p-6 text-center text-red-500">News/Event not found.</p>
    );
  }

  return (
    <section className="flex flex-col lg:flex-row justify-between gap-2 p-4">
      <div className="max-w-4xl mx-auto flex-1">
        <h2 className="text-3xl capitalize font-bold mb-4">
          {newsEvent.title}
        </h2>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}storage/${newsEvent.image}`}
          alt={newsEvent.title}
          width={800}
          height={400}
          className="w-full h-60 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-500 text-sm mb-4">
          Published on {new Date(newsEvent.date_time).toDateString()} |
          Location: {newsEvent.location}
        </p>
        <p className="text-lg text-gray-700 capitalize mb-6">
          {newsEvent.description}
        </p>
        <button
          onClick={() => router.push("/news-and-events")}
          className="mt-6 bg-thLightBlue text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          View News & Events
        </button>
      </div>
      <div>
        <NewsEventsList cards={""} />
      </div>
    </section>
  );
};

export default NewsEventsDetail;
