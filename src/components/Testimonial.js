import React from 'react'
import group171 from "../assets/Group 171.png"
import maskGroup from "../assets/Mask group.png"
import group167 from "../assets/Group 167.png"
const Testimonial = () => {
  return (
    <div>
       <section className='py-12 bg-gray-50'>
       <h1 className='text-3xl font-bold text-center mb-8'> Testimonials</h1>
       <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8'>

       {/* first */}
        <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
          <img className='w-20 h-20 rounded-full mx-auto mb-4' src={group171} alt="group171Pic" />
          <h1 className='text-xl font-semibold mb-2'>Corey Korsgaard</h1>
          <p className="text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>

        {/* second */}
        <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
          <img className='w-20 h-20 rounded-full mx-auto mb-4' src={maskGroup} alt="maskgroupPic" />
          <h1 className='text-xl font-semibold mb-2'>Jakob Aminoff</h1>
          <p className="text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>

        {/* third */}
        <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
        <img className='w-20 h-20 rounded-full mx-auto mb-4' src={group167} alt="group167Pic" />
        <h1 className='text-xl font-semibold mb-2'>Carla Press</h1>
        <p className="text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>

       </div>
       </section>
    </div>
  )
}

export default Testimonial
