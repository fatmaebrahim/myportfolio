import React from 'react'
import { send } from 'emailjs-com';
import { useState } from 'react';
const Contact = () => {

 
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Fatma',
    message: '',
    reply_to: '',
  });

 const onSubmit = (e) => {
  if(toSend.message!='' && toSend.from_name!='' && toSend.reply_to!='')
  {
    e.preventDefault();
    send(
      'service_t0jiaal',
      'template_92gzhtp',
      toSend,
      'gjCjYu140ufmnHEBz'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message was sent successfully!")
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    
    }
    else
    {
      e.preventDefault();
    alert("Please fill in the missing fields")
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div name='contact' className='h-[screen] w-full bg-[#1E2233]  flex justify-center items-center pt-[150px] '>
     
      <form onSubmit={onSubmit} action="" className='text-[#1E2233] max-w-[600px] mx-4 mt-[150px] flex flex-col w-full justify-center items-center '>
        <div>
        <p className=' mt-[200px] text-[#FF6969] text-4xl text-center  font-semibold'>Contact Me</p>
        <p className='text-xl text-center text-[#FFF5E0] py-2'>You can send me an email or a message via this form</p>
        </div>
         <div className='flex flex-col  items-center w-full'>
          <input className=' border-4 border-[#565FD0]  rounded-md bg-[#f5f1e9] p-3 my-4 w-full' onChange={handleChange} type="text"  name='from_name'  placeholder='Name' />
          <input className='border-4 border-[#565FD0] rounded-md bg-[#f5f1e9] p-3 my-4 w-full' type="email" name='reply_to'  onChange={handleChange} placeholder='Email' />
          <textarea  className='border-4 border-[#565FD0] rounded-md bg-[#f5f1e9] p-3 my-4 w-full ' name="message"   onChange={handleChange} placeholder='Message' cols="30" rows="10"></textarea>
          <button className='mb-[50px] text-center text-[#BB2525] py-1 my-4 px-3 w-[100px] hover:scale-110 duration-500 hover:bg-[#f5f1e9] hover:text-xl hover:border-[#f5f1e9] hover:text-[#1E2233] border-2 border-[#BB2525] rounded-lg text-2xl font-semibold hover:cursor-pointer hover:border-[#FF6969] hover:text-[#FF6969] duration-500 '>
              Send
            </button>

         </div>
    

      </form>
      </div>
  )
}

export default Contact