"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import axios from "axios"; // Import axios
import { BlogPost } from "@/types";

const BlogPostsGrid = ({ cards }: { cards: string | number }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}api/blogs`
        ); // Use axios to fetch data
        setBlogPosts(response.data); // Use response.data to access the result
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const displayCount = cards === "" ? blogPosts.length : Number(cards);
  const postsToDisplay = blogPosts.slice(0, displayCount);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-thDarkBlue tracking-widest">
        Blog Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {postsToDisplay.map((blogPost) => (
          <Link href={`/blog-posts/${blogPost.slug}`} key={blogPost.id}>
            <motion.div
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${blogPost.featured_image}`}
                alt={blogPost.title}
                width={1000}
                height={1000}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{blogPost.title}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(blogPost.created_at).toDateString()}
                </p>
                <p className="mt-2 text-gray-700">
                  {blogPost.content
                    .replace(/<\/?[^>]+(>|$)/g, "")
                    .slice(0, 100)}
                  ...
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {blogPost.category}
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

export default BlogPostsGrid;
