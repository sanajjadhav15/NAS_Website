import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';


const HeroSection = ({obj}) => {
  return (
    <div className='relative w-full h-[50vh] md:h-[100vh] overflow-hidden group'>
        <Image className='object-cover h-full w-full transition-all group-hover:scale-105 ease-out duration-400' src={obj.content.image} alt="Background Image" height={1000} width={1000}></Image>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='absolute inset-0 text-white flex flex-col items-center justify-center'>
            <div className='w-[80%] md:w-[70%] backdrop-blur-md p-5 text-center rounded-3xl'>
                <h2 className='text-MainHeading-sm md:text-MainHeading font-thin text-white'>{obj.content?.heading}</h2>
                <h1 className='text-HeroHeading-sm md:text-HeroHeading font-bold'>{obj.content.title}</h1>
                <Button/>
            </div>
        </div>
    </div>
  );
};

export default HeroSection;