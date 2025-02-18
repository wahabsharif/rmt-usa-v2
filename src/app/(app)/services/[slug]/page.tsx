import PageBanner from "@/components/common/PageBanner";
import ServiceDetails from "@/components/services/ServiceDetails";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  pageTitle: "Service Details",
});

export default function ServiceDetail() {
  return (
    <>
      <PageBanner />
      <ServiceDetails />
    </>
  );
}
