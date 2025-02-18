import BlogPostsGrid from "@/components/blogPosts/BlogPostsGrid";
import PageBanner from "@/components/common/PageBanner";
import React from "react";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  pageTitle: "Blog Posts",
});
export default function BlogPostsPage() {
  return (
    <>
      <PageBanner />
      <BlogPostsGrid cards={""} />
    </>
  );
}
