import PageBanner from "@/components/common/PageBanner";
import ProductDetails from "@/components/products/ProductDetails";
import ProductSlider from "@/components/products/ProductSlider";
import React from "react";

export default function ProductDetailsPage() {
  return (
    <>
      <PageBanner />
      <ProductDetails />
      <ProductSlider />
    </>
  );
}
