import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Pages
import Register from "./pages/Register";
import Login from "./pages/Login";

// Common Components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Dashboards
import DonorDashboard from "./components/dashboards/DonorDashboard";
import HospitalDashboard from "./components/dashboards/HospitalDashboard";
import AdminDashboard from "./components/dashboards/AdminDashboard";

// Landing
import RoleSelection from "./components/landing/RoleSelection";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/donor" element={<DonorDashboard />} />
          <Route path="/dashboard/hospital" element={<HospitalDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route
            path="*"
            element={
              <div className="text-center py-20 text-red-600 font-bold text-xl">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
