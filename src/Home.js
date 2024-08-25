import React from 'react'
import Header from './components/Header';
import BodyFront from './components/BodyFront';
import ListItems from './components/ListItems';
import Destination from './components/Destination';
import DiscountSection from './components/DiscountSection';
import BookNow from './components/BookNow';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const Home = () => {


  return (
  
    <div>
      {/* Header section */}
      <Header />

      {/* Upper Body section */}
      <BodyFront />


      {/* List Items section */}
      <ListItems />

      {/* Destination section */}
      <Destination />


      {/* Discount section */}
      <DiscountSection />


      {/* Book Now section for travel */}
      <BookNow />

      {/* Testimonial section */}
      <Testimonial />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Home
