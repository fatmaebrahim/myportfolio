import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import boots from '../assets/bootstrap.png'
import js from '../assets/javascript.png'

const Skills = () => {
  return (
    <div name='skills' className='  h-screen w-full bg-[#1E2233] flex flex-col justify-center items-center '>
        <h1 className='text-4xl text-center font-semibold text-[#FF6969] py-4'>There are the tools I've worked with</h1>
        <div className='scale-75 md:scale-100 grid  grid-cols-2 md:grid-cols-3 gap-4 '>

        {/* <div className='md:w-[700px] flex flex-row flex-wrap justify-center items-center py-4 scale-75 md:scale-100'> */}
            <div className=' w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500'> <img className='w-[200px]' src={html} alt="html" />        HTML   </div>
            <div className=' w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500'> <img className='w-[200px]' src={css} alt="css" />          CSS     </div>
            <div className=' w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500'> <img className='w-[200px]' src={js} alt="js" />          JavaScript     </div>
            <div className=' w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500'> <img className='w-[200px]' src={react} alt="react" />      React    </div>
            <div className=' w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500'> <img className='w-[200px]' src={tailwind} alt="tailwind" />Tailwind        </div>
            <div className=' relative w-[150px] h-[178px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500 flex justify-center items-center z-1'>
                <div className='w-[100px] h-[120px] bg-white z-2 absolute'> </div> 
                 <img className='w-[200px] z-2 absolute top-0' src={boots} alt="bootstrap" /> 
                 <div className='text-center text-xl font-semibold  absolute bottom-0'> BootStrap </div>   
                  </div>

        </div>
        </div>
  )
}

export default Skills