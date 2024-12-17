import BlogPostsGrid from "@/components/blogPosts/BlogPostsGrid";
import PageBanner from "@/components/common/PageBanner";
import React from "react";

export default function BlogPostsPage() {
  return (
    <>
      <PageBanner />
      <BlogPostsGrid cards={""} />
    </>
  );
}
