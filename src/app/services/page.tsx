import Banner from "@/components/services/Banner";
import ManufacturingConsultancy from "@/components/services/ManufacturingConsultancy";
import ProductDesign from "@/components/services/ProductDesign";
import QualityTesting from "@/components/services/QualityTesting";
import RegulatoryAffairs from "@/components/services/RegulatoryAffairs";
import React from "react";
const Services: React.FC = () => {
  return (
    <>
    <Banner/>
   <ProductDesign/>
   <QualityTesting/>
   <RegulatoryAffairs/>
   <ManufacturingConsultancy/>
    </>
  );
};

export default Services;
