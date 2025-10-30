import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/Receiver')
    }
    const handleClick2 = () => {
        navigate('/Donor')
    }


  return (
    <section className="relative h-screen flex items-center justify-center">

      {/* Background Image */}
      <img
        src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/06/GettyImages-465489053_header-1024x575.jpg?w=1155&h=1528" // put your image in public/assets/
        alt="Blood Donation"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Whitish Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-brightness-90"></div>

      {/* Content on Top */}
      <div className="mt-15 relative text-center space-y-6 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-red-700">
          Donate Blood,<span className="text-black">Save Lives ❤️</span> 
        </h1>
        <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
          Your small act of kindness can give someone a second chance at life.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-9">
          <button onClick={handleClick2} className="px-9 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition">
            Become a Donor
          </button>
          <button onClick={handleClick} className="px-9 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition">
            Request for Blood
          </button>
        </div>

        {/* Stats Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto ">
          <div className="p-10 bg-white rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-red-500">500k+</h2>
            <p className="mt-2 text-lg">Lives Saved</p>
          </div>
          <div className="p-10 bg-gradient-to-r from-pink-400 to-red-500 text-white rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold">50k+</h2>
            <p className="mt-2 text-lg">Active Donors</p>
          </div>
          <div className="p-10 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold">24/7</h2>
            <p className="mt-2 text-lg">Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

