import React from "react";
import Link from "next/link";
import Image from "next/image";
import edu from "/public/assets/industries/Education/edu.jpg";
const Edufirst = () => {
  return (
  
      <section className="h-full w-full">
        <section className=" pt-24">
          <div className="container grid items-center justify-center gap-8 px-4  lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter bg-gradient-to-l from-green-400 to-blue-900 bg-clip-text text-transparent">
                Elevate Your Learning Experience
              </h1>
              <p className="max-w-[600px] mx-auto text-center text-gray-600 rounded-md bg-blue-200 dark:text-gray-400 md:p-5">
                Our education service provider offers a comprehensive suite of
                programs and resources to help you achieve your academic and
                professional goals.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0056b3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#007bff] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#007bff] dark:text-white dark:hover:bg-[#0056b3] dark:focus-visible:ring-[#007bff]"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex justify-center w-auto">
              <Image
                alt="Education Hero"
                className="w-full md:max-w-lg lg:max-w-none rounded-xl object-cover object-center"
                src={edu}
              />
            </div>
          </div>
        </section>
      </section>
  );
};

export default Edufirst;
