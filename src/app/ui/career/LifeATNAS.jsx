import React from 'react';
import inclusion from '/public/assets/career/inclusion.jpg';
import fun from '/public/assets/career/fun.jpg';
import develope from '/public/assets/career/develope.jpg';
import community from '/public/assets/career/community.jpg';
import Image from 'next/image';

const LifeATNAS = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='w-[90%] text-center text-MainHeading-sm md:text-MainHeading font-bold pt-4'>Life at NAS Indfotech</h1>
        <p className='w-[90%] text-Para-sm md:text-Para font-medium p-4 md:p-10'>At NAS Infotech, we believe that work should be more than just a job – it should be a place where you can thrive, grow, and enjoy every day. Here’s a glimpse into what life is like at our company:</p>
        <section className='w-[90%] flex flex-col gap-2 md:gap-6'>
          <div className='flex flex-wrap group overflow-hidden bg-blue-200 h-full md:h-[30vh] items-center justify-center'>
            <div className='w-full md:w-1/3 h-[30vh]'>
            <Image className='w-full h-full object-cover group-hover:scale-105 ease-out' src={inclusion} alt="inclusion" width={1000} height={1000}></Image>
            </div>
            <div className='w-full md:w-2/3 md:h-[30vh] p-4 lg:p-10'>
              <h3 className='text-MainHeading-sm md:text-MainHeading font-bold'>Inclusive Environment</h3>
              <p className='text-Para-sm md:text-Para'>we embrace diversity and foster an inclusive culture where everyone is respected and valued. We believe that a variety of perspectives leads to innovative solutions and a more dynamic workplace.</p>
            </div>
          </div>
          <div className='flex flex-wrap group overflow-hidden bg-green-200 h-full md:h-[30vh] items-center justify-center'>
            <div className='w-full md:w-2/3 md:h-[30vh] p-4 lg:p-10'>
              <h3 className='text-MainHeading-sm md:text-MainHeading font-bold'>Fun & Engaging</h3>
              <p className='text-Para-sm md:text-Para'>we prioritize fun and engagement through regular team-building activities, social events, and hackathons. Whether it’s a casual Friday get-together, a themed office party, or an offsite retreat, we make sure there’s always something to look forward to.</p>
            </div>
            <div className='w-full md:w-1/3 h-[30vh]'>
            <Image className='w-full h-full object-cover group-hover:scale-105 ease-out' src={fun} alt="inclusion" width={1000} height={1000}></Image>
            </div>
          </div>
          <div className='flex flex-wrap group overflow-hidden bg-blue-200 h-full md:h-[30vh] items-center justify-center'>
            <div className='w-full md:w-1/3 h-[30vh]'>
            <Image className='w-full h-full object-cover group-hover:scale-105 ease-out' src={develope} alt="inclusion" width={1000} height={1000}></Image>
            </div>
            <div className='w-full md:w-2/3 md:h-[30vh] p-4 lg:p-10'>
              <h3 className='text-MainHeading-sm md:text-MainHeading font-bold'>Professional Development</h3>
              <p className='text-Para-sm md:text-Para'>We are committed to the continuous growth and development of our team members.we offer numerous opportunities to enhance your skills and advance your career. </p>
            </div>
          </div>
          <div className='flex flex-wrap group overflow-hidden bg-green-200 h-full md:h-[30vh] items-center justify-center'>
            <div className='w-full md:w-2/3 md:h-[30vh] p-4 lg:p-10'>
              <h3 className='text-MainHeading-sm md:text-MainHeading font-bold'>Community Involvement</h3>
              <p className='text-Para-sm md:text-Para'>We encourage our employees to participate in volunteer opportunities and support charitable initiatives. Whether it’s through company-organized events or individual efforts, we are committed to making a positive impact on the world around us.</p>
            </div>
            <div className='w-full md:w-1/3 h-[30vh]'>
            <Image className='w-full h-full object-cover group-hover:scale-105 ease-out' src={community} alt="inclusion" width={1000} height={1000}></Image>
            </div>
          </div>
        </section>
    </div>
  );
};

export default LifeATNAS;