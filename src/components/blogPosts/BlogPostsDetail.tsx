"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BlogPost } from "@/types";
import BlogPostsList from "./BlogPostsList";

const BlogPostsDetail = () => {
  const params = useParams();
  const router = useRouter();
  const { slug } = params; // Get slug from params

  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `${process.env.API_URL}api/blogs/slug/${slug}`
        );
        if (!response.ok) {
          throw new Error(`Blog post not found: ${response.status}`);
        }
        const data = await response.json();
        setBlogPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setBlogPost(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlogPost();
  }, [slug]);

  // Format the date after blogPost is fetched
  useEffect(() => {
    if (blogPost && blogPost.created_at) {
      setFormattedDate(new Date(blogPost.created_at).toDateString());
    }
  }, [blogPost]);

  if (loading) {
    return <p className="p-6 text-center">Loading...</p>;
  }

  if (!blogPost) {
    return (
      <p className="p-6 text-center text-red-500">Blog Detail not found.</p>
    );
  }

  const formattedDateForDisplay = blogPost.created_at
    ? new Date(blogPost.created_at).toLocaleDateString()
    : "";

  // Ensure tags is always an array before rendering
  const tags = Array.isArray(blogPost.tags) ? blogPost.tags : [];

  return (
    <section className="flex flex-col lg:flex-row justify-between gap-2 p-4">
      <div className="max-w-4xl mx-auto flex-1">
        <h2 className="text-xl md:text-3xl font-bold mb-4">{blogPost.title}</h2>
        <Image
          src={`${process.env.IMAGE_URL}/${blogPost.featured_image}`}
          alt={blogPost.title}
          width={800}
          height={400}
          className="w-full h-60 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-500 text-sm mb-4">
          Published on {formattedDateForDisplay}
        </p>
        <article className="prose lg:prose-xl">
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </article>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-thLightBlue text-sm px-3 py-1 rounded-lg"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        <button
          onClick={() => router.push("/blog-posts")}
          className="mt-6 bg-thLightBlue text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          View All Blog Posts
        </button>
      </div>

      <div>
        <BlogPostsList cards={""} />
      </div>
    </section>
  );
};

export default BlogPostsDetail;
