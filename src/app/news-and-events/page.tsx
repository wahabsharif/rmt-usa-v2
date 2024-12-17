import PageBanner from "@/components/common/PageBanner";
import NewsEventsGrid from "@/components/newsEvents/NewsEventsGrid";
import React from "react";

export default function NewsAndEventsPage() {
  return (
    <>
      <PageBanner />
      <NewsEventsGrid cards={""} />
    </>
  );
}
