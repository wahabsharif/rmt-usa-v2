"use client";
import React from "react";
import { motion } from "framer-motion";
import { blogPostsData } from "@/data/insightsData";
import Image from "next/image";
import Link from "next/link";

const BlogPostsGrid = ({ cards }: { cards: string | number }) => {
  const displayCount = cards === "" ? blogPostsData.length : Number(cards);
  const postsToDisplay = blogPostsData.slice(0, displayCount);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-thDarkBlue tracking-widest">
        Blog Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {postsToDisplay.map((post) => (
          <Link href={`/blog-posts/${post.slug}`} key={post.id}>
            <motion.div
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={1000}
                height={1000}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500">
                  {post.publishedDate.toDateString()}
                </p>
                <p className="mt-2 text-gray-700">
                  {post.content.slice(0, 100)}...
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.category}</span>
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

export default BlogPostsGrid;
