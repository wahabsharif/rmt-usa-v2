import React from "react";
import Image from "next/image";

const TeamBanner: React.FC = () => {
  return (
    <header>
      {/* Content Wrapper with spacing consistent with TopBar */}
      <div className=" relative w-full h-[50vh] md:h-[100vh]">
        {/* Background Image */}
        <Image
          src="/images/team/team1.png" // Replace with the correct image path for the team banner
          alt="Team Banner"
          layout="fill"
          objectFit="cover" // Ensures the image fills the container
          objectPosition="top" // Adjust as needed (e.g., center, top, bottom)
          priority
          className="-z-10" // Keeps the image behind other elements if necessary
        />
      </div>
    </header>
  );
};

export default TeamBanner;
