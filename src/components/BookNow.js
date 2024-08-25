import React from 'react'
import group167 from "../assets/Group 167.png"
import { Link } from 'react-router-dom'
const BookNow = () => {
  return (
    <div>
       <section className='grid md:grid-cols-2 items-center p-8 gap-8'>
        <div className='flex justify-center'>
          <img className='w-1/2 h-1/2' src={group167} alt="Group167Pic" />
        </div>

        <div className='ml-0 md:ml-24 text-center md:text-left space-y-6 bg-white p-8 shadow-lg rounded-lg'>
          <h1 className='text-3xl font-bold'>Book now</h1>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum amet, cumque nihil doloremque!</p>

           {/* City field */}
          <div>
          <label className='block text-gray-600 text-sm font-semibold mb-2'>City</label>
          <input 
          type="text" 
          placeholder='Type city' 
          className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500' />
          </div>
         
           {/* Date Fields */}
          <div className='grid grid-cols-2 gap-4'>
             <div>
              <label className='block text-gray-600 text-sm font-semibold mb-2'>ARRIVAL</label>
              <input
               type="text" 
               placeholder='26 Aug'
               className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500' 

               />
             </div>

             <div>
              <label className='block text-gray-600 text-sm font-semibold mb-2'>DEPARTURE</label>
              <input 
              type="text" 
              placeholder='27 Aug'
              className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500'  
              />
             </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>

            <div>
              <label className='block text-gray-600 text-sm font-semibold mb-2'>STAR</label>
              <input 
              type="number" 
              placeholder='Type Number'
              className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500'  
              />
            </div>

            <div>
              <label className='block text-gray-600 text-sm font-semibold mb-2'>ROOM</label>
              <input 
              type="number" 
              placeholder='Type Number' 
              className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500'  
              />
            </div>
          </div>

          <Link className='inline-block bg-[#000000] text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-500 transition duration-300'>Book Now</Link>
        </div>
       </section>
    </div>
  )
}

export default BookNow
