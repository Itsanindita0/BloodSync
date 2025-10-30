import React from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";



const About = () => {
  return (
    <>
    <Navbar />
    <div className="text-gray-800">

      {/* Hero Section */}
      <section
        className="bg-red-50 py-20 px-6 text-center"
        data-aos="fade-down"
      >
        <h1 className="mt-10 text-5xl font-bold text-red-700 mb-4">
          <span className="text-black">About</span> BloodSync
        </h1>
        <p className="mt-10 text-lg md:text-xl max-w-2xl mx-auto">
          Connecting hearts, saving lives. BloodSync is a revolutionary platform 
          that bridges the gap between blood donors and those in critical need.
        </p>
      </section>

      {/* Mission Section */}
      <section
        className="py-20 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12"
        data-aos="fade-right"
      >
        {/* Left: Text */}
        <div className="lg:w-2/3 space-y-6">
          <h2 className="text-3xl font-bold text-red-700">Our Mission</h2>
          <p>
            Every day, countless lives hang in the balance due to blood shortages. 
            BloodBridge was created to solve this critical problem by creating a seamless 
            connection between willing donors and urgent medical needs.
          </p>
          <p>
            We believe that saving a life should never be complicated. Through our platform, 
            we're making blood donation more accessible, efficient, and impactful than ever before.
          </p>
        </div>

        {/* Right: Lives Saved Card */}
        <div
          className="lg:w-1/3 bg-red-100 p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
          data-aos="zoom-in"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-red-600 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C12 2 7 8 7 13c0 3.866 3.134 7 7 7s7-3.134 7-7c0-5-5-11-5-11z" />
          </svg>
          <h3 className="text-3xl font-bold text-red-700 mb-2">Lives Saved</h3>
          <p className="text-lg">10,000+</p>
          <p>Through our platform</p>
        </div>
      </section>

      {/* Why Choose BloodBridge */}
      <section
        className="bg-red-50 py-20 px-6 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-red-700 mb-4">Why Choose BloodSync ?</h2>
        <p className="max-w-3xl mx-auto text-lg">
          BloodSync ensures that donors and recipients are seamlessly connected, making 
          the donation process quick, safe, and effective. Our technology-driven platform 
          ensures timely updates, verified donors, and transparent communication.
        </p>
      </section>

      {/* Features Section */}
      <section
        className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        data-aos="fade-up"
      >
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="font-bold text-red-700 text-xl mb-2">Verified Donors</h3>
          <p>Ensuring safety and reliability in every donation.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="font-bold text-red-700 text-xl mb-2">Instant Alerts</h3>
          <p>Get notified when urgent blood is needed nearby.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="font-bold text-red-700 text-xl mb-2">Seamless Scheduling</h3>
          <p>Easy coordination between donors and recipients.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="font-bold text-red-700 text-xl mb-2">Community Impact</h3>
          <p>Every donation contributes to saving lives and building a caring community.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        className="bg-red-50 py-20 px-6 text-center max-w-4xl mx-auto"
        data-aos="flip-up"
      >
        <h2 className="text-3xl font-bold text-red-700 mb-4">Our Story</h2>
        <p className="text-lg">
          BloodSync was born from the vision of creating a world where blood shortages 
          are a thing of the past. We are dedicated to connecting willing donors with 
          those in critical need, leveraging technology to save lives and empower communities.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </>
  );
};

export default About;
