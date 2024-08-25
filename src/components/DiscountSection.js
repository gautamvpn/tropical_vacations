import React from 'react'
import { Link } from 'react-router-dom'
import maskGroup from "../assets/Mask group.png"

const DiscountSection = () => {
  return (
    <div>
       <section className='grid md:grid-cols-2 items-center bg-slate-100 p-8 '>
       <div className='ml-0 md:ml-24 text-center md:text-left space-y-6'>
       <p className='text-lg font-semibold'>Get 20% off for student</p>
       <h2 className='text-2xl font-bold'>Student discounts available.<br/>
       <span className='text-xl font-semibold'>Get ready for some fun in the sun!</span></h2>
  
       <ol className=" list-disc list-inside space-y-2 text-gray-700">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Massa quis natoque sit quam</li>
        <li>Eros non pellentesque elit </li>
        <li>tortor id euismod habitant</li>
        <li>Sed suspendisse id in ultrices</li>
       </ol>

       <Link className="inline-block bg-[#F27A44] text-white px-6 py-3 rounded-full font-semibold">Explore More</Link>
       </div>

       <div className='flex justify-center'>
       <img className='h-1/2 w-1/2' src={maskGroup} alt="mask-groupPic" />
       </div>
       </section>
    </div>
  )
}

export default DiscountSection
