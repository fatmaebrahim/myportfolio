import React from 'react'
import {FaBars,FaTimes, FaGithub, FaLinkedin, famail} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import{BsFillPersonLinesFill} from 'react-icons/bs'
const Links = () => {
  return (
    <div className='md:hidden w-full items-center bg-[#1E2233] h-[102px] py-4 '>
       
      <ul className='flex flex-row justify-around w-full  my-4  '>
        <li className='w-[100px] h-[70px] flex justify-between items-start  duration-500 bg-blue-900 rounded-lg'>
          <a className='flex flex-col justify-between items-center w-full  text-white' href="https://www.linkedin.com/in/fatmaebrahim/" target='blank'>
           <FaLinkedin size={35} color='white'/>
           Linkedin
          </a>
        </li>
        <li className='w-[100px] h-[70px] flex justify-between items-start  duration-500 bg-[#565FD0] rounded-lg '>
          <a className='flex flex-col justify-between items-center w-full text-white' href="https://github.com/fatmaebrahim" target='blank'>
          <FaGithub size={35} color='white'/>
          Github 
          </a>
        </li>
        <li className=' w-[100px] h-[70px] flex justify-between items-start  duration-500 bg-[#C3201C] rounded-lg'>
          <a className='flex flex-col justify-between items-center w-full text-white' href="mailto:fatmaebrahim3131@gmail.com" target='blank'>
        <HiOutlineMail size={35} color='white'/>
        Email
          </a>
        </li>
        <li className='w-[100px] h-[70px] flex justify-between items-start  duration-500 bg-[#8FABB8] rounded-lg'>
          <a className='flex flex-col justify-between items-center w-full text-white' href="https://drive.google.com/file/d/1tLZ_IDPverfE2LYrdmAtM8_xH-A13kFk/view?usp=sharing" target='blank'>
          <BsFillPersonLinesFill size={35} color='white'/>
          Resume 
          </a>
        </li>
       
      </ul>

    
    </div>

  )
}

export default Links