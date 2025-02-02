"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";

const Faq2 = ({ faq }) => {
  return (
    <div className=" w-full py-6 md:px-0 px-2">
      <div className="flex justify-center items-center">
        <motion.h1
          variants={fadein("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className="md:text-Heading text-Heading-sm font-bold text-black cursor-pointer"
        >
          Frequently Asked Questions
        </motion.h1>
      </div>
      <motion.ul 
      initial={{ opacity: 0, scale: 0.7 }} //X:100
      whileInView={{ opacity: 1, scale: 1 }} //y:100
      transition={{
        delay: 0.2,
        scale: { type: "spring", stiffness: 30 },
        opacity: { duration: 0.6 },
        ease: "easeInOut",
      }} className="max-w-3xl mx-auto my-5 divide-y shadow shadow-blue-600 rounded-xl ">
        {faq.map((item) => (
          <li key={item.id}>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <span className="md:text-lg text-base">{item.ques}</span>
              </summary>
              <article className="px-12 pb-4">
                <motion.p 
                variants={fadein("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }}
                className="md:text-base text-sm">{item.ans}</motion.p>
              </article>
            </details>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Faq2;
