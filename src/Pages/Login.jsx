import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 // replace with your image

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    // Save token + user info
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    console.log("Login Success:", response.data);

    // Navigate to Donor page (or Dashboard)
    navigate("/Donor");
  } catch (err) {
    console.error(err);
    setError(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 relative"
      style={{
        backgroundImage: `url(https://www.drsstantiamch.org/uploads/infrastructure/blood_bank.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-md p-8 bg-white bg-opacity-90 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-red-700 text-center">
          Login
        </h2>

        {error && (
          <p className="text-red-500 mb-4 text-center font-medium">{error}</p>
        )}

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-red-700 text-white rounded hover:bg-red-800 transition font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-4 text-center text-gray-700">
          Don't have an account?{" "}
          <a href="/signup" className="text-red-700 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
