import React from 'react'
import cardImage from "../assets/card-image.png";
import cardImage1 from "../assets/card-image-1.png";
import cardImage2 from "../assets/card-image-2.png";
import cardImage3 from "../assets/card-image-3.png";
const Destination = () => {
  return (
    <div>
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
    </div>
  )
}

export default Destination
