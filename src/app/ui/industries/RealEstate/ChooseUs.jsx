'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import RealEstate from '/public/assets/industries/RealEstate/RealEstate.jpg'
import RealEstate2 from '/public/assets/industries/RealEstate/RealEstate2.jpg'
import RealEstate3 from '/public/assets/industries/RealEstate/RealEstate3.jpg'
import Image from 'next/image'

const ChooseUs = () => {
  return (
    <div className="px-4 py-8 overflow-x-hidden mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div 
         variants={fadein("right", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: true, amount: 0.8 }}
         className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="max-w-xl md:mb-6">
            <h2 className="max-w-lg md:mb-6 mb-1 md:text-Heading text-Heading-sm font-bold tracking-tight text-blue950 sm:text-4xl sm:leading-none">
            Choosing Us: 
              <br className="hidden md:block"/>
              What You Gain
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            We understand the unique challenges of the real estate industry. Our team of experienced IT professionals is dedicated to providing solutions that are not only innovative but also practical and tailored to your specific needs. Partner with us to transform your real estate business and stay ahead in a competitive market.
            </p>
          </div>
        </motion.div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <Image
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={RealEstate}
              width={"1000"}
              height={"1000"}
              alt=""
            />
            <Image
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={RealEstate2}
              width={"1000"}
              height={"1000"}
              alt=""
            />
          </div>
          <div className="px-3">
            <Image
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={RealEstate3}
              width={"1000"}
              height={"1000"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs