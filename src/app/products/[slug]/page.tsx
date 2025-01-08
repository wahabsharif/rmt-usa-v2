import PageBanner from "@/components/common/PageBanner";
import ProductDetails from "@/components/products/ProductDetails";
import ProductGrid from "@/components/products/ProductGrid";
import React from "react";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  pageTitle: "Product Details",
});
export default function ProductDetailsPage() {
  return (
    <>
      <PageBanner />
      <ProductDetails />
      <ProductGrid />
    </>
  );
}
