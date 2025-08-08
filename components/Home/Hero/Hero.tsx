"use client";
import React from "react";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";

import heroLogo from "@/public/images/fifa-qatar.png";

const Hero = () => {
  const textParallax = useParallax<HTMLDivElement>({
    speed: 5,
  });

  const imageParallax = useParallax<HTMLDivElement>({
    speed: -5,
  });

  return (
    <div className="relative bg-[#0d206f] w-full h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text content */}
        <div ref={textParallax.ref}>
          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-xl font-bold text-white">
            News Feed
          </p>
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl mt-6 font-bold text-white">
            Nonton bareng Final Fifa World Cup 2022 di GBK
          </h1>
        </div>

        {/* Image content */}
        <div ref={imageParallax.ref} className="mx-auto">
          <Image src={heroLogo} width={450} height={450} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
