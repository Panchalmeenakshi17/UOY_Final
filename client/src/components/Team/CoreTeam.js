import React from 'react';
import coremembers from './Coreteam-data';
import CoreProfileCard from './CoreProfileCard';
import { BsInstagram  } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const CoreTeam = () => {
 
  return (
    <>
      <div className="relative ">
        {/* <img
          src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full md:h-[300px]"
          alt="not found"
        /> */}
        <video
          src="videos/gg.mp4"
          autoPlay={true}
          loop
          muted
          className="h-[500px] w-full object-cover opacity-100 transition-opacity duration-500 ease-in-out "
        />
<div className="absolute backdrop-blur-md h-1/2 bg-[#f48d5e18] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <div className=" text-center p-8 rounded-lg">
            <h1 className=" font-main font-bold  text-xl text-center text-[#000000] ">
            | Our Team
            </h1>
            <h2 className="text-[#f96f41] text-4xl mt-7 mb-1 md:p-0 px-6 text-center translate-x-[0px] font-semibold md:text-8xl font-main title-font">
            Meet Our Dedicated Team
          
            </h2>
             
          </div>
        </div>
       
      </div>
    <div className='flex bg-[#e7e3e2] md:p-0 p-5 justify-center'>
        <div className='container'>
        <h1 className=' font-main font-bold text-[#df5829] text-4xl md:text-5xl text-center md:mt-20 my-14'>Founder of Unity of Youth Foundation</h1>
         <div className=' flex justify-center'>
        <div className='flex bg-[#f96f41] flex-col border-2 border-gfgmaincolor shadow-2xl hover:shadow-[#df5829]   md:w-1/4 w-full h-[380px] hover:bg-right-bottom cursor-pointer transition ease-in-out delay-20 
        hover:-translate-y-1 hover:scale-110  duration-300
        rounded-3xl'>
        <div className=' bg-black  text-white  border-2 border-[#ffc5b2] relative h-28 flex justify-center rounded-t-3xl'>
        <div className='rounded-full mt-4 overflow-hidden shadow-black  border-2 border-[#ffc5b2] shadow-xl h-40 w-40'>
          <img className='object-fill w-full' src="/images/Vijay.jpg" alt='not valid' />
        </div>
        </div>
        <div className='flex text-white  font-main flex-col mt-20 items-center py-4 gap-2'>
           <h1 className='text-2xl text-black font-bold'>Vijay Ramesh Pandiyan 
</h1>
           <h1 className='px-4 text-black text-lg font-medium text-center'>Founder and Managing Trustee</h1>
           <h1 className=' text-black '>vijayramuoy@gmail.com</h1>
           <div className='flex gap-8 my-2 text-2xl'>
           <NavLink to="https://www.instagram.com/__its_me_ttlvijay__/" target='_blank'>
              <BsInstagram className='fill-[#ff0073]  hover:fill-[#000000] hover:cursor-pointer'  />
           </NavLink>
           <NavLink to="https://www.linkedin.com/in/vijay-ramesh-pandiyan-17a503251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
              <FaLinkedinIn className='fill-[#9dceff]  hover:fill-[#000000] cursor-pointer' />
           </NavLink>
           
           </div>
        </div>
      </div></div> 

<div className=' md:mb-16 mb-5'>
<h1 className=' font-main font-bold text-[#df5829] text-4xl md:text-5xl text-center md:mt-20 my-14'>Board Members of Unity of Youth Foundation</h1>


{/* <div className='  items-center md:gap-x-20 gap-y-10 md:gap-y-36 mt-28 px-12 md:px-20'>
          {chunkedCoreMembers.map((chunk, index) => (
            <div key={index} className="flex flex-col gap-y-10">
              {chunk.map(member => (
                <CoreProfileCard key={member.id} coredata={member} />
              ))}
            </div>
          ))}
        </div> */}
        <div className='flex justify-center'>
        <div className='container'>
        {/* <h1 className='text-gfgmaincolor font-scnd font-black text-6xl text-center '>CORE TEAM</h1> */}
        <div className='flex md:flex-row flex-col flex-wrap justify-center items-center md:gap-x-20 gap-y-10 md:gap-y-36 mt-10 md:mt-28 px-1 md:px-20'>
    
          {coremembers && coremembers.map(member => (
            <CoreProfileCard key={member.id} coredata={member} />
          ))}
          
        </div>
        </div>
    </div>
        </div></div>
    </div>
    </>
  )
}

export default CoreTeam
