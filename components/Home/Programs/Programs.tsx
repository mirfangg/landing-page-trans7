import React from "react";

import programImage from "@/public/images/my-trip-my-adventure.png";

import ProgramsCard from "./ProgramsCard";

const Programs = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        {/* Title */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0d206f]">
            Our Programs
          </h1>
        </div>
        {/* Programs card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-16">
          <ProgramsCard
            image={programImage.src}
            title="My Trip My Adventure"
            alt="My Trip My Adventure"
          />
          <ProgramsCard
            image={programImage.src}
            title="My Trip My Adventure"
            alt="My Trip My Adventure"
          />
          <ProgramsCard
            image={programImage.src}
            title="My Trip My Adventure"
            alt="My Trip My Adventure"
          />
          <ProgramsCard
            image={programImage.src}
            title="My Trip My Adventure"
            alt="My Trip My Adventure"
          />
          <ProgramsCard
            image={programImage.src}
            title="My Trip My Adventure"
            alt="My Trip My Adventure"
          />
          <ProgramsCard
            image={programImage.src}
            title="My Trip My Adventure"
            alt="My Trip My Adventure"
          />
        </div>
      </div>
    </div>
  );
};

export default Programs;
