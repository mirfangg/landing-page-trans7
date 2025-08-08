import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0d206f] border-t-6 border-black">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div>
            <h1 className="mt-4 text-gray-200 font-bold text-xl">
              TRANS 7 CORP
            </h1>
          </div>
          <p className="mt-4 text-gray-200 font-medium text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            omnis dignissimos laudantium alias quibusdam rem mollitia corporis,
            repudiandae praesentium odit blanditiis magni dolore maiores sint
            eaque non recusandae? Nobis, dicta!
          </p>
        </div>

        <div>
          <div>
            <h1 className="mt-4 text-gray-200 font-bold text-xl">
              Follow Our Social Media
            </h1>
          </div>
          <p className="mt-4 text-gray-200 font-medium text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            omnis dignissimos laudantium alias quibusdam rem mollitia corporis,
            repudiandae praesentium odit blanditiis magni dolore maiores sint
            eaque non recusandae? Nobis, dicta!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
