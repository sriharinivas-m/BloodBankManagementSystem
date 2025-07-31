import React from "react";
import { Link } from "react-router-dom";

export default function RoleSelection() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">
        ❤️ Welcome to Blood Bank System
      </h1>
      <p className="mb-8 text-center max-w-lg">
        A unified platform for blood donors, hospitals, and administrators. 
        Track donations, manage blood requests, and save lives — all in one place.
      </p>

      <div className="flex gap-6">
        <Link to="/login?role=donor" className="bg-red-600 px-6 py-3 rounded-lg">
          Donor Login
        </Link>
        <Link to="/login?role=hospital" className="bg-green-600 px-6 py-3 rounded-lg">
          Hospital Login
        </Link>
        <Link to="/login?role=admin" className="bg-blue-600 px-6 py-3 rounded-lg">
          Admin Login
        </Link>
      </div>
    </div>
  );
}
