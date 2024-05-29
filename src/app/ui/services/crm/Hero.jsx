import React from 'react'
import Button from '@/components/ui/Button';
import CRM from '/public/assets/services/Crm/CRM.jpg'
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-black">
      <Image
        src={CRM}
        className="absolute inset-0 object-cover w-full h-full opacity-65"
        alt=""
      />
      <div className="relative">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 162"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl md:mb-12 mb-6 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 md:text-HMain text-HMain-sm font-bold tracking-tight text-white sm:leading-none">
                Comprehensive CRM Services <br className="hidden md:block" />
                for Your Business
              </h2>
              <p className="max-w-xl md:mb-4 md:text-HSub text-HSub-sm text-gray-200">
                We offer robust Customer Relationship Management (CRM) services designed to help you manage your customer interactions more effectively, streamline your operations and drive business growth.
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl md:p-10 p-2">
                <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                  <h1 className='md:text-HMain text-HMain-sm font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none leading-10 text-center'>CRM</h1>
                  <p className="text-base text-gray-800 md:text-lg md:py-4 py-2 md:text-justify text-start">CRM (Customer Relationship Management) is a technology for managing all your company’s relationships and interactions with current and potential customers. </p>
                  <p className="text-base text-gray-800 md:text-lg md:py-4 py-2 md:text-justify text-start">The goal is simple: to improve business relationships to grow your business. A CRM system helps companies stay connected to customers, streamline processes and improve profitability.</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center text-lg h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero