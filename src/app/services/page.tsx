import Banner from "@/components/services/Banner";
// import BiomaterialSynthesis from "@/components/services/ManufacturingConsultancy";
// import ProductDesign from "@/components/services/ProductDesign";
// import QualityTesting from "@/components/services/QualityTesting";
// import EmbeddedSystem from "@/components/services/RegulatoryAffairs";
import ServicesGrid from "@/components/services/ServicesGid";
// import SoftwareDevelopment from "@/components/services/SoftwareDevelopment";
import React from "react";
const Services: React.FC = () => {
  return (
    <>
      <Banner />
      <ServicesGrid />
      {/* <ProductDesign />
      <EmbeddedSystem />
      <BiomaterialSynthesis />
      <SoftwareDevelopment />
      <QualityTesting /> */}
    </>
  );
};

export default Services;
