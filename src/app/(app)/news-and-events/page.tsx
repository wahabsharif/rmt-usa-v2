import PageBanner from "@/components/common/PageBanner";
import NewsEventsGrid from "@/components/newsEvents/NewsEventsGrid";
import React from "react";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  pageTitle: "News Events",
});
export default function NewsAndEventsPage() {
  return (
    <>
      <PageBanner />
      <NewsEventsGrid cards={""} />
    </>
  );
}
