import React from 'react'
import group171 from "../assets/Group 171.png"
import { Link } from 'react-router-dom'

const BodyFront = () => {
  return (
    <div>
       <section className='grid md:grid-cols-2 items-center bg-slate-100 p-8 '>
      {/* left side bar */}
       <div className='pl-0 md:pl-24 '>
        <h4 className=' text-base md:text-lg font-bold mb-2 tracking-tighter'>Discover the beauty of the tropics</h4>
        <h1 className=" text-4xl md:text-7xl font-bold mb-4">Tropical <br /> Destinations <br /><span className="font-medium">For Student</span></h1>
        <p className='mb-8'>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer <br/> rutrum nisi. A nec nisl vitae </p>
        <Link className='bg-[#F27A44] px-5 py-2 rounded-full'>SIGN UP</Link>
       </div>
       
       {/* right side bar */}
       <div className='flex justify-center'>
        <img 
        className='h-1/2 w-1/2'
        src={group171} 
        alt="First_pic" />
       </div>
       </section>
    </div>
  )
}

export default BodyFront
