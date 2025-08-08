import React from "react";
import Image from "next/image";

type IProgramsCardProps = {
  image: string;
  title: string;
  alt: string;
};

const ProgramsCard = ({ image, title, alt }: IProgramsCardProps) => {
  return (
    <div className="p-2.5 cursor-pointer hover:bg-pink-500 transition-all duration-500 group relative rounded-lg">
      <Image
        src={image}
        width={300}
        height={200}
        alt={alt}
        className="object-contain"
      />
      <p className="font-bold pt-2 flex justify-center">{title}</p>
    </div>
  );
};

export default ProgramsCard;
