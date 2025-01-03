"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types";

const BlogPostsList = ({ cards }: { cards: string | number }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}api/blogs`);
        const data = await response.json();
        setBlogPosts(data);
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
        Other Blogs
      </h2>
      <div>
        {postsToDisplay.map((blogPost) => (
          <Link href={`/blog-posts/${blogPost.slug}`} key={blogPost.id}>
            <motion.div
              className="bg-white my-2 shadow-lg rounded-lg overflow-hidden cursor-pointer flex items-center p-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Image on the left */}
              <Image
                src={`${process.env.IMAGE_URL}/${blogPost.featured_image}`}
                alt={blogPost.title}
                width={100}
                height={100}
                className="w-24 h-24 object-cover rounded-lg"
              />
              {/* Content on the right */}
              <div className="ml-4 flex-1">
                <h3 className="text-sm font-semibold mb-2">{blogPost.title}</h3>
                <p className="text-xs text-gray-500">
                  {new Date(blogPost.created_at).toDateString()}
                </p>
                <p className="mt-2 text-xs text-gray-700">
                  {blogPost.content.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 50)}
                  ...
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPostsList;
