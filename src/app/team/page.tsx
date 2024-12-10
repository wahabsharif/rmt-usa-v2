import React from "react";
import OurLeadership from "@/components/team/OurLeadership";
import OurProfessionals from "@/components/team/OurProfessionals";
// import TeamBanner from "@/components/team/TeamBanner";

// import OurTeamClients from "@/components/team/OurTeamClients";
// import OurTeamFacility from "@/components/team/OurTeamFacility";
// import OurTeamImpact from "@/components/team/OurTeamImpact";
// import OurTeamValues from "@/components/team/OurTeamValues";
// import TeamAbout from "@/components/team/TeamAbout";

const Team: React.FC = () => {
  return (
    <>
      {/* <TeamBanner /> */}
      {/* <OurTeamImpact/> */}
      <OurLeadership />
      <OurProfessionals />
      {/* <OurTeamValues /> */}
      {/* <OurTeamFacility /> */}
      {/* <OurTeamClients /> */}
    </>
  );
};

export default Team;
