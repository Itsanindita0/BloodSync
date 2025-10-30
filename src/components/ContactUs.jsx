import React from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "./Navbar.jsx";

const ContactUs = () => {

  return (
    <>
    <Navbar />
    <section className="bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="mt-10 text-4xl font-bold text-red-600 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Have questions or need support? Get in touch with us, we’d love to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-2xl">
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">📍 Address</h3>
              <p className="text-gray-600">123 Blood Bank Street, Barasat, India</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">📞 Phone</h3>
              <p className="text-gray-600">+91 7866813703</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">📧 Email</h3>
              <p className="text-gray-600">support@blooddonation.org</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <Footer/>
    </>
  );
};

export default ContactUs;
