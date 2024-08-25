import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
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
    </div>
  )
}

export default Header
