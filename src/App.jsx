import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home.jsx";
import Donor from "./Pages/Donor.jsx";
import Receiver from "./Pages/Receiver.jsx";
import Loading from "./Pages/Loading.jsx";

// Components
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";

// Page transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Default route */}
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />

        {/* Main pages */}
        <Route path="/Donor" element={<PageWrapper><Donor /></PageWrapper>} />
        <Route path="/Receiver" element={<PageWrapper><Receiver /></PageWrapper>} />
        <Route path="/About" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/Contact-Us" element={<PageWrapper><ContactUs /></PageWrapper>} />
        <Route path="/Loading" element={<PageWrapper><Loading /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="text-default min-h-screen bg-white">
      <AnimatedRoutes />
    </div>
  );
};

export default App;
