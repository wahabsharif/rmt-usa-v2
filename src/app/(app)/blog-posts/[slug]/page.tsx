import BlogPostsDetail from "@/components/blogPosts/BlogPostsDetail";
import PageBanner from "@/components/common/PageBanner";
import React from "react";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  pageTitle: "Blog Post Detail",
});
export default function BlogPostDetailPage() {
  return (
    <>
      <PageBanner />
      <BlogPostsDetail />
    </>
  );
}
