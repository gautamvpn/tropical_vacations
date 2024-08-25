import React from 'react'
import rectangle16 from "../assets/Rectangle 16.png"
import rectangle17 from "../assets/Rectangle 17.png"
import rectangle18 from "../assets/Rectangle 18.png";
import { Link } from 'react-router-dom';
const ListItems = () => {
  return (
    <div>
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
    </div>
  )
}

export default ListItems
