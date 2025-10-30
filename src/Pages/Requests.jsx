import React, { useState } from "react";
import PageTransition from "../components/PageTransition";

const Requests = () => {
  // Mock request data (later you can fetch from backend / database)
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      bloodGroup: "A+",
      address: "City Hospital, Kolkata",
      locationType: "Hospital",
      city: "Kolkata",
      timeNeeded: "2 hours",
    },
    {
      id: 2,
      name: "Priya Singh",
      bloodGroup: "O-",
      address: "Sector 5, Salt Lake, Kolkata",
      locationType: "Home",
      city: "Kolkata",
      timeNeeded: "6 hours",
    },
    {
      id: 3,
      name: "Amit Verma",
      bloodGroup: "B+",
      address: "Green Health Clinic, Delhi",
      locationType: "Hospital",
      city: "Delhi",
      timeNeeded: "3 hours",
    },
  ]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-16 px-6">
        <h1 className="text-3xl font-bold text-red-700 text-center mb-10">
          Active Blood Requests
        </h1>

        {requests.length === 0 ? (
          <p className="text-center text-gray-600">No active requests yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requests.map((req) => (
              <div
                key={req.id}
                className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition"
              >
                <h2 className="text-xl font-bold text-red-700 mb-2">
                  {req.name}
                </h2>
                <p className="text-gray-700">
                  <span className="font-semibold">Blood Group:</span>{" "}
                  {req.bloodGroup}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Location Type:</span>{" "}
                  {req.locationType}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Address:</span> {req.address}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">City:</span> {req.city}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Needed Within:</span>{" "}
                  {req.timeNeeded}
                </p>

                <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Requests;
