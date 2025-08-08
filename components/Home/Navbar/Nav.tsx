"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomLeft } from "react-icons/hi2";

import companyLogo from "@/public/images/Logo_Trans7.png";
import { NavLinks } from "@/constants/constants";

type INavProps = {
  openNav: () => void;
};

const Nav = ({ openNav }: INavProps) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.addEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-[#0d206f] shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[100] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src={companyLogo}
            width={150}
            height={150}
            alt="Company Logo"
          />
        </div>

        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-white text-lg font-semibold hover:text-pink-500 transition-all duration-200"
            >
              <p>{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Theme toggler */}
        {/* Burger menu */}
        <HiBars3BottomLeft
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-white lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
