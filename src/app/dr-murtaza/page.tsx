import { DrMurtaza } from "@/components/DrMurtaza";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  pageTitle: "Prof.Dr. Murtaza Najabat Ali",
});
export default function BlogPostsPage() {
  return (
    <>
      <DrMurtaza />
    </>
  );
}
