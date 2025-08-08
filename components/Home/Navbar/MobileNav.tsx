import React from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

import { NavLinks } from "@/constants/constants";

type IMobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: IMobileNavProps) => {
  const isNavOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className="lg:hidden">
      {/* Overlay */}
      <div
        className={`fixed ${isNavOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-svh`}
      ></div>

      {/* Navlinks */}
      <div
        className={`text-white ${isNavOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-800 space-y-6 z-[1050]`}
      >
        {NavLinks.map((link) => (
          <Link
            href={link.url}
            key={link.id}
            className="text-white text-lg font-semibold hover:text-pink-500 transition-all duration-200"
          >
            <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm-text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[0.7rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
