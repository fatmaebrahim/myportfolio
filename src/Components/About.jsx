import React from 'react'
import { HiArrowNarrowDown } from 'react-icons/hi'

const About = () => {
  const handleClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };
  return (
    <div name='about' className=' h-screen w-full bg-[#1E2233] pl-8 '>
      <div className='flex flex-col justify-center items-center w-full h-full pl-8 scale-75 md:scale-100'>
        <div className='py-4 grid md:grid-cols-2 gap-3 ml-[-100px] '>
          <div className='flex flex-row items-center justify-start md:justify-end'>
            <p className='md:text-right  text-4xl font-medium max-w-[400px] pl-4 px-4 '>Hi there, I'm Fatma let's take a look around </p>
          </div>
          <div className='flex flex-col px-4'>
            <span className='text-[#FF6969] text-4xl font-semibold '>About me</span>
            <span className='text-xl max-w-[500px]'>
              I'm  a passionate freelance Frontend developer based in Cairo, Egypt.
              I'm dedicated to my work and have the aquired skills and tools to build and design great websites.
              I'll be glad to work on premium projects for you
            </span>
            <div onClick={handleClick}className='text-[#BB2525] py-1 my-4 px-3 w-[180px] border-2 border-[#BB2525] rounded-lg text-2xl font-semibold flex flex-row hover:cursor-pointer hover:border-[#FF6969] hover:text-[#FF6969] duration-500 '>
              <h1>Contact me</h1>
              <button className=''>  <HiArrowNarrowDown /> </button>
            </div>
          </div>

        </div>

      </div>
    </div>

  )
}

export default About