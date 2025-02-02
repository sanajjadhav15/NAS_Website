import Image from "next/image";
import React from "react";
import Hero3 from "/public/assets/services/BIdataAnalytics/hero3.jpg";
function BiHero() {
  return (
    <section className="overflow-x-hidden">
      <div className="relative w-full ">
        <Image src={Hero3} alt="" className="w-full h-[100vh] object-cover  " />

        <div className="absolute w-full inset-y-0 flex flex-col justify-center bg-gray-800 bg-opacity-50 items-center p-4 md:pl-20 md:pr-20 sm:pl-20 sm:pr-20 ">
          <div>
            <span>
              <h1 className="text-white md:text-HeroHeading text-HeroHeading-sm font-extrabold py-4 s:w-72 ">
                Business Intelligence and Analytics{" "}
              </h1>
              <p className="md:text-SubHeading text-SubHeading-sm text-white pt-2 pb-4 md:w-full ">
                Unlock innovation with our customized Product Development
                Solutions. Stay ahead in competitive markets with comprehensive
                services, state-of-the-art tools and expert guidance.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BiHero;
