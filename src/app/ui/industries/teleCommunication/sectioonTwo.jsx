import Image from 'next/image'
import React from 'react'
import Hero1 from '/public/assets/industries/teleCommunication/sec2.jpg';
import Hero2 from '/public/assets/industries/teleCommunication/sec21.jpg';
import Hero3 from '/public/assets/industries/teleCommunication/sec22.jpg';
import { Service } from './data';


const sectioonTwo = () => {
  return (
    <section id='data'>
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="max-w-full bg-gray-100 p-5 shadow-xl rounded-xl mb-10 md:mx-auto sm:text-center md:mb-12">
        <div>
          <p className="inline-block w-full px-3 mb-4 text-md font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
           Our Services
          </p>
        </div>
        <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-900 sm:text-4xl md:mx-auto">
          
            <span className="relative">Revolutionizing </span>
         
           Communication with Cutting-Edge Technology
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Our expertise in IT solutions is tailored to elevate your business operations, ensuring seamless communication, enhanced customer experiences, and robust network management. Discover how we can transform your telecommunication services and help you stay ahead in a rapidly evolving industry.
        </p>
      </div>

      <div className="grid max-w-screen-lg md:p-10 border border-gray-400 shadow-sm shadow-blue-600 rounded-3xl backdrop-blur-3xl gap-8 sm:mx-auto">
       
      <div className="grid grid-cols-2 gap-5">
          <Image
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src={Hero2}
            alt=""
          />
          <Image
            className="object-cover w-full h-48 rounded shadow-lg"
            src={Hero1}
            alt=""
          />
          <Image
            className="object-cover w-full h-48 rounded shadow-lg"
            src={Hero3}
            alt=""
          />
        </div>
 
        {Service.map((data , index) => (<div key={index} className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="py-3 font-semibold text-3xl text-blue-900">
              {data.heading}
              </h6>
              <p className="text-lg mb-2 text-gray-900">
              {data.description}
              </p>
              <p className="text-md p-2 mb-2 text-gray-900 rounded-2xl border border-gray-800">
             {data.point1}
              </p>
              <p className="text-md p-2 mb-2 text-gray-900 rounded-2xl border border-gray-800">
              {data.point2}
              </p>
              <p className="text-md p-2 text-gray-900 rounded-2xl border border-gray-800">
             {data.point3}
              </p>
              
            </div>
            </div>
          </div>))}
        
      </div>
    </div>
    </section>
  )
}

export default sectioonTwo