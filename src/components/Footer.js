import React from 'react'

const Footer = () => {
  return (
    <div>
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

export default Footer
