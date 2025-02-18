import PageBanner from "@/components/common/PageBanner";
import ProductOverview from "@/components/products/ProductOverview";
import React from "react";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  pageTitle: "Products Overview",
});
export default function Products() {
  return (
    <>
      <PageBanner />
      <ProductOverview />
    </>
  );
}
