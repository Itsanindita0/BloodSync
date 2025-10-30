import React, { useState } from "react";
import Requests from "./Requests.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";



const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const Donor = () => {
  const [donorData, setDonorData] = useState({
    name: "",
    blood: "",
    city: "",
    quantity: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setDonorData({ ...donorData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donor data submitted:", donorData);
    setSubmitted(true);
    setDonorData({ name: "", blood: "", city: "", quantity: "" });
  };

  return (
    <>
    <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-red-50 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
            Become a Donor
          </h2>

          {submitted && (
            <p className="text-green-600 font-semibold mb-4 text-center">
              Thank you! Your donation info has been submitted.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={donorData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <select
              name="blood"
              value={donorData.blood}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            >
              <option value="">Select Blood Group</option>
              {BLOOD_GROUPS.map((bg) => (
                <option key={bg} value={bg}>
                  {bg}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="city"
              placeholder="Your City"
              value={donorData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <input
              type="number"
              name="quantity"
              placeholder="Quantity (ml)"
              value={donorData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              min={100}
              max={500}
              required
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition"
            >
              Submit Donation Info
            </button>
          </form>
        </div>
      </div>

      {/* Show Requests Section below the form */}
      <Requests />
      <Footer/>
    </>
  );
};

export default Donor;
