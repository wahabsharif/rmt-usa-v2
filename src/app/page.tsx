import Banner from "@/components/home/Banner";
import OurServices from "@/components/home/OurServices";
import CapabilitiesOverview from "@/components/home/CapabilitiesOverview";
import AboutRMT from "@/components/home/AboutRMT";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutRMT />
      <OurServices />
      <CapabilitiesOverview />
    </>
  );
}
