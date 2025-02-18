import React from "react";
import OurLeadership from "@/components/team/OurLeadership";
import OurProfessionals from "@/components/team/OurProfessionals";
import { generateMetadata } from "@/data/metaData";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  pageTitle: "Our Team",
});
const Team: React.FC = () => {
  return (
    <>
      <OurLeadership />
      <OurProfessionals />
    </>
  );
};

export default Team;
