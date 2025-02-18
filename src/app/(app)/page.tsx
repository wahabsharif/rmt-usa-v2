import GoogleMap from "@/components/common/GoogleMap";
import Subscribe from "@/components/common/Subscribe";
import WhyUs from "@/components/home/WhyUs";
import GetStartedBanner from "@/components/home/GetStartedBanner";
import ImageGrid from "@/components/home/ImageGrid";
// import OurPartners from "@/components/home/OurPartners";
import TestimonialSlider from "@/components/home/Testimonial";
import dynamic from "next/dynamic";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
const Banner = dynamic(() => import("@/components/home/Banner"));
const AboutRMT = dynamic(() => import("@/components/home/AboutRMT"));
const OurServices = dynamic(() => import("@/components/home/OurServices"));
const CapabilitiesOverview = dynamic(
  () => import("@/components/home/CapabilitiesOverview")
);

export const metadata: Metadata = generateMetadata({
  pageTitle: "",
});
export default function Home() {
  return (
    <>
      <Banner />
      <AboutRMT />
      <OurServices />
      <CapabilitiesOverview />
      <ImageGrid />
      <Subscribe />
      <WhyUs />
      <GetStartedBanner />
      {/* <OurPartners /> */}
      <PartnersMarquee />
      <TestimonialSlider />
      <GoogleMap />
    </>
  );
}
