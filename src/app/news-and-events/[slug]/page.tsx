import PageBanner from "@/components/common/PageBanner";
import NewsEventsDetail from "@/components/newsEvents/NewsEventsDetail";
import React from "react";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  pageTitle: "News Events",
});
export default function NewsAndEventsDetailPage() {
  return (
    <>
      <PageBanner />
      <NewsEventsDetail />
    </>
  );
}
