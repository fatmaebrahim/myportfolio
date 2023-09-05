import React from 'react'
import { HiArrowNarrowDown } from 'react-icons/hi'

import About from './About'
import { render } from '@testing-library/react'
const Home = () => {
  const handleClick = () => {
    const screenHeight = window.innerHeight;
    const currentPosition = window.pageYOffset;
    const newPosition = currentPosition + screenHeight;

    window.scrollTo({
      top: newPosition,
      behavior: 'smooth'
    });
  };
  return (
    <div name='home' className='w-full h-screen bg-[#1E2233]  flex flex-row' >
      <div className='max-w-[1000px] mx-auto h-full flex flex-col justify-center scale-75 md:scale-100 pl-8'>
      <h1 className='text-[#BB2525] py-2 text-2xl'>Hi! My name is </h1>
      <h1 className='text-[#FF6969] py-1 text-7xl font-semibold'>Fatma Ebrahim</h1>
      <h2 className='text-[#FFF5E0] py-3 text-3xl'>
        <span className='text-[#BB2525] py-3 text-3xl'>I'm a </span>
        Frontend Developer and Computer Engineer</h2>
      
      <div onClick={handleClick} className='text-[#BB2525] py-3 my-3 px-3 w-[300px] border-2 border-[#BB2525] rounded-lg text-2xl font-semibold flex flex-row hover:cursor-pointer hover:border-[#FF6969] hover:text-[#FF6969] duration-500 '>
      <h1>Take a tour down here</h1>
      <button className='' >  <HiArrowNarrowDown/> </button>
      </div>
      </div>
      
    </div>
  )
}

export default Home