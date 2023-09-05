import React from 'react'
import { useState } from 'react'
import {FaBars,FaTimes, FaGithub, FaLinkedin, famail} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import{BsFillPersonLinesFill} from 'react-icons/bs'
import{Link} from 'react-scroll'
import logo from '../assets/E.png'
const Navbar = () => {
  const [nav,setnav]=useState(false)
  const handler=()=> setnav(!nav)
  return (
    <div className='w-full fixed items-center bg-[#1E2233] z-10 flex flex-row justify-between h-[90px]'>
      <img className='h-[90px] mt-4' src={logo} alt="" />
      <ul className=' hidden md:flex'>
      
        <li className='text-lg  ' >
          <Link to='home'>
          Home </Link>
       </li>
        <li className='text-lg  ' >
          <Link to='about'>
          About
          </Link>
          </li>
          <li className='text-lg  ' >
          <Link to='skills'>
          Skills
          </Link>
          </li>
          <li className='text-lg  ' >
          <Link to='projects'>
          Projects
          </Link>
          </li>
          <li className='text-lg  ' >
          <Link to='contact'>
          Contact
          </Link>
          </li>
      </ul>
      <div className='md:hidden px-4 z-10 cursor-pointer' onClick={handler}>
        {
          !nav ? <FaBars/> : <FaTimes/>
        }
      </div>
      <ul className={nav ? 'absolute  top-0 left-0 w-full h-screen bg-[#1E2233] flex flex-col justify-center items-center':'hidden'}>
        <li className='py-5 text-xl' > <Link onClick={handler} to='home'>
          Home </Link></li>
        <li className='py-5 text-xl' >   <Link onClick={handler} to='about'>
          About
          </Link></li>
        <li className='py-5 text-xl' > <Link onClick={handler} to='skills'>
          Skills
          </Link></li>
        <li className='py-5 text-xl' ><Link onClick={handler} to='projects'>
          Projects
          </Link></li>
        <li className='py-5 text-xl' ><Link onClick={handler} to='contact'>
          Contact
          </Link></li>
      </ul>
      <div className='hidden md:flex flex-col fixed left-0 top-[37%]'>
      <ul>
        <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-500 bg-blue-900 rounded-lg'>
          <a className='flex flex-row justify-between items-center w-full  text-white' href="https://www.linkedin.com/in/fatmaebrahim/" target='blank'>
           Linkedin <FaLinkedin size={35} color='white'/>
          </a>
        </li>
        <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-500 bg-[#565FD0] rounded-lg '>
          <a className='flex flex-row justify-between items-center w-full text-white' href="https://github.com/fatmaebrahim" target='blank'>
          Github <FaGithub size={35} color='white'/>
          </a>
        </li>
        <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-500 bg-[#C3201C] rounded-lg'>
          <a className='flex flex-row justify-between items-center w-full text-white' href="mailto:fatmaebrahim3131@gmail.com" target='blank'>
          Email <HiOutlineMail size={35} color='white'/>
          </a>
        </li>
        <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-500 bg-[#8FABB8] rounded-lg'>
          <a className='flex flex-row justify-between items-center w-full text-white' href="https://drive.google.com/file/d/1Caqx9rUhIAbWnEAObSphMYs2Y07TmR0z/view?usp=sharing" target='blank'>
          Resume <BsFillPersonLinesFill size={35} color='white'/>
          </a>
        </li>
       
      </ul>
      </div>
    </div>
  )
}

export default Navbar