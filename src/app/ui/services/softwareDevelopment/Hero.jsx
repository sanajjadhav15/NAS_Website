"use client";
import React from "react";
import { motion } from "framer-motion";
import SoftDev from "/public/assets/services/SoftDev/SoftDev1.jpg";
import Image from "next/image";
import Button2 from "@/components/ui/Button2";

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse pt-16 py-6 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image src={SoftDev} alt="" />
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
        viewport={{ once: true }}
        className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
      >
        <div className="md:mb-16 md:py-4 py-2 lg:py-32 lg:max-w-lg lg:pr-5">
          <p className="inline-block md:mb-4 mb-2 text-xs font-semibold tracking-wider text-blue2 uppercase rounded-full bg-teal-accent-400">
            Welcome to
          </p>
          <h2 className="mb-5 md:text-HMain text-HMain-sm text-center font-bold tracking-tight text-blue950 sm:text-4xl sm:leading-none leading-10">
            NAS Software <br className="hidden md:block" />
            Development{" "}
            <span className="inline-block text-blue2">Solutions</span>
          </h2>
          <p className="pr-5 mb-7 text-center md:text-para text-para-sm text-gray-800 md:text-lg">
            We transform your ideas into reality. Our team of expert developers,
            designers and project managers is dedicated to delivering
            cutting-edge software solutions tailored to your unique business
            needs.
          </p>
          <div className="flex justify-center">
            <Button2 />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
