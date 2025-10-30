import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";




// Mock hospital data (normally fetched from an API)
const mockHospitals = [
  { name: "City Hospital", latOffset: 0.01, lngOffset: 0.01 },
  { name: "Green Health Clinic", latOffset: -0.01, lngOffset: 0.015 },
  { name: "Red Cross Hospital", latOffset: 0.02, lngOffset: -0.01 },
];

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const Receiver = () => {
  const [requestData, setRequestData] = useState({
    name: "",
    blood: "",
    city: "",
    hospital: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [location, setLocation] = useState({ lat: 20.5937, lng: 78.9629 }); // default to India

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    }
  }, []);

  const handleChange = (e) => {
    setRequestData({ ...requestData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequestData({ name: "", blood: "", city: "", hospital: "" });
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <Navbar />
      <div className="min-h-screen flex flex-col lg:flex-row items-start justify-center py-16 px-4 gap-16">
        {/* Left side: Map showing nearby hospitals */}
        <div className="mt-20 w-full lg:w-1/2 h-96 rounded-lg shadow-lg overflow-hidden">
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={13}
            scrollWheelZoom={true}
            className="w-full h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />

            {/* User location marker */}
            <Marker position={[location.lat, location.lng]}>
              <Popup>You are here</Popup>
            </Marker>

            {/* Circle around user */}
            <Circle
              center={[location.lat, location.lng]}
              radius={2000}
              pathOptions={{ color: "red", fillColor: "red", fillOpacity: 0.1 }}
            />

            {/* Nearby hospitals */}
            {mockHospitals.map((hospital, idx) => (
              <Marker
                key={idx}
                position={[
                  location.lat + hospital.latOffset,
                  location.lng + hospital.lngOffset,
                ]}
              >
                <Popup>{hospital.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Right side: Blood Request Form */}
        <div className="mt-15 w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
          <h2 className="mt-5 mb-8 text-2xl font-bold text-red-700 text-center">
            Request Blood
          </h2>
          {submitted && (
            <p className="text-green-600 font-semibold text-center mb-4">
              Your blood request has been submitted successfully!
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={requestData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <select
              name="blood"
              value={requestData.blood}
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
              value={requestData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <input
              type="text"
              name="hospital"
              placeholder="Select Hospital"
              value={requestData.hospital}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
      <Footer/>
      
    </PageTransition>
  );
};

export default Receiver;
