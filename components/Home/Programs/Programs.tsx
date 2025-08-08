"use client";
import React from "react";
import { useParallax } from "react-scroll-parallax";

import programImage from "@/public/images/my-trip-my-adventure.png";

import ProgramsCard from "./ProgramsCard";

const Programs = () => {
  const cardParallax = useParallax<HTMLDivElement>({
    speed: 5,
  });

  return (
    <div className="pt-8 pb-16">
      <div className="w-[80%] mx-auto">
        {/* Title */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0d206f]">
            Programs
          </h1>
        </div>
        {/* Programs card */}
        <div
          ref={cardParallax.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-8"
        >
          <ProgramsCard
            image={programImage.src}
            title="My Trip My Adventure #1"
            alt="My Trip My Adventure #1"
          />
          <ProgramsCard
            image={programImage.src}
            title="My Trip My Adventure #2"
            alt="My Trip My Adventure #2"
          />
          <ProgramsCard
            image={programImage.src}
            title="My Trip My Adventure #3"
            alt="My Trip My Adventure #3"
          />
          <ProgramsCard
            image={programImage.src}
            title="My Trip My Adventure #4"
            alt="My Trip My Adventure #4"
          />
          <ProgramsCard
            image={programImage.src}
            title="My Trip My Adventure #5"
            alt="My Trip My Adventure #5"
          />
          <ProgramsCard
            image={programImage.src}
            title="My Trip My Adventure #6"
            alt="My Trip My Adventure #6"
          />
        </div>
      </div>
    </div>
  );
};

export default Programs;
