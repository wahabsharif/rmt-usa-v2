import Subscribe from "@/components/common/Subscribe";
import Features from "@/components/home/Features";
import GetStartedBanner from "@/components/home/GetStartedBanner";
import ImageGrid from "@/components/home/ImageGrid";
import OurPartners from "@/components/home/OurPartners";
import dynamic from "next/dynamic";

// Dynamic imports
const Banner = dynamic(() => import("@/components/home/Banner"));
const AboutRMT = dynamic(() => import("@/components/home/AboutRMT"));
const OurServices = dynamic(() => import("@/components/home/OurServices"));
const CapabilitiesOverview = dynamic(
  () => import("@/components/home/CapabilitiesOverview")
);

export default function Home() {
  return (
    <>
      <Banner />
      <AboutRMT />
      <OurServices />
      <CapabilitiesOverview />
      <ImageGrid />
      <Subscribe />
      <Features />
      <GetStartedBanner />
      <OurPartners />
    </>
  );
}
