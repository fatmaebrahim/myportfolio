import React from 'react'
import antivirus from '../assets/projects/antivirus.png'
import cargas from '../assets/projects/cargas.png'
import beta from '../assets/projects/beta.jpeg'

const Projects = () => {
  return (
    <div name='projects' className='h-screen w-full bg-[#1E2233] '>
      <div className=' scale-75 md:scale-100 max-w-[1000px] mx-auto p-4 flex flex-col justify-start w-full h-full'>
       
        <p className='py-8 m pt-[100px] text-[#FF6969] text-4xl text-center font-semibold'>Check out Some of my Work</p>
        <div className='grid  sm:grid-cols-1 md:grid-cols-2 gap-4 '>
          <div style={{backgroundImage: `url(${beta})`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center con'>
             <div className=' opacity-0 group-hover:opacity-95  w-full h-full bg-gradient-to-r from-blue-900 to-[#8FABB8] rounded-md flex flex-col justify-center items-center'>
              <span className='text-xl tracking-wider font-bold text-[#FFF5E0] '>
              ReactJS Application
              </span>
              <div className='text-center pt-8'>
              <a className='hover:bg-[#FFF5E0] hover:text-xl hover:text-[#1E2233]  border-2 border-[#FFF5E0] rounded-lg text-lg rounded-md text-center px-4 py-2  m-3 text-[#FFFF5E0)]' href="https://github.com/fatmaebrahim/Courses-Academy-Website" target='blank'><button>Code</button></a>
              </div>
              </div> 
          </div>

          <div style={{backgroundImage: `url(${antivirus})`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center con'>
             <div className=' opacity-0 group-hover:opacity-95 w-full h-full bg-gradient-to-r  from-blue-900 to-[#8FABB8] rounded-md flex flex-col justify-center items-center'>
              <span className='text-xl tracking-wider font-bold text-[#FFF5E0] '>
              HTML & CSS Application
              </span>
              <div className='text-center pt-8'>
                  <a className='hover:bg-[#FFF5E0] hover:text-xl hover:text-[#1E2233] border-2 border-[#FFF5E0] rounded-lg text-lg rounded-md text-center px-4 py-2  m-3 text-[#FFFF5E0)]' href="https://github.com/fatmaebrahim/AntiVirusPdf" target='blank'><button>Code</button></a>
              </div>
              </div> 
          </div>

          <div style={{backgroundImage: `url(${cargas})`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center con'>
             <div className=' opacity-0 group-hover:opacity-95 w-full h-full bg-gradient-to-r  from-blue-900 to-[#8FABB8] rounded-md flex flex-col justify-center items-center'>
              <span className='text-xl tracking-wider font-bold text-[#FFF5E0] '>
              HTML & CSS Application
              </span>
              <div className='text-center pt-8'>
                <a className='hover:bg-[#FFF5E0] hover:text-xl hover:text-[#1E2233] border-2 border-[#FFF5E0] rounded-lg text-lg rounded-md text-center px-4 py-2  m-3 text-[#FFFF5E0)]' href="https://github.com/fatmaebrahim/CarGas" target='blank'><button>Code</button></a>
              </div>
              </div> 
          </div>


        </div>


      </div>
    
  
    
    
    </div>
  )
}

export default Projects