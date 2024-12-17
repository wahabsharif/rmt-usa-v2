import BlogPostsGrid from "@/components/blogPosts/BlogPostsGrid";
import PageBanner from "@/components/common/PageBanner";
import NewsEventsGrid from "@/components/newsEvents/NewsEventsGrid";
import React from "react";

export default function InsightsPage() {
  return (
    <>
      <PageBanner />
      <NewsEventsGrid cards={6} />
      <BlogPostsGrid cards={6} />
    </>
  );
}
