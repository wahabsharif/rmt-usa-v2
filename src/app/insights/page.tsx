import BlogPostsGrid from "@/components/blogPosts/BlogPostsGrid";
import PageBanner from "@/components/common/PageBanner";
import NewsEventsGrid from "@/components/newsEvents/NewsEventsGrid";
import React from "react";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  pageTitle: "Insights",
});
export default function InsightsPage() {
  return (
    <>
      <PageBanner />
      <NewsEventsGrid cards={6} />
      <BlogPostsGrid cards={6} />
    </>
  );
}
