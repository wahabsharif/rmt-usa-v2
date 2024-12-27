"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { blogPostsData } from "@/data/insightsData";
import Image from "next/image";

const BlogPostsDetail = () => {
  const params = useParams();
  const router = useRouter();

  const { slug } = params; // Get slug from params

  // Find the blog post by slug
  const blogPost = blogPostsData.find((post) => post.slug === slug);

  if (!blogPost) {
    return <p className="p-6 text-center text-red-500">Blog post not found.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{blogPost.title}</h2>
      <Image
        src={blogPost.imageUrl}
        alt={blogPost.title}
        width={800}
        height={400}
        className="w-full h-60 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-500 text-sm mb-4">
        Published on {blogPost.publishedDate.toDateString()} by{" "}
        {blogPost.author}
      </p>
      <article className="prose lg:prose-xl">
        <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
      </article>
      <div className="flex flex-wrap gap-2 mt-4">
        {blogPost.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-thLightBlue text-sm px-3 py-1 rounded-lg"
          >
            #{tag}
          </span>
        ))}
      </div>
      <button
        onClick={() => router.push("/blog-posts")}
        className="mt-6 bg-thLightBlue text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        View All Blog Posts
      </button>
    </div>
  );
};

export default BlogPostsDetail;
