"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";

const OurApproach = () => {
  return (
    <div className="w-full bg-white md:pt-6 pt-2">
      <div className="w-full flex flex-col justify-center items-center md:gap-6 gap-3">
        <motion.h1
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className="md:text-Heading text-Heading-sm font-bold text-blue950"
        >
          Our Approach
        </motion.h1>
        <motion.p
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className="md:text-Para text-Para-sm md:w-1/3 w-full text-center"
        >
          We implement a robust QA strategy designed to identify and mitigate
          potential issues at every phase of development.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }} //X:100
        whileInView={{ opacity: 1, scale: 1 }} //y:100
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-12"
      >
        <div className="grid gap-8 sm:row-gap- grid-cols-2 md:grid-cols-3">
          <div className="md:p-8 p-2 border-b sm:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue4 sm:w-16 sm:h-16">
                <h1 className="font-bold text-xl ">1</h1>
              </div>
              <h6 className="mb-2  md:text-CardHeading text-md font-semibold leading-5">
                Detailed Requirements Analysis
              </h6>
              <p className="mb-3 md:text-Para text-Para-sm text-gray-800">
                Understanding and documenting your specific needs to create
                targeted and effective test plans.
              </p>
            </div>
          </div>
          <div className="md:p-8 p-2 border-b lg:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue4 sm:w-16 sm:h-16">
                <h1 className="font-bold text-xl">2</h1>
              </div>
              <h6 className="mb-2 md:text-CardHeading text-md font-semibold leading-5">
                Strategic Test Planning
              </h6>
              <p className="mb-3 md:text-Para text-Para-sm text-gray-800">
                Developing detailed plans that outline the scope, objectives,
                resources and schedule for testing activities.
              </p>
            </div>
          </div>
          <div className="md:p-8 p-2 border-b sm:border-r lg:border-r-0">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue4 sm:w-16 sm:h-16">
                <h1 className="font-bold text-xl">3</h1>
              </div>
              <h6 className="mb-2 md:text-CardHeading text-md font-semibold leading-5">
                Thorough Test Case Development
              </h6>
              <p className="mb-3 md:text-Para text-Para-sm text-gray-800">
                Crafting exhaustive test cases to ensure all functionalities are
                thoroughly examined.
              </p>
            </div>
          </div>
          <div className="md:p-8 p-2 border-b lg:border-b-0 lg:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue4 sm:w-16 sm:h-16">
                <h1 className="font-bold text-xl">4</h1>
              </div>
              <h6 className="mb-2 md:text-CardHeading text-md font-semibold leading-5">
                Efficient Defect Management{" "}
              </h6>
              <p className="mb-3 md:text-Para text-Para-sm text-gray-800">
                Logging, tracking, and prioritizing defects to ensure prompt
                resolution and prevent recurrence.
              </p>
            </div>
          </div>
          <div className="md:p-8 p-2 border-b sm:border-b-0 sm:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue4 vsm:w-16 sm:h-16">
                <h1 className="font-bold text-xl">5</h1>
              </div>
              <h6 className="mb-2 md:text-CardHeading text-md font-semibold leading-5">
                Comprehensive Regression Testing{" "}
              </h6>
              <p className="mb-3 md:text-Para text-Para-sm text-gray-800">
                Ensuring that recent updates do not negatively impact existing
                features through systematic retesting.
              </p>
            </div>
          </div>
          <div className="md:p-8 p-2">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue4 sm:w-16 sm:h-16">
                <h1 className="font-bold text-xl">6</h1>
              </div>
              <h6 className="mb-2 md:text-CardHeading text-md font-semibold leading-5">
                User Acceptance Testing(UAT){" "}
              </h6>
              <p className="mb-3 md:text-Para text-Para-sm text-gray-800">
                Involving end-users in testing to confirm that the software
                meets their expectations and requirements before final release.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurApproach;
