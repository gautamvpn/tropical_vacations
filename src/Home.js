import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import group171 from "./assets/Group 171.png"
import rectangle16 from "./assets/Rectangle 16.png";
import rectangle17 from "./assets/Rectangle 17.png";
import rectangle18 from "./assets/Rectangle 18.png";
import cardImage from "./assets/card-image.png";
import cardImage1 from "./assets/card-image-1.png";
import cardImage2 from "./assets/card-image-2.png";
import cardImage3 from "./assets/card-image-3.png";
import maskGroup from "./assets/Mask group.png"
import group167 from "./assets/Group 167.png"

const Home = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
     // Whole container
     <div>
     {/* Header section */}
     <section className="py-6 bg-gradient-to-r shadow-lg">
      <div className="navbar flex justify-between items-center px-6 lg:px-10 max-w-7xl mx-auto">
        
        {/* Logo or Title */}
        <div className="navbar-left flex items-center justify-between w-full lg:w-auto">
          <h1 className="text-2xl font-bold tracking-wide">Tropical Destinations</h1>

          {/* Mobile Dropdown Toggle Button */}
          <div className="lg:hidden">
            <button onClick={toggleDropdown}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Center Nav Links for larger screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 text-lg tracking-tighter">
            <Link  className=" hover:text-rose-700 transition-colors duration-300">Home</Link>
            <Link className=" hover:text-rose-700 transition-colors duration-300">About</Link>
            <Link className=" hover:text-rose-700 transition-colors duration-300">Schedules</Link>
            <Link className=" hover:text-rose-700 transition-colors duration-300">Membership</Link>
            <Link className=" hover:text-rose-700 transition-colors duration-300">Pricing</Link>
          </ul>
        </div>

        {/* Right Nav Links for larger screens */}
        <div className="navbar-right hidden lg:flex">
          <ul className="flex gap-6 text-lg tracking-tighter">
            <Link className=" hover:text-rose-700 transition-colors duration-300">Offers</Link>
            <Link className=" hover:text-rose-700 transition-colors duration-300">Course</Link>
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isDropdownOpen && (
        <div className="lg:hidden absolute top-16 right-6 w-48 bg-slate-400 text-black rounded-lg shadow-lg">
          <ul className="flex flex-col p-4 space-y-2">
            <Link className="block hover:text-white transition-colors duration-300">Home</Link>
            <Link className="block hover:text-white transition-colors duration-300">About</Link>
            <Link className="block hover:text-white transition-colors duration-300">Schedules</Link>
            <Link className="block hover:text-white transition-colors duration-300">Membership</Link> 
            <Link className="block hover:text-white transition-colors duration-300">Pricing</Link>
            <Link className="block hover:text-white transition-colors duration-300">Offers</Link>
            <Link className="block hover:text-white transition-colors duration-300">Course</Link>
          </ul>
        </div>
      )}
    </section>


       {/* Upper Body section */}

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

       {/* List Items section */}
       {/* List Items section */}
<section className="grid md:grid-cols-2 p-8 gap-40 max-w-5xl mx-auto items-center">
  <div className="space-y-8">
    
    {/* First */}
    <div className="flex p-6 items-center shadow-lg shadow-gray-300 rounded-lg">
      <img
        className="h-14 w-14 rounded-full mr-4"
        src={rectangle16}
        alt="rectangle16pic"
      />
      <div>
        <h2 className="font-bold text-xl">Jenny Wilson</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing...
        </p>
      </div>
    </div>

    {/* Second */}
    <div className="flex p-6 items-center shadow-lg shadow-gray-300 rounded-lg">
      <img
        className="h-14 w-14 rounded-full mr-4"
        src={rectangle17}
        alt="rectangle17pic"
      />
      <div>
        <h2 className="font-bold text-xl">Jenny Wilson</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing...
        </p>
      </div>
    </div>

    {/* Third */}
    <div className="flex p-6 items-center shadow-lg shadow-gray-300 rounded-lg">
      <img
        className="h-14 w-14 rounded-full mr-4"
        src={rectangle18}
        alt="rectangle18pic"
      />
      <div>
        <h2 className="font-bold text-xl">Jenny Wilson</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing...
        </p>
      </div>
    </div>

  </div>

  {/* Tropical Adventure Section */}
  <div className="text-center md:text-left space-y-6">
    <h2 className="text-4xl font-bold">Tropical Adventure <br/> <span className='text-2xl font-semibold'> for Students </span></h2>
    <h4 className="text-xl font-semibold">Student Tropical Vacation: Relax and Recharge</h4>
    <ol className=" list-disc list-inside space-y-2 text-gray-700">
      <li>Lorem ipsum dolor sit amet</li>
      <li>Massa quis natoque sit quam</li>
      <li>Eros non pellentesque elit</li>
      <li>Tortor id euismod habitant</li>
      <li>Sed suspendisse id in ultrices</li>
    </ol>
    <Link className="inline-block bg-[#F27A44] text-white px-6 py-3 rounded-full font-semibold">
      Explore More
    </Link>
  </div>
</section>

       {/* Destination section */}
<section className="p-8">
  <div>
    <h1 className="text-3xl mt-8 font-bold text-center">Our Destinations</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
      
      {/* First Card */}
      <div className="bg-slate-100 shadow-lg rounded-lg p-4 text-center">
        <img
          className="w-full h-48 object-cover rounded-lg mb-4"
          src={cardImage}
          alt="cardImage"
        />
        <h2 className="text-xl font-semibold mb-2">Harvard University</h2>
        <h4 className="text-sm text-gray-950">Cambridge, Massachusetts, USA</h4>
      </div>

      {/* Second Card */}
      <div className="bg-slate-100 shadow-lg rounded-lg p-4 text-center">
        <img
          className="w-full h-48 object-cover rounded-lg mb-4"
          src={cardImage1}
          alt="cardImage1"
        />
        <h2 className="text-xl font-semibold mb-2">Oxford University</h2>
        <h4 className="text-sm text-gray-950">Oxford, England</h4>
      </div>

      {/* Third Card */}
      <div className="bg-slate-100 shadow-lg rounded-lg p-4 text-center">
        <img
          className="w-full h-48 object-cover rounded-lg mb-4"
          src={cardImage2}
          alt="cardImage2"
        />
        <h2 className="text-xl font-semibold mb-2">Stanford University</h2>
        <h4 className="text-sm text-gray-950">Stanford, California</h4>
      </div>

      {/* Fourth Card */}
      <div className="bg-slate-100 shadow-lg rounded-lg p-4 text-center">
        <img
          className="w-full h-48 object-cover rounded-lg mb-4"
          src={cardImage3}
          alt="cardImage3"
        />
        <h2 className="text-xl font-semibold mb-2">Nanyang Technological University</h2>
        <h4 className="text-sm text-gray-950">Nanyang Ave, Singapore</h4>
      </div>

    </div>
  </div>
  <div className='hidden md:block p-8 text-center text-zinc-900 font-semibold'> <span>⬅️</span> 2 / 140 <span>➡️</span></div>
</section>


       {/* Discount section */}
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


       {/* Book Now section for travel */}
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

       {/* Testimonial section */}
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
      
       {/* Footer Section */}
<section className="py-12">
  <div className="text-center p-2">
    <h1 className="lg:text-4xl text-2xl font-bold mb-6">Student Special: Discounted rates <br /> on tropical getaways!</h1>
    <p className="text-sm font-medium">Let's embody your beautiful ideas together, simplify the <br /> way you visualize your next big things.</p>
  </div>

  {/* Links Section */}
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4 mt-10 text-center">
    <p className="hover:underline cursor-pointer">Privacy Policy</p>
    <p className="hover:underline cursor-pointer">Terms of Use</p>
    <p className="hover:underline cursor-pointer">Sales and Refunds</p>
    <p className="hover:underline cursor-pointer">Legal</p>
    <p className="font-semibold hover:underline cursor-pointer">About</p>
    <p className="font-semibold hover:underline cursor-pointer">Schedules</p>
    <p className="font-semibold hover:underline cursor-pointer">Pricing</p>
    <p className="font-semibold hover:underline cursor-pointer">Membership</p>
    <p className="font-semibold hover:underline cursor-pointer">Joins</p>
  </div>
</section>
 </div>
  )
}

export default Home
