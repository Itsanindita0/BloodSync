// src/components/CallToAction.jsx
import React from "react";

const CallToAction = () => {
  return (
    <section
      className="py-20 px-6 flex justify-center"
      data-aos="zoom-in"
    >
      <div className="max-w-4xl bg-gradient-to-r from-red-500 to-red-700 text-white rounded-2xl shadow-2xl p-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Save Lives?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join thousands of donors who have already made a difference in their
          communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-8 py-3 bg-white text-red-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
            Start Donating
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
