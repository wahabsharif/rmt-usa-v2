"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";
import { newsEventsData } from "@/data/insightsData";
import Image from "next/image";

const NewsEventsDetail = () => {
  const params = useParams();
  const router = useRouter();

  const { slug } = params; // Get slug from params

  // Find the news/event by slug
  const newsEvent = newsEventsData.find((item) => item.slug === slug);

  if (!newsEvent) {
    return (
      <p className="p-6 text-center text-red-500">News/Event not found.</p>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{newsEvent.title}</h1>
      <Image
        src={newsEvent.imageUrl}
        alt={newsEvent.title}
        width={800}
        height={400}
        className="w-full h-60 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-500 text-sm mb-4">
        Published on {newsEvent.publishedDate.toDateString()} by{" "}
        {newsEvent.author} | Source: {newsEvent.source}
      </p>
      <p className="text-lg text-gray-700 mb-6">{newsEvent.content}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {newsEvent.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-thLightBlue text-sm px-3 py-1 rounded-lg"
          >
            #{tag}
          </span>
        ))}
      </div>
      <button
        onClick={() => router.push("/news-and-events")}
        className="mt-6 bg-thLightBlue text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        View News & Events
      </button>
    </div>
  );
};

export default NewsEventsDetail;
