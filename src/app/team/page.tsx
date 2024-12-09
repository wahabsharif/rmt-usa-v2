
import OurLeadership from "@/components/team/OurLeadership";
import OurTeam from "@/components/team/OurTeam";
import OurTeamClients from "@/components/team/OurTeamClients";
import OurTeamFacility from "@/components/team/OurTeamFacility";
import OurTeamImpact from "@/components/team/OurTeamImpact";
import OurTeamValues from "@/components/team/OurTeamValues";
import TeamAbout from "@/components/team/TeamAbout";
import TeamBanner from "@/components/team/TeamBanner";
import React from "react";

const Team: React.FC = () => {
    return (
        <>
          <TeamBanner/>
          
          {/* <OurTeamImpact/> */}
          <OurLeadership/>
          <OurTeam/>
          {/* <OurTeamValues/>
          <OurTeamFacility/>
          <OurTeamClients/> */}
        </>
    );
};

export default Team;
